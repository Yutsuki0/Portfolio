
    window.onscroll = function() {
        var navbar = document.querySelector('.custom-nav');
        if (window.pageYOffset > 100) { // Lorsque l'utilisateur a défilé de 100px
            navbar.classList.add('stickyadd');
        } else {
            navbar.classList.remove('stickyadd');
        }
    };

