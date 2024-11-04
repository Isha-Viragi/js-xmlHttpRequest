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