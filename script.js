function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const eventName = document.getElementById("event").value;
        const message = document.getElementById("message");

        message.textContent =
            "Registration successful! Thank you, " +
            name + ". You registered for " + eventName + ".";

        registrationForm.reset();
    });
}