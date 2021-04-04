



var bow, bowImage;
var ground, groundImage;
var score=0;
var redB,blueB,pinkB,greenB;
var arrowGroup;

function preload(){
 //load your images here 
 backgroundImage= loadImage("background0.png");
 bowImage=loadImage("bow0.png");
 red_BallonImage=loadImage("red_balloon0.png")
 blue_BallonImage=loadImage("blue_balloon0.png") 
 green_BallonImage=loadImage("green_balloon0.png") 
 pink_BallonImage=loadImage("pink_balloon0.png")  
 arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  
   ground=createSprite(0,0,500,600);
   ground.velocityX=-5;
   ground.x=ground.width/6;
   ground.addImage("ground",backgroundImage);
   ground.scale=2;
   
  
   bow=createSprite(380,100,30,70);
   bow.addImage("bow",bowImage);
  
   arrowGroup=new Group();
   redB=new Group();
   greenB=new Group();
   blueB=new Group();
   pinkB=new Group();
   
}

function draw() {
  
  background("white");
  
  bow.y=World. mouseY;
  
  if(ground.x<200){
     ground.x=ground.width/1; 
     
     }

if(keyDown("space")){
  var temp_arrow = createArrow();
  temp_arrow.addImage("arrow",arrowImage);
  temp_arrow.y=bow.y;
}
  
  if(arrowGroup.isTouching(redB)){
     redB.destroyEach();
     arrowGroup.destroyEach();
     score=score+3
  }
  
   if(arrowGroup.isTouching(blueB)){
     blueB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1
  }
  
  if(arrowGroup.isTouching(greenB)){
     greenB.destroyEach();
     arrowGroup.destroyEach();
     score=score+2
  }
  
  if(arrowGroup.isTouching(pinkB)){
     pinkB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
if(frameCount %80==0){
   if(select_balloon==1) {
    redBalloon(); 
   }else if(select_balloon == 2){
     greenBalloon();
   }else if(select_balloon == 3){
     blueBalloon();
   }else if(select_balloon == 4){
     pinkBalloon();
   }
}
  
  
  drawSprites();
  
  text("score : "+score,540,30);
}
function createArrow(){ 
  arrow=createSprite(360,100,5,10);
  arrowGroup.add(arrow);
  arrow.velocityX=-6;
  arrow.lifetime=60;
  arrow.scale=0.3;
  return arrow;
  
  
}

function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage("red",red_BallonImage);
  red.velocityX=3;
  red.lifetime=140;
  red.scale=0.1;
  
  redB.add(red);
}

function greenBalloon(){
  var green =createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage("green",green_BallonImage);
  green.velocityX=3;
  green.lifetime=140;
  green.scale=0.11;
  
  
  greenB.add(green);
}

function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage("blue",blue_BallonImage);
  blue.velocityX=3;
  blue.lifetime=140;
  blue.scale=0.1;
  
  blueB.add(blue);
}

function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage("pink",pink_BallonImage);
  pink.velocityX=3;
  pink.lifetime=140;
  pink.scale=1.3;
  
  
  pinkB.add(pink);
}