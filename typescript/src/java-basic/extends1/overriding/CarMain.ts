import ElectricCar from "./ElectricCar";
import GasCar from "./GasCar";
import HydrogenCar from "./HydrogenCar";

class CarMain {
  constructor() {
    this.main();
  }

  main() {
    const electricCar = new ElectricCar();
    electricCar.move();

    const gasCar = new GasCar();
    gasCar.move();
  }
}

new CarMain();
