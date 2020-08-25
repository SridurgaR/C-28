
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var chain;
var boy, boyImage;


function preload()
{
	boyImage = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//boy = createSprite(350,850,10,10);
	//boy.addImage(boyImage);
	ground = new Ground (width/2,580,1300,15);
	console.log(ground);
	tree = new Tree (850,300,600,600);
	rock = new Stone (300,510,60,60);
	mango1 = new Mango (810,150,45,45);
	mango2 = new Mango (890,220,45,45);
	//mango3 = new Mango ()
	
	boy = Bodies.rectangle(310,480,250,250);
	World.add(world,boy);
	

console.log(rock);
	var options = {
		bodyA : boy,
		bodyB : rock.body, // "body" will give just the body of the rock
		length : 10,
		stiffness : 1
	}
	chain = Constraint.create(options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  imageMode(CENTER);
  image(boyImage,boy.position.x,boy.position.y,250,250);
  rock.display();
  mango1.display();
  mango2.display();
  //rect(310,530,50,50);


detectCollision(rock,mango1);
detectCollision(rock,mango2);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	rock.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Body.setPosition(rock.body, {x:235, y:420})
		launcherObject.attach(rock.body);
}
}
function detectCollision(rock,mango){
	mangoBodyPosition = mango.body.position;
	rockBodyPosition = rock.body.position;

	var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= mango.r + rock.r)
	{
		Body.setStatic(mango.body, false);
	}
}
