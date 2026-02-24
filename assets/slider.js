(() => {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const track = slider.querySelector(".hero-track");
  const slides = Array.from(track.querySelectorAll("img"));
  const prev = slider.querySelector(".hero-prev");
  const next = slider.querySelector(".hero-next");
  const dots = Array.from(slider.querySelectorAll(".hero-dots .dot"));

  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  };

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
  });

  dots.forEach((d, i) => {
  const active = i === index;
  d.classList.toggle("is-active", active);
  d.setAttribute("aria-current", active ? "true" : "false");
});

  update();
})();