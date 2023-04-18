import characters from "./characters/characters.js";
import AppComponent from "./components/AppComponent/AppComponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import CharacterCardComponent from "./components/CharacterCard/CharacterCardComponent.js";

console.log(characters[0]);
const body = document.querySelector("body");
new AppComponent(body);
const appContainer = document.querySelector(".app");
new CardListComponent(appContainer);
const cardList = document.querySelector(".characters-list");

characters.forEach((character) => {
  new CharacterCardComponent(cardList, character);
});
