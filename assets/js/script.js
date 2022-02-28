// let btn = document.querySelector('.header__nav-icon');
// let navbar = document.querySelector('.navbar');
// btn.addEventListener('click', () => {
//   navbar.classList.toggle('navbar-active');
// });

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.221294 6.37521C-0.0737633 6.21324 -0.0737643 5.78675 0.221293 5.62479L10.3722 0.0527582C10.6551 -0.102528 11 0.103599 11 0.427967L11 11.572C11 11.8964 10.6551 12.1025 10.3722 11.9472L0.221294 6.37521Z" fill="black"/>
      </svg>
      </button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M10.7787 5.62479C11.0738 5.78675 11.0738 6.21325 10.7787 6.37521L0.627762 11.9472C0.344869 12.1025 -1.40814e-08 11.8964 0 11.572L4.83896e-07 0.427966C4.9798e-07 0.103598 0.34487 -0.102527 0.627763 0.0527584L10.7787 5.62479Z"
          fill="black" />
      </svg></button>`,

    // autoplay: true,
    autoplaySpeed: 2000,
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
        settings: 'unslick', // destroys slick
      },
    ],
  });
});
