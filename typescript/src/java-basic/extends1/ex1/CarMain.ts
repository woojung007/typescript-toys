import ElectricCar from "./ElectricCar";
import GasCar from "./GasCar";

class CarMain {
  constructor() {
    this.main();
  }

  main() {
    const electricCar = new ElectricCar();
    electricCar.move();
    electricCar.charge();

    const gasCar = new GasCar();
    gasCar.move();
    gasCar.fillUp();
  }
}

new CarMain();
