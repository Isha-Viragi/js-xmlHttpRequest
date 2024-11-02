const xhr = new XMLHttpRequest(); //Create new object from built-in class

xhr.open('GET', "https://meowfacts.herokuapp.com/") //Set up get request
xhr.send() //Send the request

xhr.addEventListener('load', () => { //Listen for response
  const data = JSON.parse(xhr.response).data;
  console.log(data)

}) 