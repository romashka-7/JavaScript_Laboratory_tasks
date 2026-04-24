let date = new Date();
let year = date.getFullYear();
let monthIndex = date.getMonth();

function updateCalendar() {
  let monthString = "";
  let weekends = 1;
  let day = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear(); // текущий год

  let number = document.createElement("div");

  document.querySelector(".numberOfDay").innerHTML = "";

  let counterDaysOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  let monthDayOfWeek = new Date(year, monthIndex, 1).getDay();

  const startOffset = monthDayOfWeek === 0 ? 6 : monthDayOfWeek - 1;

  for (let index = 1; index <= counterDaysOfMonth; index++) {
    weekends++;
    if (weekends == 7) weekends = 0;
  }

  for (let j = 1; j <= startOffset; j++) {
    let empty = document.createElement("div");
    empty.textContent = " ";
    document.querySelector(".numberOfDay").appendChild(empty);
  }

  for (let i = 1; i <= counterDaysOfMonth; i++) {
    let number = document.createElement("div");
    number.textContent = i;
    number.classList.add("day-cell");
    document.querySelector(".numberOfDay").appendChild(number);
    if (year === currentYear && monthIndex === currentMonth && i === day) {
      number.classList.add("today");
    } else if ((startOffset + i) % 7 == 0 || (startOffset + i) % 7 == 6) {
      number.classList.add("weekend");
    } else {
      number.classList.add("weekday");
    }
  }

  if (monthIndex == 0) {
    monthString = "Январь";
  } else if (monthIndex == 1) {
    monthString = "Февраль";
  } else if (monthIndex == 2) {
    monthString = "Март";
  } else if (monthIndex == 3) {
    monthString = "Апрель";
  } else if (monthIndex == 4) {
    monthString = "Май";
  } else if (monthIndex == 5) {
    monthString = "Июнь";
  } else if (monthIndex == 6) {
    monthString = "Июль";
  } else if (monthIndex == 7) {
    monthString = "Август";
  } else if (monthIndex == 8) {
    monthString = "Сентябрь";
  } else if (monthIndex == 9) {
    monthString = "Октябрь";
  } else if (monthIndex == 10) {
    monthString = "Ноябрь";
  } else if (monthIndex == 11) {
    monthString = "Декабрь";
  }

  document.querySelector(".year").innerHTML = year;
  document.querySelector(".themonth").innerHTML = monthString;
}

let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");

leftButton.addEventListener("click", () => {
  event.stopPropagation();
  monthIndex--;
  dayNowadays = document.getElementById("");
  if (monthIndex < 0) {
    monthIndex = 11;
    year--;
  }
  updateCalendar();
});

rightButton.addEventListener("click", () => {
  event.stopPropagation();
  monthIndex++;
  if (monthIndex > 11) {
    monthIndex = 0;
    year++;
  }
  updateCalendar();
});

updateCalendar();
