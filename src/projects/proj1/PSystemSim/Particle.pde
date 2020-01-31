import java.util.Random; 

class Particle {
  PVector _pos;
  PVector _vel;
  PVector _acc;
  PVector _color;
  float _lifetime;
  
  public Particle(PVector initVel, float radius, PVector initColor) {
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

// Simulate Particles
  // Generate Particles
  // Assign Particle Attributes
  // Update position and other attributes
  // Particle extinction
  
// Render Particles
  // draw particles as points not spheres
    // to make prettier, draw picture instead of points (like snow)
      // for snow, remember to add random acceleration in all directions to simulate air resistance, drag, feathered edges
      // Use "Perlin Noise"
    // can also use normal mapping to make points look more like spheres
    // textures can greatly improve look of fire
    // transparency adds to effect
      // blend fire and smoke particles
    // particles drawn back to front for transparency to work
  // repeatedly draw particle points
  // before translating... push matrix, translate, pop matrix... will fix translation stack probs
  // also... rather than drawing spheres, draw points 
    // (faster to draw, thinner, able to use more particles, can look nicer)
  // also, to speed up, if drawing particles of same color, draw all particles within beginShape() and endShape()
    // faster than calling beginShape() and endShape() each time.. like double as fast
