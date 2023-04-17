import characters from "./characters/Characters.js";
import Button from "./components/Button/Button.js";
import Component from "./components/Component.js";

console.log(characters);
const body = document.querySelector("body");
const card = new Component(body, "div", "app container");
const cardDiv = document.querySelector(".app");
const ul = new Component(cardDiv, "ul", "characters-list row list-unstyled");
console.log(ul);
console.log(card);
const ulSelector = document.querySelector(".characters-list");
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
  "speak"
);
console.log(button1);
console.log(button2);
