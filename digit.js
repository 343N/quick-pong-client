function Digit (s, scale, x, y){

  this.scale = scale;
  this.x = x;
  this.y = y;
  this.s = s;


  this.top = [0, 0, 0];
  this.middle = 0;
  this.bottom = [0,0,0];


  if (this.s == 0){
    this.top = [1,1,1];
    this.bottom = [1,1,1];
  }
  if (this.s == 1){
    this.top[2] = 1;
    this.bottom[2] = 1;
  }
  if (this.s == 2){
    this.top = [0,1,1];
    this.middle = 1;
    this.bottom = [1,1,0];
  }
  if (this.s == 3){
    this.top = [0,1,1];
    this.middle = 1;
    this.bottom = [0,1,1];
  }
  if (this.s == 4){
    this.top = [1,0,1];
    this.middle = 1;
    this.bottom[2] = 1;
  }
  if (this.s == 5){
    this.top = [1,1,0];
    this.middle = 1;
    this.bottom = [0,1,1];
  }
  if (this.s == 6){
    this.top = [1,1,0];
    this.middle = 1;
    this.bottom = [1,1,1];
  }
  if (this.s == 7){
    this.top = [0,1,1];
    this.bottom[2] = 2;
  }
  if (this.s == 8){
    this.top = [1,1,1];
    this.middle = 1;
    this.bottom = [1,1,1];
  }
  if (this.s == 9){
    this.top = [1,1,1];
    this.middle = 1;
    this.bottom[2] = 1;
  }

  this.show = function(){
    fill(255);
    // stroke(255);
    noStroke();
    // rectMode(CENTER);
    if (this.top[0]) { fill(255) } else noFill();
    rect(this.x, this.y, 16 * this.scale, 48*this.scale);
    if (this.top[1]) { fill(255) } else noFill();
    rect(this.x, this.y,  this.scale*64, this.scale*16);
    if (this.top[2]) { fill(255) } else noFill();
    rect(this.x + (48 * this.scale), this.y, this.scale*16, this.scale*48);
    if (this.middle) { fill(255) } else noFill();
    rect(this.x, this.y + (this.scale*32), this.scale*64, this.scale*16);
    if (this.bottom[0]) { fill(255) } else noFill();
    rect(this.x, this.y + (this.scale*32), this.scale * 16, this.scale*48);
    if (this.bottom[1]) { fill(255) } else noFill();
    rect(this.x, this.y + (this.scale * 64), this.scale * 64, this.scale * 16);
    if (this.bottom[2]) { fill(255) } else noFill();
    rect(this.x + (this.scale * 48), this.y + (this.scale*32), this.scale*16, this.scale*48);
    // rectMode(CORNER)
  }

  this.getWidth = function(){
    return this.scale*64;
  }
  this.getHeight = function(){
    return this.scale*64;
  }




}
