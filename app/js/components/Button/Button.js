import Component from "../Component.js";

class Button extends Component {
  text;

  constructor(parentElement, tagname, className, text) {
    super(parentElement, tagname, className);
    this.text = text;

    this.renderHtml();
  }

  renderHtml() {
    this.element.textContent = this.text;
  }
}

export default Button;
