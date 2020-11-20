const expressSession = require('express-session');

$(function () {
 
});   

// axios.defaults.withCredentials = true;
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3000/secret',
        withCredentials: false

    });
    console.log(result.data);

}
 
alert(session.user);
getUserInfo();