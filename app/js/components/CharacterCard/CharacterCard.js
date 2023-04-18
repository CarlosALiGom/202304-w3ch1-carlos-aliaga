import Component from "../Component/Component.js";
import King from "../../characters/king/King.js";
import Advisor from "../../characters/Advisor/Advisor.js";
import Fighter from "../../characters/Fighter/Fighter.js";
import Squire from "../../characters/Squire/Squire.js";
class CharacterCardComponent extends Component {
  character;

  constructor(parentElement, character) {
    super(parentElement, "li", "character col");
    this.character = character;

    this.render();
  }

  render() {
    this.element.innerHTML = `<img src="img/no-one.jpg" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">Name & family</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: X yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    </ul>
  </div>
  <div class="communications">
    <p class="communications__text display-1">A sentence someone says</p>
    <img class="communications__picture" src="img/no-one.jpg" alt="Name and family of who speaks" />
  </div>`;
  }
}

export default CharacterCardComponent;
