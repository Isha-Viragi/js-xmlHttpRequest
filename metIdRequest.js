export function metIdRequest(word, callbackFunction) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${word}`);
  xhr.send();

  xhr.addEventListener('load', () => {
    const ids = JSON.parse(xhr.response).objectIDs;
    const id = selectRandomId(ids);

    callbackFunction(id)
  })
}

function selectRandomId(ids) {
  const index = Math.floor(Math.random() * ids.length);
  return ids[index];
}
