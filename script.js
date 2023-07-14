const grid = document.querySelector('#grid-container')
const canvasSizeButton = document.querySelector('#canvas-size')
let canvasSize = 96

function clearGrid() {
  const elements = document.querySelectorAll('.grid-square')
  elements.forEach(element => {
    element.remove()
  })
}

function resizeGrid() {
  let gridSize = 0
  while (gridSize < 4 || gridSize > 100) {
    gridSize = prompt('Enter a number between 4-100 to change canvas size')
    if (gridSize < 4 || gridSize > 100) {
      alert('Invalid Size: Size must be between 4-100')
    }
  }
  console.log(gridSize)
  clearGrid()
  createGrid(gridSize)
}

function createGrid(size) {
  for (let i = 1; i <= size; i++) {
    for (let i = 1; i <= size; i++) {
      const square = document.createElement('div')
      //   square.textContent = i
      square.classList = 'grid-square'
      square.style.width = `${100 / size}%`
      square.style.height = `${100 / size}%`
      square.addEventListener('mouseover', () => {
        square.classList.toggle('on')
      })
      grid.appendChild(square)
    }
  }
}

canvasSizeButton.addEventListener('click', () => {
  resizeGrid()
})

createGrid(canvasSize)
