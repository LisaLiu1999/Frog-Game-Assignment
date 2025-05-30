const pond = document.getElementById("pond");
let frogIndex = 0;

// frog image //
const frog = document.createElement("img");
frog.src = "frog.svg";
frog.className = "frog";

// start from 0//
pond.children[frogIndex].appendChild(frog);

// arrow key control//
document.addEventListener("keydown" , function (event) {
  const row = Math.floor(frogIndex / 4); // see which row the frog at //
  const col = frogIndex % 4; // see which column the frog at //

  if (event.key === "ArrowUp" && row > 0) frogIndex -= 4;
  if (event.key === "ArrowDown" && row < 3) frogIndex += 4;
  if (event.key === "ArrowLeft" && col > 0) frogIndex -= 1;
  if (event.key === "ArrowRight" && col < 3) frogIndex += 1;
  
  pond.children[frogIndex].appendChild(frog);

});
