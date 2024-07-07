import ValueData from "./ValueData";

class ValueDataMain {
  constructor() {
    this.main();
  }

  main() {
    let valueData = new ValueData();
    ValueDataMain.add(valueData);
    ValueDataMain.add(valueData);
    ValueDataMain.add(valueData);

    console.log("최종 숫자 =", valueData.value);
  }

  static add(valueData: ValueData) {
    valueData.value++;
    console.log("숫자 증가 value =", valueData.value);
  }
}

new ValueDataMain();
