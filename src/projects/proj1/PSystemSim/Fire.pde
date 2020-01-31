import java.lang.Math; 
import java.util.HashSet;

class Fire {
  int _genRate;
  int _maxLife;
  PVector _initVel;
  PVector _initColor;
  float _radius;
  ArrayList<FireParticle> _particles;
  HashSet<Integer> _deadParticles;
  
  public Fire(int genRate, int maxLife, PVector initVel, float radius) {
    this._genRate = genRate;
    this._maxLife = maxLife;
    this._initVel = initVel;
    this._initColor = new PVector(255, 0, 0);      // red
    this._radius = radius;
    this._particles = new ArrayList();
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
      FireParticle p = new FireParticle(this._initVel.copy(), this._radius, this._initColor.copy());
      this._particles.add(p);
    }
  }
  
  // Updates particle motion
  public void updateParticles(float dt) {
    HashSet<Integer> deadParticles = new HashSet();
    // loop through and update particles or mark as dead
    for (int i=0; i < this._particles.size(); i++) {
      Particle p = this._particles.get(i);
      if (p._lifetime < this._maxLife) {
        // particle still alive, update motion
        PVector colorUpdate = new PVector(-35, 0, 0);    // turn red to black
        p.update(dt, colorUpdate);
      } else {
        // particle is dead, kill it
        deadParticles.add(i);
      }
    }
    // add live particles to new list
    ArrayList<FireParticle> liveParticles = new ArrayList();
    for (int i=0; i < this._particles.size(); i++) {
      if (!deadParticles.contains(i)) {
        // particle is alive
        liveParticles.add(this._particles.get(i));    // add particle to liveParticles list
      }
    }
    this._particles = liveParticles;
  }
}

class FireParticle extends Particle {
  
  public FireParticle(PVector initVel, float radius, PVector initColor) {
    super(initVel, radius, initColor);
  }
}
