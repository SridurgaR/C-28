class Mango {
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.image = loadImage("Images/mango.png");
        this.width = w;
        this.height = h;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}