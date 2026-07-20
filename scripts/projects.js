/* ==========================================================
                    PROJECTS SECTION
========================================================== */

let currentProject = 0;

let projectSlides = [];
let sliderTrack = null;

let indicators = [];

let prevButton = null;
let nextButton = null;

let totalProjects = 0;

/* ==========================================================
                    INITIALIZE
========================================================== */

function initializeProjects(){

    sliderTrack = document.querySelector(".slider-track");

    if(!sliderTrack){

        return;

    }

    projectSlides = Array.from(

        document.querySelectorAll(".project-slide")

    );

    prevButton = document.querySelector(".carousel-btn.prev");

    nextButton = document.querySelector(".carousel-btn.next");

    totalProjects = projectSlides.length;

    createIndicators();

    updateCarousel(false);

    attachButtonEvents();

    attachKeyboardEvents();

    initializeProjectExtras();

}

/* ==========================================================
                    CREATE INDICATORS
========================================================== */

function createIndicators(){

    const container = document.querySelector(

        ".carousel-indicators"

    );

    if(!container){

        return;

    }

    container.innerHTML = "";

    indicators = [];

    for(let i = 0; i < totalProjects; i++){

        const dot = document.createElement("span");

        dot.className = "indicator";

        if(i === currentProject){

            dot.classList.add("active");

        }

        dot.addEventListener("click",()=>{

            goToProject(i);

        });

        container.appendChild(dot);

        indicators.push(dot);

    }

}

/* ==========================================================
                    UPDATE
========================================================== */

function updateCarousel(animate = true){

    if(!sliderTrack){

        return;

    }

    if(!animate){

        sliderTrack.style.transition = "none";

    }else{

        sliderTrack.style.transition =

            "transform .7s cubic-bezier(.22,.61,.36,1)";

    }

    sliderTrack.style.transform =

        `translateX(-${currentProject * 100}%)`;

    requestAnimationFrame(()=>{

        sliderTrack.style.transition =

            "transform .7s cubic-bezier(.22,.61,.36,1)";

    });

    indicators.forEach((indicator,index)=>{

        indicator.classList.toggle(

            "active",

            index === currentProject

        );

    });

}

/* ==========================================================
                    NAVIGATION
========================================================== */

function nextProject(){

    currentProject++;

    if(currentProject >= totalProjects){

        currentProject = 0;

    }

    updateCarousel();

}

function previousProject(){

    currentProject--;

    if(currentProject < 0){

        currentProject = totalProjects - 1;

    }

    updateCarousel();

}

function goToProject(index){

    currentProject = index;

    updateCarousel();

}

/* ==========================================================
                    BUTTON EVENTS
========================================================== */

function attachButtonEvents(){

    if(prevButton){

        prevButton.addEventListener(

            "click",

            previousProject

        );

    }

    if(nextButton){

        nextButton.addEventListener(

            "click",

            nextProject

        );

    }

}

/* ==========================================================
                    KEYBOARD
========================================================== */

function attachKeyboardEvents(){

    document.addEventListener(

        "keydown",

        function(event){

            if(event.key === "ArrowRight"){

                nextProject();

            }

            if(event.key === "ArrowLeft"){

                previousProject();

            }

        }

    );

}

/* ==========================================================
                    AUTOPLAY
========================================================== */

let autoPlay = null;

function startAutoPlay(){

    stopAutoPlay();

    autoPlay = setInterval(() => {

        nextProject();

    }, 5000);

}

function stopAutoPlay(){

    if(autoPlay){

        clearInterval(autoPlay);

    }

}

/* ==========================================================
                    PAUSE ON HOVER
========================================================== */

function attachHoverEvents(){

    const section = document.querySelector(".projects-section");

    if(!section){

        return;

    }

    section.addEventListener("mouseenter", () => {

        stopAutoPlay();

    });

    section.addEventListener("mouseleave", () => {

        startAutoPlay();

    });

}

/* ==========================================================
                    TOUCH SWIPE
========================================================== */

function attachTouchEvents(){

    const slider = document.querySelector(".projects-slider");

    if(!slider){

        return;

    }

    let startX = 0;

    let endX = 0;

    slider.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchmove",(e)=>{

        endX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend",()=>{

        const distance = startX - endX;

        if(Math.abs(distance) < 60){

            return;

        }

        if(distance > 0){

            nextProject();

        }else{

            previousProject();

        }

    });

}

/* ==========================================================
                    MOUSE DRAG
========================================================== */

function attachMouseDrag(){

    const slider = document.querySelector(".projects-slider");

    if(!slider){

        return;

    }

    let isDragging = false;

    let startX = 0;

    slider.addEventListener("mousedown",(e)=>{

        isDragging = true;

        startX = e.clientX;

        slider.style.cursor = "grabbing";

    });

    window.addEventListener("mouseup",(e)=>{

        if(!isDragging){

            return;

        }

        isDragging = false;

        slider.style.cursor = "grab";

        const distance = e.clientX - startX;

        if(Math.abs(distance) < 60){

            return;

        }

        if(distance < 0){

            nextProject();

        }else{

            previousProject();

        }

    });

}

/* ==========================================================
                    LAPTOP TILT
========================================================== */

function attachLaptopTilt(){

    const laptops = document.querySelectorAll(".laptop");

    laptops.forEach((laptop)=>{

        laptop.addEventListener("mousemove",(e)=>{

            const rect = laptop.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 14;

            const rotateX = ((y / rect.height) - 0.5) * -14;

            laptop.style.transform =

                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        laptop.addEventListener("mouseleave",()=>{

            laptop.style.transform = "";

        });

    });

}

/* ==========================================================
                    RESIZE
========================================================== */

function attachResizeHandler(){

    window.addEventListener("resize",()=>{

        updateCarousel(false);

    });

}

/* ==========================================================
                    INITIALIZE EXTRA FEATURES
========================================================== */

function initializeProjectExtras(){

    attachHoverEvents();

    attachTouchEvents();

    attachMouseDrag();

    attachLaptopTilt();

    attachResizeHandler();

    startAutoPlay();

}