class Launcher{ /*
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    display(){
        if(this.launch.bodyA != null){
        var positionA = this.launch.bodyA.position;
        var positionB = this.launch.pointB
        strokeWeight(4);
        line(positionA.x,positionA.y,positionB.x,positionB.y);
        }
    }
    fly(){

        this.launch.bodyA = null; // no body attached to sling / null = noting
    }
} */
    attach(body){ // to biring back the brid to the slingshot after it shot off
        this.launch.bodyA = body; 
    }
}
