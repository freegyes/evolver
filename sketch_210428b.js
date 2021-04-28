var offset;

function setup() {
  createCanvas(751, 751);
  noFill();
  stroke(17, 23);
  offset = 0;
}

function draw() {
  var x2 = width  * noise(offset + 11);
  var y2 = height * noise(offset + 23);
  var x3 = width  * noise(offset + 29);
  var y3 = height * noise(offset + 41);
  var x5 = width  * noise(offset + 53);
  var y5 = height * noise(offset + 67);
  var x7 = width  * noise(offset + 71);
  var y7 = height * noise(offset + 83);

  bezier(x2, y2, x3, y3, x5, y5, x7, y7);
  
  offset += noise(offset)/101;
 
}
