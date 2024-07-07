export default class FieldInit {
  static readonly CONST_VALUE: number = 10;
  readonly value: number = 10;

  //   public constructor(value: number) {
  //    this.value 에 이미 초기값이 있기 때문에 컴파일 오류 나야함
  //     this.value = value; ts는 컴파일 에러가 안나네..

  //    const fieldValue: number = 10;
  //    fieldValue = value 이거는 에러남
  //   }
}
