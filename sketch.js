
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	Ground=new ground(500,650,1500,20)
	Tree=new tree(780,550,20,290)
	Boy=new boy(235,570,20,100)
	stone=new Stone(180,405,20,100)
	Mango = new mango(750,430,20)
	mango1=new mango(930,480,20)
	mango2=new mango(680,400,20)
	mango3=new mango(690,480,20)
	mango4=new mango(850,450,20)
	mango5=new mango(700,435,20)
	mango6=new mango(765,480,20)
	mango7=new mango(820,350,20)
	mango8=new mango(920,420,20)
	mango9=new mango(710,400,20)
	chain1=new Chain(stone.body,{x:200,y:405})
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  Ground.display()
  Tree.display()
  Boy.display()
  stone.display()
  Mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango9.display()
  mango8.display()
  chain1.display()
  
 
}

function mouseDragged(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
	chain1.fly()
}

function detectCollision(lstone,lmango){
	if(lstone.body.position.x-lmango.body.position.x<lmango.diameter+lstone.diameter
		&& lmango.body.position.x-lstone.body.position.x<lmango.diameter+lstone.diameter
		&& lmango.body.position.y-lstone.body.position.y<lmango.diameter+lstone.diameter
		&& lmango.body.position.y-lstone.body.position.y<lmango.diameter+lstone.diameter){
			Matter.Body.setStatic(lmango.body,false)
		}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465})
		attach.Launch(stone.body)
	}
}



