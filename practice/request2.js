
//Second Request
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', "https://meowfacts.herokuapp.com/?count=3"); //Set up the request
xhr2.send(); //Send the request

xhr2.addEventListener('load', () => { //Listen for response
  const data = JSON.parse(xhr2.response).data; //Data passed via http will always be JSON
  data.forEach(fact => {
    document.querySelector(".js-display-2").innerHTML += `<p>${fact}</p>`;
  });
})
