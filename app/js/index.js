import characters from "./characters/characters.js";
import Button from "./components/Button/Button.js";
import ImageComponent from "./components/Card-img/Card-img.js";
import CharacterInfo from "./components/CharacterInfo/CharacterCard.js";
import Component from "./components/Component.js";

console.log(characters);
const body = document.querySelector("body");
const card = new Component(body, "div", "app container");
const cardDiv = document.querySelector(".app");
const ul = new Component(cardDiv, "ul", "characters-list row list-unstyled");
console.log(ul);
console.log(card);
const ulSelector = document.querySelector(".characters-list");
const newImage = new ImageComponent(ulSelector, "img");
const newCharacterInfo = new CharacterInfo(ulSelector, "div", "chartacterInfo");
const button1 = new Button(
  ulSelector,
  "button",
  "character__action btn",
  "speak"
);
const button2 = new Button(
  ulSelector,
  "button",
  "character__action btn",
  "die"
);
console.log(button1);
console.log(button2);
