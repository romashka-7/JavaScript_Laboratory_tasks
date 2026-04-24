function update() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let dayofweek = date.getDay();

  let ampm = "";

  if (hours >= 12) {
    hours -= 12;
    ampm = "(pm)";
  } else {
    ampm = "(am)";
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  if (month == 0) month = "Января";
  if (month == 1) month = "Февраля";
  if (month == 2) month = "Марта";
  if (month == 3) month = "Апреля";
  if (month == 4) month = "Мая";
  if (month == 5) month = "Июня";
  if (month == 6) month = "Июля";
  if (month == 7) month = "Августа";
  if (month == 8) month = "Сентября";
  if (month == 9) month = "Октября";
  if (month == 10) month = "Ноября";
  if (month == 11) month = "Декабря";

  if (dayofweek == 1) dayofweek = "Понедельник";
  if (dayofweek == 2) dayofweek = "Вторник";
  if (dayofweek == 3) dayofweek = "Среда";
  if (dayofweek == 4) dayofweek = "Четверг";
  if (dayofweek == 5) dayofweek = "Пятница";
  if (dayofweek == 6) dayofweek = "Суббота";
  if (dayofweek == 7) dayofweek = "Воскресенье";

  let listOfClock = document.querySelectorAll(".clock");
  for (let index = 0; index < listOfClock.length; index++) {
    listOfClock[index].innerHTML =
      year +
      " год, " +
      day +
      " " +
      month +
      ", " +
      dayofweek +
      ", " +
      hours +
      "-" +
      minutes +
      "-" +
      seconds +
      ampm;
  }
  setTimeout(update, 1000);
}
update();
