var monkey_running,monkey;
var banana_Image;
var obstacle_Image;
var ground,ground2,jungle_Image;
var Score=0;



function preload(){
 jungle_Image=loadImage("jungle.jpg");  
 monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_Image=loadImage("banana.png");
  obstacle_Image=loadImage("stone.png");
}

function setup(){
    createCanvas(600, 600);
  ground=createSprite(300,180,600,20);
  ground.addImage("ground",jungle_Image);
  
  
  monkey = createSprite(60,450,20,50);
   monkey.scale = 0.11;
     ground2=createSprite(300,490,600,20)
       ground2.visible=false;  
  ground2.velocittyX=-6
   
  
  
  monkey.addAnimation("running",monkey_running);
  bananaGroup=new Group();
  obstaclesGroup=new Group();
 
   
 
  
}

function draw() {
  background(220);

  if (ground2.x<0) {
   ground2.x=ground2.width/2;
    }
  drawSprites();
  if(keyDown("space") && monkey.y >= 430  ){
      monkey.velocityY = -17;
         
    }
  fill("black");
  textSize(20);
  text("SCORE:" + Score, 240, 250);
    
   monkey.velocityY =monkey.velocityY + 0.8;
    monkey.collide(ground2);
  
  spawnobstacle();
  spawnfood();
  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    Score=Score+2;
    switch(Score){
      case 10 : monkey.scale=0.12;
                break;
      case 20 : monkey.scale=0.13;
                break;          
      case 30 : monkey.scale=0.14;
                break;
      case 40 : monkey.scale=0.15;
                break;
            
    }
    
  }
  
  
  if (obstaclesGroup.isTouching(monkey)) {
    ground2.velocityX = 0;
    monkey.scale=0.10
    
  }

    

  


}


function spawnfood() {
  if (World.frameCount%150===0) {
    var banana = createSprite(300, 375, 25, 25);
    banana.addImage("banana",banana_Image);
    banana.velocityX = -3;
    banana.scale = 0.05;
    bananaGroup.add(banana);
    banana.lifetime = 134;
  }
}
function spawnobstacle() {
  if (World.frameCount%80===0) {
    var stone = createSprite(400, 450, 10, 40);
    stone.addImage("Stone",obstacle_Image);
    stone.velocityX = -5;
             
    stone.scale = 0.14;
    stone.lifetime = 170;
   
    obstaclesGroup.add(stone);
  }
}


















