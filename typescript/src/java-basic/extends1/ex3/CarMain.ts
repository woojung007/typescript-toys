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
    electricCar.charge();
    electricCar.openDoor();

    const gasCar = new GasCar();
    gasCar.move();
    gasCar.fillUp();
    gasCar.openDoor();

    const hydrogenCar = new HydrogenCar();
    hydrogenCar.move();
    hydrogenCar.fillHydrogen();
    hydrogenCar.openDoor();
  }
}

new CarMain();
