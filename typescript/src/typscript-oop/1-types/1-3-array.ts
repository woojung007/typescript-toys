{
  // Array (배열)
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 3, 4];

  // 배열 내부를 변경할 수 없도록 (object 의 불변성을 보장하기 위해)
  // readonly 키워드를 붙일 때는 string[] 만 가능하고
  // Array<number> 는 불가능하다.
  function printArray(fruits: readonly string[]) {
    // fruits.push() // 'readonly string[]' 형식에 'push' 속성이 없습니다.
  }

  // Tuple (튜플) : 서로 다른 타입을 함께 가질 수 있는 배열
  // -> 대신에 interface, type alias, class 를 사용하는 것이 좋다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;

  // ex) useState
  // interface, type alias, class 로 대체해서 사용할 수 있음에도 불구하고
  // 무작정 튜플을 사용하는 것은 좋지 않다.
  // 무언가 동적으로 return 하는데 class 나 interface 로 묶기가 애매하고
  // 동적으로 관련있는 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 쓸 경우에는 튜플이 유용할 수 있지만
  // 그 외의 경우에는 일반적으로는 interface 나 type alias 를 사용해서 쓸 수 있지는 않을지 잘 생각하고 사용해야 한다.
}
