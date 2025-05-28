document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000);

  document.querySelector('.left-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.querySelector('.right-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});







    const fadeElements = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
      observer.observe(el);
    });

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

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
  





// Product detail logic



// Feedback form
document.getElementById('feedbackForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const loader = document.getElementById('formLoader');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  loader.style.display = 'block';
  success.style.display = 'none';
  error.style.display = 'none';

  setTimeout(() => {
    loader.style.display = 'none';
    success.style.display = 'block';
    this.reset();
  }, 2500);
});

// feedback slide
const cards = document.querySelectorAll('.feedback-card');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let current = 0;
  let interval;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active', 'exit-left');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  function nextCard() {
    cards[current].classList.remove('active');
    cards[current].classList.add('exit-left');
    current = (current + 1) % cards.length;
    setTimeout(() => {
      showCard(current);
    }, 50); 
  }

  function prevCard() {
    cards[current].classList.remove('active');
    cards[current].classList.add('exit-left');
    current = (current - 1 + cards.length) % cards.length;
    setTimeout(() => {
      showCard(current);
    }, 50);
  }

  function startAutoSlide() {
    interval = setInterval(nextCard, 3000); // change every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  leftArrow.addEventListener('click', () => {
    stopAutoSlide();
    prevCard();
    startAutoSlide();
  });

  rightArrow.addEventListener('click', () => {
    stopAutoSlide();
    nextCard();
    startAutoSlide();
  });

  showCard(current);
  startAutoSlide();