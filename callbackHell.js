import { catImageRequest } from "./catImageRequest.js";
import { metIdRequest } from "./metIdRequest.js";
import { metObjectRequest } from "./metObjectRequest.js";
import { renderMetObject } from "./renderMetObject.js";

const catFactXhr = new XMLHttpRequest();

catFactXhr.open('GET', "https://meowfacts.herokuapp.com/");
catFactXhr.send();

catFactXhr.addEventListener('error', () => {
  renderErrorMessage('cat-section', "Failed to load cat fact request");
})

catFactXhr.addEventListener('load', () => {
  if (catFactXhr.status === 200) {

    const catData = JSON.parse(catFactXhr.response).data[0]; //[0] since it always only generates 1 fact
    const word = randomWordSelector(catData);

    catImageRequest((catImg) => {
      renderCatFact(catData, word, catImg);
      metIdRequest(word, (id) => {
        metObjectRequest(id, (metData) => {
          renderMetObject(metData, word);
        }, (message) => {
          renderErrorMessage('met-section', message);
        });
      }, (message) => {
        renderErrorMessage('met-section', message);
      }
      );
    }, (message) => {
      renderErrorMessage("cat-section", message);
    });
  }
  else {
    renderErrorMessage('cat-section', `Cat fact request failed with status: "${catFactXhr.statusText}"`);
  }
});

function renderCatFact(data, word, catImg) {
  const display = document.querySelector('.js-cat-container');

  display.innerHTML = `
  <h2>Random Cat Fact</h2>
  <div>${catImg}</div>
  <div class="fact">${data}</div>
  <div class="fact-word">Selected word: ${word}</div>
  `;
}

function randomWordSelector(data) {
  const words = data.split(" ") || ['undefined'];

  const index = Math.floor(Math.random() * words.length);
  let word = words[index];
  word = word.replace(/\W/g, ''); //use regex to remove punctuations
  return word;
}

function renderErrorMessage(section, message) {
  let sectionName;
  if (section === "cat-section") sectionName = 'cat';
  else if (section === "met-section") sectionName = 'met';

  const display = document.querySelector(`.js-${sectionName}-container`);
  display.innerHTML = `
    <div class="${sectionName}-error-message">
    <img src="images/error.svg" alt="Error symbol" class="symbol">
    ${message}
    </div>
  `
}