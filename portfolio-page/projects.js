const showcase = document.querySelector(".project-showscase");
const projects = [...document.querySelectorAll(".project")];

const previousButton = document.querySelector(".previous-project");
const nextButton = document.querySelector(".next-project");
const currentProject = document.querySelector(".current-project");
const totalProjects = document.querySelector(".total-projects");


let currentIndex = 0;
let isAnimating = false;

totalProjects.textContent = projects.length;

function changeProject(nextIndex, direction){
    if (nextIndex == currentIndex || nextIndex < 0 || nextIndex == projects.length || isAnimating)
        return;

    isAnimating = true;

    const oldProject = projects[currentIndex];
    const nextProject = projects[nextIndex];


    const exitClass = direction === "next" ? "exit-left" : "exit-right";
    const enterClass = direction === "next" ? "enter-left" : "enter-right";
    oldProject.classList.add(exitClass);  
  

    oldProject.addEventListener("animationend", ()=>{
        oldProject.classList.remove(exitClass, "active");
        nextProject.classList.add(enterClass, "active");
        currentIndex = nextIndex;
        currentProject.textContent = currentIndex + 1;

        nextProject.addEventListener("animationend", ()=>{
            nextProject.classList.remove(enterClass);
            isAnimating = false;
        }, {once:true});
    }, {once:true});

}
previousButton.addEventListener("click", ()=>{
    nextIndex = currentIndex - 1;
    changeProject(nextIndex, "previous");
    }
)
nextButton.addEventListener("click", ()=>{
    nextIndex = currentIndex + 1;
    changeProject(nextIndex, "next");
    }
)