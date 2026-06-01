document.addEventListener("DOMContentLoaded", () => {
  // Light client-side enhancement for the demo form
  const demoForm = document.querySelector(".contact-form");
  if (demoForm) {
    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "This is a demo form.\n\nReplace this with your real interest or rush form link when you're ready."
      );
    });
  }

  // Executive Board carousel (self-rotating)
  const track = document.getElementById("exec-carousel-track");
  if (!track) return;

  const slides = track.querySelectorAll(".exec-carousel-slide");
  const total = slides.length;
  if (total === 0) return;

  let index = 0;
  const ROTATE_MS = 2200; // faster rotation

  function getTranslateX() {
    return -(index * (100 / total));
  }

  function updateCarousel() {
    track.style.transform = `translateX(${getTranslateX()}%)`;
  }

  function goTo(i) {
    index = ((i % total) + total) % total;
    updateCarousel();
  }

  function next() {
    goTo(index + 1);
  }

  // Constant auto-rotate, no hover pause
  setInterval(next, ROTATE_MS);
  updateCarousel();

  // Events page filters
  const filterButtons = document.querySelectorAll(".events-filter-btn");
  const eventCards = document.querySelectorAll(".event-card");
  if (filterButtons.length && eventCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter") || "all";
        filterButtons.forEach((b) =>
          b.classList.toggle("events-filter-btn-active", b === btn)
        );
        eventCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const show = filter === "all" || category === filter;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }
});

