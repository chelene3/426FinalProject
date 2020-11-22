let username = "";

const location1 = async  (num) =>{
    console.log("location1");
    try{
        const res = await axios({
            method: 'get',
            //url: `https://rocky-chamber-40639.herokuapp.com/location/${num}`, //HEROKU
            url: `http://localhost:3000/location/${num}` //LOCAL
        })
        console.log(res.data);

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
      $('#post').on('click', createPost);

      console.log("about to get posts");
      getPosts(num);
    }catch(err){
        console.error(err);
    }
}

async function getPosts(id){
    console.log("getting posts");
    console.log(id);
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    let post = location.data.posts;
    let oldPosts = "";
    for(let i=0; i<post.length; i++){
        oldPosts += `<div class="box">
            <p>${post[i]}</p>
        </div>`;
    }
    console.log(oldPosts);
    $("#thefeed").append(oldPosts);
}

async function createPost(){
    console.log("creating post");
    let id=name;
    let review = $("#experience").val();
    let noise = $("#noiseval").val();
    let prod = $("#prodval").val();
    let price = $("#priceval").val();
    let overall = $("#overallval").val();
    let date = new Date();
    let locationID = name;
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3003/user',
        withCredentials: true

    }).catch(() => {
       alert("Login to create a post!")
    });
    
    let thePost = `<div>
        <p style="color: #ffc93c">@${result.data.username}</p>
        <p style="font-size: 15px;">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} -- ${date.toLocaleTimeString()}</p>
        <br>
        <h1>Experience: ${review}</h1><br>
        <span style="font-size: 20px; color: #3282b8;">Noise Rating: ${noise}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Productivity Rating: ${prod}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Price Rating: ${price}</span><br>
        <span style="font-size: 20px; color: #3282b8;">Overall Rating: ${overall}</span><br>
    </div>`;
    console.log(thePost);
    //getting location
    console.log("getting posts");
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    location.data.posts.unshift(thePost);
    let newData = location.data;
    console.log(newData);

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

    // updating user secrets
    // try{
    //     const result2 = await axios({
    //         method: 'put',
    //         url: `http://localhost:3005/login/${id}`,
    //         data: {
    //             secret: review,
    //         },
    //         withCredentials: true
    //     });
    // }catch(err){
    //     console.error(err);
    // }
    console.log("here");
    $('#thefeed').append(thePost);
    return thePost;
}

let filePath = location.href;
let fileURL = new URL(filePath)
let name = fileURL.searchParams.get("name");
location1(name);
//$('#thefeed').append(getPosts(1));



/*
 url for post: 'http://localhost:3000/location'
 url for put (update) : 'http://localhost:3000/location/{id}'
 url for delete: 'http://localhost:3000/location/{id}'
*/