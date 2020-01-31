import java.util.List;
import java.util.Arrays;

/******************************************
 * Globals
 *****************************************/
 
PShape dragon1, dragon2;
float camX, camY, camZ = -150;
Fire fire1;
Water water1;
Explosion explosion1;
ArrayList<PVector> objectPositions;  // [dragon1, dragon2, fire1, water1, explosion1]

/******************************************
 * Initialization
 *****************************************/

// fetch resources to initialize scene
void initScene() {
  dragon1 = loadShape("Dragon.obj");
  dragon2 = loadShape("Dragon.obj");
  // Init fire1
  int fire1GenRate = 4000;
  int fire1MaxLife = 3;
  PVector fire1InitVel = new PVector(300, 0, 0);
  float fire1Radius = 80;
  fire1 = new Fire(fire1GenRate, fire1MaxLife, fire1InitVel, fire1Radius);
  // Init water1
  int water1GenRate = 2000;
  int water1MaxLife = 3;
  PVector water1InitVel = new PVector(300, 0, 0);
  float water1Radius = 80;
  water1 = new Water(water1GenRate, water1MaxLife, water1InitVel, water1Radius);
  // Init object positions;
  objectPositions = new ArrayList<PVector>();
  PVector dragon1Pos = new PVector(camX + width - 10, camY + height/2 - 30, camZ);  // dragon1 position
  PVector dragon2Pos = new PVector(camX + 10, camY + height/2 - 30, camZ);          // dragon2 position
  PVector fire1Pos = new PVector(camX + width - 10, camY + height/7, camZ);         // fire1 position
  PVector water1Pos = new PVector(camX + 10, camY + height/7, camZ);                // water1 position
  PVector explosion1Pos = new PVector(width / 2, camY + height/7, camZ);            // explosion1 position
  List<PVector> positions = Arrays.asList(dragon1Pos, dragon2Pos, fire1Pos, water1Pos, explosion1Pos);
  objectPositions.addAll(positions);
}

/******************************************
 * Update State
 *****************************************/
 
// update state of objects, called each frame in draw()
void updateState(float dt) {
  // TODO: Simulate particle state
  updateFireState(dt, fire1);
  updateWaterState(dt, water1);
}

void updateFireState(float dt, Fire fire) {
  // Generate Particles
  // Assign particle attributes
  fire.genParticles(dt);
  // update position, other attributes
  fire.updateParticles(dt);
  // Particle Extinction
}

void updateWaterState(float dt, Water water) {
  // Generate Particles
  // Assign particle attributes
  water.genParticles(dt);
  // update position, other attributes
  water.updateParticles(dt);
  // Particle Extinction
}

/******************************************
 * Render State
 *****************************************/
 
// render state of objects, called each frame in draw()
void renderState() {
  background(255);
  setLights();
  handlePerspective();
  // Render characters
  renderCharacters();
  // Render Particle Systems
  renderFire(fire1);
  renderWater(water1);
}

// sets lighting
void setLights() {
  // Fill me in
  lights();   // default lighting
  // ambientLight(r,g,b); object evenly lit on four sides
  //ambientLight(200, 200, 200);
  // directionalLight(r, g, b, x, y, z); object hit with light based on xyz direction vector, scatters in all directions
  //directionalLight(0, 255, 0, 1, 0, 0);
  // spotLight(); defined with rgb, xyz direction, xyz location, spotlight angle, concentration
  //spotLight(255, 0, 0, width/2, height/2, 400, 0, 0, -1, PI/4, 2);
}

// binds view of scene to arrow keys
void handlePerspective() {
  // Set zoom (z)
  // camZ = (mouseX - width/1.5) * 1.5;
  // Handle keys
  if (perspectiveMode) {
    if (keyPressed && keyCode == UP) {
      camY += 10;
    } else if (keyPressed && keyCode == DOWN) {
      camY -= 10;
    } else if (keyPressed && keyCode == RIGHT) {
      camX -= 10;
    } else if (keyPressed && keyCode == LEFT) {
      camX += 10;
    }
  } else if (cameraMode) {
    if (keyPressed && keyCode == UP) {
      camX += 1;
      camY += 10;
      camZ += 10;
      // TODO: curve in as curving upwards (like viewing from a globe)
    } else if (keyPressed && keyCode == DOWN) {
      camX += 1;
      camY -= 10;
      camZ += 10;
      // TODO: curve down (like viewing from a globe)
    } else if (keyPressed && keyCode == RIGHT) {
      camX -= 10;
      camY += 1;
      camZ += 10;
      // TODO: curve to right
    } else if (keyPressed && keyCode == LEFT) {
      camX += 10;
      camY += 1;
      camZ += 10;
      // TODO: curve to right
    }
  }
}

// draws all characters in the scene
void renderCharacters() {
  renderDragon1();
  renderDragon2();
}

// draw dragon1
void renderDragon1() {
  pushMatrix();
  translate(camX + width - 10, camY + height/2 - 30, camZ);
  //rotateX(135);
  rotateX(PI);        // make dragon upright
  //rotateY(-PI / 2);   // rotate dragon facing left
  rotateY(-5*PI / 8);
  //rotateY(PI);
  rotateZ(0);
  shape(dragon1, 0, 0, 200, 200);
  //dragon1.rotateY(0.01);
  popMatrix();
}

// draw dragon2
void renderDragon2() {
  pushMatrix();
  translate(camX + 10, camY + height/2 - 30, camZ);
  //rotateX(135);
  rotateX(PI);        // make dragon upright
  //rotateY(PI / 2);    // rotate dragon facing right
  rotateY(5*PI / 8);
  rotateZ(0);
  shape(dragon2, 0, 0, 200, 200);
  //dragon1.rotateY(0.01);
  popMatrix();
}

void renderFire(Fire fire) {
  pushMatrix();
  translate(camX + width - 10, camY + height/7, camZ);
  rotateY(PI);
  fire.renderParticles();
  popMatrix();
}

void renderWater(Water water) {
  pushMatrix();
  translate(camX + 10, camY + height/7, camZ);
  water.renderParticles();
  popMatrix();
}
