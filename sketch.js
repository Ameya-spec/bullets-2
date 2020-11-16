var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(600, 200, 50, 400);
 movingRect=createSprite(600,200,40,40);
 fixedRect.debug=true;
 movingRect.debug=true;
 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
fixedRect.velocityX=4;

}
function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  bounce (fixedRect,movingRect);
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.heigth/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.heigth/2){
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";

  }
  drawSprites();
}
