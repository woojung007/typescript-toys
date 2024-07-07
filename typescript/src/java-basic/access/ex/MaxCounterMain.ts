import MaxCounter from "./MaxCounter";

class MaxCounterMain {
  constructor() {
    this.main();
  }

  main() {
    const counter = new MaxCounter(3);
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();

    const count = counter.getCount();
    console.log(count);
  }
}

new MaxCounterMain();
