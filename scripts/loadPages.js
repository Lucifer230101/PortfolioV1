async function loadSection(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
}

async function init() {
    await loadSection("navbar", "components/navbar.html");
    await loadSection("profile", "components/profile.html");
    loadExperience();
    await loadSection("skillsets", "components/skillsets.html");
    initializeSkills();
    await loadSection("projects", "components/projects.html");
    initializeProjects();
    await loadSection("contact", "components/contact.html");
    initializeContact();
}

init();