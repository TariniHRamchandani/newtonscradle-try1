class Bob {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("red");
      strokeWeight(5);
      stroke("darkgreen");
      rect(0, 0, this.width, this.height);
      
    }
  };