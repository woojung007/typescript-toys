import { Car } from "./Car";

class NewCar implements Car {
  startEngine() {
    console.log("NewCar.startEngine");
  }
  offEngine() {
    console.log("NewCar.offEngine");
  }
  pressAccelerator() {
    console.log("NewCar.pressAccelerate");
  }
}

export default NewCar;
