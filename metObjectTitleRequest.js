export function metObjectTitleRequest(id, renderFunction) {
  const xhrTitle = new XMLHttpRequest();

  xhrTitle.open('GET', `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
  xhrTitle.send();

  xhrTitle.addEventListener('load', () => {
    const data = JSON.parse(xhrTitle.response);
    renderFunction(data);
  })
}
