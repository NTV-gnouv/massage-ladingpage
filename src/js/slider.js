const leftArrow = document.getElementById('slide-l');
const rightArrow = document.getElementById('slide-r');

const slider = document.getElementById('slider');
const sliderItems = document.getElementById('slider-items');

const slideCount = sliderItems.childElementCount;
let slideIndex = 0;
let timeout = null;

function slideLeft() {
    slideIndex = slideIndex === 0 ? slideCount - 1 : slideIndex - 1;
    sliderItems.style.transform = `translateX(-${slideIndex * 100}%)`;

    clearTimeout(timeout);
    autoSlide();
}

function slideRight() {
    slideIndex = slideIndex === slideCount - 1 ? 0 : slideIndex + 1;
    sliderItems.style.transform = `translateX(-${slideIndex * 100}%)`;

    clearTimeout(timeout);
    autoSlide();
}

leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

function autoSlide() {
    timeout = setTimeout(() => {
        slideRight();
    }, 5000);
}

autoSlide();
