class Component {
  element;

  constructor(parentElement, tagname, className) {
    this.element = document.createElement(tagname);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}

export default Component;
