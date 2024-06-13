let fName = document.querySelector("#f-name");
let lName = document.querySelector("#l-name");
let email = document.querySelector("#e-mail");
let textArea = document.querySelector("#m-essage");

document.forms[0].onsubmit = function (e) {
  let fNameValid = false;
  let lNameValid = false;
  let emailValid = false;
  let textAreaValid = false;

  if (
    fName.value !== "" &&
    lName.value !== "" &&
    email.value !== "" &&
    textArea.value !== ""
  ) {
    fNameValid = true;
    lNameValid = true;
    emailValid = true;
    textAreaValid = true;
  }

  if (
    fNameValid === false ||
    lNameValid === false ||
    emailValid === false ||
    textAreaValid === false
  ) {
    e.preventDefault();
  }
};
