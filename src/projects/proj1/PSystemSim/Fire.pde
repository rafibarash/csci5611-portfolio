import java.lang.Math; 
import java.util.HashSet;

class Fire extends ParticleSystem {
  ArrayList<FireParticle> _particles;
  
  public Fire(int genRate, int maxLife, PVector initVel, float radius) {
    super(genRate, maxLife, initVel, radius);
    this._initColor = new PVector(255, 0, 0);    // red
    this._particles = new ArrayList();
  }
  
  // Implement genParticle
  FireParticle genParticle() {
    PVector vel = this._initVel.copy();
    float radius = this._radius;
    PVector colr = this._initColor.copy();
    return new FireParticle(vel, radius, colr);
  }
  
  // Override color update
  PVector getColorUpdate() {
    return new PVector(-35, 0, 0);    // turn from red to black
  }
}

class FireParticle extends Particle {
  
  public FireParticle(PVector initVel, float radius, PVector initColor) {
    super(initVel, radius, initColor);
  }
}
