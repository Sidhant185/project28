
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	mango = loadImage("images/mango.png");
	stone = loadImage("images/stone.png");
	tree = loadImage("images/tree.png");
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1 = new boy(100,100,200,200)
	Ground1 = new Ground(400,height,800,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  Ground1.display();

  drawSprites();
 
}



