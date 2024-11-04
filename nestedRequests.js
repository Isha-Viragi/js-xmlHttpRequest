import { metObjectIdRequest } from "./metObjectIdRequest.js";
import { metObjectTitleRequest } from "./metObjectTitleRequest.js";

let word;
const catFactXhr = new XMLHttpRequest();

catFactXhr.open('GET', "https://meowfacts.herokuapp.com/");
catFactXhr.send();

catFactXhr.addEventListener('load', () => {
  const data = JSON.parse(catFactXhr.response).data[0];
  document.querySelector('.js-display-4').innerHTML = data;

  const words = data.split(" ") || ['undefined'];

  const index = Math.floor(Math.random() * words.length);
  word = words[index]
  console.log(word)

  metObjectIdRequest(word, (id) => {
    console.log('callback')
    metObjectTitleRequest(id)
  })

})