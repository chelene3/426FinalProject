//https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
//taking ideas from here right now

// https://codeshack.io/basic-login-system-nodejs-express-mysql/
// and from this site which gives a good example, uses msql for both

//https://github.com/kmayerpatel/Fall2020COMP426UserLogin/blob/master/Secret.js
// kmps version^



// I already installed express and msql in dependencies (i think)

var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });

  // create a connection with database?
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE userDB", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
var app = express();
app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: true 
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
});

// need to create a table
con.query("CREATE TABLE IF NOT EXISTS userTable (username varchar(20) NOT NULL, password varchar(255) NOT NULL", function(err, result) {
    if (err) throw err;
    console.log("table created");
})

app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        // make query to find results
    }
})
  