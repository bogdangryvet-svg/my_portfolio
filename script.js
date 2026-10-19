// Мобільне меню (бургер)
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");

function closeMenu() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Menü öffnen");
}

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Menü schliessen" : "Menü öffnen");
});

// Закрити меню після кліку на пункт
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Закрити меню клавішею Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
