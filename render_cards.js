$(function () {
    // getCards(database);
    allCardsID();
})

// allCards();
async function allCardsID(){
  const result = await axios({
    method: 'get',
    url: 'http://localhost:3000/location/',
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
    url: `http://localhost:3000/location/${id}`,
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
          <a href="mock_location_page.html"><p class="title is-4">${card_data.name}</p></a>
        </div>
      </div>
  
      <div class="content">
        ${card_data.des}<a>@bulmaio</a>.
        <a href="#">#${card_data.hashtags[0]}</a> <a href="#">#${card_data.hashtags[1]}</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>`)
}