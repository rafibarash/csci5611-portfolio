class Fire extends ParticleSystem {
  
  Fire(PVector og) {
    super(og, PS_TYPE.FIRE);
  }
  
  Fire(PVector og, PImage img) {
    super(og, PS_TYPE.FIRE, img);
  }
  
  Fire(PVector og, PVector vel, PImage img, float genRate) {
    super(og, vel, PS_TYPE.FIRE, img, genRate);
  }
  
  void genParticle(PVector initVel) {
    float vx = randomGaussian()*0.3;
    float vy = randomGaussian()*0.3 - 1.0;
    PVector vel = new PVector(vx, vy, 0).add(initVel);
    if (img != null) {
      particles.add(new FireParticle(origin, vel, img));
    } else {
      particles.add(new FireParticle(origin));
    }
  }
}

class FireParticle extends Particle {
  
  FireParticle(PVector pos) {
    super(pos);
  }
  
  FireParticle(PVector pos, PImage img) {
    super(pos, img);
  }
  
  FireParticle(PVector pos, PVector vel, PImage img) {
    super(pos, vel, img);
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
