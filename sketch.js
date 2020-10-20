function setup() {
  ellipseMode(CENTER);
  createCanvas(600,600);

  angleMode(DEGREES);

}

function draw() {
  background("black");

  let hr = hour();
  let mn = minute();
  let sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  console.log(hr);
  console.log(mn);
  console.log(sc);

  translate(width, height);
  
  //seconds
  push ();
  rotate(scAngle);
  translate(p5.Vector.fromAngle(millis() / 60000, 40));
  stroke(255, 20, 147);
  strokeWeight(7);
  line(300, 300, 50, 200);
  pop(); 
  
  //minutes
  push ();
  rotate(mnAngle);
  translate(p5.Vector.fromAngle(millis() / 60000, 40));
  stroke(0, 206, 209);
  strokeWeight(7);
  line(300, 300, 50, 200);
  pop(); 

  //hours
  push ();
  rotate(hrAngle);
  translate(p5.Vector.fromAngle(millis() / 60000, 40));
  stroke(148, 0, 211);
  strokeWeight(7);
  line(300, 300, 200, 200);
  pop(); 

  drawSprites();
}