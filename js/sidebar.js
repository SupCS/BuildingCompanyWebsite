const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.sidebar__close');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open');
});
