// var express = require('express');
// const app = express();
// const port = 3000;
// var router = express.Router();

// import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var express = require('express');
const app = express();
var router = express.Router();

$(function () {

    // getAllIDsForUser(session.username);
    // getUserInfo();
});   
var session;
app.get('/', function(req, res, next) {
    session = req.session;
    console.log("user is: " + session.username);
})

// axios.defaults.withCredentials = true;
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3000/secret',
        withCredentials: false

    });
    console.log(result.data);

}
