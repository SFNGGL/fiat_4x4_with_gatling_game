const FPS = 60;
const DIR_LENGTH = 20;

var dt= 1/FPS;
var car;

function setup() {
  frameRate(FPS);
  createCanvas(500, 500);
  
  car = new Car(width/2, height/2);
  car.reset();
}

function draw() {
  fill('white');
  
  background(200);
  
  push();
  
  text("Acceleration:"+ car.a.toString().split(':')[1], 6, 12);
  text("Velocity:"+ car.v.toString().split(':')[1], 6, 24);
  text("Position: " + car.pos.toString().split(':')[1], 6, 36);
  text("Speed:"+ car.speed, 6, 48)
  text("RPM:"+ int(car.rpm) +" | Engine force:"+ car.EngineForce, 6, 60)
  text("Longitudinal traction: "+ car.F_traction.toString().split(':')[1], 6, 72)
  text("Dragging Resistence: "+ car.F_drag.mag(), 6, 84)
  text("Rolling Resistence: "+ car.F_roll.mag(), 6, 96)
  text("Sum of forces: "+ car.F_long.mag(), 6, 108)
  
  car.pos.rem(width, height)
    
  rectMode(CENTER)
  rect(car.pos.x, car.pos.y, car.L, car.H);
  
  drawArrow(car.pos, p5.Vector.add(car.dir, sign(car.dir) * (car.H) + DIR_LENGTH), 'black');
  
  if (!keyIsDown(UP_ARROW)) {
    car.decelerate() // dare gas
  } else {
    car.accelerate() // "frenare"
  }
  
  car.update();
  
  pop();
  
}

function sign(vec){
  if (Math.sign(vec) > 0) {
    return 1
  }
  return -1
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  if (vec.mag != 0) {
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0 + DIR_LENGTH, arrowSize / 2, 0 + DIR_LENGTH, -arrowSize / 2, arrowSize + DIR_LENGTH, 0);
  }
  pop();
  
}

function move(){
  if (keyIsDown(UP_ARROW)) {
    car.add_acceleration(createVector(dt, 0)) // dare gas
  } else if (keyIsDown(DOWN_ARROW)) {
    //car.add_acceleration(createVector(-dt, 0)) // "frenare"
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    //accelerare
    //car.add_acceleration(createVector(1*dt, 0));
  } else if (keyCode === DOWN_ARROW) {
    //decelerare
    //car.add_acceleration(createVector(-1, 0));
  } else if (keyCode === RIGHT_ARROW) {
    //girare "a Dx": (Clockwise)
  } else if (keyCode === LEFT_ARROW) {
    //girare "a Sx" : (CCW)
  } else if (keyCode === 82) {
    car.reset();
  }
}