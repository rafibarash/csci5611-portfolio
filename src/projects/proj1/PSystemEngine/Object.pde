class Object {
  PShape shape;
  PVector pos;
  PVector size = new PVector(100, 100);
  
  Object(PVector pos, PShape shape) {
    this.pos = pos;
    this.shape = shape;
  }
  
  Object(PVector pos, PVector size, PShape shape) {
    this.pos = pos;
    this.size = size;
    this.shape = shape;
  }
  
  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    scale(60);
    rotateX(radians(180));
    shape(shape);
    popMatrix();
  }
}
