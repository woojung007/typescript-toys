{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }

    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }

    return arg;
  }

  const result2 = checkNotNullAnyBad(123);
  console.log(result2);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }

    return arg;
  }

  const result3 = checkNotNull(123);
  console.log(result3);

  const boal: boolean = checkNotNull(true);
}
