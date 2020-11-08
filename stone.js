class stone {
    constructor(x, y){
        var options = {isStatic:false,restitution:0, friction:1, density:1.2};
        this.radius = 70
        this.image = loadImage("stone.png");
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
