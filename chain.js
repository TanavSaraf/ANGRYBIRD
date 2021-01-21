class Chain
{
    constructor(body1,body2)
    {
      this.chain= Matter.Constraint.create({bodyA:body1,bodyB:body2,stiffness:0.03,length:200})
      World.add(world,this.chain);
    }
 display()
 {
    var posA=this.chain.bodyA.position;
    var posB=this.chain.bodyB.position;
    push()

        strokeWeight(15)
        line(posA.x,posA.y,posB.x,posB.y);
    pop()
 }
}