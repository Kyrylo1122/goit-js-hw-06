const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
};
console.log();

refs.form.addEventListener("submit", settings);

function settings(event) {
  event.preventDefault();
  const result = {};
  const { password, email } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("You must fill all fields");
  }

  result.email = email.value;
  result.password = password.value;

  console.log(result);
  refs.form.reset();
}
