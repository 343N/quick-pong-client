function Racquet(isClient) {

    this.isClient = isClient;
    this.frozen = false;
    this.y = 300;

    this.width = 16;
    this.height = 100;

    if (isClient) {
        this.x = 80
    } else {
        this.x = 720 - this.width
    };


}

Racquet.prototype.show = function() {

    fill(255);
    rect(this.x, this.y, this.width, this.height);
    // if (!this.frozen){
    // if (this.isClient){
    // rect(this.x, this.y, this.width, this.height);
    // } else {
    // }


}

Racquet.prototype.AI = function(b, diff) {
    if (!this.isClient) {
        this.y = lerp(this.y, b.y - this.height/2, diff);
        // console.log(this.y);
    }
}
