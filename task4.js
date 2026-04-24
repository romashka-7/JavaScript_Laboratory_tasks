let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
let block3 = document.getElementById("block3");

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);
  const s = "70%";
  const l = "50%";
  return `hsl(${h}, ${s}, ${l})`;
};

function changeOfBlocks(block) {
  let rotation = 0;
  let rect = block.getBoundingClientRect();
  let currentWidth = rect.width;
  let currentHeight = rect.height;

  const content = block.closest(".content");

  const interval = setInterval(() => {
    if (currentWidth > 500) {
      clearInterval(interval);
      const interval2 = setInterval(() => {
        rotation += 90;

        block.style.transition = "transform 1s";
        block.style.transform = `rotate(${rotation}deg)`;

        if (rotation > 1600) {
          const intervalColor = setInterval(() => {
            block.style.backgroundColor = getRandomColor();
          }, 300);
        }
      }, 50);
    }
    currentWidth *= 1.5;
    currentHeight *= 1.5;

    block.style.width = currentWidth + "px";
    block.style.height = currentHeight + "px";

    rotation += 90;

    block.style.transition = "transform 1s";
    block.style.transform = `rotate(${rotation}deg)`;
    content.style.maxHeight = content.scrollHeight + "px";
  }, 200);
}

block1.addEventListener("click", () => {
  event.stopPropagation();
  changeOfBlocks(block1);
});

block2.addEventListener("click", () => {
  event.stopPropagation();
  changeOfBlocks(block2);
});

block3.addEventListener("click", () => {
  event.stopPropagation();
  changeOfBlocks(block3);
});
