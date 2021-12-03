//getAttribute

const links = document.querySelectorAll('a');
console.log(links)
const gethrefAttribute = links[0].getAttribute('href');


// we can set the attribute also

links[0].setAttribute('href', "https://torrento.tech");
console.log(links[0].getAttribute('href'))