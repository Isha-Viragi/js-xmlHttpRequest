export function metObjectRequest(id, renderCallback, errorCallback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      renderCallback(data);
    }
    else {
      errorCallback(`MET object request failed with status: "${xhr.statusText}"`)
    }
  })

  xhr.addEventListener('error', () => {
    errorCallback("Failed to load MET object request");
  })
}
