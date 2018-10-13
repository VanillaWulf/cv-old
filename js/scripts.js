import Swiper from 'swiper.min';

let experienceItemCard11 = document.querySelector('.experience__item--card-1-1');
let experienceItemCard12 = document.querySelector('.experience__item--card-1-2');

let experienceItemSwitcher11 = document.getElementById('experience__item--switcher-1-1');
let experienceItemSwitcher12 = document.getElementById('experience__item--switcher-1-2');

experienceItemSwitcher11.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (experienceItemCard12.classList.contains('display-block')) {
        experienceItemCard11.classList.toggle('display-block');
        experienceItemCard12.classList.toggle('display-block');
        experienceItemSwitcher11.classList.toggle('experience__item--switcher-active');
        experienceItemSwitcher12.classList.toggle('experience__item--switcher-active');
    }
});

experienceItemSwitcher12.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (experienceItemCard11.classList.contains('display-block')) {
        experienceItemCard11.classList.toggle('display-block');
        experienceItemCard12.classList.toggle('display-block');
        experienceItemSwitcher11.classList.toggle('experience__item--switcher-active');
        experienceItemSwitcher12.classList.toggle('experience__item--switcher-active');
    }
});

let swiper1 = new Swiper('.swiper-container', {
pagination: {
el: '.swiper-pagination',
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
let swiper2 = new Swiper('.swiper2', {
pagination: {
el: '.swiper-pagination2',
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
};


