const confirmBtn = document.querySelector(".confirm-btn");
const thanksBtn = document.querySelector(".thanks-btn");
const cardNum = document.querySelector(".num-card");
const cardName = document.querySelector(".name-card");
const Mdate = document.querySelector(".MM-date");
const Ydate = document.querySelector(".YY-date");
const CvcNum = document.querySelector(".cvc-card");

//inputs

const inputName = document.querySelector("#cardholder");
const inputCardNumber = document.querySelector("#cardnumber");
const inputMM = document.querySelector("#MM");
const inputYY = document.querySelector("#YY");
const inputCvc = document.querySelector("#cvc");

confirmBtn.addEventListener("click", () => {
  if (
    !inputName.value &&
    !inputCardNumber.value &&
    !inputMM.value &&
    !inputYY.value &&
    !inputCvc.value
  ) {
    return console.log("Please fill all the boxes");
  }
  fillTheBox(
    inputCardNumber.value,
    inputName.value,
    inputMM.value,
    inputYY.value,
    inputCvc.value
  );
  document.querySelector(".input-container").classList.add("hide");
  document.querySelector(".thanks-container").classList.remove("hide");
});
thanksBtn.addEventListener("click", () => {
  document.querySelector(".input-container").classList.remove("hide");
  document.querySelector(".thanks-container").classList.add("hide");
  fillTheBox("0000 0000 0000 0000", "JANE APPLESEED", "MM", "YY", "000");
  inputCardNumber.value = "";
  inputName.value = "";
  inputMM.value = "";
  inputYY.value = "";
  inputCvc.value = "";
});
function fillTheBox(number, name, m, y, cvc) {
  cardNum.textContent = number;
  cardName.textContent = name;
  Mdate.textContent = m;
  Ydate.textContent = y;
  CvcNum.textContent = cvc;
}
