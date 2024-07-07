import Member from "./Member";

class MemberMain {
  constructor() {
    this.main();
  }

  main() {
    const member = new Member("myId", "kim");
    member.print();
    member.changeData("seo");
    member.print();
  }
}

new MemberMain();
