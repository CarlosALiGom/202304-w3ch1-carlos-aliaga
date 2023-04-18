import Component from "../Component";

class CardComponent extends Component {
  image;

  constructor(parentElement, image) {
    super(parentElement, "ul", "characters-list row list-unstyled");
    this.image = image;

    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
    
    `;
  }
}

export default CardComponent;
