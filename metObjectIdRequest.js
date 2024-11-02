const xhr = new XMLHttpRequest();

xhr.open('GET', "https://collectionapi.metmuseum.org/public/collection/v1/search?q=maine");
xhr.send();

xhr.addEventListener('load', () => {
  const response = JSON.parse(xhr.response).objectIDs[0];
  console.log(response);

})



