// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object.
// Write a function total_sides that returns the number of sides of the object.

class Circle {
  constructor(diameter) {
    this.diameter = diameter;
  }

  circle_area() {
    let radius = this.radius();
    let area = Math.PI * (radius * radius);
    return area.toFixed(2);
  }

  radius() {
    let diameter = this.diameter;
    let radius = diameter / 2;
    return radius;
  }

  displayCircle() {
    let area = this.circle_area();
    let radius = this.radius();
    let circleContainer = document.querySelector(".circle");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `The area is ${area}, the radius is ${radius}`;
    circleContainer.append(paragraph);
  }
}

let circle1 = new Circle(20);
circle1.displayCircle();

let circle2 = new Circle(100);
circle2.displayCircle();

// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  rectangle_area() {
    return this.width * this.length;
  }

  parameter() {
    return this.width * 2 + this.length * 2;
  }

  displayRectagle() {
    let area = this.rectangle_area();
    let parameter = this.parameter();
    let rectangleContainer = document.querySelector(".rectangle");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `The area is ${area}, the parameter is ${parameter}`;
    rectangleContainer.append(paragraph);
  }
}

let rectangle1 = new Rectangle(10, 20);
rectangle1.displayRectagle();
let rectangle2 = new Rectangle(25, 50);
rectangle2.displayRectagle();

// Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.

class Square {
  constructor(sides) {
    this.sides = sides;
  }

  square_area() {
    return Math.pow(this.sides, 2);
  }

  diagonal() {
    let diagnol = Math.sqrt(this.sides * this.sides * 2);
    return diagnol.toFixed(2);
  }
  displaySquare() {
    let area = this.square_area();
    let diagnol = this.diagonal();
    let squareContainer = document.querySelector(".square");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `The area is ${area}, the diagnol is ${diagnol}`;
    squareContainer.append(paragraph);
  }
}
const sq = new Square(30);
console.log(sq.diagonal());
console.log(sq.square_area());
sq.displaySquare();
