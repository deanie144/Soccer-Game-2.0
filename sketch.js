var cartoonboy1, cartoonboy2;
var fieldImg, field;
var ball;
var goal1, goal2;
var cartoon1, cartoon2;
var soccerball;
var cartoon2score = 0;
var cartoon1score = 0;
var gameState = "start";
var edges;
var soccergoal1, soccergoal2;


function preload() {
cartoonboy1 = loadImage("soccerboy1.jpg")
cartoonboy2 = loadImage("cartoonboy2.jpg")
fieldImg = loadImage("soccerfield.jpg")
ball = loadImage("soccerball.jpg")
soccergoal1 = loadImage("goal1.png");
soccergoal2 = loadImage("goal1.png");
}


function setup() {
  createCanvas(800,400);
  cartoon1 = createSprite(150, 200, 70, 70);
  cartoon1.addImage("first player", cartoonboy1)
  cartoon1.scale = 0.1;

  cartoon2 = createSprite(650, 200, 70, 70)
  cartoon2.addImage("second player", cartoonboy2)
  cartoon2.scale = 0.1;
  cartoon2.velocityY = 2

  soccerball = createSprite(400, 200, 70, 70)
  soccerball.addImage("soccerball", ball)
  soccerball.scale = 0.1;
  soccerball.velocityX = 2.5;

  goal1 = createSprite(60, 200, 100, 100);
  goal1.addImage("goa1", soccergoal1)
  goal1.scale = 0.3;

  goal2 = createSprite(730, 200, 100, 100);
  goal2.addImage("goal2", soccergoal2)
  goal2.scale = 0.3;
}

function draw() {
  background(fieldImg); 
  fill("red");
  text(cartoon1score, 80, 60);
  text(cartoon2score, 110, 60)

  if(soccerball.isTouching(cartoon2)) {
    soccerball.velocityX = -6;
    soccerball.velocityY = -6;
  }
  if(soccerball.isTouching(cartoon1)) {
    soccerball.velocityX = 6;
    soccerball.velocityY = 6;
  }
  
  if(keyDown("left")) {
    if(cartoon1.x > 50 ) {
      cartoon1.x = cartoon1.x-10;
    }
  }
  if(keyDown("right")) {
    if(cartoon1.x < 400) {
      cartoon1.x = cartoon1.x+10;
    }
  }
  if(keyDown("up")) {
    if(cartoon1.y < 400) {
      cartoon1.y = cartoon1.y-10;
    }
  }
  if(keyDown("down")) {
    if(cartoon1.y < 300) {
      cartoon1.y = cartoon1.y+10;
    }
  }
  cartoon2.position.y = soccerball.position.y

  edges = createEdgeSprites();
  soccerball.bounceOff(edges)

  if(soccerball.isTouching(goal1)) {
    soccerball.bounceOff(goal1);
    cartoon2score = cartoon2score + 1;

  }


  if(soccerball.isTouching(goal2)) {
    soccerball.bounceOff(goal2);
    cartoon1score = cartoon1score + 1;
  }

  if(cartoon1score === 5 || cartoon2score === 5) {
    text("Game Over!", 300, 300);
    soccerball.velocityX = 0;
    soccerball.velocityY = 0;
    cartoon2.velocityY = 0;
    text("Press r to restart", 300, 350);


   if(keyDown("r")) {
     cartoon1score = 0;
     cartoon2score = 0;
     soccerball.x = 400;
     soccerball.y = 200;
     soccerball.velocityX = 6;
     soccerball.velocityY = 6;
   }
  }

  drawSprites();
}