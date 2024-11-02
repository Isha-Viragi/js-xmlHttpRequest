const catFactXhr = new XMLHttpRequest();

catFactXhr.open('GET', "https://meowfacts.herokuapp.com/");
catFactXhr.send();

catFactXhr.addEventListener('load', () => {
  const data = JSON.parse(catFactXhr.response).data[0];
  document.querySelector('.js-display-4').innerHTML = data;

  const words = data.split(" ");
  let word;
  if (words.length > 5) word = words[5].toLowerCase();
  else if (words.length < 5) word = words[0].toLowerCase();
  else word = "lake";



})