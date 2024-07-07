import { Car } from "./Car";

class K3Car implements Car {
  startEngine() {
    console.log("K3car.startEngine");
  }
  offEngine() {
    console.log("K3car.offEngine");
  }
  pressAccelerator() {
    console.log("K3car.pressAccelerate");
  }
}

export default K3Car;
