var monkey , monkey_running;
var Banana ,bananaImage, Obstacle, obstacleImage;
var BananaGroup, obstacleGroup;
var ground;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(600,400);
  
 monkey = createSprite(50,330,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.2;

 ground = createSprite(300,390,1200,20);
 ground.velocityX = -4;
  
 bananaGroup = new Group();
 obstacleGroup = new Group();
  
}


function draw() {
  background(300);
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = 300;
    }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  if (monkey.isTouching(bananaGroup)){
      score = score+1;
      bananaGroup.destroyEach();
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  spawnBanana();
  spawnObstacle();
  
  obstacleGroup.setLifetimeEach(200);
  bananaGroup.setLifetimeEach(200);
  
  stroke("pink");
  textSize(20);
  fill("pink");
  text("Score : "+ score, 400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/60);
  text("Survival time : "+ survivalTime, 100,50);
  
  drawSprites(); 
}

function spawnObstacle(){
  if (frameCount % 200 === 0){
     var Obstacle = createSprite(600,350,10,40);
     Obstacle.addImage(obstacleImage);
     Obstacle.velocityX = -2;
     Obstacle.scale = 0.2;
     obstacleGroup.add(Obstacle);
  }
}

function spawnBanana(){
  if (frameCount % 200 === 0){
      Banana = createSprite(600,340,10,40);
      Banana.y = Math.round(random(120,230));
      Banana.addImage(bananaImage);
      Banana.velocityX = -2;
      Banana.scale = 0.2;
      bananaGroup.add(Banana);    
   }
}






