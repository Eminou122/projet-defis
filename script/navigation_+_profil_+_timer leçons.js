// script.js
let userData = {
  name: "Koffi Jean",
  level: "Débutant Linux",
  progress: 26,
  absences: 2,
  points: 485
};

// Mise à jour du profil
function updateProfile() {
  if (document.getElementById('userName')) document.getElementById('userName').textContent = userData.name;
  if (document.getElementById('userLevel')) document.getElementById('userLevel').textContent = userData.level;
  if (document.getElementById('progressBar')) document.getElementById('progressBar').style.width = userData.progress + '%';
  if (document.getElementById('progressText')) document.getElementById('progressText').textContent = userData.progress + '%';
  if (document.getElementById('absences')) document.getElementById('absences').textContent = userData.absences;
  if (document.getElementById('points')) document.getElementById('points').textContent = userData.points;
}

// Timer pour les leçons
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) timer = duration;
  }, 1000);
}

// Activer la navigation active
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', updateProfile);