


const mykey = config.MY_KEY;
// const address = document.getElementsByClassName("gm-iv-short-address-description")[0].innerText



// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initPano

//     document.body.insertAdjacentHTML("afterbegin", 
// `<div class="map"> <script 
// src="https://maps.googleapis.com/maps/api/js?key=${mykey}&callback=initPano
// </script></div>`)

// src="Https://www.google.com/maps/embed/v1/streetview?key=${mykey}&location=40.705258,-74.0138061&heading=210&pitch=10&fov=35&" allowfullscreen>
// let address = document.getElementsByClassName("gm-iv-short-address-description")
// console.log('hi')

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
    

  
    panorama.addListener('pano_changed', function() {
        var panoCell = document.getElementById('pano-cell');
        panoCell.innerHTML = panorama.getPano();
    });
  
    panorama.addListener('links_changed', function() {
        var linksTable = document.getElementById('links_table');
        while (linksTable.hasChildNodes()) {
          linksTable.removeChild(linksTable.lastChild);
        }
        var links = panorama.getLinks();
        for (var i in links) {
          var row = document.createElement('tr');
          linksTable.appendChild(row);
          var labelCell = document.createElement('td');
          labelCell.innerHTML = '<b>Link: ' + i + '</b>';
          var valueCell = document.createElement('td');
          valueCell.innerHTML = links[i].description;
          linksTable.appendChild(labelCell);
          linksTable.appendChild(valueCell);
        }
    });
  
    panorama.addListener('position_changed', function() {
        var positionCell = document.getElementById('position-cell');
        positionCell.firstChild.nodeValue = panorama.getPosition() + '';
    });
  
    panorama.addListener('pov_changed', function() {
        var headingCell = document.getElementById('heading-cell');
        var pitchCell = document.getElementById('pitch-cell');
        headingCell.firstChild.nodeValue = panorama.getPov().heading + '';
        pitchCell.firstChild.nodeValue = panorama.getPov().pitch + '';
    });
    

  }

  initPano() 




<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", 
`<iframe class="column left" id="map"
  src="" allowfullscreen>
</iframe>`)
})
=======
>>>>>>> 96695f03ade3facf00d42f9837978376c45a09a1

 

<<<<<<< HEAD
console.log(document.getElementsByClassName("gm-iv-short-address-description")[0].innerText)

// "Https://www.google.com/maps/embed/v1/streetview?key=${mykey}&location=40.705258,-74.0138061&heading=210&pitch=10&fov=35"
=======
>>>>>>> 96695f03ade3facf00d42f9837978376c45a09a1
