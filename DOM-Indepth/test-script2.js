// Reaching the parent node of the element and change its bg color


const getHeading = document.querySelector('h1');
getHeading.parentElement.style.backgroundColor = "grey";


// we can react the parent of div i.e. body

const bodySelect = getHeading.parentElement.parentElement;
bodySelect.style.background = "pink";