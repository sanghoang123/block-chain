// let btn = document.querySelector('.header__nav-icon');
// let navbar = document.querySelector('.navbar');
// btn.addEventListener('click', () => {
//   navbar.classList.toggle('navbar-active');
// });

// declare variable
const btnScrollToTop = document.querySelector('.footer-arrow');
const headerNav = document.querySelector('.header__nav');
const header_btnSearch = document.querySelector('.header__search');
const headerForm = document.querySelector('.header__form');
const header_btnTimes = document.querySelector('.header__times');

arrowFooter = () => {
  if (document.documentElement.scrollTop >= 1200) {
    btnScrollToTop.classList.add('footer-arrow--active');
  } else btnScrollToTop.classList.remove('footer-arrow--active');
};

// hide/show click search
header_btnSearch.addEventListener('click', () => handleClickFormSearch());

header_btnTimes.addEventListener('click', () => handleClickFormSearch());

handleClickFormSearch = (hide = 'header__nav--hide') => {
  const arrEle = [headerNav, header_btnSearch, headerForm, header_btnTimes];
  arrEle.forEach((e) => {
    e.classList.toggle(hide);
  });
};

window.onscroll = () => {
  arrowFooter();
};

btnScrollToTop.addEventListener('click', (e) => {
  e.preventDefault();
  topFunction();
});

// backtoTop
topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// slider
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    centerMode: true,
    centerPadding: '6px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: 'unslick',
      },
    ],
  });

  $('.feature-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    centerMode: true,
    centerPadding: '6px',
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: 'unslick',
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.assessment-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    centerMode: true,
    centerPadding: '6px',
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
  });
});
