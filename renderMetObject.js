export function renderMetObject(data) {
  const display = document.querySelector('.js-layout-container')
  let html;
  html = `
  <div>${data.title || "No title found"}</div>
  <div>
  ${(data.primaryImage && `<img src=${data.primaryImage}>`) || "No image found"}
  </div>
  <div>${data.objectName || "No object name found"}</div>
  <div>${data.artistDisplayName || "No artist name found"}</div>
  <div>${data.objectDate || "No date found"}</div>
  `
  display.innerHTML = html || "Could not find a MET object";
  console.log(data)
}
