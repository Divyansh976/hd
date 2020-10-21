class Launcher  {
    constructor(bodyA,pointB)  {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options)


    }
    fly()  {
        this.launcher.bodyB = null;
    }
    display()  {
        if(this.launcher.bodyA)  {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }


    }
}