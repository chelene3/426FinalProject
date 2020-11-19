
const location1 = async  (num) =>{
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


    }catch(err){
        console.error(err);
    }
}
$('#thefeed').append(getPosts());

async function getPosts(){
    let result = await axios({
        method: 'get',
        url: `http://localhost:3005/location/`,
        data: {
            date: date,
            locationID: locationID,
            review: review,
        },
        withCredentials: true,
    });
    return result;
}

async function createPost(){
    let review = $('#experience').val();
    let date = new Date();
    let locationID = name;
    // updating locations database
    let result1 = await axios({
        method: 'post',
        url: `http://localhost:3005/location/${id}`,
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