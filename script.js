// Slider
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change every 4 seconds














// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});








