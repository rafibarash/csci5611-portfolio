abstract class ParticleSystem {
  int _genRate;
  int _maxLife;
  PVector _initVel;
  PVector _initColor;
  float _radius;
  ArrayList<Particle> _particles;
  HashSet<Integer> _deadParticles;
  
  ParticleSystem(int genRate, int maxLife, PVector initVel, float radius) {
    this._genRate = genRate;
    this._maxLife = maxLife;
    this._initVel = initVel;
    this._initColor = new PVector(255, 0, 0);      // red
    this._radius = radius;
    this._particles = new ArrayList();
  }
  
  void renderParticles() {
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
  void genParticles(float dt) {
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
  void updateParticles(float dt, PVector colorUpdate) {
    HashSet<Integer> deadParticles = new HashSet();
    // loop through and update particles or mark as dead
    for (int i=0; i < this._particles.size(); i++) {
      Particle p = this._particles.get(i);
      if (p._lifetime < this._maxLife) {
        // particle still alive, update motion
        p.update(dt, colorUpdate);
      } else {
        // particle is dead, kill it
        deadParticles.add(i);
      }
    }
    // add live particles to new list
    ArrayList<Particle> liveParticles = new ArrayList();
    for (int i=0; i < this._particles.size(); i++) {
      if (!deadParticles.contains(i)) {
        // particle is alive
        liveParticles.add(this._particles.get(i));    // add particle to liveParticles list
      }
    }
    this._particles = liveParticles;
  }
  
  
}
