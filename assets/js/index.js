const portfolioSlider = document.querySelector(".portfolio__slider");
const sliders = portfolioSlider.querySelectorAll(".slide");
const sliderTrack = portfolioSlider.querySelector(".slider__track");
const buttonLeft = portfolioSlider.querySelector(".left");
const buttonRight = portfolioSlider.querySelector(".right");
const curentSlideText = portfolioSlider.querySelector(".current");
const sliderWidth = sliders[0].offsetWidth;
const gap =
   (sliderTrack.scrollWidth -
      portfolioSlider.querySelector(".slide").offsetWidth * sliders.length) /
   (sliders.length - 1);
const move = sliderWidth + gap;
let position = 0;
let currentSLide = 1;

function updateSlider(translate, slideIndex = 1) {
   position == 0
      ? (buttonLeft.disabled = true)
      : (buttonLeft.disabled = false);
   position == -(move * (sliders.length - 1))
      ? (buttonRight.disabled = true)
      : (buttonRight.disabled = false);

   curentSlideText.innerText = slideIndex;
   sliderTrack.style.transform = `translateX(${translate}px`;
}

buttonLeft.onclick = () => {
   updateSlider(position += move, currentSLide -= 1);
};
buttonRight.onclick = () => {
   updateSlider(position -= move, currentSLide += 1);
};

portfolioSlider.querySelector(".total").innerText = sliders.length;

updateSlider();
