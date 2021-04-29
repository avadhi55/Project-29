const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var slingShot,polygon,polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}


function setup() {
  createCanvas(900,400);	
  
  engine = Engine.create();
  world = engine.world;
    
  //Creating object from class :)
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,170,10);

  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //LEVEL TWO START
  //level three of second
  block17 = new Block(650,174,25,35);
  block18 = new Block(675,174,25,35);
  block19 = new Block(700,174,25,35);
  block20 = new Block(725,174,25,35);
  block21 = new Block(750,174,25,35);

  //level two of second
  block22 = new Block(675,139,25,35);
  block23 = new Block(700,139,25,35);
  block24 = new Block(725,139,25,35);

  //level one of second
  block25 = new Block(700,100,25,35);
  
  polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:150,y:160});
}

function draw() {
  background(255,253,208); 
  Engine.update(engine);

  

  //display everthing
  stand1.display();
  stand2.display();
  ground.display();
  
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  strokeWeight(2);
  stroke(15);
  fill(255,252,1);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(13,177,179);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block22.display();
  block23.display();
  block24.display();

  fill(256,178,156);
  block13.display();
  block14.display();
  block15.display();
  block25.display();

  fill(85,140,204);
  block16.display();
  fill(226,0,66);
  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x: mouseX,y:mouseY});
}
function mouseReleased() {
  slingShot.fly();
}

