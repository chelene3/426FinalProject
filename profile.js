$(function () {
 
});   

// axios.defaults.withCredentials = true;
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'https://enigmatic-meadow-24377.herokuapp.com/user',
        withCredentials: true

    });
    console.log(result.data);
    $('#username').append(result.data.username);

}
 
async function getSecrets(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3003/secret',
        withCredentials: true

    });
    console.log(result.data);
    $('#username').append(result.data.username);

}
getSecrets();

getUserInfo();