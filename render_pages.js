// function initMap() {
//     // Create the map.
//     const pyrmont = { lat: -33.866, lng: 151.196 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: pyrmont,
//       zoom: 17,
//     });
//     // Create the places service.
//     const service = new google.maps.places.PlacesService(map);
//     let getNextPage;
//     const moreButton = document.getElementById("more");
  
//     moreButton.onclick = function () {
//       moreButton.disabled = true;
  
//       if (getNextPage) {
//         getNextPage();
//       }
//     };
//     // Perform a nearby search.
//     service.nearbySearch(
//       { location: pyrmont, radius: 500, type: "store" },
//       (results, status, pagination) => {
//         if (status !== "OK") return;
//         createMarkers(results, map);
//         moreButton.disabled = !pagination.hasNextPage;
  
//         if (pagination.hasNextPage) {
//           getNextPage = pagination.nextPage;
//         }
//       }
//     );
//   }
  
//   function createMarkers(places, map) {
//     const bounds = new google.maps.LatLngBounds();
//     const placesList = document.getElementById("places");
  
//     for (let i = 0, place; (place = places[i]); i++) {
//       const image = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25),
//       };
//       new google.maps.Marker({
//         map,
//         icon: image,
//         title: place.name,
//         position: place.geometry.location,
//       });
//       const li = document.createElement("li");
//       li.textContent = place.name;
//       placesList.appendChild(li);
//       bounds.extend(place.geometry.location);
//     }
//     map.fitBounds(bounds);
//   }

const location1 = async  (num) =>{
    try{
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/location/${num}`,
        })
        console.log(res.data);

      $('#mainTitle').append(`<p>${res.data.name}</p>`);
      $('#address').append(`<p>${res.data.address}</p>`);
      $('#map').append(`<iframe
      width="450"
      height="250"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCgyx6WujHOQ_HsN95DWfOIQ_1Uw9Yrt8k&q=${res.data.address}" allowfullscreen>
      </iframe>`);
      $('#desc').append(`<p>${res.data.des}</p>`);
      $('#covid').append(`<p>${res.data.covid}</p>`);

      //append all posts for this location to the feed 
      $('#feed').append(`<div class="box"><p>${res.data.posts[0]}</p></div>`);
      $('#rate').append(`<div class="box"><p>${res.data.rating}/5.0</p></div>`);
      $('#prod').append(`<div class="box"><p>${res.data.prod}/5.0</p></div>`);
      $('#noise').append(`<div class="box"><p>${res.data.noise}/5.0</p></div>`);
      $('#price').append(`<div class="box"><p>${res.data.noise}/5.0</p></div>`);

      $('#post').on('click', post);

    }catch(err){
        console.error(err);
    }
}

function post(){
    console.log("post");
    let experience = $("#experience").val();
    let noise = $("#noiseval").val();
    let prod = $("#prodval").val();
    let price = $("#priceval").val();
    let overall = $("#overallval").val();

    $("#thefeed").append(
        `<div class="box">
            <p>USERNAME</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p>Noise Rating: ${noise}</p>
            <p>Productivity Rating: ${prod}</p>
            <p>Price Rating: ${price}</p>
            <p>Overall Rating: ${overall}</p>
        </div>`);

    //UPDATE THE POST ARRAY IN LOCATION.JSON 
    // const result = await axios({  
    //     method: 'post',
    //     url: 'http://localhost:3000/location',
    //     withCredentials: true,
    //     data: {},
    // });

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