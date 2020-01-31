import java.lang.Math; 
import java.util.HashSet;

class Water extends ParticleSystem {
  ArrayList<WaterParticle> _particles;
  
  public Water(int genRate, int maxLife, PVector initVel, float radius) {
    super(genRate, maxLife, initVel, radius);
    this._initColor = new PVector(0, 159, 225);    // ocean blue
    this._particles = new ArrayList();
  }
  
  // Implement genParticle
  WaterParticle genParticle() {
    PVector vel = this._initVel.copy();
    float radius = this._radius;
    PVector colr = this._initColor.copy();
    return new WaterParticle(vel, radius, colr);
  }
}

class WaterParticle extends Particle {
  
  public WaterParticle(PVector initVel, float radius, PVector initColor) {
    super(initVel, radius, initColor);
  }
}
