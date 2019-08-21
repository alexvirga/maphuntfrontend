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
 
    function loadAddress(){
        let currentLocation = document.querySelector("#pano > div > div:nth-child(10) > div.gm-iv-address > div.gm-iv-address-description > div.gm-iv-short-address-description")
        let locationContent = currentLocation.textContent
        verifyAnswer(locationContent)
    }

}
let items = [
    {
      name: "Flatiron School",
      address: "20 Canyon of Heroes",
      img: " "
    },
    {
        name: "New York Stock Exchange",
        address: "11 Wall St",
        img: " "
    },
    {
        name: "Big Red Cube",
        address: "135 Broadway",
        img: " "
    }
  ];


function drawCards(){
let newCard = document.getElementById("flex-container")


   for (let i = 0; i < 5; i++){
    let randomLocation = items[Math.floor(Math.random() * items.length)];
    newCard.insertAdjacentHTML("beforeend",
    `<div class="card border-0 shadow location-card" id="${randomLocation.address}">
    <img src="imgs/NYSE.png" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title mb-0">${randomLocation.name}</h5>
    </div>
  </div>`)}
}

function verifyAnswer(address){
let cardAddress = document.getElementsByClassName("card border-0 shadow location-card")
let i = 0
if(cardAddress[i].id !== address ){
    i++
}
else
cardAddress[i].style.backgroundColor = "grey"
}

  initPano()
  drawCards()
  

})


    

 

