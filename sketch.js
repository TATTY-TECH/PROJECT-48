const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var background;
var zombie;

var ball,slingshot;
var zombie_running;

var play_effect;
var starting_effect;

var gameState = "serve";

function preload(){
	ball_img = loadImage("Images/ball.png");
	backgroung_img = loadImage("Images/background.png");
	backgroung2_img = loadImage("Images/background2.jpg");
	slingshot_img = loadImage("Images/slingshot.png");
	play_effect = loadSound("Sound/play.mp3");
	starting_effect = loadSound("Sound/musicserve.mp3");
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;

	form = new Form();
	game = new Game();
	zombie = createSprite();
	ball = createSprite();
	ground = new Ground(displayWidth/2,displayHeight-100,displayWidth,10);

	slingshot = createSprite(displayWidth/2-430,displayHeight/2+170,100,75);
	slingshot.addImage(slingshot_img);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  if(gameState === "serve"){
	background(backgroung2_img);
    form.display();
	starting_effect.play();
	textSize(70);
	fill("green");
	stroke("brown");
	strokeWeight(15);
	text("CATAPULT KING",530,150);
	slingshot.visible = false;
  }
  else if(gameState === "play"){
    background(backgroung_img);
	slingshot.visible = true;
	zombie.display();
	ground.display();
	ball.display();
  }
  else{
	  console.log("ended");
  }

  function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
  }

  function keyPressed(){
    if(keyCode===32){
    slingshot.attach(ball.body)};
}
  
  drawSprites();
}

function spawnZombies(){
	if(frameCount % 60 === 0){
		
	}
}