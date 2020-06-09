let true_cor = {
midpointx : 400,
midpointy : 300
};
let tl_cor = {
midpointx : 200, //less than true
midpointy : 140 //less than true
};
let tr_cor = {
midpointx : 450, //more than true
midpointy : 80 //less than true
};
let bl_cor = {
midpointx : 130, //less than true
midpointy : 320 //more than true
};
let br_cor = {
midpointx : 420, //more than true
midpointy : 380 //more than true
}
  
function setup() {
  let canvas = createCanvas(500, 500);
  random()
  true_cor.midpointx = random(100, width-100)
  true_cor.midpointy = random(100, width-100)
  //random midpoints in relation to the true midpoints

  tl_cor.midpointx = random(30, true_cor.midpointx-30)
  tl_cor.midpointy = random(30, true_cor.midpointy-30)
  tr_cor.midpointx = random(true_cor.midpointx+30, width-30)
  tr_cor.midpointy = random(30, true_cor.midpointy-30)
  bl_cor.midpointx = random(30, true_cor.midpointx-30)
  bl_cor.midpointy = random(true_cor.midpointy+30, height-30)
  br_cor.midpointx = random(true_cor.midpointx+30, width-30)
  br_cor.midpointy = random(true_cor.midpointy+30, height-30)
  
}

function draw() {
  background(100);
//TOP LEFT BOX  
  let tl_box = {
    left : 0,
    top : 0,
    midx : tl_cor.midpointx,
    midy : tl_cor.midpointy,
    right : true_cor.midpointx,
    bottom : true_cor.midpointy,
  }
  //top left
  fill(250)
  rect(tl_box.left, tl_box.top, tl_box.midx, tl_box.midy);
  //top right
  fill(20, 0, 100)
  rect(tl_box.midx, tl_box.top, tl_box.right-tl_box.midx, tl_cor.midpointy);
  //bottom left
  fill(10)
  rect(0, tl_cor.midpointy, tl_cor.midpointx, true_cor.midpointy-tl_cor.midpointy);
  //bottom right
  fill(250)
  rect(tl_cor.midpointx, tl_cor.midpointy, true_cor.midpointx-tl_cor.midpointx, true_cor.midpointy-tl_cor.midpointy);
  
  //TOP RIGHT BOX
    //top left
    fill(190, 40, 40)
    rect(true_cor.midpointx, 0, tr_cor.midpointx-true_cor.midpointx, tr_cor.midpointy);
    //top right
  fill(220, 200, 40)
    rect(tr_cor.midpointx, 0, width-tr_cor.midpointx,  tr_cor.midpointy);
    //bottom left
  fill(20, 0, 100)
    rect(true_cor.midpointx, tr_cor.midpointy, tr_cor.midpointx-true_cor.midpointx, true_cor.midpointy-tr_cor.midpointy);
    //bottom right
  fill(250)
    rect(tr_cor.midpointx, tr_cor.midpointy, width-tr_cor.midpointx,  true_cor.midpointy-tr_cor.midpointy);
  
  //BOTTOM LEFT BOX
    //top left
  fill(220, 200, 40)
    rect(0, true_cor.midpointy, bl_cor.midpointx, bl_cor.midpointy-true_cor.midpointy);
    //top right
  fill(190, 40, 40)
    rect(bl_cor.midpointx, true_cor.midpointy, true_cor.midpointx-bl_cor.midpointx, bl_cor.midpointy-true_cor.midpointy);
    //bottom left
  fill(20)
    rect(0, bl_cor.midpointy, bl_cor.midpointx, width-bl_cor.midpointy);
    //bottom right
  fill(20, 0, 100)
    rect(bl_cor.midpointx, bl_cor.midpointy, true_cor.midpointx-bl_cor.midpointx, width-bl_cor.midpointy);
  
  //TOP RIGHT BOX
    //top left
  fill(240)
    rect(true_cor.midpointx, true_cor.midpointy, br_cor.midpointx-true_cor.midpointx, br_cor.midpointy-true_cor.midpointy);
    //top right
  fill(190, 40, 40)
    rect(br_cor.midpointx, true_cor.midpointy, width-br_cor.midpointx, br_cor.midpointy-true_cor.midpointy);
    //bottom left
  fill(20)
    rect(true_cor.midpointx, br_cor.midpointy, br_cor.midpointx-true_cor.midpointx, height-br_cor.midpointy);
    //bottom right
  fill(220, 200, 40)
    rect(br_cor.midpointx, br_cor.midpointy, width-br_cor.midpointx, height-br_cor.midpointy);
}