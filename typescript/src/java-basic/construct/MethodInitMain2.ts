import MemberInit from "./MemberInit";

class MethodInitMain2 {
  constructor() {
    this.main();
  }

  main() {
    const member1 = new MemberInit();
    MethodInitMain2.initMember(member1, "user1", 15, 90);

    const member2 = new MemberInit();
    MethodInitMain2.initMember(member2, "user2", 16, 80);

    const members: MemberInit[] = [member1, member2];

    for (const member of members) {
      console.log(member);
    }
  }

  static initMember(
    member: MemberInit,
    name: string,
    age: number,
    grade: number
  ) {
    member.name = name;
    member.age = age;
    member.grade = grade;
  }
}

new MethodInitMain2();
