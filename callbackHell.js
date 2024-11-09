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
    metObjectRequest(id, (data) => {
      renderMetObject(data, word);
    });
  })

})

function renderCatFact(data, word) {
  const display = document.querySelector('.js-cat-fact-container');

  display.innerHTML = `
  <h2>Random Cat Fact</h2>
  <div class="fact">${data}</div>
  <div class="fact-word">Selected word: ${word}</div>
  `;
}

function randomWordSelector(data) {
  const words = data.split(" ") || ['undefined'];

  const index = Math.floor(Math.random() * words.length);
  return words[index]
}
