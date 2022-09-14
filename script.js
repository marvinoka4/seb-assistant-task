function goToAboutPage() {
  window.location.href = "/about.html";
}

function goToHomePage() {
  window.location.href = "/index.html";
}

function goToGamePage() {
  window.location.href = "/game.html";
}

function goBack() {
  history.back();
}

function num() {
  var e = document.getElementById("num");
  var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var r = Math.floor(Math.random() * 11);
  let i = n[r];
  e.innerHTML = i;
}
