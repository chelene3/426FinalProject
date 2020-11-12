// $(function(){

// });

function addMap(){
    $('#searchMap').remove();
    let text = $('#searchText').val();
    let map = ` <iframe id="searchMap"
    width="450"
    height="250"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCgyx6WujHOQ_HsN95DWfOIQ_1Uw9Yrt8k&q=${text}" allowfullscreen>
  </iframe>`;
    $('#map').append(map);
}


// https://www.geeksforgeeks.org/login-form-using-node-js-and-mongodb/
// this website gives a step by step for login, uses mongodb for database of users


// https://codeshack.io/basic-login-system-nodejs-express-mysql/
// this website gives a step by step for login, uses msql

