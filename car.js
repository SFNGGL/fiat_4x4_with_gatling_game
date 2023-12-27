function Car(x, y) {
  // CONSTANTI MAGGICHE
  // https://www.automobile-catalog.com/make/fiat/panda_1gen/panda_1gen_series_i_4x4/1983.html */
  this.L = 21.7 * 4;
  this.H = 12.56 * 4;
  this.M = 740;

  this.max_speed = 500;
  this.max_acc_fwd = 80;
  this.max_acc_bwd = -40;

  this.B1 = this.max_speed / (this.max_acc_fwd * (1 / 60));
  this.B2 = this.max_speed / (this.max_acc_bwd * (1 / 60));

  this.cm = createVector(x, y);
  this.rear_axle = createVector(x - (this.L / 2), y);

  // Vettori
  this.pos = createVector(0, 0);
  this.dir = p5.Vector.fromAngle(0, 1);
  this.dirX = p5.Vector.fromAngle(0, 1);
  this.dirY = p5.Vector.fromAngle(0, 1);
  this.a_scalar = 0;
  this.a_vector = p5.Vector.fromAngle(0, 1);
  this.v_scalar = 0;
  this.v_vector = p5.Vector.fromAngle(0, 1);
  this.w_scalar = 0;
  this.w_vector = p5.Vector.fromAngle(0, 1);
  this.s_vector = createVector(0, 0);
  this.a_wheel = 0;
  this.a_tot = 0;
  this.normalX = createVector(1, 0);
  this.normalY = createVector(0, 1);

  // this.cr = createVector(x, y + this.compute_centre_of_rotation());

  this.speed = 0;

  this.EngineForce = 1000;
  this.rpm = 1000;

  this.C_drag = .30;
  this.C_roll = this.C_drag * 30;
  this.C_brake = 4.5;

  this.F_traction = this.dir.copy();
  this.F_drag = createVector(0, 0);
  this.F_roll = createVector(0, 0);
  this.F_long = createVector(0, 0);
  this.F_long_scalar = 0;
  this.f_lat = 0;
  this.sum = this.F_long.copy();

  this.da = 45 / 360;

  // probably useless
  this.speed_state = [
    "slow",
    "fast"
  ]
  this.turn_state = [
    "soft",
    "regular",
    "sharp"
  ]

  this.accelerate = function() {
    if (this.a_scalar < 0) {
      this.a_scalar = 0;
    }
    if (!(this.a_scalar >= this.max_acc_fwd)) {
      this.a_scalar += dt * (this.a_scalar + 1) * -.5 * (this.a_scalar - (this.max_acc_fwd + 1));
    } else {
      this.a_scalar = this.max_acc_fwd;
    }
  }

  this.decelerate = function() {
    if (this.a_scalar > dt * 5) {
      this.a_scalar -= dt * 5;
    } else if (this.a_scalar < -dt * 5) {
      this.a_scalar += dt * 75;
    } else {
      this.a_scalar = 0;
    }
  }

  this.brake = function() {
    // needs to be exponential not linear like deceleration
    if (!(this.a_scalar <= 1)) {
      this.a_scalar -= dt * (this.a_scalar - 0) * -.125 * (this.a_scalar - (this.max_acc_fwd + 1));
    } else {
      this.a_scalar = 0;
    }
  }

  this.r = function() {
    // speculare dell'accelerazione in "avanti"
    if (this.a_scalar > 0) {
      this.a_scalar = 0;
    }
    if (!(this.a_scalar <= this.max_acc_bwd)) {
      this.a_scalar -= 20;
    } else {
      this.a_scalar = this.max_acc_bwd;
    }
  }

  this.turn_left = function() {
    // maximum degree turn : 30° =~ 0.525
    if (this.a_wheel <= 0.525) {
      this.a_wheel = -0.525;
    } else {
      this.a_wheel -= dt * this.da * 5;
    }
  }

  this.turn_right = function() {
    if (this.a_wheel >= 0.525) {
      this.a_wheel = 0.525;
    } else {
      this.a_wheel += dt * this.da * 5;
    }
  }

  this.compute_centre_of_rotation = function() {
    // return Math.tan(this.dir.heading()) * this.L;
    if (this.dir.heading() == 0) { return 10000; }
    if (this.dir.heading() > 0) {
      return Math.pow(this.L, 1) / Math.tan(this.a_wheel) + this.H;
    } else {
      return Math.pow(this.L, 1) / Math.tan(this.a_wheel) - this.H;
    }
  }

  this.update = function() {

    this.dirX.setHeading(this.a_tot);
    this.dirY.setHeading(this.a_tot - Math.PI / 2);

    this.f_lat = lateral_force(this.a_wheel);

    this.F_long_scalar = this.a_scalar * this.M + this.f_lat; // [ms-2 + ms-2]

    // Calcolo moto totale:
    this.F_long = createVector(
      this.dirX.x * this.F_long_scalar + this.dirY.x * this.F_long_scalar,
      this.dirX.y * this.F_long_scalar + this.dirY.y * this.F_long_scalar,
    )

    // calcolo Velocita e Spostamento:
    this.a_vector = p5.Vector.div(this.F_long, this.M);
    this.v_vector.add(p5.Vector.mult(this.a_vector, dt));
    this.s_vector.add(p5.Vector.mult(this.v_vector, dt));

    // aggiornamento della posizione:
    this.pos.add(this.s_vector);

    // aggiornamento dell'angolo:
    this.a_tot += this.a_wheel * -1;

    console.log(
      "Forze totali: " + this.F_long.toString() +
      "\nAcc.: " + this.a_vector.toString() +
      "\nVel.: " + this.v_vector.toString() +
      "\nSpostamento: " + this.s_vector.toString()
    )

  }

  this.reset = function() {
    this.rpm = 1000;
    this.pos = createVector(x, y);
    this.a_scalar = 0;
    this.v_scalar = 0;
    this.dir = p5.Vector.fromAngle(0, 1);
    this.F_long = createVector(0, 0);
  }

}
