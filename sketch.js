var doreamon,doreamon_img;
var ground;

function preload()
{
      doreamon_img = loadImage("doreamon12.png"); 
      ground_img = loadImage("ground.png");
      doracake_img = loadImage("food.png");
      mouse_img = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png","mouse5.png")
}

function setup() {
 createCanvas(800,400);
   
 doreamon = createSprite(150, 380, 50, 50);
 doreamon.addImage(doreamon_img);
 doreamon.scale = 0.7;
 doreamon.debug = true;

 ground = createSprite(250, 380, 1000, 20);
 ground.addImage(ground_img);
 ground.velocityX = -2;
 
 invisibleground = createSprite(200, 400, 1000, 20);
 invisibleground.visible = false;
}


function draw() {
 background("white");  


 if(ground.x < 0)
 {
   ground.x = ground.width/2;
 }

 doreamon.collide(invisibleground);
 spawnmouse();
 doracakes();
 drawSprites();
}

function doracakes()
{ 
   if(frameCount %60 === 0)
   {
    doracake = createSprite(800,200,20,20);
    doracake.y = Math.round(random(50,250));
    doracake.addImage(doracake_img);
    doracake.velocityX = -3;
    doracake.scale = 0.2;
   }

}

function spawnmouse()
{ 
   if(frameCount%80 === 0)
   {
   mice = createSprite(800,300,20,20);
   mice.x = Math.round(random(300,800));
    mice.addAnimation("mouse image" ,mouse_img);
    mice.velocityX = -3;
    mice.scale = 0.2;
   }
   

}
