const sliderContainer = document.querySelector('.slider');
const buttonLeft = document.querySelector('.control-left');
const buttonRight = document.querySelector('.control-right');

let slides = document.querySelectorAll('.slide');
let currentPosition = 0;

function setPosition(position) {
  if (position > 0){
    return false;
  }
  if (position < -(slides.length-3)*100){
    return false;
  }
  currentPosition = position;
  slides.forEach(slide=>slide.style.transform = `translateX(${position}%)`);
  return currentPosition;
}

buttonRight.onclick = () =>{
  console.log('start');
  setPosition(currentPosition-100);
}

buttonLeft.onclick = () =>{
  console.log('start2');
  setPosition(currentPosition+100);
}