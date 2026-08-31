const loader = document.getElementById("loader");
window.addEventListener("load", () => setTimeout(() => loader.classList.add("hide"), 450));

const nav = document.getElementById("nav");
const toggle = document.getElementById("menuToggle");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("section").forEach(section => {
  const elements = section.querySelectorAll("h2, .service, .gallery-item, .number-grid div, details");
  elements.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 50, 350)}ms`;
    el.classList.add("reveal");
    observer.observe(el);
  });
});function toggleService(galleryId, element) {

    const gallery = document.getElementById(galleryId);

    gallery.classList.toggle("active");

    element.classList.toggle("open");
}
