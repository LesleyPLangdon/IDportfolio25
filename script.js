/* Navigation: mobile menu button and the Work dropdown */
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const subToggle = document.querySelector('.sub-toggle');
  const submenu = document.getElementById('work-menu');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (subToggle && submenu) {
    subToggle.addEventListener('click', function () {
      const isOpen = submenu.classList.toggle('open');
      subToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Escape closes any open menu and returns focus to its button
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (submenu && submenu.classList.contains('open')) {
      submenu.classList.remove('open');
      subToggle.setAttribute('aria-expanded', 'false');
      subToggle.focus();
    } else if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
});
