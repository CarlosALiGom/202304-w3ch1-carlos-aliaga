import Component from "../Component";
import characters from "../../characters/characters";
import CharacterCardComponent from "../CharacterCard/CharacterCard";

class CardComponent extends Component {
  characters;

  constructor(parentElement) {
    super(parentElement, "ul", "characters-list row list-unstyled");
    this.characters = characters;

    this.renderHtml();
  }

  renderHtml() {
    characters.forEach((character) => {
      new CharacterCardComponent(this.element, character);
    });
  }
}

export default CardComponent;
