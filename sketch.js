var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  
  
  
  car= createSprite(200, 400, 50, 80);
  car.shapeColor = "red";
  car.velocityX=5;
  wall = createSprite(400,400,200,10);
  wall.shapeColor = "blue";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if (isTouching(movingRect,fixedRect)){
 movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
  bounceOff(car,wall);
  drawSprites();
}
