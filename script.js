const container = document.querySelector(".container")

for(let i = 1;i<=16;i ++){
    let newDiv = document.createElement("div");
    newDiv.id = "square" + i;
    newDiv.classList.add("square");
    newDiv.textContent = "poop";
    container.appendChild(newDiv);
    console.log(newDiv);
}

const squares = document.querySelectorAll(".square")

squares.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("hover")
    });
});