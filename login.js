function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "home.html"; // redirect after login
    })
    .catch((error) => {
      alert(error.message);
    });
}

function signUpUser() {
  const email = document.getElementById("emailSignUp").value;
  const password = document.getElementById("passwordSignUp").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign up successful!");
    })
    .catch((error) => {
      alert(error.message);
    });
}