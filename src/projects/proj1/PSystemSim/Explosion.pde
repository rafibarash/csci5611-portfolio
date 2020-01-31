import java.lang.Math; 
import java.util.HashSet;

class Explosion {
  int _genRate;
  int _maxLife;
  PVector _initVel;
  PVector _initColor;
  float _radius;
  ArrayList<Particle> _particles;
  HashSet<Integer> _deadParticles;
  
  public Explosion(int genRate, int maxLife, PVector initVel, float radius) {
    this._genRate = genRate;
    this._maxLife = maxLife;
    this._initVel = initVel;
    this._initColor = new PVector(0, 47, 75);    // ocean blue
    this._radius = radius;
    this._particles = new ArrayList<Particle>();
  }
  
  public void renderParticles() {
    beginShape();
    for (Particle p : this._particles) {
       PVector pos = p.getPos();
       PVector colr = p.getColor();
       noFill();
       stroke(colr.x, colr.y, colr.z);
       vertex(pos.x, pos.y, pos.z);
    }
    endShape();
  }
  
  // generates particles based on timestep and genRate
  public void genParticles(float dt) {
    // generate particles equal to timestep * genRate
    double numParticles = dt * this._genRate;
    int numParticlesInt = (int) numParticles;
    double fracPart = numParticles - numParticlesInt;
    // randomly generate fractional particle
    if (Math.random() < fracPart) {
      numParticlesInt++;
    }
    // actually generate particles
    for (int i = 0; i < numParticlesInt; i++) {
      Particle p = new Particle(this._initVel.copy(), this._radius, this._initColor.copy());
      this._particles.add(p);
      
    }
  }
  
  // Updates particle motion
  public void updateParticles(float dt) {
    this._deadParticles = new HashSet<Integer>();
    // loop through and update particles or mark as dead
    for (int i=0; i < this._particles.size(); i++) {
      Particle p = this._particles.get(i);
      // kill if particle is dead
      if (p._lifetime < this._maxLife) {
        // particle still alive, update motion
        PVector colorUpdate = new PVector(0, 0, 0);    // don't change blue color
        p.update(dt, colorUpdate);
      } else {
        this._deadParticles.add(i);
      }
    }
    // add live particles to new list
    ArrayList<Particle> liveParticles = new ArrayList<Particle>();
    for (int i=0; i < this._particles.size(); i++) {
      if (!this._deadParticles.contains(i)) {
        // particle is alive
        liveParticles.add(this._particles.get(i));    // add particle to liveParticles list
      }
    }
    this._particles = liveParticles;
  }
}

class ExplosionParticle {
  PVector _pos;
  PVector _vel;
  PVector _acc;
  PVector _color;
  float _lifetime;
  
  public ExplosionParticle(PVector initVel, float radius, PVector initColor) {
    this._pos = randPointOnSquare(30, 30);    // rand pos within disk radius
    this._vel = pertubVelocity(10, initVel); // add noise to velocity
    this._acc = new PVector(0, 9.81, 0);    // gravity 
    this._color = initColor;                // red 
    this._lifetime = 0;                     // particle will eventually die
  }
  
  // Update particle motion, time, color
  public void update(float dt, PVector colorUpdate) {
    numericalIntegration(this._pos, this._vel, this._acc, dt);    // update particle motion
    this.handleCollisions();                                      // update motion on collisions
    this._lifetime += dt;                                         // update lifetime
    colorUpdate.mult(dt / this._lifetime);                        // normalize color update by lifetime
    this._color.add(colorUpdate);                                 // update color
    
  }
  
  public PVector[] getMotion() {
    PVector[] motion = {this._pos, this._vel, this._acc};
    return motion;
  }
  
  public PVector getPos() {
    return this._pos;
  }
  
  public PVector getColor() {
    return this._color;
  }
  
  private void handleCollisions() {
    handleXCollision();
    handleYCollision();
  }
  
  private void handleXCollision() {
    // handle bottom collision
    if (this._pos.x < 0) {
      this._pos.x = 0;
      this._vel.x *= -0.4;  // bounce factor
    }
    // handle top collision
    if (this._pos.x > width) {
      this._pos.x = width;
      this._vel.x *= -0.4;
    }
  }
  
  private void handleYCollision() {
    // handle bottom collision
    if (this._pos.y < 0) {
      this._pos.y = 0;
      this._vel.y *= -0.4;  // bounce factor
    }
    // handle top collision
    if (this._pos.y > width) {
      this._pos.y = width;
      this._vel.y *= -0.4;
    }
  }
  
  // Adds 'x' noise to a vector
  private PVector pertubVelocity(float x, PVector v) {
    float xNoise = genNoise(x);
    float yNoise = genNoise(x);
    float zNoise = genNoise(x);
    return new PVector(v.x + xNoise, v.y + yNoise, v.z + zNoise);
  }
  
  private float genNoise(float n) {
    return (float) (Math.random() * n);
  }
  
  private PVector randPointOnSquare(float w, float h) {
    float x = (float) (w * Math.random());
    float y = (float) (h * Math.random());
    return new PVector(x, y);
  }

  private PVector randPointOnDisk(float radius) {
    float r = (float) (radius * Math.sqrt(Math.random()));
    float theta = (float) (2 * PI * Math.random());
    float x = r * sin(theta);
    float y = r * sin(theta);
    return new PVector(x, y);
  }
  
  private PVector rejectSamplingSquarePos(float w, float h, float radius) {
    boolean valid = false;
    float x = 0, y = 0;
    while (!valid) {
      x = (float) (w * Math.random());
      y = (float) (h * Math.random());
      if (x*x + y*y < radius) valid = true;
    }
    return new PVector(x, y);
  }
}
