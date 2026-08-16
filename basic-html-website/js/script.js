const skills = [
    "Variables",
    "Conditions",
    "Loops",
    "Functions"
];

const skillsList = document.getElementById("javascript-skills");

for (const skill of skills) {

    const listItem = document.createElement("li");

    listItem.textContent = skill;

    skillsList.appendChild(listItem);

}

const toggleButton = document.getElementById("toggle-skills-button");
    toggleButton.addEventListener("click", function () {

        if (skillsList.style.display === "none") {
            skillsList.style.display = "block"
            toggleButton.textContent = "Hide Skills"
        } else {
            skillsList.style.display = "none";
            toggleButton.textContent = "Show Skills"
        }    

    });