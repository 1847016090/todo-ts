import { ITodoData } from "./js/type";
import TodoEvent from "./js/TodoEvent";
(function(doc) {
  const oInput: HTMLInputElement = document.querySelector("input");
  const oAddBtn: HTMLElement = document.querySelector("button");
  const oTodoList: HTMLElement = document.querySelector(".todo-list");

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: "123",
      completed: false
    },
    {
      id: 2,
      content: "123",
      completed: true
    },
    {
      id: 3,
      content: "123",
      completed: false
    }
  ];
  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList);
  const init = (): void => {
    bindEvent();
  };

  const bindEvent = (): void => {
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
    function handleAddBtnClick(): void {
      const val: string = oInput.value.trim();
      if (val.length) {
        const ret = todoEvent.addTodo(<ITodoData>{
          id: new Date().valueOf(),
          content: val,
          completed: false
        });
        if (ret && ret === 1001) {
          alert("列表已经存在");
          return;
        }
        oInput.value = "";
      }
    }
    function handleListClick(e: MouseEvent): void {
      const tar = e.target as HTMLElement;
      const tagName = tar.tagName.toLowerCase();
      if (tagName === "input" || tagName === "button") {
        const id = parseInt(tar.dataset.id);
        switch (tagName) {
          case "input":
            todoEvent.toggleComplete(tar, id);
            break;
          case "button":
            todoEvent.removeTodo(tar, id);
            break;
          default:
            break;
        }
      }
    }
  };
  init();
})(document);
