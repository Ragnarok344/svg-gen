const { Triangle, Square, Circle } = require("./shapes.js");

// test for shapes
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
      );
    });
  });

  describe("Square test", () => {
    test("test for a square with a purple background", () => {
      const shape = new Square();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="purple" />'
      );
    });
  });

  describe("Circle test", () => {
    test("test for a circle with a #42505f background", () => {
      const shape = new Circle();
      shape.setColor("#42505f");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#42505f" />'
      );
    });
  });