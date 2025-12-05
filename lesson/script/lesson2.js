let time = 20 * 60;
let timer = document.getElementById("timer");

let interval = setInterval(() => {
  let m = String(Math.floor(time / 60)).padStart(2, "0");
  let s = String(time % 60).padStart(2, "0");

  timer.textContent = `${m}:${s}`;

  if (time <= 0) {
    clearInterval(interval);
    alert("Temps écoulé ! Leçon 2 terminée.");
  }

  time--;
}, 1000);
