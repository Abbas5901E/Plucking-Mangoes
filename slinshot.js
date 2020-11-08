class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("black");

            line(pointA, pointB.position.x, pointB.position.x);
        
       }
    
}