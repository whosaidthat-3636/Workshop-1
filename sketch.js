function setup() {
  createCanvas(550, 400);
  background(98,162,107);
 
  for (x = 0; x <= 15; x++) {
    ball(random(0, width), random(0, height), 30, color(random(255), random(255), random(255)));
  }
}

function draw() {
}

function ball(x, y , size, color) {
  fill(random(255), random(255), random(255));
noStroke(); 
  ellipse(x, y, size, size);}

