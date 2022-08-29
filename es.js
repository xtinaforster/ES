

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

  const btn = document.getElementById("popUp");
  btn.addEventListener('click', () => removeGrid());
  //var size;
  function removeGrid() {
    for (var i = 0; i < 256; i++) {
      grid.style.backgroundColor = "#0000ff";
    }

  }
}


