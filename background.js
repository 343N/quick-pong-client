function Background(){

  this.b = 0;

  this.pulse = function(){
    this.b = 80;
  }

  this.pulseHeavy = function(){
    this.b = 255;
  }

  this.draw = function(){
    if (this.b > 0) this.b = lerp(this.b, 0, 0.15);
    background(this.b, this.b, this.b);
  }

}
