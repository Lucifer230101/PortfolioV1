function loadExperience() {
    const joinDate = new Date("2024-11-01");
    const now = new Date();

    let months = (now.getFullYear() - joinDate.getFullYear()) * 12;
    months += now.getMonth() - joinDate.getMonth();

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let experienceText = "";

    if (years > 0)
        experienceText += `${years} Year${years > 1 ? "s" : ""}`;

    if (remainingMonths > 0)
        experienceText += ` ${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}`;

    experienceText += " Experience";

    document.getElementById("experience").textContent = experienceText;
}