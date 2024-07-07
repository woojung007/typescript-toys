import K3Car from "./K3Car";
import Model3Car from "./Model3Car";
import k3Car from "./K3Car";
import model3Car from "./Model3Car";

class Driver {
  private k3Car: K3Car = null;
  private model3Car: Model3Car = null; // 추가

  public setK3Car(k3Car: K3Car) {
    this.k3Car = k3Car;
  }

  // 추가
  public setModel3Car(model3Car: Model3Car) {
    this.model3Car = model3Car;
  }

  public drive() {
    console.log("자동차를 운전합니다.");

    if (k3Car) {
      this.k3Car?.startEngine();
      this.k3Car?.pressAccelerator();
      this.k3Car?.offEngine();
    }

    if (model3Car) {
      this.model3Car?.startEngine();
      this.model3Car?.pressAccelerator();
      this.model3Car?.offEngine();
    }
  }
}

export default Driver;
