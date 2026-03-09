// OVGGT Project Page — Tab Switching + Smooth Scroll

document.addEventListener('DOMContentLoaded', function () {
  // Tab switching
  document.querySelectorAll('.tabs li').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var tabGroup = this.closest('.tabs').dataset.tabGroup;
      var target = this.dataset.tab;

      // Deactivate all tabs in this group
      this.closest('.tabs').querySelectorAll('li').forEach(function (t) {
        t.classList.remove('is-active');
      });
      this.classList.add('is-active');

      // Show target content
      document.querySelectorAll('.tab-content[data-tab-group="' + tabGroup + '"]').forEach(function (c) {
        c.classList.remove('is-active');
      });
      document.querySelector('.tab-content[data-tab="' + target + '"]').classList.add('is-active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // BibTeX copy button
  var copyBtn = document.querySelector('.bibtex-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var text = document.querySelector('.bibtex-box pre').textContent;
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy'; }, 2000);
      });
    });
  }
});
