// MENU BURGER //

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerBtnIcon = document.querySelector('.burger-btn i');

  // Ajoute ou retire la classe "open" pour afficher/masquer le menu
  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    const isOpen = burgerMenu.classList.contains('open')
    burgerBtnIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'
  });
});


// MENU DESKTOP (cache le menu au scroll) //

// Récupère l'élément du menu
let menu = document.querySelector('.desktop-menu');

// Variable pour suivre la dernière position de défilement
let lastScrollTop = 0;

// Ajoute un écouteur d'événements sur le défilement de la page
window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Si l'utilisateur est en haut de la page (défilement vers le haut ou tout en haut)
  if (currentScroll <= 0) {
    menu.classList.remove('hide-menu'); // Affiche le menu
  } else {
    menu.classList.add('hide-menu'); // Cache le menu
  }

  // Met à jour la dernière position de défilement
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
























































// Fonction pour ajouter des animations
function triggerAnimations() {
  // Activer l'animation de fond et afficher le message d'horreur
  document.body.classList.add('falling-background');
  
  const horrorMessage = document.querySelector('.horror-message');
  if (horrorMessage) {
    horrorMessage.style.display = 'block'; // Afficher le message
    horrorMessage.style.animation = 'fadeIn 2s forwards'; // Animation du message
  }

  // Après 2 secondes, afficher le jumpscare et jouer le son
  setTimeout(function () {
    const jumpscare = document.querySelector('.jumpscare');
    if (jumpscare) {
      jumpscare.style.display = 'block'; // Rendre le jumpscare visible
      jumpscare.style.animation = 'jumpIn 0.2s ease forwards'; // Animation jumpscare
    }
    const jumpscareSound = document.getElementById('jumpscare-sound');
    if (jumpscareSound) jumpscareSound.play(); // Jouer le son
  }, 2000); // Délai avant l'apparition du jumpscare
}

// Fonction pour appliquer la classe "falling" à tous les éléments
function makeElementsFall() {
  const allElements = document.querySelectorAll('body > *');
  allElements.forEach(element => element.classList.add('falling'));
}

// Gérer le clic sur l'easter egg
document.getElementById('easter-egg-link').addEventListener('click', function(e) {
  e.preventDefault(); // Empêche la navigation
  triggerAnimations(); // Lancer les animations de fond et le jumpscare
  makeElementsFall(); // Appliquer l'effet de chute sur les éléments
});
