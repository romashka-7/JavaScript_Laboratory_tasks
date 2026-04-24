let inputFields = document.querySelectorAll(".inputFields");
let field = document.querySelector(".field");

let inputs = document.querySelectorAll(".someInput");

let correctInput = new Array(inputs.length);
let errorType = document.querySelector(".errorType");

let nameReg = /^[А-ЯЁ][а-яё]*$/;
let facultyReg = /^[А-ЯЁ][а-яё]*$/i;
let departamentReg = /^[А-ЯЁ][А-ЯЁа-яё' ']*$/;
let dateReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
let emailReg = /^[\w\d]{2,}@([\w\d]{2,}\.){1,}[\w\d]{2,4}$/;
let loginReg = /^[a-zA-Z0-9]{4,}$/;
let passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!_?#$%]).{8,}$/;

// создадим регексы для проверки каждой отдельной части регекса пароля
let passwordRegHightLitera = /^(?=.*[A-Z]).*$/;
let passwordRegSmallLitera = /^(?=.*[a-z]).*$/;
let passwordRegNumber = /^(?=.*[0-9]).*$/;
let passwordRegSpecialSymbol = /^(?=.*[!_?#$%]).*$/;

// создание массива регексов для сравнения по индексам с элементами массива вводов
let allRegs = [
  nameReg,
  nameReg,
  nameReg,
  dateReg,
  facultyReg,
  departamentReg,
  emailReg,
  loginReg,
  passwordReg,
  passwordReg,
];

// Функция проверки совпадения паролей
function checkPasswordsMatch() {
  let password1 = inputs[8].value;
  let password2 = inputs[9].value;

  if (password1 === password2 && password1 !== "") {
    correctInput[9] = true;
    errorType.innerHTML = "Пароли совпадают!";
    errorType.style.color = "#71f9a0";
    inputs[9].style.backgroundColor = "#72ff7c";
    return true;
  } else if (password2 !== "") {
    correctInput[9] = false;
    errorType.innerHTML = "Пароли не совпадают!";
    errorType.style.color = "red";
    inputs[9].style.backgroundColor = "red";
    return false;
  }
  return false;
}

// Функция проверки пароля и вывода подсказок
function checkPasswordStrength(field, i) {
  const hasUpper = passwordRegHightLitera.test(field.value);
  const hasLower = passwordRegSmallLitera.test(field.value);
  const hasNumber = passwordRegNumber.test(field.value);
  const hasSpecial = passwordRegSpecialSymbol.test(field.value);
  const isLongEnough = field.value.length >= 8;

  if (!hasUpper) {
    errorType.innerHTML = "Нужна хотя бы одна заглавная буква!";
  } else if (!hasLower) {
    errorType.innerHTML = "Нужна хотя бы одна маленькая буква!";
  } else if (!hasNumber) {
    errorType.innerHTML = "Нужна хотя бы одна цифра!";
  } else if (!hasSpecial) {
    errorType.innerHTML = "Нужен хотя бы один спец символ (!_?#$%)!";
  } else if (!isLongEnough) {
    errorType.innerHTML = "Минимум 8 символов!";
  } else {
    errorType.innerHTML = "Повторите пароль!";
    errorType.style.color = "#71f9a0";
    errorType.style.transform = "scale(1.1)";
    return true;
  }
  errorType.style.color = "red";
  return false;
}

inputs.forEach((field, i) => {
  let intervalId;

  field.addEventListener("mousedown", (event) => {
    event.stopPropagation();
  });

  field.addEventListener("focus", (event) => {
    event.stopPropagation();

    intervalId = setInterval(() => {
      // Проверка основного поля по регексу
      if (allRegs[i] && allRegs[i].test(field.value)) {
        field.style.backgroundColor = "#72ff7c";
        correctInput[i] = true;
      } else if (field.value === "") {
        field.style.backgroundColor = "";
        correctInput[i] = false;
      } else {
        correctInput[i] = false;
        field.style.backgroundColor = "red";
      }

      // Специальная обработка для полей с паролем
      if (i === 8) {
        // первое поле пароля
        if (field.value !== "") {
          const isStrong = checkPasswordStrength(field, i);
          if (isStrong && allRegs[i].test(field.value)) {
            correctInput[i] = true;
          } else {
            correctInput[i] = false;
          }
        }
        // Проверяем совпадение паролей при изменении первого пароля
        if (inputs[9].value !== "") {
          checkPasswordsMatch();
        }
      } else if (i === 9) {
        // второе поле пароля (подтверждение)
        if (field.value !== "") {
          checkPasswordsMatch();
        } else {
          correctInput[9] = false;
          errorType.innerHTML = "";
          field.style.backgroundColor = "";
        }
      }
    }, 200);
  });

  field.addEventListener("blur", () => {
    clearInterval(intervalId);
  });

  field.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
