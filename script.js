// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu after selecting a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// ================= EVENT REGISTRATION =================

function scrollToRegister(eventName) {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {

        document.getElementById("event").value = eventName;

    }, 500);
}


// ================= REGISTRATION FORM =================

const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const department =
        document.getElementById("department").value;

    const selectedEvent =
        document.getElementById("event").value;

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("registrationMessage");


    if (
        name === "" ||
        email === "" ||
        department === "" ||
        selectedEvent === "" ||
        phone === ""
    ) {

        message.textContent =
            "Please fill in all the required fields.";

        message.style.color = "#ff6b6b";

        return;
    }


    if (phone.length < 10) {

        message.textContent =
            "Please enter a valid phone number.";

        message.style.color = "#ff6b6b";

        return;
    }


    message.textContent =
        `Registration successful! ${name}, you are registered for ${selectedEvent}.`;

    message.style.color = "#4ade80";


    registrationForm.reset();

});