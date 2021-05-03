const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var helicopterIMG, helicopterSprite, packageSprite ,packageIMG;
var world, engine;
var ground, packageBody, box1, box2, box3;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
  createCanvas(700,800);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  packageSprite = createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6
  
  ground = createSprite(width/2, height-150, width, 10);
  ground.shapeColor = color(255);

  box1 = createSprite(275, height-195, 10, 75);
  box1.shapeColor = color("red");

  box2 = createSprite(width/2, height-157, 150, 10);
  box2.shapeColor = color("red");

  box3 = createSprite(425, height-195, 10, 75);
  box3.shapeColor = color("red");


var ground_p = {
    isStatic : true 
}

  ground = Bodies.rectangle(width/2, 650, 100, 20, ground_p);

var box2_p = {
    isStatic : true
}

  box2 = Bodies.rectangle(width/2, 770, 150, 10, box2_p);
  World.add(world, ground, packageBody, box2);

  var packageBody_p = {
    restitution: 0.5 
}

packageBody = Bodies.circle(width/2,100,20,packageBody_p);
}

function draw(){
  background(0);
  Engine.update(engine);
  packageSprite.y = packageBody.position.y
  packageSprite.x = packageBody.position.x

  
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
   
     var packageBody_p = {
     restitution: 0.5
   }


   packageBody = Bodies.circle(width/2,100,20,packageBody_p);
   World.add(world,packageBody);
   }
 }

 