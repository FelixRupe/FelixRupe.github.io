class player {//needs global variables:
             //camx, camy
  
  constructor(tp_x = 0, tp_y = 0, tp_xv = 0, tp_yv = 0, 
          tp_visx = 0, tp_visy = 0, tp_maxv = 6,
          block_length = 10) {
    this.x = tp_x
    this.y = tp_y
    this.visx = tp_visx
    this.visy = tp_visy
    this.xv = tp_xv
    this.yv = tp_yv
    this.maxv = tp_maxv
    this.halflen = block_length/2
    this.length = block_length
    
    this.ydir = 0
    this.xdir = 0
    
    this.up = false
    this.down = false
    this.left = false
    this.right = false
  }
  //
  draw(r = 0, g = 0, b= 0) {
    fill(r, g, b)
    rect(this.visx-this.halflen, this.visy-this.halflen, this.length, this.length)
  }
  //
  move() {
    this.x += this.xv
    this.y += this.yv
  }
  //
  vis_set(camerax = 0, cameray = 0) {  //requires camera
    this.visx = this.x - camx;
    this.visy = this.y - camy;
  }
  //
  input(change = 0, reset = false) { //dont exceed 1
    this.ydir = 0
    this.xdir = 0
    
    if (this.up) {
      this.ydir = -1
    }
    if (this.down) {
      this.ydir = 1
    }
    if (this.left) {
      this.xdir = -1
    }
    if (this.right) {
      this.xdir = 1
    }
  }
  //
  // input_limit() {
  //   while(this.xdir>1) {
  //     this.xdir-=1
  //   }
  //   while(this.xdir<-1) {
  //     this.xdir+=1
  //   }
  //   while(this.ydir>1) {
  //     this.ydir-=1
  //   }
  //   while(this.ydir<-1) {
  //     this.ydir+=1
  //   }
  // }
  //
  vchange() {
    if (this.xdir > 0) {
      this.xv = this.maxv
    } else if (this.xdir < 0){
      this.xv = this.maxv * -1
    }
    if (this.ydir > 0) {
      this.yv = this.maxv
    } else if (this.ydir < 0){
      this.yv = this.maxv * -1
    }
    this.xv *= 0.9
    this.yv *= 0.9
  }
}