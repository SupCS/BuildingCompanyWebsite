const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.sidebar__close');

burger.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar--open');
  burger.classList.toggle('change'); 
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open');
  burger.classList.remove('change'); 
});