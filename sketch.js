var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thichness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey"
}

function draw() {
  background("black");  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(d>10){
      wall.shapeColor="yellow";
    }
    if(d<10){
        wall.shapeColor="red";
    }
   
  }
  drawSprites();
}
function hascollided(lb,lw){
  b=lb.x+lb.width;
  w=lw.x
  if (b>=w){
    return true
  }
  return false
}