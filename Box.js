class Box
{
  constructor(x,y,width,height)
  {
    var options = { 'restitution':1.0,
                    'density': 1.0, 
                    'friction': 1.0}       

    this.object=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.object);
  }

  display()
  {
    var pos=this.object.position;
    var angle=this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("white");
    rect(0,0,this.width,this.height);
    pop();
}
}