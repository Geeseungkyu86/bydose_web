// Content is static and remains readable with JavaScript disabled.
// Future languages can use the same section IDs and independent content builds.
(() => {
  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.hash));
  const progress = document.querySelector('.reading-progress');
  let pending = false;
  function update() {
    const threshold = Math.max(
      document.querySelector('.section-nav').offsetHeight,
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
    ) + (parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 0) + 2;
    let active = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) active = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) active = sections.length - 1;
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const range = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${range > 0 ? Math.min(1, window.scrollY / range) : 0})`;
    pending = false;
  }
  function requestUpdate() {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);
  document.fonts?.ready.then(requestUpdate);
  update();

  // Actual, approved documents only. The anchor remains usable without JavaScript.
  const dialog = document.querySelector('.document-dialog');
  const preview = document.querySelector('[data-document-preview]');
  if (dialog && preview && typeof dialog.showModal === 'function') {
    preview.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = Object.assign(document.createElement('img'), {
        src: preview.href,
        alt: 'GW ONE RELAX SC 관련 기술 적합성 확인서 확대'
      });
      dialog.querySelector('.document-dialog-content').replaceChildren(image);
      dialog.showModal();
    });
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
  }
})();
