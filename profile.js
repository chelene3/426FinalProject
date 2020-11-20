// var express = require('express');
// const app = express();
// const port = 3000;
// var router = express.Router();

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// var express = require('express');
// const app = express();
// var router = express.Router();

$(function () {

    // getAllIDsForUser(session.username);
    // getUserInfo();
});   
// var session;
// app.get('/', function(req, res, next) {
//     session = req.session;
//     console.log("user is: " + session.username);
// })

// axios.defaults.withCredentials = true;
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'https://enigmatic-meadow-24377.herokuapp.com/user',
        withCredentials: true

    });
    console.log(result.data);
    $('#username').append(`<p>${result.data.username}</p>`);

}
async function getSecrets(){
    const result = await axios( {
        method: 'get',
        url: 'https://enigmatic-meadow-24377.herokuapp.com/secret',
        withCredentials: true

    });
    console.log(result.data);
    $('#username').append(result.data.username);

}
getSecrets();

getUserInfo();