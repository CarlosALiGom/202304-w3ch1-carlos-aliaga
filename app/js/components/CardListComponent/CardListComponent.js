import Component from "../Component";

class CardList extends Component {
  constructor(parentElement) {
    super(parentElement, "ul", "characters-list row list-unstyled");
  }
}

export default CardList;
