document.addEventListener("DOMContentLoaded", function () {
    // Typed.js animation for dynamic text
    if (typeof Typed !== "undefined") {
        new Typed(".auto-type", {
            strings: ["a Student,", "a Programmer,","a Frontend Developer,","a Data Science & Backend Data Engineer,", "a Machine Learning Enthusiast,", "a Project Guider"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    } else {
        console.error("Typed.js not found. Ensure it's linked correctly.");
    }

    // Smooth scroll for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form validation & submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.querySelector('[name="name"]').value.trim();
            const email = document.querySelector('[name="email"]').value.trim();
            const message = document.querySelector('[name="message"]').value.trim();
            const formMessage = document.getElementById("formMessage");

            if (name && email && message) {
                formMessage.style.color = "green";
                formMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
                contactForm.reset();
            } else {
                formMessage.style.color = "red";
                formMessage.innerText = "Please fill in all fields.";
            }
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
    // JavaScript to move the glowing cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-glow");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

});
