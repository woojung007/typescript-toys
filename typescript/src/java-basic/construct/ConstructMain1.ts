import MemberConstruct from "./MemberConstruct";

class ConstructMain1 {
  constructor() {
    this.main();
  }

  main() {
    const member1 = new MemberConstruct("user1", 15, 90);
    const member2 = new MemberConstruct("user2", 16, 80);

    const members: MemberConstruct[] = [member1, member2];

    for (const member of members) {
      console.log(member);
    }
  }
}

new ConstructMain1();
