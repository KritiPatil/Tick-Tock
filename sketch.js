const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  ellispeMode(CENTER);
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  let hr = hour();
  let mn = minute();
  let sc = second();

  angleMode(DEGREES);

  console.log(hr);
  console.log(mn);
  console.log(sc);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  /*push ();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();*/
}

function draw() {
  background("black");
  Engine.update(engine);
  
  push ();
  rotate(scAngle);
  stroke(255, 20, 147);
  strokeWeight(7);
  line(400, 400, 391, 10);
  pop(); 
  
  push ();
  rotate(mnAngle);
  stroke(0, 206, 209);
  strokeWeight(7);
  line(400, 200, 395, 10);
  pop(); 

  push ();
  rotate(hrAngle);
  stroke(148, 0, 211);
  strokeWeight(7);
  line(400, 200, 393, 100);
  pop(); 

  drawSprites();
}