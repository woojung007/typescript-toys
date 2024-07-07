export default class Car {
  private name: string = "";
  private static totalCars: number = 0;

  constructor(name: string) {
    console.log("차량 구입, 이름:", name);

    this.name = name;
    Car.totalCars++;
  }

  public static showTotalCars() {
    console.log("구매한 차량 수 : ", this.totalCars);
  }
}
