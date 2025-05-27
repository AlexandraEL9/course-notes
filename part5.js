// Working with collections
// Get elements by tagname
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Returns a live HTMLCollection of <p> elements

// change style of all paragraphs
for (let paragraph of paragraphs) {
    paragraph.style.color = 'blue'; // Change text color of all paragraphs
    paragraph.style.fontFamily = 'monospace'; // Change font family of all paragraphs
}
// Get elements by class name

// Nested elements
let list = document.getElementById('fruit-list')
const listItems = list.getElementsByTagName('li')
for (let element of listItems){
    element.style.textDecoration = 'underline'
}

// Event Listeners
function handleClick() {
    let titles = document.getElementsByTagName('h1');

    for (let title of titles) {
        title.style.color = 'green'; // Fix spelling of color
    }

    console.log('Title color changed!');
}

let button = document.getElementById('title-change');
button.addEventListener('click', handleClick) 

// Time delays
// setTimeout
function underline() {
    let underlineElement = document.getElementsByClassName('underline-p');

    for (let element of underlineElement) {
        element.style.textDecoration = 'underline'; // Add underline to elements with class 'underline'
    }
}

// set timeout calls a function after the timeout
setTimeout(underline,5000)

//Local Storage
// Store data in local storage
console.log('localStorage:::', localStorage.getItem("AlexsLocalStore"))

const infoToStore = {
    firstName: 'Roman'
}

    function handleStoreClick() {
        localStorage.setItem('AlexsLocalStore', JSON.stringify(infoToStore));
        console.log('Data stored in local storage');
    }
let storeButton = document.getElementById('store-button');
storeButton.addEventListener('click', handleStoreClick);
