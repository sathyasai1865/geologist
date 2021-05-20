class Iron {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':1.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 30;
      this.height = 60;
     World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('white')
      fill('purple')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  