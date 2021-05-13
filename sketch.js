
var monkey , monkey_running,monkeyi
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup
var score;
var ground;
var score=0;
var gameState="play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  monkeyi=loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(650, 400);
   monkey=createSprite(40,340,20,20);
   monkey.addAnimation("mo",monkey_running);

  monkey.scale=0.15;
  
  ground=createSprite(300,395,1800,20);
  ground.velocityX=-6;
  ground.shapeColor="brown";
  FoodGroup=createGroup();
  obstaclesGroup=createGroup();
}

function draw() {
  background(220);
  drawSprites();
  ground.velocityX=-6;
  if(gameState==="play"){
     if(keyDown("space")){
      
     monkey.velocityY=-14 ;
        
  } 
    obstacles();
  food();
     if(monkey.isTouching(FoodGroup)){
    score=score+1;
    FoodGroup.destroyEach();
       } 
      if(monkey.isTouching(obstaclesGroup)){
    gameState="end"  ;
    obstaclesGroup.destroyEach();
    } 
   
  }
    

  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground); 
 
  console.log(ground.velocityX );
    console.log(ground.y);
  if(monkey.isTouching(obstaclesGroup)){
   gameState="end";
    
  } 
  if(gameState==="end"){
    ground.velocityX=0;
     obstaclesGroup.SetVelocityXEach=0;
     FoodGroup.velocityX=0;
 monkey.changeAnimation("mo",monkeyi);
    
  }
 
   
  
  
  text(score,250,200)
}
function obstacles(){
  if(frameCount%200===0){
    var obstacle=createSprite(700,360,10,10);
    obstacle.velocityX=-6;
    obstacle.scale=0.15;
    obstacle.addImage("hi",obstaceImage);
    obstaclesGroup.add(obstacle);
  }
}
function food(){
  if(frameCount%120===0){
    var food=createSprite(700,230,10,10);
    food.velocityX=-6;
    food.scale=0.075;
    food.addImage("hi",bananaImage);
    FoodGroup.add(food);
  }
}






