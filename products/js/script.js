
// Product card slider arrows
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.product-card');

let visibleCards = 4;
let currentIndex = 0;

function getVisibleCards() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) return 1;
  if (screenWidth <= 1024) return 2;
  return 4;
}

function updateSlider() {
  visibleCards = getVisibleCards();
  const cardWidth = cards[0].offsetWidth + 20;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

rightArrow?.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > cards.length - visibleCards) currentIndex = 0;
  updateSlider();
});

leftArrow?.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = cards.length - visibleCards;
  updateSlider();
});

window.addEventListener('resize', updateSlider);
updateSlider();


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');
if (productId) {
  const products = document.querySelectorAll('.product-detail');
  products.forEach((product, index) => {
    if ((index + 1).toString() === productId) {
      product.style.display = 'block';
      product.scrollIntoView({ behavior: 'smooth' });
    } else {
      product.style.display = 'none';
    }
  });
}


 // hamburger section //

    const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Toggle navbar on hamburger click
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Hide navbar if clicked or touched outside
document.addEventListener('mousedown', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('active');
  }
});




// Example structure
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading
  document.getElementById("formLoader").style.display = "block";
  document.getElementById("formSuccess").style.display = "none";
  document.getElementById("formError").style.display = "none";

  // Simulate sending
  setTimeout(() => {
    document.getElementById("formLoader").style.display = "none";

    const isSuccess = true; // simulate success

    if (isSuccess) {
      document.getElementById("formSuccess").style.display = "block";
      document.querySelector("form").reset(); // 🔄 this clears the inputs
    } else {
      document.getElementById("formError").style.display = "block";
    }
  }, 2000);
});




// Mobile swipe support 
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * -1;
  slider.scrollLeft = scrollLeft + walk;
});







// youtube //

  const track = document.querySelector('.video-carousel-track');
  const slides = document.querySelectorAll('.video-carousel-slide');
  const prevBtn = document.querySelector('.video-carousel-button.top');
  const nextBtn = document.querySelector('.video-carousel-button.bottom');

  let currentSlide = 0;

  function scrollToSlide(index) {
    const width = slides[0].clientWidth;
    track.scrollTo({ left: width * index, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = Math.max(0, currentSlide - 1);
    scrollToSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = Math.min(slides.length - 1, currentSlide + 1);
    scrollToSlide(currentSlide);
  });

