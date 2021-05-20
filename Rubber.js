class Rubber {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
     strokeWeight(3);
      stroke('white')
      fill('blue')
      rectMode(CENTER)
     rect(0, 0, this.width, this.height);
	 //draw ellipse here to display the rubbre ball
	 ellipse(0,0,this.r,this.r)
      pop();
    };
  };