// Created for CSCI 5611

// Here is a simple processing program that demonstrates the central math used in the check-in
// to create a bouncing ball. The ball is integrated with basic Eulerian integration.
// The ball is subject to a simple PDE of constant downward acceleration  (by default, 
// down is the positive y direction).

// If you are new to processing, you can find an excellent tutorial that will quickly
// introduce the key features here: https://processing.org/tutorials/p3d/

String projectTitle = "Bouncing Ball";

//Animation Principle: Store object & world state in external variables that are used by both
//                     the drawing code and simulation code.
PVector position, velocity, acceleration;
float side = 600;
float radius = 40;

//Creates a 600x600 window for 3D graphics 
void setup() {
 size(625, 625, P3D);
 noStroke(); //Question: What does this do?
 // set some values
 position = new PVector(width / 2, 200, 300);
 velocity = new PVector(20, 0, -15);
 acceleration = new PVector(0, 9.8, 0);
}

//Animation Principle: Separate Physical Update 
void computePhysics(float dt){
  // compute and update x values
  float[] updated_x = numericalIntegration(position.x, velocity.x, acceleration.x, dt);
  position.x = updated_x[0]; 
  velocity.x = updated_x[1]; 
  acceleration.x = updated_x[2];
  // compute and update y values
  float[] updated_y = numericalIntegration(position.y, velocity.y, acceleration.y, dt);
  position.y = updated_y[0]; 
  velocity.y = updated_y[1]; 
  acceleration.y = updated_y[2];
  // compute and update z values
  float[] updated_z = numericalIntegration(position.z, velocity.z, acceleration.z, dt);
  position.z = updated_z[0]; 
  velocity.z = updated_z[1]; 
  acceleration.z = updated_z[2];
}

// Compute Eulerian Numerican Integration
float[] numericalIntegration(float pos, float vel, float accel, float dt) {
  pos = pos + vel * dt;  //Question: Why update position before velocity? Does it matter?
  vel = vel + accel * dt;
  
  //Handle collision with wall (update velocity if we hit a bottom or right sides)
  if (pos + radius > side){
    pos = side - radius; //Robust collision check
    vel *= -.95; //Coefficient of restitution (don't bounce back all the way) 
  }
  
  //Handle collision with wall (update velocity if we hit left or top sides)
  if (pos - radius - 25 < 0) {
    pos = radius + 25;
    vel *= -.95;
  }
  
  float[] updatedVals = {pos, vel, accel};
  return updatedVals;
}

// Get mouse position
PVector mousePos() {
  return new PVector(mouseX, mouseY);
}

// Get prev mouse position
PVector pmousePos() {
  return new PVector(pmouseX, pmouseY);
}

// Returns whether or not mouse has collided with ball
boolean isCollision(float mouse_x, float mouse_y) {
  return (abs(mouse_x - position.x) < radius && abs(mouse_y - position.y) < radius);
}

// If new collision with mouse, update velocity
void handleMouseCollision() {
  if (isCollision(mouseX, mouseY) && !isCollision(pmouseX, pmouseY)) {
    // get mouse direction and magnitude
    PVector dir = PVector.sub(mousePos(), pmousePos());
    float normalizer = 0.05;
    float magnitude = dir.mag() * normalizer;
    // update ball velocity
    velocity.x += (dir.x * magnitude);
    velocity.y += (dir.y * magnitude);
  }
}

//Animation Principle: Separate Draw Code
void drawScene(){
  background(255,255,255);
  fill(0,200,10); 
  lights();
  translate(position.x, position.y, position.z); 
  sphere(radius);
}

//Main function which is called every timestep. Here we compute the new physics and draw the scene.
//Additionally, we also compute some timing performance numbers.
void draw() {
  float startFrame = millis(); //Time how long various components are taking
  
  //Compute the physics update
  handleMouseCollision();
  computePhysics(0.15); //Question: Should this be a fixed number?
  float endPhysics = millis();
  
  //Draw the scene
  drawScene();
  float endFrame = millis();
  
  String runtimeReport = "Frame: "+str(endFrame-startFrame)+"ms,"+
        " Physics: "+ str(endPhysics-startFrame)+"ms,"+
        " FPS: "+ str(round(frameRate)) +"\n";
  surface.setTitle(projectTitle+ "  -  " +runtimeReport);
  //print(runtimeReport);
}
