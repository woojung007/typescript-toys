export default class Data3 {
  public name: string = "";
  public static count: number = 0; // static

  public constructor(name: string) {
    this.name = name;
    Data3.count++;
  }
}
