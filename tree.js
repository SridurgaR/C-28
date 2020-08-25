class Tree{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world, this.body);
        this.image = loadImage("Images/tree.png")
        this.width = w;
        this.height = h;
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}