import { ITodoData } from "./type";
import TodoTemplate from "./TodoTemplate";
import { findParent, createItem } from "./utils";

export default class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement;
  constructor(todoWrapper: HTMLElement) {
    super();
    this.todoWrapper = todoWrapper;
  }
  protected initList(todoData: ITodoData[]) {
    if (todoData.length) {
      const oFrag: DocumentFragment = document.createDocumentFragment();
      todoData.map((todo: ITodoData) => {
        const oItem: HTMLElement = createItem(
          "div",
          "todo-item",
          this.todoView(todo)
        );
        oFrag.appendChild(oItem);
      });
      this.todoWrapper.appendChild(oFrag);
    }
  }
  protected addItem(todo: ITodoData) {
    const oItem: HTMLElement = createItem(
      "div",
      "todo-item",
      this.todoView(todo)
    );
    this.todoWrapper.append(oItem);
  }
  protected removItem(target: HTMLElement) {
    const oParentNode: HTMLElement = findParent(target, "todo-item");
    oParentNode.remove();
  }
  protected changeCompleted(target: HTMLElement, completed: boolean) {
    const oParentNode: HTMLElement = findParent(target, "todo-item");
    const oContent: HTMLElement = oParentNode.querySelector("span");
    oContent.style.textDecoration = completed ? "line-through" : "none";
  }
}
