const iconMenu = document.querySelector('.header-menu-icon');
const headerBlock = document.querySelector('.main-header');
const cardContainer = document.querySelector('.cards-first-row');
const headerMenu = document.querySelector('.header-menu_mobile');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        headerBlock.classList.toggle('_active');
        cardContainer.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}