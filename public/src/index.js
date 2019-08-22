const mykey = config.MY_KEY;
const BASE_URL = "http://localhost:3000"
const scoreFormPanel = document.querySelector('.score-form-panel')
const leaderBoardPanel = document.querySelector('.floating-panel-score')
const endGamePanel = document.querySelector(".end-game-panel")



let foundCount = 0
let currentTime = 0
let timer;


document.addEventListener("DOMContentLoaded", function() {
  let locationArray = []
  
  // ADDED FETCH/////////////
  fetch (`${BASE_URL}/games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify()
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) { 
    data.forEach(function (location){
      locationArray.push(location)
      console.log("loaded")
    })
  })
// END FETCH ////////////////
  function initPano() {
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
          position: {lat: 40.705258, lng: -74.0138061},
          pov: {
            heading: 270,
            pitch: 0
          },
          visible: true
        });


    panorama.addListener('position_changed', function() {
        setTimeout(loadAddress, 100)
    });
 
}

function loadAddress(){
  let currentLocation = document.querySelector("#pano > div > div:nth-child(10) > div.gm-iv-address > div.gm-iv-address-description > div.gm-iv-short-address-description")
  let locationContent = currentLocation.textContent
  verifyAnswer(locationContent)
}


function startGame(){
  let containerCard = document.getElementById("flex-container")
  containerCard.innerHTML = `
  <div class="col-sm-3">
  <a href="#" class="btn btn-lg red">Start</a>
</div>`
let timerCard = document.getElementsByClassName("floating-panel-timer")[0]
timerCard.innerHTML = "<h1> <b> Welcome! </b> </h1> <br> <p><b> How to play: </b> </p> <p3> Navigate through the streets to find the 5 locations shown below. Order does not matter, so make sure you plan your trip wisely! </p3>"

let startbutton = document.getElementsByClassName("btn btn-lg red")[0]
startbutton.addEventListener("click", function(e){
  timerCard.innerHTML = "<h1> GO! </h1>"
  timer()
  containerCard.innerHTML = ""
  drawCards()
  endGamePanel.style.display = 'block'

  const endButton = document.getElementsByClassName("btn btn-lg redend")[0]
  endButton.addEventListener("click", function(){
    endGame()
  })
})
}



function timer(){
  let timeCard = document.getElementsByClassName("floating-panel-timer")[0]
  let seconds = 1;
  timer = setInterval(function() {
    currentTime = seconds++

    timeCard.innerHTML = `<h1> ${Math.floor(currentTime / 60) + ':' + ('0' + Math.floor(currentTime % 60)).slice(-2) } </h1>`;
  }, 1000);
}




function drawCards(){
let newCard = document.getElementById("flex-container")
 
    locationArray.forEach(function(randomLocation){
    newCard.insertAdjacentHTML("beforeend",
    `<div class="card border-0 shadow location-card" id="${randomLocation.address}">
    <img src="imgs/NYSE.png" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">${randomLocation.name}</h5>
    </div>
  </div>`)})
}

function verifyAnswer(address){
  let cardAddress = document.getElementsByClassName("card border-0 shadow location-card")
  if(cardAddress[0].id === address ){
    (foundCount++)
    cardAddress[0].id = "Found"
    cardAddress[0].style.backgroundColor = "grey"} 
      else if (cardAddress[1].id === address ){
        (foundCount++)
        cardAddress[1].id = "Found"
        cardAddress[1].style.backgroundColor = "grey"}
      else if (cardAddress[2].id === address ){
        (foundCount++)
        cardAddress[2].id = "Found"
        cardAddress[2].style.backgroundColor = "grey"}
      else if (cardAddress[3].id === address ){
        (foundCount++)
        cardAddress[3].id = "Found"
        cardAddress[3].style.backgroundColor = "grey"}
        if (foundCount === 1){
          endGame()
        }
  }

  initPano()
  startGame()
  
  function endGame (){
    clearInterval(timer)
    scoreFormPanel.style.display = 'block'
    scoreFormPanel.addEventListener("submit", function(e){
      e.preventDefault()
      let data = {name: document.querySelector("input[name=name").value, number: foundCount, time: currentTime}
      fetch (`${BASE_URL}/scores`, {
      method: 'POST', 
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
      })
      .then(function(response) {
        return response.json()
      })
      .then(function (data) { 
        scoreFormPanel.style.display = 'none'
        showLeaderBoard()
      })
      }) 
  } 

  function showLeaderBoard (){
    leaderBoardPanel.style.display = 'block'
    fetch (`${BASE_URL}/scores`)
    .then(function(response) {
      return response.json()
    })
    .then(function (data) { 
      data.forEach (function (score) {
        document.querySelector('#leaderboard').insertAdjacentHTML("beforeend", `<tr>
        <td>${score.name}</td>
        <td>${score.number}</td> 
        <td>${Math.floor(score.time/ 60) + ':' + ('0' + Math.floor(score.time % 60)).slice(-2) }</td>
      </tr>`)
      })
    })
  }

})
//end DOM content loaded ///





