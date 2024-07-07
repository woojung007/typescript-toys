{
  /**
   * Type Assertions 💩
   * 정말 100% 확신할 때만 사용해야함!
   */
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length);

  const wrong: any = 5;
  // 😱
  // TypeError: wrong.push is not a function
  //   console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return [1];
  }

  const numbers = findNumbers()!;
  numbers!.push(2); // 😱
  console.log(numbers);

  // example
  const button = document.querySelector("class")!;

  if (button) {
    button.nodeValue;
  }
}
