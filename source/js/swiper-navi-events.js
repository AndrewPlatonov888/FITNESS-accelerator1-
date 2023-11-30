//
const nextButtons = document.querySelectorAll('.swiper-button-next');
const prevButtons = document.querySelectorAll('.swiper-button-prev');


function setEventsNextButtons() {

  nextButtons.forEach((item) => {
    item.addEventListener('mouseover', function () {
      item.classList.add('swiper-button-hover');
    });
    item.addEventListener('mouseout', function () {
      item.classList.remove('swiper-button-hover');
    });

  });

  nextButtons.forEach((item) => {
    item.addEventListener('mousedown', function () {
      item.classList.add('swiper-button-active');
    });
    item.addEventListener('mouseup', function () {
      item.classList.remove('swiper-button-active');
    });
  });

}

function setEventsPrevButtons() {

  prevButtons.forEach((item) => {
    item.addEventListener('mouseover', function () {
      item.classList.add('swiper-button-hover');
    });

    item.addEventListener('mouseout', function () {
      item.classList.remove('swiper-button-hover');
    });
  });

  prevButtons.forEach((item) => {
    item.addEventListener('mousedown', function () {
      item.classList.add('swiper-button-active');
    });

    item.addEventListener('mouseup', function () {
      item.classList.remove('swiper-button-active');
    });
  });
}

export {setEventsNextButtons, setEventsPrevButtons};
