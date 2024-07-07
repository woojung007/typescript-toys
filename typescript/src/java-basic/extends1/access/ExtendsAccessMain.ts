import Child from "./child/Child";

class ExtendsAccessMain {
  constructor() {
    this.main();
  }

  main() {
    const child = new Child();

    child.call();
  }
}

new ExtendsAccessMain();
