let canvasx = 600;
let ratio = 4/3;
let inv_ratio = 3/4;

let camx = 0;
let camy = 0;
let camslow = 20;
let edge_dist;

let points = [];
let point = [];
let spaces = 25;
let sqr_length;
let draw_error = 2;

let cp;
let cam;

let wacky;

//             [[up][down][left][right]]
let keycodes = [[38, 87],[40, 83],[37, 65],[39, 68]] //unused

function setup() { //////////////////////////////
  createCanvas(canvasx, canvasx*inv_ratio);
  
//tile setup
  let fillcol;
  wacky = random(1)
  sqr_length = width/spaces;
  for (y = -5*height; y < 5*height; y += sqr_length) {
    for(x = -5*width; x < 5*width; x += sqr_length) {
      
      if (wacky > 0.3) {
        fillcol = [
          (random(1)*width*height)/sqrt(abs(x*y)),
          (random(1)*width*height)/sqrt(abs(x*y)),
          (random(1)*width*height)/sqrt(abs(x*y))
        ]
      } else {
        fillcol = random(50, 200);
        fillcol = fillcol/abs(x*y) *height*width
        if (fillcol > 255) {
          fillcol = 255 
        }
        fillcol *= 0.9
      }
      point = [x, y, fillcol];
      //[x, y, fill]
      points.push(point);
    }
  }
  edge_dist = sqr_length * 6;
//player setup
  //(x, y, xv, yv, visx, visy, maxv, length)
  cp = new player(0, 0, 0, 0, 0, 0, 0.32 * sqr_length, sqr_length);
  cam = new camera(camx, camy, camslow);
}

function draw() {////////////////////////////////
  background(0, 200, 255);
  
//Moving camera
  cam.move(cp)
  camx = cam.x
  camy = cam.y

  //tile drawing
  let tilex;
  let tiley;
  noStroke();
  for (index = 0; index < points.length; index++) {
    tilex = points[index][0] - camx;
    tiley = points[index][1] - camy;
    if (tilex >= 0-sqr_length && tilex <= width &&
        tiley >= 0-sqr_length && tiley <= height){
      fill(points[index][2]);
      rect(tilex, tiley, sqr_length+draw_error, sqr_length+draw_error);
    }
  }
  
//player
    //moving player
  //cp.input_limit();
  cp.vis_set(camx, camy);
  cp.vchange();
  cp.move();
  cp.input()
  
  //drawing player
  cp.draw(100, 0, 150)

}

//player inputs
function keyPressed() {
  if (up_check(keycodes)) { //up
    cp.up = true
  }
  if (down_check(keycodes)) { //down
    cp.down = true
  }
  if (left_check(keycodes)) { //left
    cp.left = true
  }
  if (right_check(keycodes)) { //right
    cp.right = true
  }
}

function keyReleased() {
  if (up_check(keycodes)) { //up
    cp.up = false
  }
  if (down_check(keycodes)) { //down
    cp.down = false
  }
  if (left_check(keycodes)) { //left
    cp.left = false
  }
  if (right_check(keycodes)) { //right
    cp.right = false
  }
}


function up_check(codeslist) {
  for (code = 0; code < codeslist[0].length; code++) {
    if (keyCode == codeslist[0][code]) {
      return true
    }
  }
  return false
}

function down_check(codeslist) {
  for (code = 0; code < codeslist[1].length; code++) {
    if (keyCode == codeslist[1][code]) {
      return true
    }
  }
  return false
}

function left_check(codeslist) {
  for (code = 0; code < codeslist[2].length; code++) {
    if (keyCode == codeslist[2][code]) {
      return true
    }
  }
  return false
}

function right_check(codeslist) {
  for (code = 0; code < codeslist[3].length; code++) {
    if (keyCode == codeslist[3][code]) {
      return true
    }
  }
  return false
}

