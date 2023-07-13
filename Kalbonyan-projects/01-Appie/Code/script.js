const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
