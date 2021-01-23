class Pig
{
  constructor(x,y)
  {
    var options = { 'restitution':1.0,
                     'density': 1.0, 
                     'friction': 0.3}
    this.object=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
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
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
}
}