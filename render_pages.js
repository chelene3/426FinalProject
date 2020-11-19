
const location1 = async  (num) =>{
    console.log("location1");
    try{
        const res = await axios({
            method: 'get',
            url: `http://rocky-chamber-40639.herokuapp.com/location/${num}`,
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
      $('#post').on('click', createPost(num));

    }catch(err){
        console.error(err);
    }
}

$('#thefeed').append(getPosts(1));

async function getPosts(id){
    console.log("geting posts");
    let location = await axios({
        method: 'get',
        url: `http://localhost:3000/location/${id}`,
    });
    let post = location.data.posts;
    console.log(post);
    return post;
}

async function createPost(id){
    console.log("creating your post");

    let review = $("#experience").val();
    let noise = $("#noiseval").val();
    let prod = $("#prodval").val();
    let price = $("#priceval").val();
    let overall = $("#overallval").val();
    let date = new Date();
    let locationID = name;

    // updating locations database
    let result1 = await axios({
        method: 'post',
        url: `http://localhost:3000/location/${id}`,
        data: {
            date: date,
            locationID: locationID,
            review: review,
        },
        withCredentials: true,
    });

    // updating user secrets
    let result2 = await axios({
        method: 'post',
        url: `http://localhost:3005/login/${id}`,
        data: {
            secret: review,
        },
        withCredentials: true
    });
    
    let thePost = `<div class="box">
        <p>USERNAME</p>
        <p>${date}</p>
        <p>${name}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p>Noise Rating: ${noise}</p>
        <p>Productivity Rating: ${prod}</p>
        <p>Price Rating: ${price}</p>
        <p>Overall Rating: ${overall}</p>
    </div>`;
    console.log(thePost);
    $('#thefeed').append(getPosts(id));
    return thePost;
}

let filePath = location.href;
let fileURL = new URL(filePath)
let name = fileURL.searchParams.get("name");
location1(name);



/*
 url for post: 'http://localhost:3000/location'
 url for put (update) : 'http://localhost:3000/location/{id}'
 url for delete: 'http://localhost:3000/location/{id}'
*/