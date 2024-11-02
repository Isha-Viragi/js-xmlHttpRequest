const xhr = new XMLHttpRequest();

xhr.open('GET', "https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers");
xhr.send();

xhr.addEventListener('load', () => {
  const response = JSON.parse(xhr.response).objectIDs[0];
  console.log(response)
})



//https://collectionapi.metmuseum.org/public/collection/v1/objects/437133