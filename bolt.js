class Thunder{
    constructor(x,y){
    var options={
        "restitution":0.1,
    "isStatic": true
    }
    this.body= Bodies.rectangle(x,y,100,100,options);
    this.image= loadImage("boltyy.jpg");
    World.add(world,this.body)
}
    display(){
var pos= this.body.position
var angle= this.body.angle
push();
width= this.body.width
width=1900
height= this.body.height
height=1600
translate(pos.x,pos.y);
rotate(angle)
imageMode(CENTER)
image(this.image,500,2,width,height)
pop();
    }
}