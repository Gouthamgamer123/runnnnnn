var man , man_running ;
var pathimg;
function preload(){
  //pre-load images
  pathimg =loadImage("path.png");
  man_running =loadAnimation("Runner-1","Runner-2");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path = createSprite(200,200,5,5);
 path.addImage("path" , pathimg);
 path.x=path.width/2;

 man = createSprite(150,200,10,10);
 man .addAnimation("runnig", man_running);

 man.scale = 0.5;
man.x=200;


}

function draw() {
  background("red");
  path.velocityY= -4;

if(path.y<0)
{
path.x=path.width/2;
}

console.log(path.y);
console.log(man.x);
man.velocityX = man.velocityX +0.5

drawSprites();

}
