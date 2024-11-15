import { catImageRequest } from "./catImageRequest.js";
import { metIdRequest } from "./metIdRequest.js";
import { metObjectRequest } from "./metObjectRequest.js";
import { renderMetObject } from "./renderMetObject.js";

function generateWelcomePage() {
  const display = document.querySelector('.js-welcome-page-container');
  display.innerHTML = `
  <h1 class="welcome-page-title">👋🐱 Welcome to the METaCATinator 🙀🏛️</h1>
  <img class="welcome-page-doof" src="images/doofenshmirtz.png" alt="Image of Doofenshmirtz from cartoon show Phineas and Ferb explaining something with a pleasant smile">
  `
}
generateWelcomePage();

function generateCatFact() {
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
          renderArrow(word);
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
}

function renderCatFact(data, word, catImg) {
  const display = document.querySelector('.js-cat-container');

  display.innerHTML = `
  <h2>Random Cat Fact</h2>
  <div class="cat-image">${catImg}</div>
  <div class="fact">${data}</div>
  <div class="fact-word">Selected word: <span>${word}</span></div>
  `;
}

function randomWordSelector(data) {
  //Use do-while loop
  //do 1st- We want this done regardless 
  let word;
  do {
    const words = data.split(" ") || ['undefined'];

    const index = Math.floor(Math.random() * words.length);
    word = words[index].toLowerCase();
    word = word.replace(/\W/g, ''); //use regex to remove punctuations

  } while (isWordToAvoid(word))
  //keep doing while word is wrong
  //and once the word is not wrong
  return word;
}

function isWordToAvoid(word) {
  const wordsToAvoid = new Set([
    'a', 'the', 'an', 'and', 'of', 'in', 'on', 'to', 'with', 'for', 'by', 'at', 'from',
    'is', 'are', 'was', 'were', 'this', 'that', 'it', 'be', 'has', 'have', 'will', 'do',
    'he', 'she', 'we', 'they', 'you', 'me', 'him', 'her', 'them', 'us', 'can', 'could',
    'would', 'should', 'may', 'does', 'did', 'had', 'been', 'am', 'being', 'or', 'nor',
    'so', 'yet', 'but', 'and', 'its', "it's"
  ]);
  return wordsToAvoid.has(word);
}


function renderArrow() {
  const arrowContainer = document.querySelector('.js-arrow-container');
  arrowContainer.classList.add('arrow-container-on')
  arrowContainer.innerHTML = `
  <img src="images/arrow.svg" alt="arrow" />
  `
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