const FPS = 60;
const DIR_LENGTH = 20;

var dt = 1 / FPS;
var car;
var pause = false;

var colors = {
  'dir': 'black',
  'a': 'lightblue',
  'v': 'orange',
  'd1': 'green',
  'd2': 'red',
};

let font;
let cam;

function preload() {
  font = loadFont('./fonts/3270NerdFont-Regular.ttf');
}

function setup() {
  frameRate(FPS);
  rectMode(CENTER);
  angleMode(RADIANS);
  createCanvas(1000, 800, WEBGL);

  car = new Car(0, 0);
  car.reset();

  textFont(font);
  textSize(16);
}

function draw() {

  background(80);

  fill('white');

  push();

  // info();
  isPaused();

  rectMode(CENTER);

  push();

  translate(car.pos.x, car.pos.y);
  rotate(PI - car.angle);
  translate(-car.pos.x, -car.pos.y);
  rect(car.pos.x, car.pos.y, car.L, car.H);

  pop();

  push();

  // drawArrow(car.pos, car.normal, colors['dir'], 2, car.L);
  // drawArrow(car.pos, car.dir, colors['dir'], 4, car.L);
  // drawArrow(car.pos, createVector(car.dir.x, 0), colors['d1'], 4, car.L);
  // drawArrow(car.pos, createVector(0, car.dir.y), colors['d1'], 4, car.L);
  // drawArrow(car.pos, createVector(car.v_vector.x, 0), colors['v'], 2, car.L * 1.5);
  // drawArrow(car.pos, createVector(0, car.v_vector.y), colors['v'], 2, car.L * 1.5);
  // drawArrow(car.pos, createVector(car.a_vector.x, 0), colors['a'], 2, car.L * 2);
  // drawArrow(car.pos, createVector(0, car.a_vector.y), colors['a'], 2, car.L * 2);

  pop();

  if (keyIsDown(UP_ARROW)) {
    car.accelerate(); // dare gas
  } else if (keyIsDown(DOWN_ARROW)) {
    if (car.v_scalar > 0) {
      car.brake();
    } else {
      car.r();
    }
  } else {
    car.decelerate();
  }

  if (keyIsDown(LEFT_ARROW)) {
    car.turn_left();
  } else if (keyIsDown(RIGHT_ARROW)) {
    car.turn_right();
  }

  car.update();

  pop();

}

function drawArrow(base, vec, myColor, weight, scale) {
  let arrowSize = 7;
  push();
  stroke(myColor);
  strokeWeight(weight);
  fill(myColor);
  translate(base.x, base.y);
  // if (base.dist(vec) <= arrowSize) { return; }
  line(0, 0, vec.x * scale, vec.y * scale);
  rotate(vec.heading());
  if (vec.mag != 0) {
    translate(vec.mag() * scale - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  }
  pop();
}

function info() {
  textSize(16);
  let pad = 8;
  let start_pad = -height / 2 + pad * 2;
  fill(colors['a'])
  text("Acceleration (X-axis): " + car.a_vector.x + "\t(Y-axis): " + car.a_vector.y,
    -width / 2 + pad, -height / 2 + pad * 2);
  fill(colors['v'])
  text("Velocity (X-axis): " + car.v_vector.x + "\t(Y-axis): " + car.v_vector.y,
    -width / 2 + pad, -height / 2 + pad * 4);
  fill('white')
  text("Position: " + car.pos.toString().split(':')[1],
    -width / 2 + pad, -height / 2 + pad * 6);
  text("Speed:" + car.speed,
    -width / 2 + pad, -height / 2 + pad * 8);
  fill(colors['d1'])
  text("Angle: " + car.dir.heading() + " | " + car.a_wheel + " | " + car.a_tot,
    -width / 2 + pad, -height / 2 + pad * 10);
  fill('white')
  if (pause) {
    textSize(72);
    fill('red');
    text("PAUSE", -72 - 20, -72 / 2);
    fill('white')
  }
}

function isPaused() {
  if (pause) {
    dt = 0;
  } else {
    dt = 1 / FPS;
  }
}

function keyPressed() {
  if (keyCode === 82) {
    car.reset();
  } else if (keyCode === 80) {
    pause = !pause;
  }
}
