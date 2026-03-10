document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.parentElement.querySelector(".dropdown-content");

      toggle.classList.toggle("active");
      content?.classList.toggle("active");
    });
  });
});