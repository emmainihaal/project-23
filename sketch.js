var car , wall;
var speedd , weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);

  //car = createSprite()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}