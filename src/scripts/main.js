'use strict';

let currentSlide = 1;
const slides = document.querySelectorAll('.header__slider--photo');

const showSlide = (index, needTransition = true) => {
  slides.forEach(slide => {
    slide.style.transition = needTransition ? 'transform .3s' : 'none';
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

showSlide(currentSlide, false);

const nextSlide = () => {
  currentSlide++;
  showSlide(currentSlide);

  if (currentSlide >= slides.length - 1) {
    setTimeout(() => {
      currentSlide = 1;
      showSlide(currentSlide, false);
    }, 300);
  }
};

const prevSlide = () => {
  currentSlide--;
  showSlide(currentSlide);

  if (currentSlide === 0) {
    setTimeout(() => {
      currentSlide = slides.length - 2;
      showSlide(currentSlide, false);
    }, 300);
  }
};

document.querySelector('.header__slider--button-left')
  .addEventListener('click', prevSlide);

document.querySelector('.header__slider--button-right')
  .addEventListener('click', nextSlide);

setInterval(nextSlide, 3500);
