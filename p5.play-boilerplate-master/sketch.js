const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  base = new Ground(390,360 ,250,20);
  base2 = new Ground(550,240 ,180,20);
  
  polygon = new Polygon(50,200,20)
  
  sling = new SlingShot(polygon.body,{x:50,y:100})  
  

  // first pyramid
  block1 = new Box(390,215,30,40);
  block2 = new Box(420,255,30,40);
  block3 = new Box(390,255,30,40);
  block4 = new Box(360,255,30,40);
  block5 = new Box(450,295,30,40);
  block6 = new Box(420,295,30,40);
  block7 = new Box(390,295,30,40);
  block8 = new Box(330,295,30,40);
  block9 = new Box(360,295,30,40);
  block10 = new Box(390,295,30,40);
  block11 = new Box(420,335,30,40);
  block12 = new Box(450,335,30,40);
  block13 = new Box(480,335,30,40);
  block14 = new Box(390,335,30,40);
  block15 = new Box(360,335,30,40);
  block16 = new Box(330,335,30,40);
  block17 = new Box(300,335,30,40)
//  //second pyramid
block20 = new Box(545,135,30,40);
block21 = new Box(575,175,30,40);
block22 = new Box(545,175,30,40);
block23 = new Box(515,175,30,40);
block24 = new Box(485,215,30,40);
block25 = new Box(515,215,30,40);
block26 = new Box(545,215,30,40);
block27 = new Box(575,215,30,40);
block28 = new Box(605,215,30,40)
 //
// World.add(engine.world, polygon.body);
//   World.add(engine.world, block1.body);
//   World.add(engine.world, block2.body);
//   World.add(engine.world, block3.body);
//   World.add(engine.world, block4.body);
//   World.add(engine.world, block5.body);
//   World.add(engine.world, block6.body);             
//   World.add(engine.world, block7.body);
//   World.add(engine.world, block8.body);
//   World.add(engine.world, block9.body);
//   World.add(engine.world, block10.body);
//   World.add(engine.world, block11.body);
//   World.add(engine.world, block12.body);
//   World.add(engine.world, block13.body);
//   World.add(engine.world, block14.body);
//   World.add(engine.world, block15.body);
//   World.add(engine.world, block16.body);
//   World.add(engine.world, block17.body);
//   World.add(engine.world, block20.body);
//   World.add(engine.world, block21.body);
//   World.add(engine.world, block22.body);
//   World.add(engine.world, block23.body);
//   World.add(engine.world, block24.body);
//   World.add(engine.world, block25.body);
//   World.add(engine.world, block26.body);
//   World.add(engine.world, block27.body);
//   World.add(engine.world, block28.body);
}


function draw() {
  background(0,0,0);  
  Engine.update(engine)
  ground.display();
  base.display();
  base2.display();
  sling.display();
  polygon.display();
  // display pyramid 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
 // dispaly pyramid 2
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(polygon.body);
  }
}