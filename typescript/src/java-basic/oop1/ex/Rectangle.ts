class Rectangle {
  width: number = 0;
  height: number = 0;

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }
}

export default Rectangle;
