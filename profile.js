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
   
    getUserInfo();
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
        url: 'http://localhost:3003/secret',
        withCredentials: true

    });
    for(let i = 0; i < result.data.length; i++) {
        getInfoIds(result.data[i]);
        
    }    
}


async function getInfoIds(id) {
    const result = await axios( {
        method: 'get',
        url: `http://localhost:3003/secret/${id}`,
        withCredentials: true
    })
    currentUser = result.data.username;
    let htmlTemp = `<div class="box"><p>${result.data.secret}</p></div>`;
    $("#likedPostsDiv").append(htmlTemp);

    let nameTemp = `<h2><b>${result.data.username}</b></h2>`;
    $("#usernameHeader").replaceWith(nameTemp);

}


