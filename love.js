const heartContainer = document.getElementById("heartContainer");
const moreLoveBtn = document.getElementById("moreLoveBtn");
const logoutBtn = document.getElementById("logoutBtn");
const modal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");

function createHeart(extra = false) {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.textContent = Math.random() > 0.18 ? "♥" : "♡";

  const size = extra
    ? Math.random() * 28 + 18
    : Math.random() * 22 + 14;

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.setProperty("--size", size + "px");
  heart.style.setProperty("--opacity", Math.random() * .45 + .5);
  heart.style.setProperty("--duration", (Math.random() * 4 + 5) + "s");
  heart.style.setProperty("--drift1", (Math.random() * 160 - 80) + "px");
  heart.style.setProperty("--drift2", (Math.random() * 240 - 120) + "px");
  heart.style.setProperty("--drift3", (Math.random() * 300 - 150) + "px");

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(() => createHeart(false), 280);

// Initial shower of hearts.
for (let i = 0; i < 22; i++) {
  setTimeout(() => createHeart(false), i * 100);
}

moreLoveBtn.addEventListener("click", () => {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => createHeart(true), i * 45);
  }
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

logoutBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
