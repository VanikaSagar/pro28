class mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,35,options)
        this.radius=radius
        this.diameter=35
        this.image=loadImage("sprites/mango.png")
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position

        push ()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,30,55)
        pop ()
    }
}