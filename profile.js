$(function () {
    getUserInfo();
    getSecrets();
});   

// gets the user information from the user logged in
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3003/user',
        withCredentials: true

    });
    // appending the username onto profile page
    let nameTemp = `<h2><b>${result.data.username}</b></h2>`;
    $('#username').append(nameTemp);
    $("#name").append(`<button class="button is-light" id="logout">Logout</button><br><br>`)
    registerLogoutButton();
}

// gets the secrets from the current user logged in
async function getSecrets(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3003/secret',
        withCredentials: true

    });
    // calls func to get more info on the secrets once we have the id from the result
    for(let i = 0; i < result.data.length; i++) {
        getInfoIds(result.data[i]);   
    }  
}

// gets more info on the secrets from an id parameter
async function getInfoIds(id) {
    const result = await axios( {
        method: 'get',
        url: `http://localhost:3003/secret/${id}`,
        withCredentials: true
    })

    console.log(result.data);
    // appending liked posts on profile page, just appending secrets right now
    let htmlTemp = `<div class="box"><p>${result.data.secret}</p></div>`;
    $("#likedPostsDiv").append(htmlTemp);

    // appending previous posts on profile page, just appending secrets right now
    let prevTemp = `<div class="box"><p>${result.data.secret}</p></div>`;
    $("#prevPostsDiv").append(prevTemp);

    // need to attach like objects to posts and associate them with users in the secret file


}

const registerLogoutButton = function () {
    document.querySelectorAll("#logout").forEach(item => {
        item.addEventListener("click", handleLogoutButtonPress);
    })
  }

const handleLogoutButtonPress = function (event) {
    const result = axios( {
        method: 'get',
        url: `http://localhost:3003/logout`,
        withCredentials: true
    })
    window.location.href="index.html"
};