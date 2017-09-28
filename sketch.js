function setup() {
	createCanvas(600,600);
	frameRate(12);
}

function draw() {
	background(200,200,200);
	
	fill(255);
	noStroke();
	
	for (var y=0; y<height; y+=10) {
		var snowX = random(0,width);
		var snowSz = random(5,15);
		ellipse(snowX,y,snowSz,snowSz);
	}
}