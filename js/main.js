(function () {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back-to-top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back-to-top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

// бургер

$(function () {
    $('.menu-icon').click(function (event) {
        $('.menu-icon,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// слайдер

$('.section4').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});