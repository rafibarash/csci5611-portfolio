// GLOBALS
String projectTitle = "Particle System";
float startFrame, endFrame, endPhysics, elapsedTime;
boolean perspectiveMode = true, cameraMode = false;

// Processing function to configure project
void setup() {
  size(1000, 1000, P3D);
  noStroke();             // So objects don't look weird
  initScene();            // Fetch dragon resources
}

// Processing function that is called every frame
void draw() {
  // Advance Time
  elapsedTime = millis() - startFrame; // used for dt in updateState
  startFrame = millis();        // used for runtime report
  
  // Simulate particle State
  updateState(elapsedTime / 1000);     // Updates state
  endPhysics = millis();               // used for runtime report
  
  // Render Particle State
  renderState();                       // Renders state
  endFrame = millis();                 // used for runtime report
  
  // Set display title with runtime report
  String runtimeReport = "Frame: " + str(endFrame - startFrame) + "ms," +
        " Physics: " + str(endPhysics - startFrame) + "ms," +
        " FPS: " + str(round(frameRate)) + "\n";
  surface.setTitle(projectTitle+ "  -  " +runtimeReport);
}

// Processing function, auto called on keyPress
void keyPressed() { 
  if (keyPressed) {
    if (key == 'p') {
      perspectiveMode = true;
      cameraMode = false;
    } else if (key == 'c') {
      perspectiveMode = false;
      cameraMode = true;
    }
    
  }
}
