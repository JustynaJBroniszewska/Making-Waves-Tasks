// Header
let number = 0;
$(document).ready(function () {

    $(window).on('scroll', function () {
        $('.l-header').toggleClass('hide', $(window).scrollTop() > number);
        number = $(window).scrollTop();
    })

    const navbarOffsetThreshold = 50;

    function checkOffset() {
        $(".c-navbar").toggleClass("is-navbar-threshold", $(".navbar").offset().top > navbarOffsetThreshold);
    }

    checkOffset();
    $(window).scroll(function () {
        checkOffset();
    });
});

// Swiper slider
let swiper = new Swiper('.swiper-container', {
    speed: 600,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 10000,
    },
});


