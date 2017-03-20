function Ball(vx, vy){

  this.vx = vx;
  this.vy = vy;
  this.speedscale = 1;

  this.x = 400;
  this.y = 300;

  this.size = 10;



  this.show = function() {

    // rectMode(CENTER);
    // rect(this.x, this.y, this.size, this.size);

    fill(255);
    rect(this.x - (this.size / 2), this.y - (this.size / 2), this.size, this.size);



  }

  this.checkCollision = function(cw){
    if (this.y > height || this.y < 0) this.vy = -this.vy;
    if (this.y < 0) this.y = this.size / 2;
    if (this.y > height) this.y = height - (this.size / 2);
    if (this.x < 0){
        awardPoint(true);
    } else if (this.x > width){
        awardPoint(false);
    }
  }

  this.bounce = function(p){
    this.vx = -this.vx;
    this.speedscale += .25;
    this.vy = map((this.y - p.y), 0, p.height, -300 * this.speedscale, 300 * this.speedscale);
    if (p){
      (p.isClient) ? this.x = p.x + p.width : this.x = p.x;
    }
    bg.pulse();
    beat.play();
  }




  this.checkPaddleCollision = function(p){
    if ((this.x < p.x + p.width && this.x > p.x) && (this.y > p.y && this.y < p.y + p.height)){
      this.bounce(p);
    }
  }

  this.resetPos = function(){
    this.x = 400;
    this.y = 300;
    this.speedscale = 1;
  }

  this.updatePos = function(timestep) {
    this.x += this.vx * timestep * this.speedscale;
    this.y += this.vy * timestep;
  }


}
