document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Toggle active class on click
    navbar.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const current = navbar.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].classList.remove("active");
            }
            event.target.classList.add("active");
        }
    });

    // Smooth scroll to section
    navbar.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - navbar.offsetHeight,
                behavior: "smooth"
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // For demonstration, you can log the form data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can add further processing here, like sending an email via AJAX
        alert("Thank you for your message! We'll get back to you soon.");
        contactForm.reset();
    });
});
