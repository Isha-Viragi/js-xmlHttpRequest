function renderFactsHtml(data) {
  //Create page layout
  //create an array to store facts
  const facts = data;

  //select html div to input this grid into
  const display = document.querySelector('.js-layout-container');
  let pageHtml = '';
  let count = 0;

  //iterate through the facts and dynamically render every fact on page 
  facts.forEach(fact => {
    count++;
    pageHtml += `
  <div>
  <p>Fact ${count}</p>
  <p>${fact}</p>
  </div>
  `
  });
  display.innerHTML = pageHtml
}



//Load data and pass to function 
function xmlHttpRequestHook(factCount, fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response).data;
    fun(data);
  })

  xhr.open('GET', `https://meowfacts.herokuapp.com/?count=${factCount}`);
  xhr.send();

}

//Call xmlHttpRequest hook and pass renderFactsHtml
xmlHttpRequestHook(6, renderFactsHtml);

