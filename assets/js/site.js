/* ==========================================================================
 * site.js — theme toggle for the nubo-design-style terminal shell.
 * --------------------------------------------------------------------------
 * Trimmed from orientonubo.github.io's site.js: keeps only the three-way
 * (system / light / dark) theme toggle and dynamic-accent ink calculation.
 * The no-flash script in <head> already applied the stored theme before
 * first paint; this file wires up the toggle buttons and live changes.
 * ========================================================================== */
(function () {
  "use strict";

  var themeToggle = document.querySelector(".theme-toggle");
  var prefersDarkMQ = window.matchMedia("(prefers-color-scheme: dark)");
  var themeMode = localStorage.getItem("nubo-theme") || "system";

  function resolveActual(m) {
    return m === "system" ? (prefersDarkMQ.matches ? "dark" : "light") : m;
  }
  function applyTheme(m) {
    themeMode = m;
    document.documentElement.setAttribute("data-theme", resolveActual(m));
    if (themeToggle) {
      themeToggle.querySelectorAll("button[data-mode]").forEach(function (b) {
        b.setAttribute("aria-pressed", b.dataset.mode === m);
      });
    }
    localStorage.setItem("nubo-theme", m);
  }
  if (themeToggle) {
    themeToggle.querySelectorAll("button[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () { applyTheme(b.dataset.mode); });
    });
  }
  if (prefersDarkMQ.addEventListener) {
    prefersDarkMQ.addEventListener("change", function () {
      if (themeMode === "system") applyTheme("system");
    });
  }
  applyTheme(themeMode);
})();
