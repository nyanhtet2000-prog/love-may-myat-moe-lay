const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const helpLink = document.getElementById("helpLink");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || password.length < 4) {
    errorMessage.textContent = "Please fill in all fields correctly.";
    return;
  }

  // Save the name so the second page can use it if needed later.
  localStorage.setItem("loveName", name);
  localStorage.setItem("loveEmail", email);

  // Small transition before entering the romantic page.
  document.body.classList.add("leaving");

  setTimeout(() => {
    window.location.href = "love.html";
  }, 350);
});

helpLink.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Demo page only 💗 Just enter any name, Gmail and password (4+ characters).");
});
