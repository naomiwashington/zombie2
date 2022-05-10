var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
 shooter_shooting = loadImage("assets/shooter_3.png")
 bgImg = loadImage("assets/bg.jpeg")
 zombieImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50)
player.addImage(shooterImg)
player.scale = 0.3


}

function draw() {
  background(0); 

if(keyDown("UP_ARROW")){
  player.y = player.y+30
}

if(keyDown("DOWN_ARROW")){
player.y = player.y+30

}
if(keyDown("space")){
  player.addImage(shooter_shooting)
}
  
enemy()

drawSprites();

}

function enemy(){
  if(frameCount%50===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug = true
    zombie.setCollider("rectangle",0,0,400,400)

    zombie.lifetime = 400
  }


}

