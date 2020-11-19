$(function () {

    // getCards(database);
    allCardsID();
})

// allCards();
async function allCardsID(){
  const result = await axios({
    method: 'get',
    //url: 'https://rocky-chamber-40639.herokuapp.com/location/', //HEROKU
    url: 'http://localhost:3000/location' //LOCAL
  });
  getCards(result.data);
}

async function getCards(cardIDs) {
    cardIDs.forEach(getData);
    // cards.forEach(makeCard)
}

async function getData(id){
  const result = await axios({
    method: 'get',
    //url: `http://rocky-chamber-40639.herokuapp.com/location/${id}`, //HEROKU
    url: `http://localhost:3000/location/${id}` //LOCAL
  });
  makeCard(result.data);

}

function makeCard(card_data) {
  $("#card_area").append(`<div class="card column is-3" id="placecard">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src=${card_data.coverPic} alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src=${card_data.profilePic} alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4" onclick="alertFunc(this.id)" id=${card_data.id}>${card_data.name}</p>
        </div>
      </div>
  
      <div class="content">
        ${card_data.des}
        <a href="#">#${card_data.hashtags[0]}</a> <a href="#">#${card_data.hashtags[1]}</a>
        <br>
      </div>
    </div>
    <div>
    <script>
      function alertFunc(e) {
        window.location.href = "mock_location_page.html?name=" + e
      }
    </script>
    </div>
  </div>`)
}
