const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


// Event Bubbling

child.addEventListener('click', (e)=>{
    console.log("Event Bubbling for Child");
});

parent.addEventListener('click', (e)=>{
    console.log("Event Bubbling for Parent");
});

grandparent.addEventListener('click', (e)=>{
    console.log("Event Bubbling for GrandParent");
});

// Capturing Event

child.addEventListener('click', ()=>{
    console.log("Event Capturing for Child");
},true);

parent.addEventListener('click', ()=>{
    console.log("Event Capturing for Parent");
},true);

grandparent.addEventListener('click', ()=>{
    console.log("Event Capturing for GrandParent");
},true);
