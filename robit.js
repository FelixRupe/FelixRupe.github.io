let heady = 0;
let headyv = 2;

let allx = 100;
let allxv = 0;

let dispx = -266;

function setup() {
createCanvas(800, 450);
strokeWeight(2);
ellipseMode(RADIUS);
}
function draw() {
background(204);
// Neck
stroke(102); // Set stroke to gray
line(266+allx+dispx, 257, 266+allx+dispx, 162+heady); // Left
line(276+allx+dispx, 257, 276+allx+dispx, 162+heady); // Middle
line(286+allx+dispx, 257, 286+allx+dispx, 162+heady); // Right
// Antennae
line(276+allx+dispx, 155+heady, 246+allx+dispx, 112+heady); // Small
line(276+allx+dispx, 155+heady, 306+allx+dispx, 56+heady); // Tall
line(276+allx+dispx, 155+heady, 342+allx+dispx, 170+heady); // Medium
// Body
noStroke(); // Disable stroke
fill(102); // Set fill to gray
ellipse(264+allx+dispx, 377, 33, 33); // Antigravity orb
fill(0); // Set fill to black
rect(219+allx+dispx, 257, 90, 120); // Main body
fill(102); // Set fill to gray
rect(219+allx+dispx, 274, 90, 6); // Gray stripe
// Head
fill(0); // Set fill to black
ellipse(276+allx+dispx, 155+heady, 45, 45); // Head
fill(255); // Set fill to white
ellipse(288+allx+dispx, 150+heady, 14, 14); // Large eye
fill(0); // Set fill to black
ellipse(288+allx+dispx, 150+heady, 3, 3); // Pupil
fill(153); // Set fill to light gray
ellipse(263+allx+dispx, 148+heady, 5, 5); // Small eye 1
ellipse(296+allx+dispx, 130+heady, 4, 4); // Small eye 2
ellipse(305+allx+dispx, 162+heady, 3, 3); // Small eye 3

heady += headyv
headyv -= heady/200

allx += allxv
allxv = (mouseX-allx)/15

}