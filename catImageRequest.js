export function catImageRequest(successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "https://cataas.com/cat/cute?html=true&height=300");
  xhr.send()

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const catImg = xhr.response;
      successCallback(catImg);
    }
    else {
      errorCallback(`Cat image request failed with status: "${xhr.statusText}"`);
    }
  })

  xhr.addEventListener('error', () => {
    errorCallback('Failed to load cat image request')
  })
}