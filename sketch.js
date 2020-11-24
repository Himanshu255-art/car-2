var bullet,wall;
var speed,weight;
var thickness;
function setup(){
  createCanvas(1600,400);

speed=random(223,321)
weight=random(30,52);
thickness=random(22,83)

  bullet =createSprite(80,180,50,30)
  bullet.velocityX=speed
  bullet.shapeColor="white"

  wall=createSprite(1500,200,thickness,height/2)
 wall.shapeColor=color("white")
}

function draw(){
 background("olive")



 
 if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  wall.shapeColor="yellow";
}
if(deformation<180 && deformation>100)
{
  wall.shapeColor="red"
}
if(deformation<100)
{
  wall.shapeColor="violet"
}
}


  
  drawSprites();
}

