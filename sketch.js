const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var treee,treeimg;
var boy ,boyimg;
var rock;
var chain;

function preload()
{
	treeimg=loadImage("plucking_mangoes/tree.png")
	boyimg=loadImage("plucking_mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true
	}
	//Create the Bodies Here.
    ground=new Ground(400,680,800,20);

	tree=Bodies.rectangle(600,490,options);
    boy=Bodies.rectangle(200,620,options);
	
	mango1=new Mango(560,345,10);
	mango2=new Mango(510,385,10);
	mango3=new Mango(550,470,10);
    mango4=new Mango(500,430,10);
    mango5=new Mango(750,420,10);
	mango6=new Mango(600,470,10);
	mango7=new Mango(600,420,10);
	mango8=new Mango(630,380,10);
    mango9=new Mango(650,450,10);
    mango10=new Mango(690,420,10);
	mango11=new Mango(710,460,10);
	
	rock=new Stone(105,575,30,30);
	chain = new Slingshot(rock.body,{x:140,y:570});	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,200,222);

  textSize(30)
  fill(0)
  text("Press space to get a second Chance to Play!!",20,70)
  imageMode(CENTER);
  image(treeimg,tree.position.x, tree.position.y, 400,400);

  imageMode(CENTER);
  image(boyimg,boy.position.x, boy.position.y, 200,200);

    detectollision(rock,mango1);
    detectollision(rock,mango2);
    detectollision(rock,mango3);
    detectollision(rock,mango4);
    detectollision(rock,mango5);
    detectollision(rock,mango6);
    detectollision(rock,mango7);
    detectollision(rock,mango8);
    detectollision(rock,mango9);
    detectollision(rock,mango10);
    detectollision(rock,mango11);

  chain.display();
  ground.display();
  rock.display();
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

}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(rock.body,{x:100,y:575})
	  chain.attach(rock.body);
	}
}

function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.radius+lstone.radius)
    {
        Matter.Body.setStatic(lmango.body,false)
    }
}

