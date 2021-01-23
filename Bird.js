class Bird
{
  constructor(x,y)
  {
    var options = { 'restitution':1.0,
                    'density': 1.0, 
                    'friction': 1.0}       

    this.object=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.object);
  }

  display()
  {
    var pos=this.object.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
}