var canvas 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particles= []
var umbrella
var bobo= []
var bolty
function preload(){
    
}

function setup(){
   createCanvas(1000,1200)
   engine = Engine.create();
   world = engine.world;
    //canvas= createSprite(100,100,50,50)
umbrella= new Umb(200,200);
   bolty= new Thunder(200,200);

}

function draw(){
 background('black')
 Engine.update(engine); 
 bolty.hide= true;
 if(frameCount%2===0){
    particles.push(new Drop(random(10,1000),2,200))
}
for(var k=0; k<particles.length; k++){
    particles[k].display();
    } 
    if(frameCount%5===0){
        particles.push(new Drop(random(0,1000),2,100))
    }
    for(var l=0;l<particles.length; l++ ){
        particles[l].display();
    }
    if(frameCount%100===0){
       bolty.hide= false
       bolty.display()

    }
   
    umbrella.display();
drawSprites();   
}   

