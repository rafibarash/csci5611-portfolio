class Fire extends ParticleSystem {
  
  Fire(PVector og) {
    super(og, PS_TYPE.FIRE);
  }
  
  void genParticle(PVector initVel) {
    float vx = randomGaussian()*0.3;
    float vy = randomGaussian()*0.3 - 1.0;
    PVector vel = new PVector(vx, vy, 0).add(initVel);
    FireParticle p = new FireParticle(origin, vel);
    if (lifespan != 0) p = (FireParticle) p.withLifespan(lifespan);
    if (img != null) p = (FireParticle) p.withImg(img);
    particles.add(p);
  }
  
  void render() {
    Iterator<Particle> it = particles.iterator();
    pushMatrix();
    //translate(0, 0, 70);
    beginShape(POINTS);
    while (it.hasNext()) {
      Particle p = it.next();
      p.render();
      if (p.isDead()) {
         it.remove();
      }
    }
    endShape(POINTS);
    popMatrix();
  }
}

class FireParticle extends Particle {
  
  FireParticle(PVector pos) {
    super(pos);
  }
  
  FireParticle(PVector pos, PVector vel) {
    super(pos, vel);
  }
  
  void render() {
    if (img != null) {
      imageMode(CENTER);
      tint(255,0,0, lifespan);
      image(img, pos.x, pos.y);
    } else {
      noFill();
      stroke(255, 0, 0);
      vertex(pos.x, pos.y, pos.z);
    }
  }
}
