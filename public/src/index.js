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
  drawCards()
  

})


    

 

