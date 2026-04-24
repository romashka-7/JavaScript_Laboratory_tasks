const button = document.querySelector(".downButton");
const listOfSweets = document.querySelector(".listOfSweets");
const taskContent = document.querySelectorAll(".content")[6];

let allSweets = document.querySelectorAll("#sweet1,#sweet2,#sweet3,#sweet4");
let typeOfSweets = Array.from(allSweets);
var img = document.querySelector(".downButton");

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  e.stopPropagation();

  if (listOfSweets.style.maxHeight) {
    listOfSweets.style.maxHeight = null;
    img.src = "/images/downArrow.png";
  } else {
    listOfSweets.style.maxHeight = listOfSweets.scrollHeight + "px";
    img.src = "/images/upArrow.png";
  }
  // плавная анимация работает если 21-25 строчку обратить в setTimeout(110 мс) и в .listOfSweets поставить transition: max-height 0.3s;
  const currentHeight = taskContent.style.maxHeight;
  if (currentHeight) {
    taskContent.style.maxHeight = taskContent.scrollHeight + "px";
  }
});

typeOfSweets.forEach((el) => {
  el.addEventListener("click", () => {
    event.stopPropagation();
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s, transform 0.3s";

    setTimeout(() => {
      el.remove();

      const list = document.querySelector(".listOfSweets ul");
      if (list.children.length === 0) {
        list.innerHTML = "<li>Нет сладостей :(</li>";
      }
    }, 300);
  });
});
