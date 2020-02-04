import java.util.Iterator;

enum PS_TYPE { 
  WATER, FIRE; 
}

abstract class ParticleSystem {
  ArrayList<Particle> particles;
  PVector origin;
  PVector initVel = new PVector(0, 0, 0);
  PS_TYPE type;
  PImage img;
  float genRate = 1;
  
  ParticleSystem(PVector og, PS_TYPE type) {
    origin = og.copy();
    particles = new ArrayList();
    this.type = type;
  }
  
  ParticleSystem(PVector og, PS_TYPE type, float genRate) {
    origin = og.copy();
    particles = new ArrayList();
    this.type = type;
    this.genRate = genRate;
  }
  
  ParticleSystem(PVector og, PS_TYPE type, PImage img) {
    origin = og.copy();
    particles = new ArrayList();
    this.type = type;
    this.img = img;
  }
  
  ParticleSystem(PVector og, PS_TYPE type, PImage img, float genRate) {
    origin = og.copy();
    particles = new ArrayList();
    this.type = type;
    this.img = img;
    this.genRate = genRate;
  }
  
  ParticleSystem(PVector og, PVector vel, PS_TYPE type, PImage img, float genRate) {
    origin = og.copy();
    initVel = vel.copy();
    particles = new ArrayList();
    this.type = type;
    this.img = img;
    this.genRate = genRate;
  }
  
  // generate new particles
  void genParticles(float dt) {
    // get num particles to generate
    int genNumParticles = calculateGenNumParticles(dt);
    // actually generate particles
    for (int i = 0; i < genNumParticles; i++) {
      genParticle(initVel.copy());
    }
  }
 
  abstract void genParticle(PVector initVel);
  
  void applyForce(PVector f) {
    for (Particle p : particles) {
      p.applyForce(f);
    }
  }
  
  void applyRepeller(Repeller r) {
    for (Particle p: particles) {
      PVector force = r.repel(p);
      p.applyForce(force);
    }
  }
  
  // generate new particles and update particles
  void update(float dt, ArrayList<ParticleSystem> otherSystems) {
    genParticles(dt);
    for (Particle p : particles) {
      p.update(dt, otherSystems);
    }
  }
  
  void render() {
    Iterator<Particle> it = particles.iterator();
    beginShape(POINTS);
    while (it.hasNext()) {
      Particle p = it.next();
      p.render();
      if (p.isDead()) {
         it.remove();
      }
    }
    endShape(POINTS);
  }
  
  //void run() {
  //  Iterator<Particle> it = particles.iterator();
  //  while (it.hasNext()) {
  //    Particle p = it.next();
  //    p.run();
  //    if (p.isDead()) {
  //       it.remove();
  //    }
  //  }
  //}
  
  void kill() {
    particles = new ArrayList();
  }
  
  boolean isDead() {
    if (particles.size() == 0) return true;
    return false;
  }
  
  void pertubVelocity(PVector vec) {
    PVector pertub = new PVector(random(-1, 1), random(-1, 1), 0);
    vec.add(pertub);
  }
  
  // determine num particles to generate based on timestep and genRate
  private int calculateGenNumParticles(float dt) {
    // generate particles equal to timestep * genRate
    double numParticles = dt * genRate;
    int numParticlesInt = (int) numParticles;
    double fracPart = numParticles - numParticlesInt;
    // randomly generate fractional particle
    if (Math.random() < fracPart) {
      numParticlesInt++;
    }
    return numParticlesInt;
  }
}
