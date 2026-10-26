const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const year = document.querySelector('#year');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
