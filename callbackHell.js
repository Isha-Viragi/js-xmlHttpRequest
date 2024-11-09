import { metIdRequest } from "./metIdRequest.js";
import { metObjectRequest } from "./metObjectRequest.js";
import { renderMetObject } from "./renderMetObject.js";

const catFactXhr = new XMLHttpRequest();

catFactXhr.open('GET', "https://meowfacts.herokuapp.com/");
catFactXhr.send();

catFactXhr.addEventListener('load', () => {
  const data = JSON.parse(catFactXhr.response).data[0]; //[0] since it always only generates 1 fact
  const word = randomWordSelector(data);
  renderCatFact(data, word);

  metIdRequest(word, (id) => {
    console.log('callback2');
    metObjectRequest(id, (data) => {
      console.log('callback3');
      renderMetObject(data);
    });
  })

})

function renderCatFact(data, word) {
  const display = document.querySelector('.js-cat-fact-container');

  display.innerHTML = `
  <div class="fact">${data}</div>
  <div class="fact-word">Selected word: ${word}</div>
  `;
}

function randomWordSelector(data) {
  const words = data.split(" ") || ['undefined'];

  const index = Math.floor(Math.random() * words.length);
  return words[index]
}
