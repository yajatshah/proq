var ball;
function setup() {

  createCanvas(400,400);
  ball=createSprite(259,150,10,10)
}

function draw() 
{
  background(20);
//changeing the colour
if (keyIsDown(RIGHT_ARROW)){
  background("blue"); 
}
if (keyIsDown(LEFT_ARROW)){
  background("green"); 
}
if (keyIsDown(UP_ARROW)){
  background("yellow"); 
}
if (keyIsDown(DOWN_ARROW)){
  background("red"); 
}
drawSprites()
}




