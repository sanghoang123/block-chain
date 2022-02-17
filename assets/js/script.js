let btn = document.querySelector('.header__nav-icon');
let navbar = document.querySelector('.navbar');
btn.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-active');
})