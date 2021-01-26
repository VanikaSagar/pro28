class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,23,options)
        this.width=width
        this.height=height
        this.diameter=23
       
        this.image=loadImage("sprites/stone.png")
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
       // this.body.position.x=mouseX
       // this.body.position.y=mouseY

        push ()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,70,this.height)
        pop ()
    }
}