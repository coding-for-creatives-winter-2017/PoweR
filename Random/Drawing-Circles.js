var x = 5;
var y = 5;
var xspeed = 13;
var yspeed = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

	var d = dist(windowWidth/100, windowHeight/100, mouseX, mouseY);

  	fill (random(0, 139), random(123, 139));
  	ellipse (mouseX, mouseY, 50, 50);

 	 x = x + xspeed;
  	
  	 if (x > windowWidth | x < 5)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > windowHeight | y < 5) {
	 	  yspeed = -yspeed;
  	}
