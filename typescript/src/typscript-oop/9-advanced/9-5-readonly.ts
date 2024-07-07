{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    // Cannot assign to 'title' because it is a read-only
    // todo.title = "jaja";
  }
}
