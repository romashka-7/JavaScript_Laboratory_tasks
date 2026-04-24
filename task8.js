// let text = document.querySelector(".textInside");
// let img = document.querySelector(".png");

// img.addEventListener("mouseenter", () => {
//   text.style.display = "block";
// });

let play = document.querySelector(".party");
let track = new Audio("./audio/track.mp3");
let f = 0;
play.addEventListener("click", () => {
  event.stopPropagation();
  if (f === 0) {
    track.play();
    f = 1;
  } else if (f === 1) {
    track.pause();
    f = 0;
  }
});
