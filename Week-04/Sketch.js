var pg;
var star;

function setup(){
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
  star = createGraphics(0, 0, 30, 70, 5)
}

function draw(){
  fill(0, 12);
  rect(0, 0, width, height);
  fill(0,191,255);
  rect(mouseX-50, mouseY-50, 100, 100);

  pg.background(173,216,230);
  pg.fill(0,128,0);
  pg.stroke(3000);
  pg.ellipse(mouseX-25, mouseY-25, 20, 20);

  //Offscreen buffer image()
  image(pg, 150, 75);
}

