const userForm = document.querySelector("form");
const userInput = document.querySelector("form input");
const userPrint = document.querySelector("h1");

const CLASS_HIDDEN = "hidden";
const LOCAL_STORAGY_KEY_USERNAME = "username";

function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", userInput.value);
  printGreeing();
}

function printGreeing() {
  userPrint.innerHTML = `Hello ${localStorage.getItem(
    LOCAL_STORAGY_KEY_USERNAME
  )}!`;
  userForm.classList.add(CLASS_HIDDEN);
  userPrint.classList.remove(CLASS_HIDDEN);
}

if (localStorage.getItem(LOCAL_STORAGY_KEY_USERNAME) !== null) {
  printGreeing();
} else {
  userForm.addEventListener("submit", handleSubmit);
}
