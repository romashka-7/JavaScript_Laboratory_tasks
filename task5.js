let text = document.getElementById("blockText");
let photo = document.getElementById("randomImg");
let someObject = document.querySelector(".someObject");

let input = document.querySelectorAll('input[type="radio"]');

const content = someObject.closest(".content");

function createDiv() {
  let newDiv = document.createElement("div");
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  newDiv.style.margin = "15px";
  return newDiv;
}
someObject.style.display = "flex";
someObject.style.flexWrap = "wrap";
input.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    event.stopPropagation();
    if (index === 0) {
      let text = prompt("Введите текст", "");
      if (text) {
        alert("Блок создан!");

        let newDiv = createDiv();
        newDiv.textContent = text;
        someObject.appendChild(newDiv);

        newDiv.addEventListener("click", () => {
          event.stopPropagation();
          newDiv.remove();
          content.style.maxHeight = content.scrollHeight + "px";
        });
      }
    }
    if (index === 1) {
      alert("Блок создан!");
      let newDiv = createDiv();
      let img = document.createElement("img");
      const images = [
        "images/picsForElemsTask/image0.png",
        "images/picsForElemsTask/image1.png",
      ];
      const randomImage = images[Math.floor(Math.random() * images.length)];

      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      img.src = randomImage;
      newDiv.appendChild(img);
      someObject.appendChild(newDiv);

      newDiv.addEventListener("click", () => {
        event.stopPropagation();
        newDiv.remove();
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }

    content.style.maxHeight = content.scrollHeight + "px";
  });
});
