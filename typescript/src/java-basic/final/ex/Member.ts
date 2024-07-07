export default class Member {
  private readonly id: string = "";

  private name: string = "";

  public constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public changeData(name: string) {
    // this.id = id; 컴파일 오류
    this.name = name;
  }

  public print() {
    console.log("id:", this.id, "name: ", this.name);
  }
}
