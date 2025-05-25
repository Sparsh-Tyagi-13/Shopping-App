// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link based on URL
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for internal anchor links (if used)
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Lazy loading for images with loading="lazy" attribute (modern browsers support)
  // If you want a polyfill or intersection observer, can add later
});
