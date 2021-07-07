class Box{
    
    constructor(x,y,width,height){

        console.log("constructor");
        
        var options = {
            
            
            restitution : 0.3,
            friction  : 1,
            density : 1.2

        }
        this.body  = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        console.log("display");
        rectMode(CENTER);

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        console.log("created box");
        rect(pos.x,pos.y,this.width,this.height);

        pop();
        
    }


}