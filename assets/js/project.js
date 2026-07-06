/* ==========================================================================
 * project.js — behaviour for project / paper pages (nubo line-tabs + BibTeX
 * copy + smooth anchor scroll). Loaded by _layouts/project.html.
 * ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Line tabs (nubo .tabbar / .tab / .tab-ink / .tab-panel) ──────────── */
  document.querySelectorAll('.tabbar').forEach(function (bar) {
    var tabs = [].slice.call(bar.querySelectorAll('.tab'));
    var ink = bar.querySelector('.tab-ink');
    var group = bar.dataset.tabGroup;

    function moveInk(tab) {
      if (!ink || !tab) return;
      ink.style.left = tab.offsetLeft + 'px';
      ink.style.width = tab.offsetWidth + 'px';
    }
    function activate(tab) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', t === tab); });
      var target = tab.dataset.tab;
      document.querySelectorAll('.tab-panel[data-tab-group="' + group + '"]').forEach(function (p) {
        p.classList.toggle('active', p.dataset.tab === target);
      });
      moveInk(tab);
    }

    tabs.forEach(function (t) { t.addEventListener('click', function () { activate(t); }); });

    var initial = bar.querySelector('.tab[aria-selected="true"]') || tabs[0];
    if (initial) moveInk(initial);
    window.addEventListener('resize', function () {
      moveInk(bar.querySelector('.tab[aria-selected="true"]') || tabs[0]);
    });
  });

  /* ── BibTeX copy button ───────────────────────────────────────────────── */
  document.querySelectorAll('.bibtex-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.parentElement.querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        var prev = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = prev; }, 2000);
      });
    });
  });

  /* ── Smooth scroll for in-page anchors ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
