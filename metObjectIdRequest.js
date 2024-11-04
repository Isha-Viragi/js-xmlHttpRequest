export function metObjectIdRequest(word, callbackFunction) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${word}`);
  xhr.send();

  xhr.addEventListener('load', () => {
    const id = JSON.parse(xhr.response).objectIDs[0];

    if (callbackFunction)
      callbackFunction(id)
  })
}


