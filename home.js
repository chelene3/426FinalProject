$(function(){
  registerSearchButton();
});

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
    "Johnny's Gone Fishing",
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

//TRY TO GET THIS FROM BACKEND NOT HARDCODED
let dictVals = {
    "Starbucks": 1,
    "Davis Library": 2,
    "Robert B. House Undergraduate Library": 3,
    "Stone and Leaf Cafe": 4,
    "Fedex Center": 5,
    "Health Science Library": 6,
    "Stone Library": 7,
    "Chapel Hill Public Library": 8,
    "Summit Franklin": 9,
    "Honeysuckle Cafe and Bar": 10,
    "Coco Bean Coffee Shop": 11,
    "Johnny's Gone Fishing": 12,
    "Cafe Driade": 13,
    "Epilogue Books Chocolate Brews": 14,
    "Wilson Library": 15,
    "Carolina Union": 16,
    "Cha House": 17,
    "Carolina Coffee Shop": 18
}

const registerSearchButton = function () {
  document.querySelectorAll("#homesearch").forEach(item => {
      item.addEventListener("click", handleSearchButtonPress);
  })
}

const handleSearchButtonPress = function (event) {
  window.location.href="mock_location_page.html?name=" + dictVals[document.getElementById('searchText').value];
};

// https://www.geeksforgeeks.org/login-form-using-node-js-and-mongodb/
// this website gives a step by step for login, uses mongodb for database of users


// https://codeshack.io/basic-login-system-nodejs-express-mysql/
// this website gives a step by step for login, uses msql

