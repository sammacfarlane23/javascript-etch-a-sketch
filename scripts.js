const container = document.querySelector('#container');
const gridSizeMessage = document.querySelector('#grid-size-message')

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    clearGrid();
})

const newGridButton = document.querySelector('#new-grid-button');
newGridButton.addEventListener('click', () => {
    newGrid();
})

runApp();