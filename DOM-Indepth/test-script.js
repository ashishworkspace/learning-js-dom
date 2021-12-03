const rootNode = document.getRootNode() // rootNode of the Element
console.log(rootNode);

const childNodeofRootNode = rootNode.childNodes;  // Child node of root element is root element
console.log(childNodeofRootNode)

const childNodeofRootElement = childNodeofRootNode[0].childNodes;
console.log(childNodeofRootElement)

// This head node include { white-space,title & script} 
const headNodeChildren = childNodeofRootElement[0].childNodes;
console.log(headNodeChildren);

// To print Head node children not white space we use
console.log(childNodeofRootElement[0].children)


// We can also print sibiling of head 
console.log(childNodeofRootElement[0].nextSibling);
console.log(childNodeofRootElement[1].nextSibling);


//  Similarly we can print the child node of body 
