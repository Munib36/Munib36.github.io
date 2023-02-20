const holes = document.querySelectorAll('.hole');
const scoreBoard = document.createElement('div');
scoreBoard.textContent = '0';
document.body.appendChild(scoreBoard);
let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('mole');
  setTimeout(() => {
    hole.classList.remove('mole');
    if (!timeUp) peep();
  }, time);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('mole');
  scoreBoard.textContent = score;
}

holes.forEach(hole => hole.addEventListener('click', bonk));

function startGame() {
  scoreBoard.textContent = '0';
  score = 0;
  timeUp = false;
  peep();
  setTimeout(() => timeUp = true, 10000);
}
