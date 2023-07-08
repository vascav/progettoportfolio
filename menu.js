// Ottieni il riferimento all'elemento div con la classe "menu"
const menu = document.querySelector('.menu');

// Aggiungi un gestore di eventi per il clic sull'elemento div
menu.addEventListener('click', function() {
  // Aggiungi o rimuovi la classe "open" all'elemento div
  this.classList.toggle('open');
});