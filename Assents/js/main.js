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
  const ubication = {
    lat: 4.702358,
    lng: -74.041556
  };

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

//obtener datos

function obtenerValorLog() {

  //Con jQuery
  const mail = $('#mail').val();
  const password = $('#password').val()

  //Si no existe mail (!xxxx)
  if (!mail) {
    //sin jQuery
    //document.getElementById('errormail').innerHTML ='Por favor ingrese mail';

    //Con jQuery imprimiendo texto en div
    $('#wrongMail').html('Por favor ingrese su direccion e-mail')

    //Añadiendo la clase desde CSS
    $('#mail').addClass('wrong')
    return false;

  } else {
    $('#mail').removeClass('wrong')
    $('#wrongMail').html('')
  }

  //Si no existe clave (!xxxx)
  if (!password) {
    //sin jQuery
    //document.getElementById('errorNombre').innerHTML ='Por favor ingrese nombre';

    //Con jQuery imprimiendo texto en div
    $('#wrongPassword').html('Por favor ingrese su clave')

    //Añadiendo la clase desde CSS
    $('#password').addClass('wrong')
    return false;

  } else {
    $('#password').removeClass('wrong')
    $('#wrongPassword').html('')
  }

  console.log(mail)
  console.log(password)
}


function obtenerValorReg() {

  //Con jQuery
  const newMail = $('#newMail').val();
  const newPassword = $('#newPassword').val()
  const passwordConfirm = $('#passwordConfirm').val()
  const passwordConfirm = $('#completeName').val()
  const passwordConfirm = $('#lastName').val()
  const passwordConfirm = $('#id').val()


  //Si no existe mail (!xxxx)
  if (!newMail) {
    //Con jQuery imprimiendo texto en div
    $('#wrong').html('Por favor ingrese su direccion e-mail')

    //Añadiendo la clase desde CSS
    $('#mail').addClass('wrong')
    return false;

  } else {
    $('#mail').removeClass('wrong')
    $('#wrong').html('')
  }

  //Si no existe nueva clave (!xxxx)
  if (!newPassword) {
    //Con jQuery imprimiendo texto en div
    $('#wrong2').html('Por favor asigne una clave a su nueva cuenta')

    //Añadiendo la clase desde CSS
    $('#newPassword').addClass('wrong')
    return false;

  } else {
    $('#newPassword').removeClass('wrong')
    $('#wrong2').html('')
  }
  //Si no existe confirmacion de clave (!xxxx)
  if (!passwordConfirm) {
    //Con jQuery imprimiendo texto en div
    $('#wrong3').html('Por favor confirme su contraseña')

    //Añadiendo la clase desde CSS
    $('#passwordConfirm').addClass('wrong')
    return false;

  } else {
    $('#passwordConfirm').removeClass('wrong')
    $('#wrong3').html('')
  }
  //Si no existe nombre (!xxxx)
  if (!completeName) {
    //Con jQuery imprimiendo texto en div
    $('#wrong4').html('Por favor ingrese su nombre')

    //Añadiendo la clase desde CSS
    $('#completeName').addClass('wrong')
    return false;

  } else {
    $('#completeName').removeClass('wrong')
    $('#wrong4').html('')
  }
  //Si no existe nombre (!xxxx)
  if (!lastName) {
    //Con jQuery imprimiendo texto en div
    $('#wrong5').html('Por favor ingrese su apellido')

    //Añadiendo la clase desde CSS
    $('#lastName').addClass('wrong')
    return false;

  } else {
    $('#lastName').removeClass('wrong')
    $('#wrong5').html('')
  }
  //Si no existe nombre (!xxxx)
  if (!id) {
    //Con jQuery imprimiendo texto en div
    $('#wrong6').html('Por favor ingrese su numero de identificación')

    //Añadiendo la clase desde CSS
    $('#id').addClass('wrong')
    return false;

  } else {
    $('#id').removeClass('wrong')
    $('#wrong6').html('')
  }

  console.log(newMail)
  console.log(newPassword)
  console.log(passwordConfirm)
  console.log(completeName)
  console.log(LastName)
  console.log(id)
}
