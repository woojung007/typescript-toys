import { Car } from "./Car";

class Driver {
  private car: Car;

  setCar(car: Car) {
    console.log("자동차를 설정합니다", car);
    this.car = car;
  }

  drive() {
    console.log("자동차를 운전합니다.");
    this.car.startEngine();
    this.car.pressAccelerator();
    this.car.offEngine();
  }
}

export default Driver;
