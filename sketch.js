function setup() {
  createCanvas(800,400);
 ball = createSprite(400, 200, 50, 50);
 ball.shapeColor = "blue"

 ground = createSprite(200, 350, 1200, 20)
 ground.shapeColor="brown"

rectangle = createSprite(300, 200, 50, 20)
rectangle.shapeColor = "black"


rectangle1 = createSprite(500, 200, 50, 20)
rectangle1.shapeColor = "black"
}

function draw() {

  background("red");
  rectangle.y = World.mouseY
rectangle.x = World.mouseX 
  drawSprites();
}