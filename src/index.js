const navbar = document.getElementById('navbar');
const hamburgerButton = document.getElementById('hamburger-button');

hamburgerButton.addEventListener('click', (event) => {
    navbar.classList.toggle('hidden');
});