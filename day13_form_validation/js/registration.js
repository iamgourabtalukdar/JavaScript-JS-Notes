const registrationForm = document.getElementById("registration-form");
const fullnameElem = document.getElementById("fullname");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");

function typing(e) {
  e.target.style.borderColor = "#444";
  e.target.nextElementSibling.innerText = "";
}

function validate(userData) {
  // name
  let isValid = false;
  if (userData.fullname === "") {
    fullnameElem.style.borderColor = "crimson";
    fullnameElem.nextElementSibling.innerText = "name is required";
  } else if (userData.fullname.length < 3) {
    fullnameElem.style.borderColor = "crimson";
    fullnameElem.nextElementSibling.innerText =
      "name must contain at least 3 characters";
  } else if (userData.fullname.length > 30) {
    fullnameElem.style.borderColor = "crimson";
    fullnameElem.nextElementSibling.innerText =
      "name must contain at most 30 characters";
  } else {
    isValid = true;
  }

  // email
  isValid = false;
  if (userData.email === "") {
    emailElem.style.borderColor = "crimson";
    emailElem.nextElementSibling.innerText = "email is required";
  } else if (userData.email[0] === "@") {
    emailElem.style.borderColor = "crimson";
    emailElem.nextElementSibling.innerText = "Invalid Email - @ at index 0";
  } else if (!userData.email.includes("@")) {
    emailElem.style.borderColor = "crimson";
    emailElem.nextElementSibling.innerText = "Invalid Email - @ not available";
  } else if (userData.email.split("@").length > 2) {
    emailElem.style.borderColor = "crimson";
    emailElem.nextElementSibling.innerText = "Invalid Email - multiple @";
  } else {
    isValid = true;
  }

  // password
  isValid = false;
  if (userData.password === "") {
    passwordElem.style.borderColor = "crimson";
    passwordElem.nextElementSibling.innerText = "password is required";
  } else if (userData.password.length < 6) {
    passwordElem.style.borderColor = "crimson";
    passwordElem.nextElementSibling.innerText =
      "password must contain at least 6 characters";
  } else if (userData.password.length > 16) {
    passwordElem.style.borderColor = "crimson";
    passwordElem.nextElementSibling.innerText =
      "password must contain at most 16 characters";
  } else {
    isValid = true;
  }

  return isValid;
}

// ### registration form handler
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newUserData = {};
  formData.forEach((value, key) => {
    newUserData[key] = value.trim();
  });
  const isValid = validate(newUserData);

  if (isValid) {
    e.target.submit();
    console.log("form submitted");
  }
});
