const grid = document.querySelector('#grid-container')

// for (let i = 1; i <= 16; i++) {
//   const row = document.createElement('div')
//   row.classList = 'grid-row'
//   row.id = `row${i}`
//   for (let i = 1; i <= 16; i++) {
//     const square = document.createElement('div')
//     square.textContent = i
//     square.classList = 'grid-square'
//     row.appendChild(square)
//   }
//   grid.appendChild(row)
// }

for (let i = 1; i <= 16; i++) {
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div')
    square.textContent = i
    square.classList = 'grid-square'
    grid.appendChild(square)
  }
}
