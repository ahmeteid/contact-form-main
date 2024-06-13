let fName = document.querySelector("#f-name");
let lName = document.querySelector("#l-name");
let email = document.querySelector("#e-mail");

document.forms[0].onsubmit = function (e) {
  let fNameValid = false;
  let lNameValid = false;
  let emailValid = false;

  console.log(fName.value);
  console.log(fName.value.length);

  if (fName.value !== "" && lName.value !== "" && email.value !== "") {
    fNameValid = true;
    lNameValid = true;
    emailValid = true;
  }

  if (
    fNameValid.value === false ||
    lNameValid.value === false ||
    emailValid === false
  ) {
    e.preventDefault();
  }
};
