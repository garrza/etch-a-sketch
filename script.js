const container = document.querySelector(".container")
const btn = document.querySelector(".btn");
let dimensions = 16*16;
createGrid(dimensions);
let squares = document.querySelectorAll(".square");
lightUp();

btn.addEventListener("click", () => {
    let newDimensions = prompt("Enter a number from 1-100:");
    alert(`The new grid is ${newDimensions} x ${newDimensions}`);
    totalSquares = newDimensions * newDimensions;
    removeAllChildNodes(container);
    createGrid(totalSquares);
    squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.width = `calc(100% / ${newDimensions})`;
        square.style.height = `calc(100% / ${newDimensions})`;
    });
    lightUp();
});


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function lightUp(){
    squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.toggle("hover");
    });
});
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