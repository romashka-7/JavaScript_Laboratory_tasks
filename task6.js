let block = document.querySelector(".movingBlock");

block.addEventListener("mouseenter", () => {
  block.style.position = "relative";
  block.style.right = "15px";
});

block.addEventListener("mouseleave", () => {
  block.style.position = "relative";
  block.style.right = "0px";
});
