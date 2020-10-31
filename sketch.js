var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400,400,50,80);
 fixedRect.shapeColor = "green";
 //fixedRect.velocityY = +5;
 movingRect = createSprite(800,400,80,30);
 movingRect.shapeColor = "green";
 movingRect.velocityY = -5;

gameObject1 = createSprite(800, 200, 50, 50);
gameObject1.shapeColor = "green";
gameObject1.velocityY=+5
gameObject2 = createSprite(200, 100, 50, 50);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(300, 100, 50, 50);
gameObject3.shapeColor = "green";
gameObject4 = createSprite(400, 100, 50, 50);
gameObject4.shapeColor = "green";

}

function draw() {
  background(0); 
  //movingRect.y = World.mouseY;
 // movingRect.x = World.mouseX;
  
  /*if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }*/

bounceOff(movingRect,gameObject1);

  drawSprites();
}
