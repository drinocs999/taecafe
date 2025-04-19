window.onload = function () {
    const path = window.location.pathname;
  
    if (path.endsWith("index.html") || path === "/" || path === "/index.html") {
      let name = localStorage.getItem("userName");
  
      if (!name) {
        name = prompt("For a personalized experience on our website, please enter your name:");
        if (name && name.trim() !== "") {
          name = name.trim();
          localStorage.setItem("userName", name);
        }
      }
  
      if (name && name.trim() !== "") {
        const welcomeElement = document.getElementById("welcome");
        if (welcomeElement) {
          welcomeElement.textContent = `${name}, WELCOME TO TAE CAFÉ!`;
        }
      }
  
      // CAROUSEL
      let currentSlide = 0;
      const slides = document.querySelectorAll(".home-slide");
      const previousBtn = document.getElementById("previousBtn");
      const nextBtn = document.getElementById("nextBtn");
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
        });
      }
  
      function moveSlideNext() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      function moveSlidePrevious() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
  
      if (nextBtn && previousBtn && slides.length > 0) {
        nextBtn.addEventListener("click", moveSlideNext);
        previousBtn.addEventListener("click", moveSlidePrevious);
        showSlide(currentSlide); // It shows the first picture for the slide
      }
    }
  };
  
  // Form validation
  document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
  
    if (path.endsWith("contactus.html") || path === "/contactus.html") {
      const form = document.querySelector(".contactForm");
  
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        let isValid = true;
  
        const name = document.getElementById("name");
        if (name.value.trim().length < 2) {
          name.classList.add("is-invalid");
          isValid = false;
        } else {
          name.classList.remove("is-invalid");
        }
  
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
          email.classList.add("is-invalid");
          isValid = false;
        } else {
          email.classList.remove("is-invalid");
        }
  
        const phone = document.getElementById("phone");
        const phonePattern = /^\d{9}$/;
        if (!phonePattern.test(phone.value)) {
          phone.classList.add("is-invalid");
          isValid = false;
        } else {
          phone.classList.remove("is-invalid");
        }
  
        const message = document.getElementById("message");
        if (message.value.trim().length < 10) {
          message.classList.add("is-invalid");
          isValid = false;
        } else {
          message.classList.remove("is-invalid");
        }
  
        if (isValid) {
          alert("Message submitted successfully!");
          form.reset();
        }
      });
    }
  });
  
