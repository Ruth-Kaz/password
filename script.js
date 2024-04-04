const eye = document.getElementById("password-visibility");
const passInput = document.getElementById("pass");
const img = document.getElementById("bear");
const signInButton = document.querySelector(".signin");

let passwordVisible = true;

function changeImageOnClick() {
  img.src = "./img/bear-smile.svg";
}

function render() {
  if (passwordVisible) {
    passInput.setAttribute("type", "text");
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    signInButton.addEventListener("click", changeImageOnClick);
  } else {
    passInput.setAttribute("type", "password");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    img.src = "./img/bear-normal.svg";
  }
}

// Add event listener to toggle password visibility
eye.addEventListener("click", function () {
  passwordVisible = !passwordVisible;
  render();
});

// Call render function initially to set initial UI state
render();
