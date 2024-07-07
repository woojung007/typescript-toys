{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // [1,2].map(item => item * item) // 1, 4

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };

  const readonlyAnimal: ReadOnly<Animal> = {
    name: "cat",
    age: 14,
  };

  // Cannot assign to 'name' because it is a read-only property.
  // readonlyAnimal.name = 'bella'

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: "",
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(Value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
