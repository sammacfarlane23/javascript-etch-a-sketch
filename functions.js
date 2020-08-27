// Populate grid with chosen specific amount of squares
const makeGrid = (gridSize) => {
    // Clear current grid
    container.innerHTML = '';

    // Get size of one square
    const squareWidth = 100 / gridSize;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('square')
        gridElement.style.width = `${squareWidth}%`;
        container.appendChild(gridElement);
    }

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', () => { turnSquareRandomColor(item) })
    })

    gridSizeMessage.textContent = `${gridSize} x ${gridSize} grid`;
    setTimeout(() => {
        gridSizeMessage.textContent = '';
    }, 700);
}

const newGrid = () => {
    let gridSize = parseInt(prompt('Enter a new square side dimension: '));

    // Check new grid size is valid (Larger than 99 takes a while to load)
    while (isNaN(gridSize) || gridSize < 1 || gridSize > 99) {
        gridSize = parseInt(prompt('Sorry, please enter a number between 1 and 100: '))
    }
    makeGrid(gridSize);
}

const clearGrid = () => {
    // Select all randomly colored squares
    const colorSquares = document.querySelectorAll('.square--random');

    // For each one turn the background back to black
    colorSquares.forEach((colorSquare) => {
        colorSquare.style.background = 'black';
    })
}

const turnSquareRandomColor = (gridElement) => {
    // Check if square has already got color
    // If it hasn't give it a random color
    if (gridElement.classList.length < 2) {
        gridElement.classList.add('square--random');
        const redAmount = Math.floor(Math.random() * 256);
        const greenAmount = Math.floor(Math.random() * 256);
        const blueAmount = Math.floor(Math.random() * 256);
        gridElement.style.background = `RGB(${redAmount}, ${greenAmount}, ${blueAmount})`;
    } else {
        // If a square already has color darken its RBG values by 10%
        const background = gridElement.style.background;
        //Get RGB values from bakground color string
        const colorsArray = background.slice(4, background.length - 1).split(', ');
        const darkColors = colorsArray.map((color) => {
            return Math.floor(parseInt(color) * 0.9);
        })
        const darkColorString = darkColors.join(', ');
        gridElement.style.background = `RGB(${darkColorString})`;
    }
}

const runApp = () => {
    makeGrid(16, 16);
}