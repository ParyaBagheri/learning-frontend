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