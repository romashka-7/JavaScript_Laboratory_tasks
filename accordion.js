let listOfTasks = document.querySelectorAll(".task");
let listOfContents = document.querySelectorAll(".content");

for (let index = 0; index < listOfTasks.length; index++) {
  listOfTasks[index].addEventListener("click", () => {
    if (event.target.closest("button")) {
      return;
    }
    let content = listOfContents[index];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
