const toggleBox = document.querySelector(".toggle-box");

toggleBox.addEventListener("click", (event) => {
  showMenu();
});

function showMenu() {
  document.querySelector(".nav").classList.toggle("active");

  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}
