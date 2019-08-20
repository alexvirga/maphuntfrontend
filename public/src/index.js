const mykey = config.MY_KEY;

document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", 
`<iframe class="column left" id="map"
  src="Https://www.google.com/maps/embed/v1/streetview?key=${mykey}&location=40.705258,-74.0138061&heading=210&pitch=10&fov=35" allowfullscreen>
</iframe>`)
})


console.log(document.getElementsByClassName("gm-iv-short-address-description")[0].innerText)
