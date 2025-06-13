$(document).ready(function () {
    console.log("Inicializando Slick...");

    $('.carousel').slick({
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Navegación infinita
        speed: 200, // Velocidad de la transición
        slidesToShow: 1, // Mostrar solo 1 imagen a la vez
        slidesToScroll: 1, // Mover de a 1 imagen
        autoplay: true, // Autoplay habilitado
        autoplaySpeed: 3000, // Intervalo de autoplay
        fade: false, // Desactiva efecto de desvanecimiento
        arrows: true, // Mostrar flechas
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });

    console.log("Slick inicializado correctamente.");
});


  
  // Efecto de scroll suave para enlaces
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });