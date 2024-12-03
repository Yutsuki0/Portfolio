$(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
});
const navbar = document.querySelector('.custom-nav');

// Ajoutez un écouteur d'événement pour le scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

document.addEventListener("DOMContentLoaded", function() {
    // Cibler le bouton de la navigation mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Cibler la barre de navigation
    const customNav = document.querySelector('.custom-nav');
  
    // Ajouter un écouteur d'événement pour le clic sur le bouton
    navbarToggler.addEventListener('click', function() {
      // Ajouter ou retirer la classe .mobile-open à la navigation
      customNav.classList.toggle('mobile-open');
    });
  });
  