import ClassC from "./ClassC";

class Super2Main {
  constructor() {
    this.main();
  }

  main() {
    const classC = new ClassC();
  }
}

new Super2Main();
