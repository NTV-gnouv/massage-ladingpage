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
// Hiển thị nút khi cuộn xuống 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

// Hàm đẩy trang về đầu
function topFunction() {
  document.body.scrollTop = 0; // Cho Safari
  document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
}

