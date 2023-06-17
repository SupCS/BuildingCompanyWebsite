var modal = document.getElementById("myModal");
var btn1 = document.getElementById("request__btn1");
var btn2 = document.getElementById("request__btn2");
var span = document.getElementById("closeModal");

// Відкрити вікно
btn1.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

// Закрити вікно на "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Закрити вікно, якщо клік поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
