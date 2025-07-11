/* JavaScript toggle */
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  toggle.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});