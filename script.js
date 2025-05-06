document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".nav");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
      faq.classList.toggle("active");

      // Optional: close other FAQs
      faqs.forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active");
        }
      });
    });
  });
});
// FOR PRICE RANGE
const rangeInput = document.getElementById("rangeInput");
const interestAmount = document.getElementById("interestAmount");

rangeInput.addEventListener("input", () => {
  const value = parseInt(rangeInput.value);

  interestAmount.textContent = value.toLocaleString("en-us");
});

// FOR CARD SLIDER
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".card-slider");
  const slides = document.querySelectorAll(".slide");

  // Clone slides for infinite effect
  const clonedSlides = [];
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clonedSlides.push(clone);
    slider.appendChild(clone);
  });

  const quantity = slides.length;
  const width = 187;
  const duration = quantity * 3;

  slider.style.setProperty("--quantity", quantity);
  slider.style.setProperty("--width", `${width}px`);
  slider.style.setProperty("--duration", `${duration}s`);

  slider.classList.add("auto-scroll");

  slider.addEventListener("animationiteration", () => {});
});
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
