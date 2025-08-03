// File: main.js
// This file contains JavaScript for the modern navigation bar functionality
  const navToggle = document.querySelector('.nav-toggle');
  const navGroup = document.querySelector('.modern-nav-group');
  navToggle.addEventListener('click', () => {
    navGroup.classList.toggle('nav-open');
    navToggle.classList.toggle('open');
  });
// This code adds a click event listener to the navigation toggle button.
// When the button is clicked, it toggles the 'nav-open' class on the navigation group,
// which controls the visibility of the navigation items, and also toggles the 'open'
// class on the toggle button itself to change its appearance.

  document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      panes.forEach(pane => {
        pane.classList.toggle("active", pane.id === target);
      });
    });
  });
});

