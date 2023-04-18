import Component from "../Component.js";

class CardListComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "ul", "characters-list row list-unstyled");
  }
}

export default CardListComponent;
