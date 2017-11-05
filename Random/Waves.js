var x = 50;
var y = 50;
var xspeed = 5;
var yspeed = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);

}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/100, windowHeight/100, mouseX, mouseY);

  	fill (random(211, 220), random(211, 220), random(211, 220));
  	ellipse (x, y, d/100, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}