// local scope
{
  /**
   * old : var
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  // age = 5;

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined : 있는지 없는지 결정되지 않는 상태
  let name1: undefined; // 💩
  // name1 = "hello";

  let age1: number | undefined;
  age1 = undefined;
  age1 = 1;

  // null : 비어있음
  let person: null;
  // person = 1

  let person2: string | null; // 값이 있거나 없거나

  function find(): number | undefined {
    return undefined;
  }

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void : 어떤 것을 return 하지 않는 경우
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // 💩

  // never : return 하는 값이 없을 경우
  function throwError(message: string): never {
    // 1. 에러
    // message -> server (log)
    throw new Error(message);

    // 2. while 으로 끝나지 않게 코드 작성
    while (true) {}

    // return; // 'undefined' 형식은 'never' 형식에 할당할 수 없습니다.
  }

  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: "eve" });
  acceptSomeObject({ animal: "dog" });
  acceptSomeObject([1, 4]);
}
