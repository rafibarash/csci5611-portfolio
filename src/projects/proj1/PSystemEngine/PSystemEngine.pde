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
  PShape crate = loadShape("Crate.obj");
  systems.add(new Fire(new PVector(width/2, height/1.2, camZ), new PVector(0, -1, 0), textureImg, 1));
  systems.add(new Water(new PVector(width/5, height/3, camZ), new PVector(3, -2, 0), textureImg, 2));
  objects.add(new Object(new PVector(width/1.5, height/2, camZ), crate));
  rotateX(90);
}
 
// Processing function that is called every frame
void draw() {
  // Advance Time
  elapsedTime = millis() - startFrame;  // used for dt in state update
  startFrame = millis();                // used for runtime report
  
  // Update State
  ArrayList<ParticleSystem> collidingSystems = new ArrayList();
  for (ParticleSystem ps : systems) {
    if (ps.type == PS_TYPE.WATER) {
      // WATER
      PVector gravity = new PVector(0.0, 0.1, 0);
      ps.applyForce(gravity);
      //collidingSystems = new ArrayList() {
      //  { add(systems.get(0)); }  // fire ps
      //};
    } else if (ps.type == PS_TYPE.FIRE) {
      // FIRE
      //ps.applyRepeller(repeller);
      //float dx = map(mouseX,0,width,-0.2,0.2);
      //PVector wind = new PVector(dx,0, 0);
      //ps.applyForce(wind);
      //collidingSystems = new ArrayList() {
      //  { add(systems.get(1)); }  // water ps
      //};
    }
    ps.update(elapsedTime / 10, collidingSystems);
    
  }
  endPhysics = millis();               // used for runtime report
  
  // Render State
  background(255);
  handlePerspective();
  Iterator<ParticleSystem> it = systems.iterator();
  while (it.hasNext()) {
    ParticleSystem ps = it.next();
    ps.render();
    if (ps.isDead()) {
       it.remove();
    }
  }
  //for (Object o : objects) {
  //  o.render();
  //}
  //repeller.render();
  endFrame = millis();                 // used for runtime report
  
  // Set display title with runtime report
  String runtimeReport = "Frame: " + str(endFrame - startFrame) + "ms," +
        " Physics: " + str(endPhysics - startFrame) + "ms," +
        " FPS: " + str(round(frameRate)) + "\n";
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
        rotX -= PI/30;
        // TODO: curve in as curving upwards (like viewing from a globe)
      } else if (keyPressed && keyCode == DOWN) {
        rotX += PI/30;
        // TODO: curve down (like viewing from a globe)
      } else if (keyPressed && keyCode == RIGHT) {
        rotY += PI/20;
        // TODO: curve to right
      } else if (keyPressed && keyCode == LEFT) {
        rotY -= PI/20;
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
