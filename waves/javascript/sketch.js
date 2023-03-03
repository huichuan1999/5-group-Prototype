let canvas;

let displayState = 0;

[a, b, c, d] = [-2.0, -2.0, -0.5, -0.7]
W=1000
r=200;
cont=110;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  
  H=W/2
  D=H/20
  C=15
  P=[]
  stroke(W)
}

function draw() {
  background(0);

  stroke(255)
  strokeWeight(1)
  
  
  translate(windowWidth/2, windowHeight/2)
  stroke(0,0,random(200,255))
  
  t = millis()/10000
  
  x = millis()/2000
  y = millis()/2000

  prevX = x
  prevY = y
  
  for(let n = 0; n < 1000; n++){
    x =  sin(a * prevY + t)*cos(a * prevX + t) + c * cos(a * prevX + t) * sin(b * prevX + t)
  	y =  sin(b * prevX + t)*cos(b * prevY + t) + d * cos(b * prevY + t) * sin(a * prevY + t)
    

    point(130 * x, 130 * y)

    prevX = x
    prevY = y
  }
  
  
  translate(-W/2, -W/2)
  
  stroke(255)
  
  P.length<W&&P.push({x:H,y:H})
	C+=.01
  i=3
  for(_ of P)with(_){
    mag(x-H,y-H)<33&&(x=random(W),y=0)
		n=noise(x/W-C,y/W-i++*.05)*PI*4
    line(x,y,x+=cos(n)*6-(x-H)/D,y+=sin(n)*6-(y-H)/D)
  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}