class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressBar = document.getElementById(`progressbar-${name}`);
    this.elName = document.getElementById(`name-${name}`);
    this.elImg = document.getElementById(`img-${name}`);
  }
};

class Pokemon extends Selectors {
  constructor({ name, img, hp, type, selectors, attacks = [] }) {
    super(selectors);

    this.name = name;
    this.img = img;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;
    this.attacks = attacks;

    this.renderName();
    this.renderImg();
    this.renderHP();
  }
  
  renderName = () => this.elName.innerText = this.name;
  renderImg = () => this.elImg = this.img;

  changeHP = (count, cb) => {
    this.hp.current -= count;
  
    if (this.hp.current <= count) {
      this.hp.current = 0;
    }

    this.renderHP();
    cb && cb(count);
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBarHP();
  }

  renderHPLife = () => {
    const { elHP, hp: { total, current } } = this;
    elHP.innerText = current + '/' + total;
  }

  renderProgressBarHP = () => {
    const { elProgressBar, hp:{ total, current } } = this;  
    elProgressBar.style.width = current / total * 100 + `%`;
  }
};

export default Pokemon;