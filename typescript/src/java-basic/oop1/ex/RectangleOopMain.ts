import Rectangle from "./Rectangle";

class RectangleOopMain {
  constructor() {
    this.main();
  }

  main() {
    const rectangle = new Rectangle();
    rectangle.width = 8;
    rectangle.height = 8;

    const area = rectangle.calculateArea();
    console.log("넓이 : ", area);

    const perimeter = rectangle.calculatePerimeter();
    console.log("둘레 길이 :", perimeter);

    const isSquare = rectangle.isSquare();
    console.log("정사각형 여부", isSquare);
  }
}

new RectangleOopMain();
