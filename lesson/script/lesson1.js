let time = 15 * 60;
let timer = document.getElementById("timer");

setInterval(() => {
  let m = String(Math.floor(time / 60)).padStart(2, "0");
  let s = String(time % 60).padStart(2, "0");
  timer.textContent = `${m}:${s}`;
  if (time <= 0) {
    alert("Temps écoulé !");
  }
  time--;
}, 1000);
