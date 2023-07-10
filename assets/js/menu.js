const apertura = document.querySelector('.apertura');
const navbar = document.querySelector('.navbar');

apertura.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

