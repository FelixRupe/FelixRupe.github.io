let ball_array = [];

function setup() {
  createCanvas(400, 400);
  let initx;
  let inity;
  let initxv;
  let inityv;
  for (index = 0; index < 30; index++) {
    initx = random(0, width)
    inity = random(height, height/2)
    initxv = random(-5, 5);
    inityv = random(-20, 15);
    ball_array[index] = new real_ball(initx, inity, initxv, inityv);
  }
}

function draw() {
  background(220);
  
  for (iter = 0; iter < ball_array.length; iter++) {
    ball_array[iter].move();
    ball_array[iter].edge_bounce(0.96); //0 - 1
    ball_array[iter].fall(0.8);
    ball_array[iter].draw();
  }

}

