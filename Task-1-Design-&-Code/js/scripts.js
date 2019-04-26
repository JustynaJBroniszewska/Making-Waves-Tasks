// Header
let number = 0;
$(document).ready(function () {

    $(window).on('scroll', function () {
        $('.l-header').toggleClass('hide', $(window).scrollTop() > number);
        number = $(window).scrollTop();
    })
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
    navigation: {
        nextEl: '.linearicons-arrow-right\n' +
            '\n',
        prevEl: '.linearicons-arrow-left\n' +
            '\n',
    },
});


