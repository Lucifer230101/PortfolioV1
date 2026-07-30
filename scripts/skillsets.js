function initializeSkills() {

    const cards = document.querySelectorAll(".skill-card");

    if (!cards.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 120}ms`;

        observer.observe(card);

    });

}