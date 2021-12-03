// iterate element
// on getElementByClassName and querySelectorAll
// using for loop, for of loop and forEach loop

// Suppose we want to change the anchor tag color and bgColor

// let navItems = document.getElementsByTagName('a');
// console.log(navItems)
// for(let item = 0; item <= navItems.length; item++){
//     navItems[item].style.padding = "10px";
//     navItems[item].style.backgroundColor = "blue";
// }

// for(let item of navItems){
//     item.style.padding = "10px";
//     item.style.backgroundColor = "yellow";
//     item.style.color = "black";
// }


// forEach is not supported by HTMLCollection 
// therefore we need to convert it into Array first

// navItems = Array.from(navItems);
// console.log(navItems)
//  navItems.forEach(element => {
//     element.style.padding = "10px";
//     element.style.backgroundColor = "pink";
//     element.style.color = "black";
//  })








// let navItems = document.querySelectorAll('a');
// console.log(navItems)


// for(let item = 0; item <= navItems.length; item++){
//     navItems[item].style.padding = "10px";
//     navItems[item].style.backgroundColor = "blue";
// }

// for(let item of navItems){
//     item.style.padding = "10px";
//     item.style.backgroundColor = "yellow";
//     item.style.color = "black";
// }


//  navItems.forEach(element => {
//     element.style.padding = "10px";
//     element.style.backgroundColor = "pink";
//     element.style.color = "black";
//  })


