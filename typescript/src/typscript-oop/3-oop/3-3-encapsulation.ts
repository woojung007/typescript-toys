{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public - 외부 공개
  // private - 외부 접근 불가
  // protected - 외부 접근 불가, 자식은 접근 가능
  class CoffeeMaker {
    // BEANS_GRAM_PER_SHOT: number = 7;    // object 를 만들때마다 중복으로 데이터가 생성되기 때문에 메모리 낭비가 생긴다.
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = -34; // invalid
  maker.fillCoffeeBeans(32);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error("wrong input");
      }
      this.internalAge = num;
    }

    constructor(
      private firstName: string,
      private lastName: string
    ) {}
  }

  const user = new User("Steve", "Jobs");

  console.log(user.fullName);
  // user.firstName = "Ellie";    private

  user.age = 6; // setter 에 접근
  console.log(user.fullName);
}
