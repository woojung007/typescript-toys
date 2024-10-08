{
  const obj = {
    name: "ellie",
  };

  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // "male" | "female"

  type Keys = keyof Animal; // 'name' | 'age' | 'gender
  // Type '"sdf"' is not assignable to type 'keyof Animal'.
  // const key:Keys = 'sdf'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
