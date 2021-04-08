class Drop{
    constructor(x,y){
        var options={
          "restitution":1,
          "friction": 0,
          "density": 0.8,
          "isStatic" : false 
        }
          //  this.r= radius;
            this.body= Bodies.circle(x,y,0.25,options);
 World.add(world,this.body);

    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y)
      rotate(angle)
        noStroke();
        fill("blue");
        rectMode(CENTER);
        ellipse(0,0,this.width,this.height)
        pop();

    }
}