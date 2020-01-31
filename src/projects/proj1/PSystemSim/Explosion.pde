import java.lang.Math; 
import java.util.HashSet;

class Explosion extends ParticleSystem {
  ArrayList<ExplosionParticle> _particles;
  
  public Explosion(int genRate, int maxLife, PVector initVel, float radius) {
    super(genRate, maxLife, initVel, radius);
    this._initColor = new PVector(124, 10, 2);    // start with marronish color
    this._particles = new ArrayList();
  }
  
  // implement genParticle
  ExplosionParticle genParticle() {
    PVector vel = this._initVel.copy();
    float radius = this._radius;
    PVector colr = this._initColor.copy();
    return new ExplosionParticle(vel, radius, colr);
  }
  
  // Override color update
  PVector getColorUpdate() {
    return new PVector(-35, 0, 0);    // turn from orange to yellow
  }
}

class ExplosionParticle extends Particle {
  
  public ExplosionParticle(PVector initVel, float radius, PVector initColor) {
    super(initVel, radius, initColor);
  }
}
