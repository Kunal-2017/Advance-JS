// Que4 Define a base class Shape with a method draw.Create two subclasses Circle and Rectangle that override the draw method.Demonsrate polymorphism using instances of these classes

// Sol:

// Base class Shape
class Shape {
    // Base class method
    draw() {
      console.log('Drawing a shape');
    }
  }
  
  // Subclass Circle
  class Circle extends Shape {
    // Overriding the draw method for Circle
    draw() {
      console.log('Drawing a circle');
    }
  }
  
  // Subclass Rectangle
  class Rectangle extends Shape {
    // Overriding the draw method for Rectangle
    draw() {
      console.log('Drawing a rectangle');
    }
  }
  
  // Function to demonstrate polymorphism
  function drawShape(shape) {
    shape.draw();  // This will call the draw method based on the actual object type
  }
  
  // Create instances of Circle and Rectangle
  const circle = new Circle();
  const rectangle = new Rectangle();
  
  // Demonstrate polymorphism
  drawShape(circle);      // Output: Drawing a circle
  drawShape(rectangle);   // Output: Drawing a rectangle
  