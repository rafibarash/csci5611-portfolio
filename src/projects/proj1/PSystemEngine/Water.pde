class Water extends ParticleSystem {
  
  Water(PVector og) {
    super(og, PS_TYPE.WATER);
  }
  
  void genParticle(PVector initVel) {
    pertubVelocity(initVel);
    WaterParticle p = new WaterParticle(origin, initVel);
    if (lifespan != 0) p = (WaterParticle) p.withLifespan(lifespan);
    if (img != null) p = (WaterParticle) p.withImg(img);
    particles.add(p);
  }
}

class WaterParticle extends Particle {
  
  WaterParticle(PVector pos) {
    super(pos);
  }
  
  WaterParticle(PVector pos, PVector vel) {
    super(pos, vel);
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
