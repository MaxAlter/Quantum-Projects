'use strict';

let position = 0;
const slidesToShow = 1;
const slideToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.slider-btn_prev');
const btnNext = document.querySelector('.slider-btn_next');
const items = document.querySelectorAll('.slide_item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;

let movePosition = slideToScroll * itemWidth;

items.forEach(item => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemLeft >= slideToScroll ? movePosition : itemLeft * itemWidth;

  if (itemLeft === 1) {
    btnNext.classList.remove('active');
  } else btnPrev.classList.add('active');

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemLeft = itemsCount - Math.abs(position) / itemWidth;

  position += itemLeft >= slideToScroll ? movePosition : itemLeft * itemWidth;

  if (itemLeft === 3) {
    btnPrev.classList.remove('active');
  } else btnNext.classList.add('active');

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  const isDisabled = (btnPrev.disabled = position === 0);

  const addDisablet = (btnNext.disabled =
    position <= -(itemsCount - slidesToShow) * itemWidth);
};

checkBtns();
