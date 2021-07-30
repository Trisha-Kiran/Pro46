//variables
var ground;
var ironMan, ultron;
var ironManImg1, ironManImg2, ultronImg1, ultronImg2,spaceImg,spaceImg2;
function preload(){
  //loaded the images
  ironManImg1 = loadImage("ironman1.png");
  ironManImg2 = loadImage("ironman2.png");
  spaceImg = loadImage("spaceImg.png");
  ultronImg1 = loadImage("ultron1.png");
  ultronImg2 = loadImage("ultron2.png");
  spaceImg2 = loadImage("spaceImg2.png");
}

function setup() {
  //created the canvas
  createCanvas(1000,550);
  //created the objects and added images
  ground = createSprite(350, 275, 200, 20);
  ironMan = createSprite(50,280,20,10);
  ironMan.addImage("ironManFlying",ironManImg1);
  ground.addImage("bgImg",spaceImg);
  //adjusting the background
  ground.scale=ground.scale+0.5;
}

function draw() { 
  //setting the background
  background(spaceImg2);  
  //adding velocity to ground making it infinite
  ground.velocityX = -4;
  if(ground.x<0){
    ground.x = ground.width/2
  }
  //controls for ironMan
if(keyDown(UP_ARROW)){
  ironMan.y = ironMan.y-4
}
if(keyDown(DOWN_ARROW)){
  ironMan.y = ironMan.y+4
}
//call the functions
spawnUltrons();

  drawSprites();
}
//function to spawn ultrons randomly
function spawnUltrons(){
  if(frameCount%60===0){
    ultron = createSprite(1000,300,20,20);
    ultron.addImage("ultronFlying",ultronImg1);
    ultron.velocityX = -4
    ultron.y = Math.round(random(50,500));
  }
}
