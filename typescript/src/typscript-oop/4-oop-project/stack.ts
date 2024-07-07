{
  interface Stack {
    readonly size: number;

    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string; // 불변성 유지를 위해서 readonly 키워드 사용
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0; // 내부에서만 쓰이는 변수, 동일한 이름의 public 변수가 있다.
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }

      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      // null == undefined
      // null !== undefined
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }

      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push("Ellie 1");
  stack.push("Bob 2");
  stack.push("Steve 3");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  //   stack.pop();
}
