/*Slider*/

/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  }
  
*/






let slider = document.querySelector(".sliderContainer");
let sliderIndividual = document.querySelectorAll(".background");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
  slides();
}, intervalo)

function slides() {
  slider.style.transform = "translate(" + (-width * contador) + "px)";
  slider.style.transition = "transform 1s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500)
  }
}


/*Map*/


function initMap() {
  const ubication = { lat: 4.702358,
    lng: -74.041556 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: ubication
  });
    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Boutique - Unicentro</h1>' +
    '<div id="bodyContent">' +
    "Ak. 15 #124-30 Local 1111 <br> Tel: 4748484</br>" +
    "Bogotá, Cundinamarca</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });
  const marker = new google.maps.Marker({
    position: ubication,
    map,
    title: "ubication (Ayers Rock)",
    title: "Click to zoom"
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}


/*
coordinates = [
  {
    lat: 4.632449,
    lng: -74.116471
  },
  {
    lat: 4.619099,
    lng: -74.067369
  },
  {
    lat: 4.657927,
    lng: -74.057819
  },
  {
    lat: 4.667207,
    lng: -74.053136
  },
  {
    lat: 4.702358,
    lng: -74.041556
  },
]

inicial 4.625480, -74.075383*/
