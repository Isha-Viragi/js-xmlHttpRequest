export function catImageRequest(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "https://cataas.com/cat/cute?html=true&height=300");
  xhr.send()

  xhr.addEventListener('load', () => {
    const catImg = xhr.response;
    callback(catImg);
  })
}