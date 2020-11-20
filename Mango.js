class Mango{
    constructor(posx, posy, radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(posx, posy, radius-30, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage(" mango.png");
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}