function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(6);
}

function draw() {
  background(0);
  stroke(255);
  translate(width/2,height/2);
  
  for(let i=0;i<360;i++){
  rotate(i);
  }
  
  //rotate(frameCount);
  branch(70);
  
}

function branch(len){
  let newAng = map(mouseY , 0 , height, 0, TWO_PI);
  //line(0,0,0,-len);
  fill(random(100,255),random(255));
  triangle(0,0,len,-len*0.67,len,len);
  push();
  translate(0,-len + height/4);
  //push();

  //push();
  if(len>4){
  translate(0,-len);

  rotate(newAng);
  branch(len*0.67);
 
  rotate(-newAng);
  branch(len*0.67)

  rotate(newAng);
  branch(-len*0.67)

  rotate(-newAng);
  branch(-len*0.67)
  
  }

  pop();
}