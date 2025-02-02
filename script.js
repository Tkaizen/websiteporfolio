const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__links');


function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
}


mobileMenu.addEventListener('click', toggleMobileMenu);


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});


document.addEventListener('click', (e) => {
    if (!navbarMenu.contains(e.target) && !mobileMenu.contains(e.target) && navbarMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});
