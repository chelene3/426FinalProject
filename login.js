

// const express = require('express');
// const app = express();
// const User = require('./user.js');
// const expressSession = require('express-session');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.use(expressSession({
//   username: "studyBuddyGroup",
//   password: "hotsauce",
//   resave: false,
//   saveUninitialized: false,
//   secret: cookie_secret
// }));

// const user_data = require('data-store')({ path: process.cwd() + '/data/users.json' });

// // this is validating if their credentials are correct when logging in
// app.post('/login', (req, res) => {
//   let user = req.body.username;
//   let password = req.body.password;

//   let current_user_data = user_data.get(user);
//   if (current_user_data == null) {
//     res.status(404).send("Not Found");
//     return;
//   }
//   if (current_user_data.password == password) {
//     console.log("User " + user + " credentials are valid");
//     req.session.username = user;
//     // not sure what this is below
//     res.json(true);
//     return;
//   }
//   res.status(403).send("Unauthorized");
// });

// app.get('/logout', (req, res) => {
//   delete req.session.username;
//   res.json(true);
// })

// // this gets all users
// app.get('/users', (req, res)=>{
//   res.json(User.getALLIDs());
//   return;
// });



// // this returns a specific user with an id as parameter
// app.get('/users/:id', (req, res) => {
//   let indv = User.findByID(req.params.id);
//   if(indv == null) {
//     res.status(404).send("No such User");
//     return;
//   }
//   // returns the user with the certain id in json format
//   res.json(indv)
// })

// // do i need to specify a port









// //https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
// //taking ideas from here right now

// // https://codeshack.io/basic-login-system-nodejs-express-mysql/
// // and from this site which gives a good example, uses msql for both

// //https://github.com/kmayerpatel/Fall2020COMP426UserLogin/blob/master/Secret.js
// // kmps version^



// // I already installed express and msql in dependencies (i think)





// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "yourusername",
// //     password: "yourpassword"
// //   });

// // con.connect(function(err) {
// //     if (err) throw err;
// //     console.log("Connected!");
// //     con.query("CREATE DATABASE userDB", function (err, result) {
// //       if (err) throw err;
// //       console.log("Database created");
// //     });
// //   });
// // var app = express();
// // app.use(session({
// //    secret: 'secret',
// //    resave: true,
// //    saveUninitialized: true 
// // }));
// // app.use(bodyParser.urlencoded({extended: true}));
// // app.use(bodyParser.json());

// // app.get('/', function(request, response) {
// //     response.sendFile(path.join(__dirname + '/login.html'));
// // });

// // // need to create a table
// // con.query("CREATE TABLE IF NOT EXISTS userTable (username varchar(20) NOT NULL, password varchar(255) NOT NULL", function(err, result) {
// //     if (err) throw err;
// //     console.log("table created");
// // })

// // app.post('/auth', function(request, response) {
// //     var username = request.body.username;
// //     var password = request.body.password;
// //     if (username && password) {
// //         // make query to find results
// //     }
// // })
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const expressSession = require('express-session');

app.use(expressSession({
    name: "kmpSessionCookie",
    secret: "express session secret",
    resave: false,
    saveUninitialized: false
}));

const Secret= require("./secret.js");

const login_data = require('data-store')({ path: process.cwd() + '/data/users.json' });

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
})

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

    if (s.owner != req.session.user) {
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

    let s = Secret.create(req.session.user, req.body.secret); //add other parameters here?
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
    if (s.owner != req.session.user) {
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

    if (s.owner != req.session.user) {
        res.status(403).send("Unauthorized");
        return;
    }

    s.delete();
    res.json(true);
})

const port = 3030;
app.listen(port, () => {
    console.log("User Login Example up and running on port " + port);
});