function Car(x, y) {
  // CONSTANT: Weight, length...
  this.force = 20.0;
  this.L = 21.7;
  this.H = 12.56;
  this.M = 740;

  this.pos = createVector(x, y)
  this.v = createVector(0, 0)
  this.a = createVector(0, 0);
  this.dir = p5.Vector.fromAngle(0);

  this.speed = 0;

  this.EngineForce = 1000;
  this.rpm = 1000;

  this.C_drag = 30;
  this.C_roll = this.C_drag / 30;
  this.C_brake = 4.5;

  this.F_traction = this.dir.copy();
  this.F_drag = createVector(0, 0);
  this.F_roll = createVector(0, 0);
  this.F_long = createVector(0, 0);
  this.sum = this.F_long.copy();

  this.accelerate = function() {
    if (!(this.rpm > 6100)) {
      this.rpm += dt * this.force * 15;
    }
    this.EngineForce = findTorque(this.rpm);
  }

  this.decelerate = function() {
    if (!(this.rpm <= 1000)) {
      this.rpm -= dt * this.force * 5;
    }
    if (this.rpm < 1000) {
      this.rpm = 1000
    }
    this.EngineForce = findTorque(this.rpm);
  }

  this.brake = function() { }

  this.r = function() { }

  this.update = function() {

    this.F_traction = p5.Vector.mult(this.dir, this.EngineForce);
    this.F_drag = p5.Vector.mult(
      this.dir, this.speed * (-this.C_drag))
    this.F_roll = p5.Vector.mult(
      this.dir, -this.C_roll)

    this.sum.add(this.F_traction.mult(100))
    this.sum.add(this.F_drag)
    this.sum.add(this.F_roll)

    if (this.sum != this.F_long) {
      this.F_long = this.sum;
      this.sum = createVector(0, 0);
    }

    this.a = p5.Vector.mult(this.F_long, 1 / this.M)

    this.v.add(p5.Vector.mult(this.a, dt))
    this.pos.add(p5.Vector.mult(this.v, dt))

    if (this.pos.x <= 0) {
      this.pos.x += width
    }

    this.speed = Math.sqrt(this.v.magSq());


  }

  this.reset = function() {
    this.rpm = 1000;
    this.pos = createVector(x, y);
    this.v = createVector(0, 0);
    this.a = createVector(0, 0);
    this.dir = p5.Vector.fromAngle(0);
    this.F_long = createVector(0, 0);
  }


}
