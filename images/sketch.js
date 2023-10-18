let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height); 
  mImg.loadPixels(); 
  print(mImg.pixels.length); 
  noLoop(); 
}

function draw() {
  background(220, 20, 120);

  for(let vi = 0; vi<mImg.pixels.length; vi+=4) {
    let redVal = mImg.pixels[vi]; 
    let greenVal = mImg.pixels[vi+1]; 
    let blueVal = mImg.pixels[vi+2]; 
    let alphaVal = mImg.pixels[vi+3]; 

    let maxVal = max(redVal, greenVal, blueVal);
    // if(maxVal == redVal) { 
    //   mImg.pixels[vi + 0] = 255; 
    // } else if (maxVal == greenVal) {
    //   mImg.pixels[vi + 1] = 255; 
    //}
     if (maxVal == blueVal) {
      mImg.pixels[vi + 3] = 0; 
  }
}
  mImg.updatePixels(); 
  image(mImg,(width - mImg.width)/2, 0);

}
