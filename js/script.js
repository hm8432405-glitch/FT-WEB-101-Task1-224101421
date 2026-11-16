
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


const contactForm = document.getElementById("contact-form");
const visitorNameInput = document.getElementById("visitor-name");
const emailInput = document.getElementById("email");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameValue = visitorNameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        alert("Please enter your email address.");
        return;
    }

    greetingMsg.textContent = "Hello, " + nameValue + "! Thanks for visiting my profile.";
    contactForm.reset();
});