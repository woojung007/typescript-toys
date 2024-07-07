import Driver from "./Driver";
import K3Car from "./K3Car";
import Model3Car from "./Model3Car";
import NewCar from "./NewCar";

class CarMain1 {
  constructor() {
    CarMain1.main();
  }

  public static main() {
    const driver: Driver = new Driver();

    // 차량 선택(k3)
    const k3Car: K3Car = new K3Car();
    driver.setCar(k3Car);
    driver.drive();

    // 차량 변경(k3 -> model3)
    const model3Car: Model3Car = new Model3Car();
    driver.setCar(model3Car);
    driver.drive();

    // 차량 변경(model3 -> newCar)
    const newCar: NewCar = new NewCar();
    driver.setCar(newCar);
    driver.drive();
  }
}

new CarMain1();
