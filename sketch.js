var brick,b1
var cloud,c1
var enemy,e1
var mario,m1
var road,r1
var brkGroup;
var GameOver,Gover;
var coin1,coin2,coin3,coin4,coin5,coins
var groupCoin
var score=0

function spawnBricks() {
 if(frameCount%100===0){
  b1=createSprite(500, 100, 50, 50)
  b1.addImage("B1",brick)
  b1.velocityX=-5
  b1.y=Math.round(random(150,250))
  brkGroup.add(b1)
 }
}

function spawnClouds() {
  if(frameCount%100===0){
    c1=createSprite(500, 100, 50, 50);
    c1.addImage("C1",cloud)
    c1.velocityX=-4
    c1.y=Math.round(random(100,150))
  }
}

function spawnEnms() {
  if(frameCount%100===0){
    e1=createSprite(500, 280, 50, 50)
    e1.addAnimation("E1",enemy)
    e1.velocityX=-6
    e1.scale=0.8
    e1.collide(r1)
    
  }
}

function spawnCoins() {
  var r1=Math.round(random(60,200))
  if(frameCount%r1===0) {
    var coin=createSprite(500,250,10,10)
    coin.addAnimation("cc",coins)
    coin.velocityX=-4
    coin.y=Math.round(random(200,250))
    groupCoin.add(coin)
    coin.scale=0.2
  }
}


function preload() {
 brick=loadImage("images/b1.png")
 cloud=loadImage("images/c1.png") 
 enemy=loadAnimation("images/e1.png","images/e2.png")
 mario=loadAnimation("images/mm1.png","images/mm2.png","images/mm4.png")
 road=loadImage("images/road1.png")
 GameOver=loadImage("images/NES - Super Mario Bros - Time Up Game Over Screens and Text.png")
 coins=loadAnimation("images/coin1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png")

}

function setup() {
  createCanvas(500,300);
  
  Gover=createSprite(250,150,10,10)
  Gover.addImage("GO",GameOver)
  Gover.visible=false
  Gover.scale=3
 
  m1=createSprite(50, 190, 50, 50)
  m1.addAnimation("M1",mario)

  r1=createSprite(250, 290, 500, 10)
  r1.addImage("R1",road)



  brkGroup=createGroup()
  groupCoin=createGroup()


}

function draw() {
  background(0,138,197);

  textSize(18)
  text("score"+score,450,20)

  m1.collide(r1)
  if(keyDown("space")){
  m1.velocityY=-8
  }
  r1.velocityX=-5
  if(r1.x<0){
    r1.x=250
  }
  if(keyDown("right")){
   m1.velocityX=1
  }
  m1.velocityY=m1.velocityY+0.8
  m1.collide(brkGroup)

  if(m1.x<0){
  Gover.visible=true
  }

  if(m1.isTouching(groupCoin)) {
    groupCoin.setVelocityYEach(-6)
    score=score+1
   

  }
  
  drawSprites();
  spawnBricks();
  spawnClouds();
  spawnEnms();
  spawnCoins();
}