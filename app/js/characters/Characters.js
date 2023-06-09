import King from "./king/King.js";
import Fighter from "./Fighter/Fighter.js";
import Advisor from "./Advisor/Advisor.js";
import Squire from "./Squire/Squire.js";

const joffreyCharacterData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../../img/joffrey.jpg",
};

const jaimeCharacterData = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../../img/jaime.jpg",
};

const daenerysCharacterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../../img/daenerys.jpg",
};

const tyrionCharacterData = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../../img/tyrion.jpg",
};

const bronnCharacterData = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../../img/bronn.jpg",
};

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const tyrion = new Advisor(tyrionCharacterData, daenerys);
const bronn = new Squire(bronnCharacterData, 0, jaime);

const characters = [jaime, joffrey, daenerys, tyrion, bronn];
export default characters;
