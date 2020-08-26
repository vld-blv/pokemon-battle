const $btnKick = document.getElementById('btn-kick');
const $btnWhip = document.getElementById('btn-whip');

const character = {
  name: 'Pikachu',
  defaultHP: 300,
  damageHP: 300,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),

  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
  renderHP: renderHP,
  changeHP: changeHP,

};

const enemy = {
  name: 'Charmander',
  defaultHP: 300,
  damageHP: 300,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),

  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
  renderHP: renderHP,
  changeHP: changeHP,

};

$btnKick.addEventListener('click', () => {
  console.log('Kick');
  character.changeHP(random(25));
  enemy.changeHP(random(25));
});

$btnWhip.addEventListener('click', () => {
  console.log('Whip');
  enemy.changeHP(random(10));
});

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
  this.elProgressBar.style.width = this.damageHP / this.defaultHP * 100 + '%';
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function changeHP(count) {
  this.damageHP -= count;

  if (this.damageHP <= count) {
    this.damageHP = 0;
    alert(`Бедный ${this.name} проиграл бой :(`);
    $btnKick.disabled = true;
    $btnWhip.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
