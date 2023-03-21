const container = document.querySelector(".container")
const btn = document.querySelector(".btn");
let dimensions = 16;
createGrid(dimensions);

const squares = document.querySelectorAll(".square")

btn.addEventListener("click", () => {
    let newDimensions = prompt("Enter a number from 1-100:");
    alert(`The new grid is ${newDimensions} x ${newDimensions}`);
    removeAllChildNodes(container);
    createGrid(newDimensions);
})

squares.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("hover");
    });
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(dimensions) {
    for (let i = 1; i <= dimensions; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "square" + i;
        newDiv.classList.add("square");
        newDiv.textContent = "👻";
        container.appendChild(newDiv);
        console.log(newDiv);
    }
}