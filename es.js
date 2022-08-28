

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

