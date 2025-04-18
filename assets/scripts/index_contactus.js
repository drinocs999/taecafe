
window.onload = function (){
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const name = prompt("For a personalized experience on our website, please enter your name:");

    if(name && name.trim() !== "" ){
        const welcomeElement1 = document.getElementById("welcome");
        welcomeElement1.textContent =`${name.trim()}, WELCOME TO TAE CAFÉ!`;
        name.valueOf = "";
    }

    // Carrossel
    const slides = document.querySelectorAll(".slide");
    const previousBtn = document.getElementById("previousBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (slides.length && previousBtn && nextBtn) {
        let currentSlide = 0;

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

        nextBtn.addEventListener("click", moveSlideNext);
        previousBtn.addEventListener("click", moveSlidePrevious);

        // show the first slide
        showSlide(currentSlide);
    }
};

//validating the form
document.addEventListener('DOMContentLoaded', function () {
    // analyse if we're in 'contactus.html'
    if (window.location.pathname.endsWith("contactus.html")) {
        const form = document.querySelector('.contactForm');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio real do formulário

            let isValid = true;

            //validation of the name
            const name = document.getElementById('name');
            if (name.value.trim().length < 2) {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
            }

            // e-mail validation
            const email = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            // phone number validation
            const phone = document.getElementById('phone');
            const phonePattern = /^\d{9}$/;
            if (!phonePattern.test(phone.value)) {
                phone.classList.add('is-invalid');
                isValid = false;
            } else {
                phone.classList.remove('is-invalid');
            }

            // message validation
            const message = document.getElementById('message');
            if (message.value.trim().length < 10) {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
            }

            if (isValid) {
                // send the form
                alert("Message submitted successfully!");
                form.reset();
            }
        });
    }
});
