var modal = document.getElementById("myModal");
var btn = document.getElementById("request__btn");
var span = document.getElementById("closeModal");

// Открывает модальное окно при нажатии на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрывает модальное окно при нажатии на "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Закрывает модальное окно при нажатии вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
