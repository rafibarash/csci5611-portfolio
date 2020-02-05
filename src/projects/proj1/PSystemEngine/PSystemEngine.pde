import java.util.Iterator;

// GLOBALS
String projectTitle = "Particle System";
float startFrame, endFrame, endPhysics, elapsedTime;
ArrayList<ParticleSystem> systems;
ArrayList<Object> objects;
boolean translateMode = true, rotateMode = false;
float camX, camY, camZ, rotX, rotY, rotZ;
 
// Processing function to configure project
void setup() {
  size(800, 800, P3D);
  systems = new ArrayList();
  objects = new ArrayList();
  PImage textureImg = loadImage("texture.png");
  PShape tree = loadShape("BirchTree_Autumn_1.obj");
  // Create systems
  Water wand = (Water) (new Water(new PVector(0, 0, 0)).withGenRate(17).withLifespan(340));
  systems.add(wand);
  Fire fire = (Fire) (new Fire(new PVector(width-150, height-100, 100)).withImg(textureImg).withGenRate(1.5).withLifespan(335));
  systems.add(fire);
  Object Tree = new Object(new PVector(width-150, height), tree);
  objects.add(Tree);
}
 
// Processing function that is called every frame
void draw() {
  // Advance Time
  elapsedTime = millis() - startFrame;  // used for dt in state update
  startFrame = millis();                // used for runtime report
  
  // Update State
  int numParticles = 0;
  for (ParticleSystem ps : systems) {
    if (ps.type == PS_TYPE.WATER) {
      // WATER
      ps.origin.set(mouseX, mouseY, 0);
      PVector gravity = new PVector(0.0, 0.1, 0);
      ps.applyForce(gravity);
    } else if (ps.type == PS_TYPE.FIRE) {
      // FIRE
      PVector wind = new PVector(-0.01,0, 0);
      ps.applyForce(wind);
    }
    ps.update(elapsedTime / 10);
    numParticles += ps.particles.size();
  }
  endPhysics = millis();               // used for runtime report
  
  /************************************************
   * Render State
   ************************************************/
  blendMode(ADD);
  background(0);
  lights();
  handlePerspective();
  Iterator<ParticleSystem> it = systems.iterator();
  // Render Objects
  for (Object o : objects) {
    o.render();
  }
  // Render particles
  while (it.hasNext()) {
    ParticleSystem ps = it.next();
    ps.render();
    if (ps.isDead()) {
       it.remove();
    }
  }
  
  //repeller.render();
  endFrame = millis();                 // used for runtime report
  
  // Set display title with runtime report
  String runtimeReport = 
        //"Frame: " + str(endFrame - startFrame) + "ms," +
        " Physics: " + str(endPhysics - startFrame) + "ms," +
        " FPS: " + str(round(frameRate)) +
        " Particles: " + str(round(numParticles)) + "\n";
  surface.setTitle(projectTitle+ "  -  " +runtimeReport);
}

// binds view of scene to arrow keys
void handlePerspective() {
  translate(camX, camY, camZ);
  rotateX(rotX);
  rotateY(rotY);
  rotateZ(rotZ);
  if (keyPressed) {
    // handle zoom
    if (key == '=') {
        camZ += 10;
      } else if (key == '-') {
        camZ -= 10;
      }
    if (translateMode) {
      // TRANSLATE
      if (keyPressed && keyCode == UP) {
        camY += 10;
      } else if (keyPressed && keyCode == DOWN) {
        camY -= 10;
      } else if (keyPressed && keyCode == RIGHT) {
        camX -= 10;
      } else if (keyPressed && keyCode == LEFT) {
        camX += 10;
      } 
    } else if (rotateMode) {
      // ROTATE
      if (keyPressed && keyCode == UP) {
        rotX -= PI/40;
        // TODO: curve in as curving upwards (like viewing from a globe)
      } else if (keyPressed && keyCode == DOWN) {
        rotX += PI/40;
        // TODO: curve down (like viewing from a globe)
      } else if (keyPressed && keyCode == RIGHT) {
        rotY -= PI/40;
        // TODO: curve to right
      } else if (keyPressed && keyCode == LEFT) {
        rotY += PI/40;
        // TODO: curve to right
      }
    }
    // handle set modes
    if (key == 'r') {
      rotateMode = true;
      translateMode = false;
    } else if (key == 't') {
      rotateMode = false;
      translateMode = true;
    }
  }
}
