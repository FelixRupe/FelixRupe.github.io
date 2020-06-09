class camera {
  
  constructor(tp_camx, tp_camy, tp_camslow) {
    this.x = tp_camx
    this.y = tp_camy
    this.slow = tp_camslow
  }
  
  print_check(variable) {
    print(variable.x)
  }
  
  move(mvr) {
    if (mvr.visx-mvr.halflen < edge_dist) {//left
      this.x -= abs(edge_dist-(mvr.visx-mvr.halflen))/this.slow;
      mvr.visx = mvr.x - this.x;
    }
    if (mvr.visx+mvr.halflen > width - edge_dist) {//right
      this.x += abs((mvr.visx+mvr.halflen)-(width-edge_dist))/this.slow;
      mvr.visx = mvr.x - this.x;
    }  
    if (mvr.visy-mvr.halflen < edge_dist) {//up
      this.y -= abs(edge_dist-(mvr.visy-mvr.halflen))/this.slow;
      mvr.visy = mvr.y - this.y;
    }  
    if (mvr.visy+mvr.halflen > height - edge_dist) {//down
      this.y += abs((mvr.visy+mvr.halflen)-(height-edge_dist))/this.slow;
      mvr.visy = mvr.y - this.y;
    }
  }
}