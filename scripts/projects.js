const projects = [

    {
        layout: "laptop",

        category: "Personal Portfolio",

        title: "Portfolio Website",

        image: "images/projects/portfolio.png",

        description:
            "A modern developer portfolio built using HTML, CSS and JavaScript with smooth animations, responsive layouts, premium UI and reusable components.",

        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive",
            "Animations"
        ],

        buttons: [
            {
                text: "Live Demo",
                icon: "fa-arrow-up-right-from-square",
                class: "live",
                link: "https://portfolio-v1-eta-five.vercel.app/"
            },
            {
                text: "GitHub",
                icon: "fa-github",
                class: "github",
                link: "https://github.com/Lucifer230101/PortfolioV1"
            }
        ]
    },

    {
        layout: "laptop",

        category: "Enterprise Interactive Showcase",

        title: "Thermax Interactive Product Showcase",

        image: "images/projects/ThermaxPPT.png",

        description:
            "Developed an enterprise-grade interactive product showcase for Thermax using HTML, CSS and JavaScript featuring videos, PDFs, image galleries and interactive 3D product models. Successfully used during a major Asian industry conference and appreciated by the client.",

        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "3D Models",
            "Videos",
            "PDF Viewer"
        ],

        buttons: [
            {
                text: "Preview",
                icon: "fa-image",
                class: "live",
                link: "images/projects/ThermaxPPT.png"
            },
            {
                text: "Enterprise",
                icon: "fa-building",
                class: "disabled"
            }
        ]
    },

    {
        layout: "code",

        category: "Java Desktop Application",

        title: "ATM Banking Simulator",

        description:
            "Developed a desktop banking application in Java that simulates real-world ATM operations. Integrated MySQL using JDBC for secure database connectivity and implemented deposits, withdrawals, balance inquiry, mini statements, PIN management and fast cash transactions.",

        tech: [
            "Java",
            "Swing",
            "JDBC",
            "MySQL",
            "OOP"
        ],

        features: [
            "Secure Login",
            "Deposit & Withdraw",
            "Balance Inquiry",
            "Mini Statement",
            "PIN Change",
            "Fast Cash"
        ],

        buttons: [
            {
                text: "GitHub",
                icon: "fa-github",
                class: "github",
                link: "https://github.com/Lucifer230101/ATMSimulator"
            }
        ]
    }
];

function initializeProjects() {

    const track = document.getElementById("sliderTrack");

    const indicators = document.getElementById("carouselIndicators");

    let current = 0;

    track.innerHTML = "";

    indicators.innerHTML = "";

    projects.forEach((project, index) => {

        const leftSection = project.layout === "code"

            ? `

<div class="code-project-card">

    <div class="code-header">

        <span class="dot red"></span>

        <span class="dot yellow"></span>

        <span class="dot green"></span>

        <span class="code-title">

            ${project.title}.java

        </span>

    </div>

    <div class="code-body">

<pre>

class ${project.title.replace(/[^a-zA-Z0-9]/g, "")} {

${(project.features || [])
    .map(feature => `✓ ${feature}`)
    .join("\n")}

}

</pre>

    </div>

    <div class="language-tags">

        ${project.tech.map(t => `<span>${t}</span>`).join("")}

    </div>

</div>

`

            :

            `

<div class="laptop-container">

<div class="laptop">

<div class="laptop-screen">

<img src="${project.image}" alt="${project.title}">

<div class="screen-reflection"></div>

</div>

<div class="laptop-base"></div>

</div>

</div>

`;
        track.innerHTML += `

<div class="project-slide">

    ${leftSection}

    <div class="project-info">

        <span class="project-category">

            ${project.category}

        </span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="tech-stack">

            ${project.tech.map(t => `<span>${t}</span>`).join("")}

        </div>

        <div class="project-buttons">


${project.buttons.map(btn => {

            if (btn.class === "disabled") {

                return `

<a class="project-btn disabled">

<i class="fa-solid ${btn.icon}"></i>

${btn.text}

</a>

`;

            }

            return `

<a href="${btn.link}"

target="_blank"

rel="noopener noreferrer"

class="project-btn ${btn.class}">

<i class="fa-solid ${btn.icon}"></i>

${btn.text}

</a>

`;

        }).join("")}


        </div>

    </div>

</div>

`;

        indicators.innerHTML += `<span class="indicator ${index == 0 ? "active" : ""}"></span>`;

    });

    const slides = document.querySelectorAll(".project-slide");

    const dots = document.querySelectorAll(".indicator");

    function update() {

        track.style.transform = `translateX(-${current * 100}%)`;

        dots.forEach(d => d.classList.remove("active"));

        dots[current].classList.add("active");

    }

    document.querySelector(".next").onclick = () => {

        current = (current + 1) % slides.length;

        update();

    };

    document.querySelector(".prev").onclick = () => {

        current = (current - 1 + slides.length) % slides.length;

        update();

    };

    dots.forEach((dot, index) => {

        dot.onclick = () => {

            current = index;

            update();

        }

    });

}