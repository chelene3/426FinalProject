
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const expressSession = require('express-session');

let cors = require('cors');

const corsConfi = {
  origin: "http://localhost:3001", //LOCAL
  //origin: "http://localhost:3000", //HEROKU
  credentials: true
}
app.use(cors(corsConfi));

app.use(expressSession({
    name: "kmpSessionCookie",
    secret: "express session secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
    //   secure: true, 
      maxAge: 5184000000
    }
    
 }));
// app.use(function(req, res, next){
//     res.header('Access-Control-Allow-Credentials', true);
//       res.header("Access-Control-Allow-Origin", "http://localhost:3002");
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       next();
//   });

const Secret= require("./secret.js");

const login_data = require('data-store')({ path: process.cwd() + '/data/users.json' });

let userId;

app.post('/createUser', (req, res) =>{
  let user = req.body.username;
  let data = req.body
  if(login_data.get(user) == null){
    login_data.set(user, data);
    res.json(true);
    return;
  }
  else{
    res.status(400).send("username already exists");
  }
})

app.post('/login', (req,res) => {
    let user = req.body.username;
    let password = req.body.password;

    let user_data = login_data.get(user);
    
    if (user_data == null) {
        res.status(404).send("Not found");
        return;
    }
    if (user_data.password == password) {
        console.log("User " + user + " credentials valid");
        req.session.user = user;
        res.json(true);
        return;
    }
    res.status(403).send("Unauthorized");
});

app.get('/logout', (req, res) => {
    delete req.session.user;
    res.json(true);
});

app.get('/user', (req, res) => {
    if(req.session.user == undefined){
        res.status(404).send("no user logged in");
        console.log("no user");
        return;
    }
    let user = req.session.user;
    let user_data = login_data.get(user);
    res.json(user_data);
    return;
});

app.get('/secret', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    res.json(Secret.getAllIDsForUser(req.session.user));
    return;
});

app.get('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.username != req.session.user) {
    
        res.status(403).send("Unauthorized");
        return;
    }
    res.json(s);
} );

app.post('/secret', (req, res)=> {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }
    // now the Secret create has another parameter called type
    // type is either "previous" or "liked" string
    // the create function creates an instance of Secret with boolean values for those types

    // we need to check somehow to see if the user wants to have a previous post or liked post
    let type = "previous";
    // let type = "liked";
    let s = Secret.create(req.session.user, req.body.secret, type); 
    if (s == null) {
        res.status(400).send("Bad Request");
        return;
    }
    return res.json(s);
});

app.put('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }
    if (s.username != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }
    s.update(req.body.secret);

    res.json(s.id);
});

app.delete('/secret/:id', (req, res) => {
    if (req.session.user == undefined) {
        res.status(403).send("Unauthorized");
        return;
    }

    let s = Secret.findByID(req.params.id);
    if (s == null) {
        res.status(404).send("Not found");
        return;
    }

    if (s.username != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    s.delete();
    res.json(true);
})

const port = 3003;
app.listen(port, () => {
    console.log("User Login Example up and running on port " + port);
});