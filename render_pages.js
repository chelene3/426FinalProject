let username = "";

const location1 = async  (num) =>{
    try{
        const res = await axios({
            method: 'get',
            //url: `https://rocky-chamber-40639.herokuapp.com/location/${num}`, //HEROKU
            url: `http://localhost:3000/location/${num}` //LOCAL
        })

      $('#mainTitle').append(`<p>${res.data.name}</p>`);
      $('#address').append(`<p>${res.data.address}</p>`)
      $('#map').append(`<iframe
      width="450"
      height="250"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCgyx6WujHOQ_HsN95DWfOIQ_1Uw9Yrt8k&q=${res.data.address}" allowfullscreen>
      </iframe>`)
      $('#desc').append(`<p>${res.data.des}</p>`);
      $('#covid').append(`<p>${res.data.covid}</p>`);
    //   $('#post').on('click', createPost);
        console.log(res);
      getPosts(num);
    }catch(err){
        console.error(err);
    }
}

// async function getPosts(id){
//     let location = await axios({
//         method: 'get',
//         url: `http://localhost:3000/location/${id}`,
//     });
//     let post = location.data.posts;
//     let oldPosts = "";
//     for(let i=0; i<post.length; i++){
//         oldPosts += `<div class="box">
//             <p>${post[i]}</p>
//         </div>`;
//     }
//     $("#thefeed").append(oldPosts);
// }

async function getPosts(id){
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    let post = location.data.posts;
    let oldPosts = "";
    for(let i=0; i<post.length; i++){
        oldPosts += `<div class="box">
            <p>${postify(post[i])}</p>
        </div>`;
    }
    $("#thefeed").append(oldPosts);
}

async function createPost(){
    let id=name;
    let review = $("#experience").val();
    let noise = $("#noiseval").val();
    let prod = $("#prodval").val();
    let price = $("#priceval").val();
    let overall = $("#overallval").val();
    let date = new Date();
    let locationID = name;
    let secretID;
    let username = "";
       //getting location
       let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3003/user',
        withCredentials: true

    }).catch(() => {
       alert("Login to create a post!")
    });
    username= result.data.username;
    //teh secret object we're passing in
    let reviewObj = {
        review: review,
        location: location.data.name,
        date: date,
        rating: overall,
        locationID: name
    }
    // updating user secrets
    try{
        const result2 = await axios({
            method: 'post',
            url: `http://localhost:3003/secret/`,
            data: {
                username: result.data.username,
                secret: reviewObj,
            },
            withCredentials: true
        });
        console.log(result2);
        secretID = result2.data.id;
    }catch(err){
        console.error(err);
    }
    let postObj = {review: review, noise: noise, prod:prod, price: price, overall:overall, date:date, secretID: secretID, username: username};
  
    location.data.posts.unshift(postObj);
    let newData = location.data;

    // updating locations database
    try{
        const result1 = await axios({
            method: 'put',
            url: `http://localhost:3000/location/${id}`,
            data: newData,
            withCredentials: true,
        });
    }catch(err){
        console.error(err);
    }
    $('#thefeed').append(postify(postObj));
}

function postify(data){
    let thePost = `<div>
        <p style="color: #ffc93c">@${data.username}</p>
        <p style="font-size: 15px;">${data.date.substring(0,10)}</p>
        <br>
        <h1>Experience: ${data.review}</h1><br>
        <span style="font-size: 20px; color: #3282b8;">Noise Rating: ${data.noise}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Productivity Rating: ${data.prod}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Price Rating: ${data.price}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Overall Rating: ${data.overall}</span><br>
    </div>`;
    return thePost;
}
// async function createPost(){
//     // preventDefault();
//     let id=name;
//     let review = $("#experience").val();
//     let noise = $("#noiseval").val();
//     let prod = $("#prodval").val();
//     let price = $("#priceval").val();
//     let overall = $("#overallval").val();
//     let date = new Date();
//     let locationID = name;
//     const result = await axios( {
//         method: 'get',
//         url: 'http://localhost:3003/user',
//         withCredentials: true

//     }).catch(() => {
//        alert("Login to create a post!")
//     });

