// Eulerian Integration
// Determine new position & velocity via integrals
void numericalIntegration(PVector pos, PVector vel, PVector acc, float dt) {
  // TODO: Optimize and use half timestep for eulerian integration
  pos.add(PVector.mult(vel, dt));  // y(t+1) = y(t) + y'(t)*dt
  vel.add(PVector.mult(acc, dt));
}
