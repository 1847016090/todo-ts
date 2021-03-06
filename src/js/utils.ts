export function findParent(target: HTMLElement, className: string) {
  while ((target = target.parentNode as HTMLElement)) {
    if (target.className === className) {
      return target;
    }
  }
}

export function createItem(tagName:string, className: StaticRange, todoItem: string):HTMLElement {
    const oItem:HTMLElement = document.createElement(tagName);
    oItem.className = className;
    oItem.innerHTML = todoItem;
    return oItem;
}