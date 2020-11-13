// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }

const location1 = async  () =>{
    try{
        const res = await axios({
            method: 'get',
            url: 'http://localhost:3000/location/1',
        })
        console.log(res.data);
      // $('#test').append(`<p>${res.data.name}</p>`);

    }catch(err){
        console.error(err);
    }
}
location1();
/*
 url for post: 'http://localhost:3000/location'
 url for put (update) : 'http://localhost:3000/location/{id}'
 url for delete: 'http://localhost:3000/location/{id}'
*/