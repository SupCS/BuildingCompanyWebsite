var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function checkScroll() {
  // Если прокрутка больше 100px, показать кнопку
  if ((window.scrollY || document.documentElement.scrollTop) > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', checkScroll);
