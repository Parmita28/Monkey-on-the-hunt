var monkey,monkey_running;
var banana,bananaImage,FoodGroup;
var obstacle,obstacleImage,obstaclesGroup;
var ground;
var survivalTime=0;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
}

function setup() {
 createCanvas(600,500);
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1
  
 ground=createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x = ground.width/2;
 console.log(ground.x);
  
 FoodGroup=new Group();
 obstaclesGroup=new Group();
  
 FoodGroup.debug = true;
}

function draw() {
 background("white");

if(ground.x>0){
  ground.x=ground.width/2;
}
  
if(keyDown("space")){
  monkey.velocityY=-12
}
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroy();
}
  
  spawnFoodGroup();
  spawnobstaclesGroup();
 drawSprites();
  

  
stroke("white");
textSize(20);
fill("white");

stroke("black");
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("SurvivalTime: "+survivalTime,100,50);
  
if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX=0;
  monkey.velocityX=0;
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1); 
}
}
 
function spawnFoodGroup(){
if(World.frameCount%80===0){
  banana=createSprite(600,240,40,10);
  banana.y=Math.round(random(100,150));
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.lifetime=300
}}

function spawnobstaclesGroup(){
if(World.frameCount % 80 === 0){
 obstacle = createSprite(600,310,10,40);
var rand = Math.round(random(1,6));
 obstacle.addImage("obstacle",obstacleImage);
 obstacle.velocityX = -6;
 obstacle.scale =0.2;
 obstacle.lifetime = 600;
 obstaclesGroup.add(obstacle);
 }}