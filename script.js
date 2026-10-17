(() => {
  'use strict';
  const root = document.documentElement;
  const zh = root.lang.startsWith('zh');
  const themeButton = document.getElementById('theme-button');
  let savedTheme;
  try { savedTheme = localStorage.getItem('digikidult-blast-theme'); } catch (_) {}
  const setTheme = theme => {
    root.dataset.theme = theme === 'amber' ? 'amber' : 'green';
    themeButton.setAttribute('aria-pressed', String(root.dataset.theme === 'amber'));
  };
  setTheme(savedTheme);
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'green' ? 'amber' : 'green';
    setTheme(next);
    try { localStorage.setItem('digikidult-blast-theme', next); } catch (_) {}
  });
  const status = document.getElementById('copy-status');
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const previous = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = zh ? '已複製' : 'Copied';
        status.textContent = zh ? '校驗值已複製。' : 'Checksum copied.';
      } catch (_) {
        button.textContent = zh ? '請選取文字' : 'Select text';
        status.textContent = zh ? '無法自動複製，請選取旁邊的校驗值。' : 'Copy is unavailable. Select the checksum text beside this button.';
      }
      setTimeout(() => { button.textContent = previous; }, 2200);
    });
  });
  const dialog = document.getElementById('image-dialog');
  const image = document.getElementById('dialog-image');
  const caption = document.getElementById('image-caption');
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.image;
      image.alt = button.dataset.caption;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  const nav = [...document.querySelectorAll('.section-nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!entry) return;
      nav.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, {rootMargin: '-15% 0px -45% 0px', threshold: [0, .1, .3]});
    nav.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
  }
  document.querySelectorAll('.language a').forEach(link => {
    link.addEventListener('click', () => { if (location.hash) link.hash = location.hash; });
  });
})();
