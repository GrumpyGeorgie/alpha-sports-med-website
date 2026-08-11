document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.innerHTML = isOpen
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });
  }

  const tabButtons = document.querySelectorAll('.tabs__btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.toggle('is-active', b === btn));
      tabPanels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-tab-panel') === target));
    });
  });

  const carousel = document.querySelector('.review-carousel');
  if (carousel) {
    const cards = Array.from(carousel.querySelectorAll('.review-card'));
    const dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
    let index = 0;

    const show = (i) => {
      index = (i + cards.length) % cards.length;
      cards.forEach((c, ci) => c.classList.toggle('is-active', ci === index));
      dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
    };

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => show(index - 1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => show(index + 1));
    dots.forEach(d => d.addEventListener('click', () => show(Number(d.getAttribute('data-carousel-dot')))));
  }
});
