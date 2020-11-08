
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var stone1;
var boy1;
var slingShot1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree(750, 400, 500, 500);
	ground1 = new ground(500, 640, 1000, 20);
	stone1 = new stone(140, 200);
	boy1 = new boy(200, 570, 230, 250);
	slingShot1 = new slingShot(stone1.body, {x:100, y:100});

	mango1 = new mango(930, 340);
	mango2 = new mango(820, 297);
	mango3 = new mango(790, 210);
	mango4 = new mango(690, 250);
	mango5 = new mango(620, 330);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  boy1.display();
  slingShot1.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot1.fly();
}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPositon = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}



