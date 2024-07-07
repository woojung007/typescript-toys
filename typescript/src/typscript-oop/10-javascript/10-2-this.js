console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc();
window.simpleFunc();

console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
// const caller = counter.increase.bind(counter); // window 에 등록되어 있지 않음
const caller = counter.increase;
caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
