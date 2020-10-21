
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	tree = new Tree(1200,400,800,800)
	

	ground = new Ground(800,780,1600,20)


	boy = new Boy(300,695,200,300)


	mango1 = new Mango(1400,300,50,50)

	mango2 = new Mango(1300,200,50,50)

	mango3 = new Mango(1000,250,50,50)

	mango4 = new Mango(1100,150,50,50)

	mango5 = new Mango(1200,200,50,50)

	mango6 = new Mango(1400,200,50,50)

	mango7 = new Mango(1250,100,50,50)	

	mango8 = new Mango(1150,250,50,50)

	mango9 = new Mango(1050,350,50,50)

	mango10 = new Mango(1500,250,50,50)

	mango11 = new Mango(1250,280,50,50)

	mango12 = new Mango(900,250,50,50)


	Launchrock = new Rock(245,630,50,50)

	rock2 = new Rock(200,760,50,50)

	rock3 = new Rock(500,760,50,50)

	rock4 = new Rock(800,760,50,50)

	rock5 = new Rock(600,760,50,50)

	rock6 = new Rock(1500,760,50,50)

	launcher = new Launcher(Launchrock.body,{x: 245,y: 630})
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(225);
	
	launcher.display();

	tree.display();

	ground.display();

	boy.display();

	Launchrock.display();
	rock2.display();
	rock3.display();
	rock4.display();
	rock5.display();
	rock6.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	
	drawSprites();

 
}

function mouseDragged()  {
	Matter.Body.setPosition(Launchrock.body,{x: mouseX, y: mouseY})


}

function mouseReleased()  {
	Launchrock.fly()

}