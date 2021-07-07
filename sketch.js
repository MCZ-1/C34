const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16;
function preload(){


}

function setup(){

    createCanvas(1400,800);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,770,1400,10);
    console.log("setup");
    box1 = new Box(800,600,75,75);
    // box2 = new Box(800,520,75,75);
    // box3 = new Box(800,440,75,75);
    // box4 = new Box(800,365,75,75);
    // box5 = new Box(800,290,75,75);
    // box6 = new Box(800,215,75,75);
    // box7 = new Box(800,140,75,75);
    // box8 = new Box(800,65,75,75);

    // box9 = new Box(880,600,75,75);
    // box10 = new Box(880,520,75,75);
    // box11 = new Box(880,440,75,75);
    // box12 = new Box(880,365,75,75);
    // box13 = new Box(880,290,75,75);
    // box14 = new Box(880,215,75,75);
    // box15 = new Box(880,140,75,75);
    // box16 = new Box(880,65,75,75);
    


    Engine.run(engine);
    
}


function draw(){

    Engine.update(engine);
    background("pink");

    ground.display();

    box1.display();
    console.log("display box");
    // box2.display();
    // box3.display();
    // box4.display();
    // box5.display();
    // box6.display();
    // box7.display();
    // box8.display();
    
    // box9.display();
    // box10.display();
    // box11.display();
    // box12.display();
    // box13.display();    
    // box14.display();
    // box15.display();
    // box16.display();
   


    
}



