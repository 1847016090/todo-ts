import { ITodoData } from "./type";
import TodoDom from "./TodoDom";
export default class TodoEvent extends TodoDom {
  private todoData: ITodoData[];
  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper);
    this.todoData = todoData;
    this.init();
  }
  private init() {
    this.initList(this.todoData);
  }
  public addTodo(todo: ITodoData): undefined | number {
    const _todo: null | ITodoData = this.todoData.find(
      (i: ITodoData) => i.id === todo.id
    );
    if (!_todo) {
      this.todoData.push(todo);
      this.addItem(todo);
      return;
    }
    return 1001;
  }
  public removeTodo(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id);
    this.removItem(target);
  }
  public toggleComplete(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.map((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.changeCompleted(target, todo.completed);
      }
      return todo;
    });
  }
}
