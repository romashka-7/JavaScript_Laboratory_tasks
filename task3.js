//divs
let allDivs = document.querySelectorAll("div");
let nowdiv = allDivs.length;
let countOfDiv = document.querySelector(".counterOfDiv");

countOfDiv.textContent = "Количество div:" + nowdiv;

// tables

let allTables = document.querySelectorAll("table");
let counterOfDOM = document.querySelector(".counterOfDOM");

let counterOfTables = allTables.length;

counterOfDOM.textContent = "Количество таблиц в DOM-дереве: " + counterOfTables;
