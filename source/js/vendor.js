// Swiper 8.4.7
import './vendor/swiper';
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';
import {initTabs} from './vendor/init-tabs'; // подтягиваем Табы
import {initAccordions} from './vendor/init-accordion'; // подтягиваем Аккордеон
import {Form} from './vendor/form-validate/form'; // подтягиваем Валидацию


// Swiper на секцию Жюри
const jurySwiper = new Swiper('.jury__swiper', {
  parallax: true,
  spaceBetween: 40,
  loop: true,
  slidesPerView: 4,
  direction: 'horizontal',
  navigation: {
    prevEl: '.jury__next',
    nextEl: '.jury__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 3,
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
});

// Swiper на секцию Отзывы
const feedbackSwiper = new Swiper('.feedback__swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  navigation: {
    prevEl: '.feedback__next',
    nextEl: '.feedback__prev',
  },
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
    initTabs();
    const form = new Form();
    window.form = form;
    form.init();
  });
});


export {jurySwiper, feedbackSwiper};

