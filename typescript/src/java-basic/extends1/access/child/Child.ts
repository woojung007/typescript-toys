import Parent from "../parent/Parent";

export default class Child extends Parent {
  call() {
    this.publicValue = 1;
    this.protectedValue = 1; // 상속 관계 or 같은 패키지
    this.defaultValue = 1; // java 에서는 다른 패키지 접근 불가, 컴파일 오류 (ts default는 public 이다.)
    // this.privateValue = 1  // 접근 불가 컴파일 오류

    this.publicMethod();
    this.protectedMethod();
    this.defaultMethod();
    // this.privateMethod();

    this.printParent();
  }
}
