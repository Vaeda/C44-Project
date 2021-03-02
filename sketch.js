var SERVE = 0;
var START = 1
var PLAY = 2;
//var PLAYC = 3;
//var PLAYO = 4;
//var PLAYP = 5;
var END = 3;
var gameState = SERVE;
var score = 0;
var tiger, tigerImg, elaina, elainaImg, cat, catImg, owl, owlImg, prince, princeImg;
var play, playImg;

function preload() {
  playImg = loadImage("images/play.png");
  tigerImg = loadImage("images/tiger.png");
  elainaImg = loadImage("images/elaina.png");
  catImg = loadImage("images/cat.png");
  owlImg = loadImage("images/owl.png");
  princeImg = loadImage("images/prince.png");
}

function setup() {
  createCanvas(1000, 600);
  
  play = createSprite(500, 400, 50, 50);
  play.addImage(playImg);
  play.scale = 0.1;

  tiger = createSprite(550, 500, 50, 50);
  tiger.addImage(tigerImg);
  tiger.scale = 0.3;

  elaina = createSprite(200, 350, 50, 50);
  elaina.addImage(elainaImg);
  elaina.scale = 0.4;

  cat = createSprite(380, 150, 50, 50);
  cat.addImage(catImg);
  cat.scale = 0.3;

  owl = createSprite(700, 150, 50, 50);
  owl.addImage(owlImg);
  owl.scale = 0.35;

  prince = createSprite(900, 350, 50, 50);
  prince.addImage(princeImg);
  prince.scale = 0.35;
 
}
function draw() {
  background("lightblue");  
  if (gameState === SERVE) {
    tiger.visible = false;
    elaina.visible = false;
    cat.visible = false;
    owl.visible = false;
    prince.visible = false;
    //textSize(50);
    //stroke("red")
    //text("A Helping Hand", 300, 50);

    if(mousePressedOver(play)){
      gameState = START;
    }
  }
    if (gameState === START){
      play.visible = false;
      tiger.visible = true;
      elaina.visible = true;
      cat.visible = true;
      owl.visible = true;
      prince.visible = true;

      if(mousePressedOver(elaina) || mousePressedOver(cat) || mousePressedOver(owl) || mousePressedOver(prince)){
        gameState = PLAY;
      }
    }
    if (gameState === PLAY){
    if (mousePressedOver(elaina)){
      cat.visible = false;
      owl.visible = false;
      prince.visible = false;
      elainaPlay();
    }
    if (mousePressedOver(cat)){
      elaina.visible = false;
      owl.visible = false;
      prince.visible = false;
      catPlay();
    }
    if (mousePressedOver(owl)){
      cat.visible = false;
      elaina.visible = false;
      prince.visible = false;
      owlPlay();
    }
    if (mousePressedOver(prince)){
      cat.visible = false;
      owl.visible = false;
      elaina.visible = false;
      princePlay();
    }
    
  }
  drawSprites();
}
function elainaPlay() {
  var wall1 = createSprite(550, 550, 850, 10);
  wall1.shapeColor = "pink";
  var wall2 = createSprite(75, 550, 100, 10);
  wall2.shapeColor = "pink";
  var wall3 = createSprite(30, 300, 10, 500);
  wall3.shapeColor = "pink";
  var wall4 = createSprite(970, 370, 10, 355);
  wall4.shapeColor = "pink";
  var wall5 = createSprite(970, 75, 10, 50);
  wall5.shapeColor = "pink";
  var wall6 = createSprite(500, 55, 950, 10);
  wall6.shapeColor = "pink";
  var wall7 = createSprite(100, 450, 150, 7);
  wall7.shapeColor = "pink";
  var wall8 = createSprite(75, 415, 7, 65);
  wall8.shapeColor = "pink";
  var wall9 = createSprite(110, 385, 75, 7);
  wall9.shapeColor = "pink";
  var wall10 = createSprite(110, 335, 7, 100);
  wall10.shapeColor = "pink";
  var wall11 = createSprite(300, 500, 7, 100);
  wall11.shapeColor = "pink";
  var wall12 = createSprite(350, 500, 100, 7);
  wall12.shapeColor = "pink";
  var wall13 = createSprite(290, 400, 100, 7);
  wall13.shapeColor = "pink";
  var wall14 = createSprite(100, 250, 150, 7);
  wall14.shapeColor = "pink";
  var wall15 = createSprite(60, 90, 7, 125);
  wall15.shapeColor = "pink";
  var wall16 = createSprite(100, 100, 80, 7);
  wall16.shapeColor = "pink";
  var wall17 = createSprite(120, 60, 7, 75);
  wall17.shapeColor = "pink";
  var wall18 = createSprite(175, 250, 7, 125);
  wall18.shapeColor = "pink";
  var wall19 = createSprite(210, 200, 65, 7);
  wall19.shapeColor = "pink";
  var wall20 = createSprite(225, 120, 7, 160);
  wall20.shapeColor = "pink";
  var wall21 = createSprite(205, 100, 45, 7);
  wall21.shapeColor = "pink";
  var wall22 = createSprite(305, 50, 7, 100);
  wall22.shapeColor = "pink";
  var wall23 = createSprite(290, 50, 25, 7);
  wall23.shapeColor = "pink";
  var wall24 = createSprite(275, 250, 7, 175);
  wall24.shapeColor = "pink";
  var wall25 = createSprite(255, 335, 48, 7);
  wall25.shapeColor = "pink";
  var wall26 = createSprite(870, 400, 7, 150);
  wall26.shapeColor = "pink";
  var wall27 = createSprite(850, 325, 40, 7);
  wall27.shapeColor = "pink";
  var wall28 = createSprite(830, 260, 7, 150);
  wall28.shapeColor = "blue";
  var wall29 = createSprite(920, 450, 100, 7);
  wall29.shapeColor = "pink";

  //createEdgeSprites();
  //elaina.bounceOff(edges);
  elaina.bounceOff(wall1);
  elaina.bounceOff(wall2);
  elaina.bounceOff(wall3);
  elaina.bounceOff(wall4);
  elaina.bounceOff(wall5); 
  elaina.bounceOff(wall6);
  elaina.bounceOff(wall7);
  elaina.bounceOff(wall8);
  elaina.bounceOff(wall9);
  elaina.bounceOff(wall10);
  elaina.bounceOff(wall11);
  elaina.bounceOff(wall12);
  elaina.bounceOff(wall13);
  elaina.bounceOff(wall14);
  elaina.bounceOff(wall15);
  elaina.bounceOff(wall16);
  elaina.bounceOff(wall17);
  elaina.bounceOff(wall18);
  elaina.bounceOff(wall19);
  elaina.bounceOff(wall20);
  elaina.bounceOff(wall21);
  elaina.bounceOff(wall22);
  elaina.bounceOff(wall23);
  elaina.bounceOff(wall24);
  elaina.bounceOff(wall25);
  elaina.bounceOff(wall26);
  elaina.bounceOff(wall27);
  elaina.bounceOff(wall28);
  elaina.bounceOff(wall29);

  /*if (keyDown(DOWN_ARROW)) {
    elaina.velocityX = 0;
    elaina.velocityY = 4;
  } else {
  elaina.velocityX = 0;
  elaina.velocityY = 0;
  }*/
}
function catPlay() {
createSprite(700, 200, 30, 50);
}
function owlPlay() {
createSprite(100, 600, 30, 50);
}
function princePlay() {
createSprite(900, 300, 30, 50);
}