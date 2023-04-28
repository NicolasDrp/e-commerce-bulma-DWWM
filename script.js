//code bulma du header

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
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

//alert page promos

function promo() {
  alert("On fait pas de promo ici !!");
}


// Boutons supprimer des pages panier et compte

// Sélectionne tous les boutons "Supprimer"
const boutonSupprimer = document.querySelectorAll('.supprimer');

// Ajoute un gestionnaire d'événements click à chaque bouton
boutonSupprimer.forEach(button => {
  button.addEventListener('click', () => {
    // Trouve la ligne parente du bouton supprimé
    const article = button.parentNode.parentNode;

    // Supprime la ligne de la table
    article.remove();
  });
});



// Onglets page mon compte

// Sélection de tous les éléments "li" contenus dans ".tabs"
const tabs = document.querySelectorAll('.tabs li');

// Sélection de tous les éléments de contenu de chaque onglet
const tabContentBoxes = document.querySelectorAll('#commandes, #informations, #adresses, #cartes, #retours');

// Pour chaque onglet, on ajoute un événements "click"
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    // On enlève la classe "is-active" à tous les onglets
    tabs.forEach(tab => tab.classList.remove('is-active'));

    // On ajoute la classe "is-active" à l'onglet cliqué
    tab.classList.add('is-active');

    // On cache tous les éléments de contenu
    tabContentBoxes.forEach(box => box.style.display = 'none');

    // On affiche l'élément de contenu correspondant à l'onglet cliqué
    tabContentBoxes[index].style.display = 'block';
  });
});



