import { Car } from "./Car";

/** @implements {Car} */
class Model3Car implements Car {
  startEngine() {
    console.log("Model3Car.startEngine");
  }
  offEngine() {
    console.log("Model3Car.offEngine");
  }
  pressAccelerator() {
    console.log("Model3Car.pressAccelerate");
  }
}

export default Model3Car;
