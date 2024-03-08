// create divs using JS inside a container, grid 16 x 16
// have a fixed width, ex. 960 px for the grid
// use flexbox to make divs appear as a grid
// be careful of borders and margins

// set a hover effect so the divs change color when mouse passes over them, leaving a pixelated trail through the grid (add a new class to the div which will change its background)
// add a button to the top of the screen
// when button is clicked, ask user with a popup the number of squares per side for the new grid (set limit of max 100)
// when answer is provided, existing grid shoul be removed
// new grid should be generated

const containerEl = document.querySelector('.container');

function drawGrid(num) {
  let size = 960 / num;
  for (let i = 0; i < num; i++) {
    for (let y = 0; y < num; y++) {
      let gridItem = document.createElement('div');
      gridItem.style.width = `${size}px`;
      gridItem.style.height = `${size}px`;
      gridItem.classList.add('grid-item');

      containerEl.append(gridItem);
    }
  }
}
drawGrid(16);
