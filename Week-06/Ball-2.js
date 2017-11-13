var x = 5;
var y = 5;
var xspeed = 75;
var yspeed = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (500);

}

function draw() {
	var d = dist(windowWidth*100, windowHeight*100, mouseX, mouseY);

  	fill (random(0, 0), random(0, 139))
  	ellipse (x, y, 50, 50);

 	  x = x + xspeed;
  	
  	 if (x > windowWidth || x < 5)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	 if (y > windowHeight || y < 5) {
	 	  yspeed = -yspeed;
  	}

}
