const confirmBtn = document.querySelector(".confirm-btn");
const thanksBtn = document.querySelector(".thanks-btn");
const cardNum = document.querySelector("#number");
const cardName = document.querySelector("#name");
const Mdate = document.querySelector("#month");
const Ydate = document.querySelector("#year");
const CvcNum = document.querySelector("#cvc");
const inputContainer = document.querySelector(".input-form");
const thanksContainer = document.querySelector(".thanks-container");

//inputs

const inputName = document.querySelector("#cardholder");
const inputCardNumber = document.querySelector("#cardnumber");
const inputMM = document.querySelector("#MM");
const inputYY = document.querySelector("#YY");
const inputCvc = document.querySelector("#incvc");
console.log(inputCvc);

function handleName(e) {
  cardName.textContent = format(e.target.value);
}
function handleCardNumber(e) {
  cardNum.textContent = format(e.target.value);
}
function hanldeMM(e) {
  if (e.target.value <= 12) {
    inputMM.classList.remove("error");
    Mdate.textContent = format(e.target.value);
  } else {
    inputMM.classList.add("error");
  }
}
function hanldeYY(e) {
  Ydate.textContent = format(e.target.value);
}
function hanldeCvc(e) {
  CvcNum.textContent = format(e.target.value);
}
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkFormInput(inputName);
  checkFormInput(inputCardNumber);
  checkFormInput(inputMM);
  checkFormInput(inputYY);
  checkFormInput(inputCvc);
  if (
    inputName.value &&
    inputCardNumber.value &&
    inputMM.value &&
    inputYY.value &&
    inputCvc.value
  ) {
    inputContainer.classList.add("hide");
    thanksContainer.classList.remove("hide");
  }
});

thanksBtn.addEventListener("click", () => {
  location.reload();
});

function checkFormInput(s) {
  if (!s.value) {
    s.parentElement.classList.add("error_message");
  } else {
    s.parentElement.classList.remove("error_message");
  }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

inputName.addEventListener("keyup", handleName);
inputCardNumber.addEventListener("keyup", handleCardNumber);
inputMM.addEventListener("keyup", hanldeMM);
inputYY.addEventListener("keyup", hanldeYY);
inputCvc.addEventListener("keyup", hanldeCvc);
