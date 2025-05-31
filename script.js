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

// fade animation for whole index.html 
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

// hamburger section
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('mousedown', (event) => {
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove('active');
  }
});

// feedback form (still working)
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

// logic for products images link
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




// === Feedback Slider Data & Functions ===
const feedbacks = [
  {
    name: "Jyothi D.",
    feedback: "I absolutely loved the freshness of the organic items! So grateful I found this platform.",
    img: "assets/images/person.png"
  },
  {
    name: "Karan V.",
    feedback: "Swastip’s delivery was fast and smooth. Everything felt natural and safe to eat.",
    img: "assets/images/person.png"
  },
  {
    name: "Megha R.",
    feedback: "The design is beautiful, and the service is friendly. Highly recommended!",
    img: "assets/images/person.png"
  },
  {
    name: "Ashwin T.",
    feedback: "Good quality, neat packaging, and timely updates. I trust this brand.",
    img: "assets/images/person.png"
  },
  {
    name: "Nidhi S.",
    feedback: "Such a helpful and warm team. Their response time is amazing. Great experience overall!",
    img: "assets/images/person.png"
  }
];

let current = 0;

function updateSlider() {
  const person = feedbacks[current];
  document.getElementById("name").textContent = person.name;
  document.getElementById("feedback").textContent = person.feedback;
  document.getElementById("photo").src = person.img;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });
}

function nextSlide() {
  current = (current + 1) % feedbacks.length;
  updateSlider();
}

function prevSlide() {
  current = (current - 1 + feedbacks.length) % feedbacks.length;
  updateSlider();
}

function setSlide(index) {
  current = index;
  updateSlider();
}

// === Initialize slider on page load ===
updateSlider();

// === Swipe Support (Mobile) ===
const slider = document.getElementById("slider");
let startX = 0;

slider.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function (e) {
  const endX = e.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (diffX > 30) {
    nextSlide(); // Swipe left
  } else if (diffX < -30) {
    prevSlide(); // Swipe right
  }
});
