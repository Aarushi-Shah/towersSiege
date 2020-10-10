class Box  {
  constructor(x, y, width, height) {
  
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    // Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);

  }

  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("purple");
    rect(pos.x, pos.y, this.width, this.height);
  }
}

// class Log extends BaseClass{
//   constructor(x,y,height,angle){
//     super(x,y,20,height,angle);
//     this.image = loadImage("sprites/wood2.png");
//     Matter.Body.setAngle(this.body, angle);
//   }
// }