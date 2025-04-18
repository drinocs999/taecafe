
window.onload = function (){
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const name = prompt("For a personalized experience on our website, please enter your name:");

    if(name && name.trim() !== "" ){
        const welcomeElement1 = document.getElementById("welcome");
        welcomeElement1.textContent =`${name.trim()}, WELCOME TO TAE CAFÉ!`;
        name.valueOf = "";
    }

    var next = 1;
    var previous = -1;
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showSlide(index) {
        slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    }


    function moveSlideNext() {
        currentSlide = (currentSlide + next + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function moveSlidePrevious() {
        currentSlide = (currentSlide + previous + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', () => {
        moveSlideNext()
    })

    previousBtn.addEventListener('click', () => {
        moveSlidePrevious();
    });


    // Show the first slide initially
    showSlide(currentSlide);

}};


//validating the form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        let isValid = true;

        // Name validation
        const name = document.getElementById('name');
        if (name.value.trim().length < 2) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        // Email validation
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Phone validation (Irish format)
        const phone = document.getElementById('phone');
        const phonePattern = /^\d{9}$/;
        if (!phonePattern.test(phone.value)) {
            phone.classList.add('is-invalid');
            isValid = false;
        } else {
            phone.classList.remove('is-invalid');
        }

        // Message validation
        const message = document.getElementById('message');
        if (message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.remove('is-invalid');
        }

        if (isValid) {
            // Submit the form or display a success message
            alert("message submitted successfully!");
            form.reset();
        }
    });
});