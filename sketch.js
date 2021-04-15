const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var stone2;
var stone3;
var stone4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone1=new Stone(300,580);
    stone2=new Stone(315,580); 
    stone3=new Stone(330,580);
    stone4=new Stone(345,580);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    
 
}