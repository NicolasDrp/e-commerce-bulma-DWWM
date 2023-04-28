document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });



  function promo() {
    alert("On fait pas de promo ici !!");
  }



  // Sélectionne tous les boutons "Supprimer"
const deleteButtons = document.querySelectorAll('#supprimer');

// Ajoute un gestionnaire d'événements click à chaque bouton
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Trouve la ligne parente du bouton supprimé
    const article = button.parentNode.parentNode;

    // Supprime la ligne de la table
    article.remove();
  });
});
