import Child from "./Child";
class Super1Main {
  constructor() {
    this.main();
  }

  main() {
    const child = new Child();
    child.call();
  }
}

new Super1Main();
