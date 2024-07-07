import MemberInit from "./MemberInit";

class MethodInitMain1 {
  constructor() {
    this.main();
  }

  main() {
    const member1 = new MemberInit();
    member1.name = "user1";
    member1.age = 15;
    member1.grade = 90;

    const member2 = new MemberInit();
    member2.name = "user2";
    member2.age = 16;
    member2.grade = 80;

    const members: MemberInit[] = [member1, member2];

    for (const member of members) {
      console.log(member);
    }
  }
}

new MethodInitMain1();
