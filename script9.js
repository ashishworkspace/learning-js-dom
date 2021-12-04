// classList will provide all the class present to the element selected

const allClass = document.querySelector('.section-todo');
console.log(allClass.classList)

// we can add class to classList from the element selected
allClass.classList.add('bg-dark');
console.log(allClass.classList)

// we can also remove some class from the element selected
allClass.classList.remove('container');
console.log(allClass.classList)

// checking the class is present in the element or not
console.log(allClass.classList.contains('container'));


// we can also toggle i.e. if the class is not present than it will create the new class
allClass.classList.toggle('my-new-class');
console.log(allClass.classList)