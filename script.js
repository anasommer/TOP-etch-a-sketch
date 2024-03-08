// set a hover effect so the divs change color when mouse passes over them, leaving a pixelated trail through the grid (add a new class to the div which will change its background)

const containerEl = document.querySelector('.container');
const btn = document.querySelector('#btn');
const gridItems = document.querySelectorAll('.grid-item');

function drawGrid(num) {
  let size = 960 / num;
  for (let i = 0; i < num; i++) {
    for (let y = 0; y < num; y++) {
      let gridItem = document.createElement('div');
      gridItem.style.width = `${size}px`;
      gridItem.style.height = `${size}px`;
      gridItem.classList.add('grid-item');
      gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add('draw');
      });

      containerEl.append(gridItem);
    }
  }
}

btn.addEventListener('click', () => {
  const num = prompt('How many squares to draw? (max 100)');

  if (!Number(num)) {
    prompt('Please, enter a number');
  }

  containerEl.innerHTML = '';
  drawGrid(Math.floor(num));
});

drawGrid(16);
