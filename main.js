const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const homeSection = document.querySelector("#home");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    homeSection.classList.toggle("active");
}