class mango {
    constructor(x, y){
        var options = {isStatic:true, restitution:0, friction:1};
        this.radius = 65
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         imageMode(CENTER);
         rectMode(CENTER);
         fill(255, 0, 255);
         image(this.image, 0, 0, this.radius, this.radius);
         //ellipse(0, 0, this.radius)
         pop();

     }
}