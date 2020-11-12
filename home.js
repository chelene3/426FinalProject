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

$ (function () {
  var availableTags = [
    "Starbucks",
    "Davis Library",
    "Robert B. House Undergraduate Library",
    "Stone and Leaf Cafe",
    "Fedex Center",
    "Health Science Library",
    "Stone Library",
    "Chapel Hill Public Library",
    "Summit Franklin",
    "Honeysuckle Cafe and Bar",
    "Coco Bean Coffee Shop",
    "Johnny's Gone Fishing ",
    "Cafe Driade",
    "Epilogue Books Chocolate Brews",
    "Wilson Library",
    "Carolina Union",
    "Cha House",
    "Carolina Coffee Shop"
  ];
  $("#searchText").autocomplete ({
    source: availableTags,
    appendTo: "#auto"
  });
});
//add function for autocomplete widget in home page


// https://www.geeksforgeeks.org/login-form-using-node-js-and-mongodb/
// this website gives a step by step for login, uses mongodb for database of users


// https://codeshack.io/basic-login-system-nodejs-express-mysql/
// this website gives a step by step for login, uses msql

