import Driver from "./Driver";
import K3Car from "./K3Car";
import Model3Car from "./Model3Car";

class CarMain0 {
  constructor() {
    CarMain0.main();
  }

  public static main() {
    const driver: Driver = new Driver();
    const k3Car: K3Car = new K3Car();

    driver.setK3Car(k3Car);
    driver.drive();

    // 추가
    const model3Car: Model3Car = new Model3Car();
    driver.setK3Car(null);
    driver.setModel3Car(model3Car);
    driver.drive();
  }
}

new CarMain0();
