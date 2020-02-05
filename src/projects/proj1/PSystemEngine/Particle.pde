abstract class Particle {
  PVector pos;
  PVector vel = new PVector(random(-1, 1), random(-1, 1), 0);
  PVector acc = new PVector(0, 0, 0);
  float mass = 1;
  float radius = 10;
  float lifespan = 255;
  PImage img;
  PVector colr = new PVector(0, 0, 0);
  
  Particle(PVector pos) {
    this.pos = pos.copy();
  }
  
  Particle(PVector pos, PVector vel) {
    this.pos = pos.copy();
    this.vel = vel.copy();
  }
  
  Particle withImg(PImage i) {
    img = i;
    return this;
  }
  
  Particle withLifespan(float l) {
    lifespan = l;
    return this;
  }
  
  Particle withColor(PVector c) {
    colr = c;
    return this;
  }
  
  // Update particle motion, lifespan
  void update(float dt) {
    numericalIntegration(pos, vel, acc, dt);
    handleWallCollisions();
    lifespan -= dt;
  }
  
  // Renders particle
  void render() {
    noFill();
    stroke(0, 153, 204);
    vertex(pos.x, pos.y, pos.z);
  }
  
  boolean isDead() {
    if (lifespan <= 0) return true;
    return false;
  }
  
  void applyForce(PVector force) {
    acc.add(PVector.div(force, mass));
  }
  
  void handleParticleCollisions(ParticleSystem ps) {
    for (Particle p : ps.particles) {
        if (isCollision(p)) {
          handleParticleCollision(p);
        }
      }
  }
  
  boolean isCollision(Particle p) {
    float d = distance(pos, p.pos);
    return d < (radius + p.radius);
  }
  
  // Implemented using math from
  // https://studiofreya.com/3d-math-and-physics/simple-sphere-sphere-collision-detection-and-collision-response/
  void handleParticleCollision(Particle p) {
    colr = new PVector(1, 1, 1);
    // Create basis vector and normalize this
    //PVector vecx = PVector.sub(pos, p.pos);
    //normalize(vecx);
    //// Calculate x-direction velocity vector and perpendicular y-vector for this particle.
    //PVector vecv1 = vel.copy();
    //float x1 = dotProduct(vecv1, vecx);
    //PVector vecv1x = PVector.mult(vecx, x1);
    //PVector vecv1y = PVector.sub(vecv1, vecv1x);
    //float m1 = mass;
    //// Calculate x-direction velocity vector and perpendicular y-vector for other particle.
    //vecx  = PVector.mult(vecx, -1);
    //PVector vecv2 = p.vel.copy();
    //float x2 = dotProduct(vecv2, vecx);
    //PVector vecv2x = PVector.mult(vecx, x2);
    //PVector vecv2y = PVector.sub(vecv2, vecv2x);
    //float m2 = p.mass;
    //// Use newton's laws to obtain speed... F=Ma dawg
    //vel = PVector.add(PVector.add(PVector.mult(vecv1x, (m1-m2)/(m1+m2)), PVector.mult(vecv2x, (2*m2)/(m1+m2))), vecv1y);
    //p.vel = PVector.add(PVector.add(PVector.mult(vecv1x, (2*m1)/(m1+m2)), PVector.mult(vecv2x, (m2-m1)/(m1+m2))), vecv2y);
    
  }
  
  private void handleWallCollisions() {
    // handle collisions with floor
    if (pos.y > height) {
      pos.y = height;
      vel.y *= -0.4;
    }
    // handle collisions with ceiling
    else if (pos.y < 0) {
      pos.y = 0;
      vel.y *= -0.4;
    }
    //// handle left wall
    //else if (pos.x < 0) {
    //  pos.x = 0;
    //  vel.x *= -0.4;
    //}
    //// handle right wall
    //else if (pos.x > width) {
    //  pos.x = width;
    //  vel.x *= -0.4;
    //}
  }
  
  PVector randPointOnSquare(float w, float h) {
    float x = random(w);
    float y = random(h);
    return new PVector(x, y);
  }
  
  PVector randPointOnDisk(float radius) {
    float r = radius * sqrt(random(1));  // want that uniform sampling yo
    float theta = 2 * PI * random(1);
    float x = r * sin(theta);
    float y = r * cos(theta);
    return new PVector(x, y);
  }
}
