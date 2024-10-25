
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});