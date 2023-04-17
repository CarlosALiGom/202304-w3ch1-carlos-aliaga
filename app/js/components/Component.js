class Component {
  element;

  constructor(parentElement, tagname) {
    this.element = document.createElement(tagname);
    parentElement.appendChild(this.element);
  }
}

export default Component;
