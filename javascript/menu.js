const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.side-menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
});