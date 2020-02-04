class Water extends ParticleSystem {
  
  Water(PVector og) {
    super(og, PS_TYPE.WATER);
  }
  
  Water(PVector og, PImage img) {
    super(og, PS_TYPE.WATER, img);
  }
  
  Water(PVector og, PVector vel, PImage img, float genRate) {
    super(og, vel, PS_TYPE.WATER, img, genRate);
  }
  
  void genParticle(PVector initVel) {
    if (img != null) {
      pertubVelocity(initVel);
      particles.add(new WaterParticle(origin, initVel, img));
    } else {
      particles.add(new WaterParticle(origin));
    }
  }
}

class WaterParticle extends Particle {
  
  WaterParticle(PVector pos) {
    super(pos);
  }
  
  WaterParticle(PVector pos, PImage img) {
    super(pos, img);
  }
  
  WaterParticle(PVector pos, PVector vel, PImage img) {
    super(pos, vel, img);
  }
  
  void render() {
    if (img != null) {
      imageMode(CENTER);
      tint(0, 153, 204);
      image(img, pos.x, pos.y);
    } else {
      noFill();
      stroke(0, 153, 204);
      vertex(pos.x, pos.y, pos.z);
    }
  }
}
