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
    this._radius = radius;
    this._initColor = new PVector(0, 0, 0);      // black by default
    this._particles = new ArrayList();
  }
  
  // render all particles
  void renderParticles() {
    beginShape();
    for (Particle p : this._particles) {
       renderParticle(p);
    }
    endShape();
  }
  
  // render individual particle
  void renderParticle(Particle p) {
    PVector pos = p.getPos();
     PVector colr = p.getColor();
     noFill();
     stroke(colr.x, colr.y, colr.z);
     vertex(pos.x, pos.y, pos.z);
  }
  
  // generate new particles
  void genParticles(float dt) {
    // get num particles to generate
    int genNumParticles = calculateGenNumParticles(dt);
    // actually generate particles
    for (int i = 0; i < genNumParticles; i++) {
      Particle p = genParticle();
      this._particles.add(p);
    }
  }
  
  // determine num particles to generate based on timestep and genRate
  private int calculateGenNumParticles(float dt) {
    // generate particles equal to timestep * genRate
    double numParticles = dt * this._genRate;
    int numParticlesInt = (int) numParticles;
    double fracPart = numParticles - numParticlesInt;
    // randomly generate fractional particle
    if (Math.random() < fracPart) {
      numParticlesInt++;
    }
    return numParticlesInt;
  }
  
  // generate individual particle
  abstract Particle genParticle();
  
  // Updates particle motion
  void updateParticles(float dt) {
    HashSet<Integer> deadParticles = new HashSet();
    // update particles or mark as dead
    PVector colorUpdate = getColorUpdate();
    updateOrKillParticles(dt, colorUpdate, deadParticles);
    // set living particles
    setLivingParticles(deadParticles);
  }
  
  // Determines how color will update over time
  PVector getColorUpdate() {
    return new PVector(0, 0, 0);    // don't update color by default
  }
  
  // updates living particles and adds dead particles to list
  void updateOrKillParticles(float dt, PVector colorUpdate, HashSet<Integer> deadParticles) {
    // loop through particles and update or mark as dead
    for (int i=0; i < this._particles.size(); i++) {
      Particle p = this._particles.get(i);
      if (p._lifetime < this._maxLife) {
        // particle still alive, update motion
        p.update(dt, colorUpdate.copy());
      } else {
        // particle is dead, kill it
        deadParticles.add(i);
      }
    }
  }
  
  // Remove all dead particles from particles list
  void setLivingParticles(HashSet<Integer> deadParticles) {
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
