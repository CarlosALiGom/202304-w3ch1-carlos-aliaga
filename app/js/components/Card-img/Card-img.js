import Component from "../Component/Component.js";
class ImageComponent extends Component {
  url;

  constructor(parentElement, tagname, className, url) {
    super(parentElement, "img", className);
    this.url = url;

    this.render();
  }

  render() {
    this.element.src = this.url;
  }
}

export default ImageComponent;
