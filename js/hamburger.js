const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuActive = () => {
    hamburger.classList.toggle('menu');
    hamburgerMenu.classList.toggle('show');
}

hamburger.addEventListener('click', menuActive);