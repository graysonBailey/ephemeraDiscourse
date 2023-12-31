import{
  discourses
} from './index.js'

export const content = new p5((j) => {

  let tFont;

  j.preload = function() {
    tFont = j.loadFont("f7f26928c6b1edc770c616475459ecc8.otf");
  }

  j.setup = () => {
    j.createCanvas(j.displayWidth, j.displayHeight)
    j.textFont(tFont)
  }

  j.refresh = function() {
    j.clear();
    discourses.vis()
  }
}, 'content')

export const back = new p5((d) => {

 let persistM = 0;

  d.setup = () => {
    d.createCanvas(d.windowWidth, d.windowHeight + 50)
    d.refreshed()
  }

  d.refreshed = function(m) {
    if(m == undefined){
      m = persistM;
    } else {
      persistM = m
    }
    let back
    let lin
    switch (m) {
      case 1:
        back = d.color(20)
        lin = d.color(255)
        break;
      case 2:
        back = d.color(204,0,153)
        lin = d.color(255)
        break;
      default:
        back = d.color(0)
        lin = d.color(255)
    }
    d.background(back)
    for (let i = 150; i < d.windowWidth - 100; i += 25) {
      d.stroke(lin)
      d.strokeWeight(.5)
      d.line(i, 0, i + 25, d.windowHeight + 50)
    }
  }

}, 'back')
