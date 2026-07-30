function initializeNavbar() {

    const menuToggle = document.getElementById("menuToggle");
    const navList = document.getElementById("navList");

    if (!menuToggle || !navList) return;

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    document.querySelectorAll("#navList a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });

}