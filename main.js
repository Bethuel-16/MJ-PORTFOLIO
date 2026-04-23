/* ============================================================
   BETHUEL MAJANGA — Portfolio Scripts
   main.js
   ============================================================ */

/* ---- CUSTOM CURSOR ---- */
document.body.classList.add("js-loaded");
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();

/* ---- SCROLL REVEAL ---- */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 },
);

reveals.forEach((el) => revealObserver.observe(el));

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute("href") === "#" + current ? "var(--text)" : "";
  });
});
