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
      errorCallback('Cat image request failed');
    }
  })

  xhr.addEventListener('error', () => {
    errorCallback('Cat image request failed')
  })
}