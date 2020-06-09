class real_ball {
  constructor(temp_x = width / 2, temp_y = height / 2,
              temp_xv = 0, temp_yv = 0) {
    this.x = temp_x;
    this.y = temp_y;
    this.xv = temp_xv;
    this.yv = temp_yv;
    this.width = 10;
    this.height = 10;
  }
  fall(temp_grav) {
    this.yv += temp_grav;
  }
  move(man_xv = 0, man_yv = 0) {
    this.x += this.xv + man_xv;
    this.y += this.yv + man_yv;
  }
  edge_bounce(resistance = 0) {
    if (this.x < 0 || this.x >= width) {
      this.xv *= -1;
      this.x += this.xv;
      this.xv *= resistance;
      this.yv *= resistance;
    }
    if (this.y < 0 || this.y >= height) {
      this.yv *= -1;
      this.y += this.yv;
      this.yv *= resistance;
      this.xv *= resistance;
    }
  }
  draw() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}