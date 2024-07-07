import ValueData from "./ValueData";

class ValueObjectMain {
  constructor() {
    this.main();
  }

  main() {
    let valueData = new ValueData();

    valueData.add();
    valueData.add();
    valueData.add();

    console.log("최종 숫자 = ", valueData.value);
  }
}

new ValueObjectMain();
