////////////////////// Design Patterns //////////////////////
// 1. Factory Pattern

interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("drawing a circle");
  }
}

class Square implements Shape {
  draw() {
    console.log("drawing a square");
  }
}

class ShapeFactory {
  private static shapes: Record<string, new () => Shape> = {};

  static registerShape(type: string, ctor: new () => Shape) {
    this.shapes[type] = ctor;
  }

  static createShape(type: string): Shape {
    const ShapeClass = this.shapes[type];
    if (!ShapeClass) throw new Error("Tipo de shape desconocido");
    return new ShapeClass();
  }
  consoleFunction(): any {
    return ShapeFactory.shapes;
  }
}

ShapeFactory.registerShape("circle", Circle);
ShapeFactory.registerShape("square", Square);

const shape1 = ShapeFactory.createShape("circle");
shape1.draw();

const shape2 = ShapeFactory.createShape("square");
shape2.draw();
