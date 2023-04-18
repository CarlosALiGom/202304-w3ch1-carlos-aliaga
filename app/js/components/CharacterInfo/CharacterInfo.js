import Component from "../Component/Component.js";

class CharacterInfo extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "character__info");

    this.render();
  }

  render() {
    this.element.innerHTML = `<ul class="list-unstyled">
        <li>Age: X yrs</li>
        <li>
          State:
          <i class="fas fa-thumbs-down"></i>
          <i class="fas fa-thumbs-up"></i>
        </li>
      </ul>`;
  }
}

export default CharacterInfo;
