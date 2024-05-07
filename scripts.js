const grid = document.getElementById("grid-container");
const generateButton = document.getElementById("generate-grid-button");

// Generate individual row, to be used in generateGrid();
function generateRow(size) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    grid.appendChild(gridRow);
    for (let i = 0; i < size; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("grid-pixel");
        gridRow.appendChild(pixel);
    }
}

// Loops generateRow() to have an equal number of columns and rows
function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        generateRow(size);
    }
}

// Generate grid based on number input into prompt
generateButton.addEventListener("click", () => {
    let size = prompt("How many tiles would you like each side to be? (Max 100)");
    if (size > 100) return alert("Please choose smaller number");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    generateGrid(size);
});