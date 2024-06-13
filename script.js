let fName = document.querySelector("#f-name");
let lName = document.querySelector("#l-name");
let email = document.querySelector("#e-mail");
let textArea = document.querySelector("#m-essage");
let radios = document.querySelectorAll('[name="q-type"]');
let che_boxe = document.querySelectorAll("#c-heck");

document.forms[0].onsubmit = function (e) {
  let fNameValid = false;
  let lNameValid = false;
  let emailValid = false;
  let textAreaValid = false;
  let radiosValid = false;
  let che_boxeValid = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radiosValid = true;
      break;
    }
  }

  for (let i = 0; i < che_boxe.length; i++) {
    if (che_boxe[i].checked) {
      che_boxeValid = true;
      break;
    }
  }

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
    textAreaValid === false ||
    radiosValid === false ||
    che_boxeValid === false
  ) {
    e.preventDefault();
  } else {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        document.forms[0].submit();
      }
    });
  }
};
