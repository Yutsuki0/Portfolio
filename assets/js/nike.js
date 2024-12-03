
    window.onscroll = function() {
        var navbar = document.querySelector('.custom-nav');
        if (window.pageYOffset > 100) { // Lorsque l'utilisateur a défilé de 100px
            navbar.classList.add('stickyadd');
        } else {
            navbar.classList.remove('stickyadd');
        }
    };

    const imageScroll = document.querySelector('.image-scroll');

    let isMouseDown = false;
    let startX, scrollLeft;
    
    imageScroll.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - imageScroll.offsetLeft;
        scrollLeft = imageScroll.scrollLeft;
    });
    
    imageScroll.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });
    
    imageScroll.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    
    imageScroll.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();  // Empêche la sélection du texte ou tout autre comportement
        const x = e.pageX - imageScroll.offsetLeft;
        const walk = (x - startX) * 2;  // Multiplication par 2 pour augmenter la vitesse de défilement
        imageScroll.scrollLeft = scrollLeft - walk;
    });
    

    const imageScroll2 = document.querySelector('.image-scroll');
const progress = document.querySelector('.progress');
const totalScrollWidth = imageScroll.scrollWidth - imageScroll.clientWidth;

imageScroll.addEventListener('scroll', () => {
    // Calculer la progression du scroll en pourcentage
    const scrollPercentage = (imageScroll.scrollLeft / totalScrollWidth) * 100;
    progress.style.width = scrollPercentage + '%'; // Ajuster la largeur de la barre de progression
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
  