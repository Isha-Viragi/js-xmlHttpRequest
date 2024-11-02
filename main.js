//First Request
const xhr1 = new XMLHttpRequest(); //Create new object from built-in class

xhr1.open('GET', "https://meowfacts.herokuapp.com/"); //Set up get request
xhr1.send(); //Send the request

xhr1.addEventListener('load', () => { //Listen for response
  const data = JSON.parse(xhr1.response).data; //Data passed via http will always be JSON
  document.querySelector(".js-display-1").innerHTML = data;
})



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



//Third Request- Create reusable function that takes id
function createXmlHttpRequest(id) {
  const xhr = new XMLHttpRequest(); //Create instance

  xhr.open('GET', `https://meowfacts.herokuapp.com/?id=${id}`); //Get specific fact
  xhr.send(); //Send request

  xhr.addEventListener('load', () => { //Listen for response
    const data = JSON.parse(xhr.response).data;
    document.querySelector('.js-display-3').innerHTML += `<div>${data}</div>`;
  })
}

createXmlHttpRequest(1); //Call function with id
createXmlHttpRequest(2); //Call function with id


function renderFactsHtml(data) {
  //Create page layout
  //create an array to store facts
  const facts = data;

  //select html div to input this grid into
  const display = document.querySelector('.js-layout-container');
  let pageHtml = '';
  let count = 0;

  //iterate through the facts and dynamically render every fact on page 
  facts.forEach(fact => {
    count++;
    pageHtml += `
  <div>
  <p>Fact ${count}</p>
  <p>${fact}</p>
  </div>
  `
  });
  display.innerHTML = pageHtml
}



//Load data and pass to function 
function xmlHttpRequestHook(factCount, fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response).data;
    return data;
  })

  xhr.open('GET', `https://meowfacts.herokuapp.com/?count=${factCount}`);
  xhr.send();

  fun(data);
}