//     let thePost = `<div>
//         <p style="color: #ffc93c">@${result.data.username}</p>
//         <p style="font-size: 15px;">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} -- ${date.toLocaleTimeString()}</p>
//         <br>
//         <h1>Experience: ${review}</h1><br>
//         <span style="font-size: 20px; color: #3282b8;">Noise Rating: ${noise}</span><br>
//         <span style="font-size: 20px; color: #3282b8;">Productivity Rating: ${prod}</span><br>
//         <span style="font-size: 20px; color: #3282b8;">Price Rating: ${price}</span><br>
//         <span style="font-size: 20px; color: #3282b8;">Overall Rating: ${overall}</span><br>
//     </div>`;
//     //getting location
//     let location = await axios({
//         method: 'get',
//         url: `http://localhost:3000/location/${id}`,
//     });
//     location.data.posts.unshift(thePost);
//     let newData = location.data;

//     // updating locations database
//     try{
//         const result1 = await axios({
//             method: 'put',
//             url: `http://localhost:3000/location/${id}`,
//             data: newData,
//             withCredentials: true,
//         });
//     }catch(err){
//         console.error(err);
//     }
//     //teh secret object we're passing in
//     let reviewObj = {
//         review: review,
//         location: location.data.name,
//         date: date,
//         rating: overall,
//         locationID: name
//     }
//     // updating user secrets
//     try{
//         const result2 = await axios({
//             method: 'post',
//             url: `http://localhost:3003/secret/`,
//             data: {
//                 username: result.data.username,
//                 secret: reviewObj,
//             },
//             withCredentials: true
//         });
//         console.log(result2);
//     }catch(err){
//         console.error(err);
//     }
//     $('#thefeed').append(thePost);
//     return thePost;
// }

let filePath = location.href;
let fileURL = new URL(filePath)
let name = fileURL.searchParams.get("name");
// location1(name);
$(document).ready(function(){
    location1(name);
    checkSaved();
}
);




let saved = false;
//check if the location is saved and append the correct icon
async function checkSaved(){
    const userResult = await axios( {
        method: 'get',
        url: 'http://localhost:3003/user',
        withCredentials: true
    });
    if(userResult.data.location == undefined){
        let saveIcon =  `<a  class="level-item" onClick ="saveLocation()">
            <span class="icon is-small"><i id="savedIcon" class="fas fa-heart has-text-white"></i></span>
        </a>`;
        $('#saved').append(saveIcon);
        return;
    }
    userResult.data.location.forEach(function(x){
        if(x == name){
            saved = true;
            let saveIcon =  `<a  class="level-item" onClick ="saveLocation()">
            <span class="icon is-small"><i id="savedIcon" class="fas fa-heart has-text-danger"></i></span>
          </a>`;
            $('#saved').append(saveIcon);
            return;
        }
    });     
    if(!saved){let saveIcon =  `<a  class="level-item" onClick ="saveLocation()">
    <span class="icon is-small"><i id="savedIcon" class="fas fa-heart has-text-white"></i></span>
  </a>`;
    $('#saved').append(saveIcon);}

}

//update the user saved location info for like/unlike
async function saveLocation(){
    
    try{
        const userResult = await axios( {
            method: 'get',
            url: 'http://localhost:3003/user',
            withCredentials: true
    
        }).catch(() => {
           alert("Login to save a location!")
        });


        let location = userResult.data.location;
        if(location == undefined){
            location = [];
        }
        if(!saved){
            location.push(name);
        }
        else{
            location = location.filter(function(loc){
                return loc!= name;
            });
        }
      
        const result = await axios({
            method: 'put',
            url: `http://localhost:3003/editUser/`,
            data: {
                username: userResult.data.username,
                password: userResult.data.password,
                location: location,
            },
            withCredentials: true
        });
        console.log(result);

        if(!saved){
            $('#savedIcon').removeClass('has-text-white');
            $('#savedIcon').addClass('has-text-danger');
        }else{
            $('#savedIcon').removeClass('has-text-dagner');
            $('#savedIcon').addClass('has-text-white');
        }
      
    }catch(err){
        console.error(err);
    }
}
/*
 url for post: 'http://localhost:3000/location'
 url for put (update) : 'http://localhost:3000/location/{id}'
 url for delete: 'http://localhost:3000/location/{id}'
*/