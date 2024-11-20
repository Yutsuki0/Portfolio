  // Gestion du formulaire
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // Récupérer les valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Vérification si tous les champs sont remplis
    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").innerText = "Veuillez remplir tous les champs.";
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
    } else {
        document.getElementById("success-message").innerText = "Merci, votre message a bien été envoyé!";
        document.getElementById("success-message").style.display = "block";
        document.getElementById("error-message").style.display = "none";

        // Vous pouvez ici ajouter une logique pour envoyer les données vers un serveur via AJAX si nécessaire.
        // Exemple : 
        // $.post('/submit-form', { name: name, email: email, message: message });
    }
});