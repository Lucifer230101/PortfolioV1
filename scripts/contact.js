/* ==========================================================
   CONTACT SECTION JAVASCRIPT
========================================================== */

function initializeContact(){

    initializeContactAnimations();

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeContactAnimations() {

    const elements = document.querySelectorAll(".hidden-contact");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show-contact");

                }, index * 150);

                observer.unobserve(entry.target);
            }

        });

    }, {

        threshold: 0.2

    });

    elements.forEach((element) => {

        observer.observe(element);

    });

}

/* ==========================================================
   CONTACT CARD HOVER EFFECT
========================================================== */

const cards = document.querySelectorAll(".contact-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

/* ==========================================================
   CTA CARD PARALLAX
========================================================== */

const ctaCard = document.querySelector(".cta-card");

if (ctaCard) {

    ctaCard.addEventListener("mousemove", (e) => {

        const rect = ctaCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        ctaCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    ctaCard.addEventListener("mouseleave", () => {

        ctaCard.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

}

/* ==========================================================
   SOCIAL ICON RIPPLE HOVER
========================================================== */

const socials = document.querySelectorAll(".social-links a");

socials.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {

        icon.animate([
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.25)"
            },
            {
                transform: "scale(1.1)"
            }
        ], {

            duration: 300,
            easing: "ease-out"

        });

    });

});

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

const buttons = document.querySelectorAll(".contact-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});