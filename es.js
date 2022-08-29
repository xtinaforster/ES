

const container = document.getElementById("container");



for (let pix = 0; pix < 256; pix++) {
  const grid = document.createElement("div");
  grid.setAttribute("id", "squares");
  container.appendChild(grid);
  grid.setAttribute("class", "each");

  grid.addEventListener("mouseover", colorChange);
  function colorChange() {
    var randomColors = Math.floor(Math.random() * 16777215).toString(16);
    grid.style.backgroundColor = "#" + randomColors;
  }


}
const btn = document.getElementById("popUp");
btn.addEventListener('click', () => getnewGrid());
var size;
function getnewGrid() {
  size = prompt("How many squares per side would you like for the new grid? Hint max is 100x100.");
  parseInt(size);
  if (size > 100) {
    size = prompt("Sorry! Max squares is 100 per side! Enter another lower number.");
    size = parseInt(size);
    removeGrid();
    drawGrid();
  }
  else {
    removeGrid();
    drawGrid();
  }

}
const container2 = document.createElement('div');
container.appendChild(container2);
function drawGrid() {

  for (let pix = 0; pix < size * size; pix++) {
    const grid1 = document.createElement("div");
    grid1.setAttribute("id", "squares");
    container2.appendChild(grid1);
    grid1.setAttribute("class", "each1");

    grid1.addEventListener("mouseover", colorChange);
    function colorChange() {
      var randomColors = Math.floor(Math.random() * 16777215).toString(16);
      grid1.style.backgroundColor = "#" + randomColors;
    }


  }
}

function removeGrid() {
  var divstoRemove = document.querySelectorAll(".each");
  for (var i = 0; i < 256; i++) {
    divstoRemove[i].remove();
  }

}