var w;
var col1;
var col2;
var col3;
function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(51);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-5, 5), random(-5, 5));
    col1 = random(1,255);
    col2 = random(1,255);
    col3 = random(1,255);
    this.pos.add(vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(col1,col2,col3);
    rect(this.pos.x, this.pos.y, 48, 48);
  }
}