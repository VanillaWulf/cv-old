$(document).ready(function () {
    //initialize swiper when document ready
    let expirienceSwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
    })
});

