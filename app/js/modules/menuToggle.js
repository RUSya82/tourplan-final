export const menuToggle = () => {
    const menu = document.querySelector('.navbar-menu');
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', (e) => {
        menu.classList.toggle('navbar-menu--visible');
    });
};
export default menuToggle;