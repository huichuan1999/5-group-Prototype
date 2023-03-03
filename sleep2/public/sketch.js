class Sleep {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);

    this.acc = p5.Vector.random2D().normalize();
    
    this.alpha = 220;
  }

  update() {
    var m = map(sin(frameCount), -1, 1, 0.4, 0.9);
    this.acc.mult(m);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display() {
    push();

    textSize(15);
    text('😴', this.pos.x, this.pos.y);

    pop();
  }
}

var sleep = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  //this background color can make the gaps between each rectange on the background look not that obviously
  background(255, 251, 240);
  
  //set the number of new Sleep create each frame
  for (var i = 0; i < 2; i++) {
    c = new Sleep();
    sleep.push(c);
  }

  for (var j = 0; j < sleep.length; j++) {
    if (sleep[j].alpha > 0) {
      sleep[j].update();
      sleep[j].display();
    } else {
      sleep.splice(j, 1);
    }
  }
}