var sprite
function setup() {
  createCanvas(1350,600);
  sprite = createSprite (700,500)
}

function draw() 
{
  background("red");
  
  if (keyDown("right")){ 
    background("red");

sprite.x=sprite.x+5
  }
  if (keyDown("left")){
    background("blue");
    sprite.x=sprite.x-5

  }
  if (keyDown("down")){
    background("black");
    sprite.y=sprite.y+5
      }
      if (keyDown("up")){
        background("pink");
        sprite.y=sprite.y-5
          }
          drawSprites()
}




