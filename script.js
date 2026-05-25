const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector(".form-status");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  formStatus.textContent = "Thanks! We will get back to you soon.";
});
