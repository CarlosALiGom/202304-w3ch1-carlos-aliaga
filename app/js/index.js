import characters from "../js/characters/characters.js";
import CharacterCardComponent from "./components/CharacterCard/CharacterCard.js";
import Component from "./components/Component.js";

console.log(characters[0]);
const appContainer = document.querySelector(".app");
const card1 = new CharacterCardComponent(appContainer, "joffrey");
console.log(card1);
