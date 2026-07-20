function initializeSkills() {

    const rings = [

        {
            selector: ".orbit1",
            radius: 130
        },

        {
            selector: ".orbit2",
            radius: 210
        },

        {
            selector: ".orbit3",
            radius: 300
        }

    ];

    rings.forEach(ring => {

        const orbit = document.querySelector(ring.selector);

        const skills = orbit.querySelectorAll(".skill");

        const angle = (Math.PI * 2) / skills.length;

        skills.forEach((skill, index) => {

            const x = Math.cos(angle * index) * ring.radius;

            const y = Math.sin(angle * index) * ring.radius;

            skill.style.left = `calc(50% + ${x}px - 35px)`;

            skill.style.top = `calc(50% + ${y}px - 35px)`;

        });

    });

}