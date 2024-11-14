export function renderMetObject(data, word) {
  const display = document.querySelector('.js-met-info-container')
  let html;
  html = `
  <h2>Metropolitan Mueseum of Art Collection</h2>
  <h3 class="met-title-h3">Artwork based on selected word <span>${word}</span></h3>
  <div>${(data.title && `Title: ${data.title}`)
    || "<span class='met-error-message'><img class='symbol' src='images/error.svg'>No title found</span>"}
  </div>
  <div class="met-image-container">
  ${(data.primaryImage && `<img class="met-generated-image" src=${data.primaryImageSmall || data.primaryImage}>`)
    || "<span class='met-error-message'><img class='symbol' src='images/error.svg'>No image found</span>"}
  </div>
  <div>${(data.objectName && `Type: ${data.objectName}`)
    || "<span class='met-error-message'><img class='symbol' src='images/error.svg'>No object name found</span>"}
  </div>
  <div>${(data.artistDisplayName && `By ${data.artistDisplayName}`)
    || "<span class='met-error-message'><img class='symbol' src='images/error.svg'>No artist name found</span>"}
  </div>
  <div>${data.objectDate
    || "<span class='met-error-message'><img class='symbol' src='images/error.svg'>No date found</span>"}
  </div>
  `
  display.innerHTML = html || "Could not find a MET object";
  console.log(data)
}
