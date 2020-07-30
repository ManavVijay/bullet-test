var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  bulletSpeed = random(223,321);
  bulletWeight = random(30,52)

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "80,80,80";

}

function draw() {
  background("white"); 

  deformation = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness, thickness, thickness

  drawSprites();
}