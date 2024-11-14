export function metIdRequest(word, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${word}`);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const ids = JSON.parse(xhr.response).objectIDs;
      const id = selectRandomId(ids);

      successCallback(id)
    }
    else {
      errorCallback(`Met object id request failed with status: "${xhr.statusText}"`)
    }
  })

  xhr.addEventListener('error', () => {
    errorCallback("Failed to load MET id request")
  })
}

function selectRandomId(ids) {
  const index = Math.floor(Math.random() * ids.length);
  return ids[index];
}
