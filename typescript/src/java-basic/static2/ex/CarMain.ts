import Car from "./Car";

class CarMain {
  constructor() {
    this.main();
  }

  main() {
    const car1 = new Car("k3");
    const car2 = new Car("680");
    const car3 = new Car("Model Y");

    Car.showTotalCars(); // 구매한 차량 수를 출력하는 static 메서드
  }
}

new CarMain();
