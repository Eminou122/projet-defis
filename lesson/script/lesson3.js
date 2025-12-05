let time = 22 * 60;
let timer = document.getElementById("timer");

let interval = setInterval(() => {
  let m = String(Math.floor(time / 60)).padStart(2, "0");
  let s = String(time % 60).padStart(2, "0");

  timer.textContent = `${m}:${s}`;

  if (time <= 0) {
    clearInterval(interval);
    alert("Temps terminé pour cette leçon !");
  }

  time--;
}, 1000);
