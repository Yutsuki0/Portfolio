
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
