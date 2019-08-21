const mykey = config.MY_KEY;

document.addEventListener("DOMContentLoaded", function() {
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

let items = [
    {
      name: "Flatiron School",
      address: "22 Canyon of Heroes",
      img: " "
    },
    {
        name: "Big Red Cube",
        address: "135 Broadway",
        img: " "
    },
    {
      name: "Bull",
      address: "27 Canyon of Heroes",
      img: " "
  },
  {
    name: "DMV",
    address: "3 Greenwich St",
    img: " "
},
{
  name: "New York Stock Exchange",
  address: "11 Wall St",
  img: " "
},
  ];

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


})
}

function timer(){
let timeCard = document.getElementsByClassName("floating-panel-timer")[0]
let seconds = 1;
setInterval(function() {
let currentTime = seconds++

timeCard.innerHTML = `<h1> ${Math.floor(currentTime / 60) + ':' + ('0' + Math.floor(currentTime % 60)).slice(-2) } </h1>`;
}, 1000);
}




function drawCards(){
let newCard = document.getElementById("flex-container")
  //  for (let i = 0; i < 5; i++){
    // let randomLocation = items[Math.floor(Math.random() * items.length)];
    items.forEach(function(randomLocation){
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
let i = 0
if(cardAddress[0].id === address ){
  cardAddress[0].style.backgroundColor = "grey"}
    else if (cardAddress[1].id === address ){
      cardAddress[1].style.backgroundColor = "grey"}
    else if (cardAddress[2].id === address ){
      cardAddress[2].style.backgroundColor = "grey"}
    else if (cardAddress[3].id === address ){
      cardAddress[3].style.backgroundColor = "grey"}
    else if (cardAddress[4].id === address ){
      cardAddress[4].style.backgroundColor = "grey"}
}

  initPano()
  startGame()
  

})


    

 

