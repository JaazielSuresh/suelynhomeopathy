document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#slideshow");
  if (!container) return;

  const slides = container.querySelectorAll(".slide");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let index = 0;
  let timer;

  function show(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function next() {
    index = (index + 1) % slides.length;
    show(index);
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  }

  function start() {
    timer = setInterval(next, 5000);
  }

  function stop() {
    clearInterval(timer);
  }

  prevBtn?.addEventListener("click", () => {
    prev();
    stop();
    start();
  });

  nextBtn?.addEventListener("click", () => {
    next();
    stop();
    start();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  show(index);
  start();
});