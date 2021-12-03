// textContent
const mainHeadingtextContent = window.document.querySelector('#main-heading');
console.log(mainHeadingtextContent.textContent)

// innerText
const mainHeadinginnerText = window.document.querySelector('#main-heading');
console.log(mainHeadinginnerText.innerText)

// there is one difference between this 2
// textContent display what is present inside the html element
// but the innerText only display the content what we see on the screen;


// we can change the value of textContent
// eg:-
    // mainHeadingtextContent.textContent = "hello World!";
