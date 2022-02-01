class Scroll {
  constructor(obj) {
    this.element = document.querySelector(obj.selector);

    this.top = obj.top;

    this.element.style.position = "fixed";
    this.unit = obj.unit;

    this.element.style.top = this.scroll();

    window.addEventListener("scroll", () => this.scroll());
  }

  scrollNumber() {
    if (this.unit == "px") {
      return this.top >= 0 ? this.top : 0;
    } else if (this.unit == "%" || this.unit == undefined) {
      return (window.innerHeight / 100) * this.top - this.element.clientHeight;
    }
  }

  scroll() {
    this.window = this.scrollNumber();

    if (this.window - scrollY > 0) {
      this.element.style.top = this.window - scrollY + "px";
    } else {
      this.element.style.top = 0;
    }
  }
}

const myScroll = new Scroll({
  selector: ".header__nav",
  top: 100,
});

class Move {
  constructor(obj) {
    this.element = document.querySelector(obj.selector);
    this.elementH = this.element.clientHeight;
    this.elementW = this.element.clientWidth;

    this.parent = document.querySelector(obj.parent);
    this.parentH = this.parent.clientHeight;
    this.parentW = this.parent.clientWidth;

    this.boxW = document.querySelector('.header__info').clientWidth 

    this.nav = document.querySelector(obj.nav)
    this.navH = document.querySelector(obj.nav).clientHeight;

    this.element.addEventListener("mouseover", () => {
      this.randPostition();
    });
  }
  randPostition() {
    this.y = this.randY();
    this.x = this.randX();

    this.element.style = `
        left:${this.x}px;
        top:${this.y}px;
        `;
  }

  randY() {
    return Math.floor(
      Math.random() * (this.parentH - this.navH - this.elementH + 1)
    );
  }
  randX() {
      if(this.nav.className == 'active'){
          return Math.floor(Math.random() * (this.parentW - this.elementW + 1));
      }else{
           return Math.floor(Math.random() * ((this.parentW) -this.elementW  -  this.boxW + 1)) +  this.boxW ;
      }
    this.boxH
  }
}

const run = new Move({
  selector: ".header__content",
  parent: ".header",
  nav: ".header__nav",
});

class Click {
  constructor(obj) {
    this.parent = document.querySelector(obj.header);
    this.box = document.querySelector(obj.box)
    document.body.addEventListener('click' ,(e)=>{
      if(e.target.className == 'open'){
        this.box.classList.add('active')
      }else if(e.target.className == 'close' ||e.target.className != 'header__info active'){
        this.box.classList.remove('active')
      }else{
       
      }       
    })

  }
}

const click = new Click ({
  box: ".header__info",
  nav: ".header__nav",
  header:'.header'
})

const text = [
  ' HEADER \n ',
  ' TITLE \n '
]

let line = 0
let count = 0
let result = ''
function typeLine() {
  let interval = setTimeout(
    () => {
      result += text[line][count]
      document.querySelector('.header__content h1').innerHTML
      =result + '|';


      count++
      if(count >= text[line].length) {
        count = 0;
        line++
        if(line == text.length) {
          clearTimeout(interval);
          document.querySelector('.header__content h1').innerHTML
          = result;
          return true;
        }
      }
      typeLine();
    }, 200)
}

typeLine()










