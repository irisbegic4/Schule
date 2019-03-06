function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	fill(0);
}

var x = 100;
var y = 100;

function draw() {
	x = x + 1;
	ellipse(100, 100, 80, 80);

}