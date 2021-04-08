class Umb{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:true ,
            friction:0.1 ,
        }
      this.body= Bodies.rectangle(x,y,100,100,options);
  
this.image= loadImage("umbrella codingqq.png");
//  this.body= addImage(this.image)
  World.add(world, this.body);
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        width= this.image.width
        height= this.image.height
       
      //  this.body.addImage("umbrella codingpp.png")
        translate(pos.x,pos.y);
      //  rotate(angle)
     //   fill("red")
      imageMode(CENTER);
       
        image(this.image,400,1350,this.width,this.height);
        pop();
    }
}