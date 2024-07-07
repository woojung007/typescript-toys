{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "eve";
  const address: Text = "korea";

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    // animal:'dog'
    name: "eve",
    age: 28,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  //   const isCat:Boal = false   // error
}
