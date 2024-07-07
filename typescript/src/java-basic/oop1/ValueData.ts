class ValueData {
  value: number = 0;

  add() {
    this.value++;
    console.log("숫자 증가 : ", this.value);
  }
}

export default ValueData;
