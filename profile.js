$(function () {
    getUserInfo();
    getSecrets();
    getLocationIDs();
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
    if (result.data.img != undefined) {
        $('#profpic').replaceWith(`<img src=${result.data.img} alt="Profile Avatar" width="200" heigh="200">`)
    }
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
    let date = Date(result.data.secret.date);
    // appending previous posts on profile page, just appending secrets right now
    let prevTemp = `<div id="${id}" class="box" ><div onclick="locationPage(${result.data.secret.locationID})"><strong>${result.data.secret.location}</strong><p>Overall Rating:${result.data.secret.rating}</p>
        <br><p>${result.data.secret.review}</p>
   
        <br>     <p>${date}</p>
        </div>
        <button class="button" onclick="deletePost(${id}, ${result.data.secret.locationID})") >Delete</button></div>`;
    $("#prevPostsDiv").append(prevTemp);

    // need to attach like objects to posts and associate them with users in the secret file
}

//get all the saved location IDs from user info
async function getLocationIDs(){
    const userResult = await axios( {
        method: 'get',
        url: 'http://localhost:3003/user',
        withCredentials: true

    });
    userResult.data.location.forEach(function(id){
        addLocations(id);
    });
}

//create html div for each location
async function addLocations(id){
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    // appending liked posts on profile page, just appending secrets right now
    let htmlTemp = `<div class="box" onclick="locationPage(${location.data.id})"><strong>${location.data.name}</strong>
    <br></div>`;

    $("#likedPostsDiv").append(htmlTemp);
}

//deletes post from secrets and updates location posts
async function deletePost(secretID, locationID){
    try{
    const result = await axios({
        method: 'delete',
        url: `http://localhost:3003/secret/${secretID}`,
        withCredentials: true
    });
    console.log(result);
}catch(err){
    console.log(err);
}
try{
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${locationID}`,
    });

    let posts = location.data.posts.filter(function(post){
        return post.secretID!= secretID;
    })
    location.data.posts = posts;
    let newData = location.data;
    const result = await axios({
        method: 'put',
        url: `http://localhost:3000/location/${locationID}`,
        data: newData,
        withCredentials: true
    });
}catch(err){
    console.log(err);
}
}
//navigate to the locationpage of the selected post
function locationPage(id){
    window.location.href = "mock_location_page.html?name=" + id;
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