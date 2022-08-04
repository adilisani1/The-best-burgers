// Window Scroll Header
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-wrap").addClass("active");
        } else {
            $(".header-wrap").removeClass("active");
        }
    });
});




$(document).ready(function () {
    $(".card").click(function () {
        $(".card").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});


var swipers = new Swiper(".slider-content", {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    autoplay: true,
    fade: true,
    centeredSlide: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,

    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
