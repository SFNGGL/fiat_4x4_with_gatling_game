function Car(x, y) { 
  // CONSTANT: Weight, length...
  this.force = 20.0;
  this.L = 21.7;
  this.H = 12.56;
  this.M = 740;
  
  this.pos = createVector(x, y) 
  this.v = createVector(0, 0)
  this.a = createVector(0, 0);
  this.dir = p5.Vector.fromAngle(x, 1);
  
  this.speed = 0;
  
  this.EngineForce = 1000;
  this.rpm = 1000;
  
  this.C_drag = 12.8;
  this.C_roll = 5/30;
  this.C_brake = 4.5;

  this.F_traction = createVector(0, 0);
  this.F_drag = createVector(0, 0);
  this.F_roll = createVector(0, 0);
  this.F_long = createVector(0, 0);
  
  this.accelerate = function(){
    if (!(this.rpm > 6100)){
      this.rpm += dt*this.force * 5;
    }
    this.EngineForce = findTorque(this.rpm);
  }
  
  this.decelerate = function(){
    if (!(this.rpm <= 1000)) {
      this.rpm -= dt*this.force * 1/5;
    }
    if (this.rpm < 1000){
      this.rpm = 1000
    }
    this.EngineForce = findTorque(this.rpm);
  }
  
  this.brake = function(){}
  
  this.r = function(){}
  
  this.add_acceleration = function(increment){
    this.a.add(increment);
    this.dir.add(increment);
    //this.dir.mult
  }
  
  //this.compute_a = function(){
    //this.a = p5.Vector.div(this.F_long, this.M)
  //}
  
  this.update = function(){
    
    this.F_traction = p5.Vector.mult(
      this.dir, this.Engineforce)
    this.F_drag = p5.Vector.mult(
      this.v, this.speed*(-this.C_drag))
    this.F_roll = p5.Vector.mult(
      this.v, this.C_roll)
    
    this.F_long.add(this.F_traction)
    this.F_long.add(this.F_drag)
    this.F_long.add(this.F_roll)
    
    this.a = p5.Vector.mult(this.F_long, 1/this.M)
    
    this.v.add(p5.Vector.mult(this.a, dt))
    this.pos.add(p5.Vector.mult(this.v, dt))
    
    if (this.pos.x <= 0) {
      this.pos.x += width
    }
    
    this.speed = this.v.magSq()
    
    //this.compute_a();
    
  }
  
  this.reset = function(){
    this.pos = createVector(x, y); 
    this.v = createVector(0, 0);
    this.a = createVector(0, 0);
    this.dir = p5.Vector.fromAngle(0, this.a.mag());
    this.F_long = createVector(0, 0);
  }
  
  
}