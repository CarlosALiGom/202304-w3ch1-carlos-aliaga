class Component {
  element;

  constructor(parentElement, tagName, className) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}

export default Component;
