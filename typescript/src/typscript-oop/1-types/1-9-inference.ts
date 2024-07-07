{
  /**
   * Type Inference
   */
  let text = "hello";
  // text = 1

  function print(message = "hello") {
    console.log(message);
  }

  print("hello");
  //   print(1)

  function add1(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
