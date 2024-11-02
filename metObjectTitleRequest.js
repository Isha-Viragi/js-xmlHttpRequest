const xhrTitle = new XMLHttpRequest();

xhrTitle.open('GET', "https://collectionapi.metmuseum.org/public/collection/v1/objects/910011");
xhrTitle.send();

xhrTitle.addEventListener('load', () => {
  console.log(JSON.parse(xhrTitle.response).primaryImage)
  console.log(JSON.parse(xhrTitle.response).title)
  console.log(JSON.parse(xhrTitle.response).objectName)
  console.log(JSON.parse(xhrTitle.response).artistDisplayName)
})