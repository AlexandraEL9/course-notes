// === This file is the runnable code for Question 2: JavaScript Demonstration. ===

// ----------------
// 2.1; unshift(), shift(), split()
// ----------------

// Define an array representing CFGdegree streams
let cfgStreams = ["Data", "Software", "Full-Stack"];

console.log("Original CFGdegree streams:", cfgStreams);

// Use unshift() to add a new stream at the beginning
cfgStreams.unshift("AI");
console.log("After unshift('AI'):", cfgStreams);

// Use shift() to remove the first stream
let removedStream = cfgStreams.shift();
console.log("After shift():", cfgStreams);
console.log("Removed stream:", removedStream);

// Use split() to create an array from a string
let streamString = "Data,Software,Full-Stack";
let streamArray = streamString.split(",");
console.log("Stream array from string:", streamArray);

// ----------------
// 2.2: Object Methods
// ----------------
// Define an object representing a programming language
const programmingLanguage = {
    name: "JavaScript",
    type: "Dynamic",
    paradigms: ["Object-Oriented", "Functional", "Imperative"],
    yearCreated: 1995,
    isPopular: true,
    creator: "Brendan Eich",

    // Object method to describe the language
    describe: function() {
        return `${this.name} is a ${this.type} programming language created by ${this.creator} in ${this.yearCreated}. It supports ${this.paradigms.join(", ")} paradigms.`;
    },
    // Object method to check if the language is popular
    isPopularLanguage: function() {
        return this.isPopular ? `${this.name} is a popular language.` : `${this.name} is not a popular language.`;
    },

    // Object method to check if the language is modern
    isModern: function() {
        return this.yearCreated >= 2000 ? "Yes" : "No";
    }
};
console.log(programmingLanguage.describe());
console.log(programmingLanguage.isPopularLanguage());
console.log(`Is ${programmingLanguage.name} a modern language? ${programmingLanguage.isModern()}`);

// ----------------
// 2.3: DOM Events
// ----------------
/* Note: The following code is meant to be run in a 
browser environment where the DOM is available. *(question2.html)*
*/

// onmouseover
function showHoverMessage() {
    alert("You hovered over this element!");
}

// onclick
function handleClick() {
    alert("You clicked the button!");
}

// onchange
function handleChange() {
    alert("The input value has changed!");
}
