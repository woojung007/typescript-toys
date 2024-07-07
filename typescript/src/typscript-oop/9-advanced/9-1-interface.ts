{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // Duplicate identifier 'PositionType'.
  // type PositionType = {
  // }

  // 😁 Type aliases can use computed properties
  // 유틸리티, map 타입, index 타입도 이용 가능
  // 활용성이 높다.
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string

  // 😁 새로운 타입 생성
  type NumberType = number;
  // 😁 union type
  type Direction = "right" | "right";
}
