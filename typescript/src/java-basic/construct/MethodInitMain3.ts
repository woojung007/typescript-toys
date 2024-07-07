import MemberInit from "./MemberInit";

class MethodInitMain3 {
  constructor() {
    this.main();
  }

  main() {
    const member1 = new MemberInit();
    member1.initMember("user1", 15, 90);

    const member2 = new MemberInit();
    member2.initMember("user2", 16, 80);

    const members: MemberInit[] = [member1, member2];

    for (const member of members) {
      console.log(member);
    }
  }
}

new MethodInitMain3();
