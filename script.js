const grid = document.querySelector('#grid-container')

for (let i = 1; i <= 16; i++) {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div')
    square.textContent = i
    square.classList = 'grid-square'
    square.addEventListener('mouseover', () => {
      square.classList.toggle('on')
    })
    grid.appendChild(square)
  }
}
