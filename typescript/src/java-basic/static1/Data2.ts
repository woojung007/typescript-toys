import Counter from "./Counter";

export default class Data2 {
  public name: string;

  public constructor(name: string, counter: Counter) {
    this.name = name;
    counter.count++;
  }
}
