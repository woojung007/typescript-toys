import Car from "./Car";

export default class ElectricCar extends Car {
  /**
   * @override
   */

  move() {
    console.log("전기차를 빠르게 이동합니다.");
  }

  charge() {
    console.log("충전합니다.");
  }
}
