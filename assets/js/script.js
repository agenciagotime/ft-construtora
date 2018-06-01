let contentMenu = document.getElementById('menu-content');
let btnMenu = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

// Função do preload da página 
window.onload = function () {
  setTimeout(function() {
    document.querySelector('.loader').classList.add('hide');
  }, 300);  
}

// Função que adiciona box-shadow na barra de menu
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
}

// // Função que controla o menu mobile e o botão de menu
btnMenu.addEventListener('click', function() {
  if (btnMenu.classList.contains('active')) {
    btnMenu.classList.remove('active');
    contentMenu.classList.remove('open');
  }
  else {
    btnMenu.classList.add('active');
    contentMenu.classList.add('open');
  }
});

// Função que rola a página suavemente ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView ({
      behavior: 'smooth',
      block: 'start'
    });
    btnMenu.classList.remove('active');
    contentMenu.classList.remove('open');
  });
});


// Função do google maps
function initMap() {
  var office = {
    lat: -16.728938,
    lng: -49.2381272
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: office
  });
  var marker = new google.maps.Marker({
    position: office,
    map: map
  });
}

