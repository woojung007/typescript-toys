import Car from "./Car";

export default class ElectricCar extends Car {
  charge() {
    console.log("충전합니다.");
  }
}
