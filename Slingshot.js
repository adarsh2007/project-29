class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
             
            strokeWeight(4);
            stroke("white");
            if(pointA.x<100){
                line(pointA.x, pointA.y, pointB.x-10, pointB.y);
              
              
            }
            else{
        
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
               
            }
            }
            }
            }

