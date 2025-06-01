// Primitive types
var age = 20;
var firstName = "Alex";
var isStudent = true;
console.log(age); // 20
console.log(firstName); // "Alex"
console.log(isStudent); // true
// Array Types
var numbers = [1, 2, 3, 4, 5];
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
var demoString = "Hello, I'm a string!";
var demoNumber = 42;
var person2 = {
    firstName: "Jane",
    age: 30
};
// Tuple Types
var tuple = ['Leila', 25, 'John', 52];
var coordinates = [10, 17]; // Tuple representing latitude and longitude
// Enum Types
var Colour;
(function (Colour) {
    Colour["Rd"] = "red";
    Colour["Gn"] = "green";
    Colour["Bu"] = "blue";
})(Colour || (Colour = {}));
var faveColour = Colour.Gn;
// example as a colour pallette
var ColourPalette;
(function (ColourPalette) {
    ColourPalette["red"] = "#FF0000";
    ColourPalette["green"] = "#00FF00";
    ColourPalette["blue"] = "#0000FF";
})(ColourPalette || (ColourPalette = {}));
var faveColour2 = ColourPalette.red;
// Function Types
//function add(a, b) {
//return a + b;
//}                      // doesn't like as type not specified- throws error
function add2(a, b) {
    return a + b;
}
add2(3, 4); // returns 7
// fat arrow function
var add3 = function (a, b) {
    return a + b;
};
// Function with optional parameters
var greeting = function (name, age) {
    return age ? 'Hello, ' + name + '. You are ' + age + ' years old.' : 'Hello, ' + name + '.';
};
greeting('Alice', 30); // returns 'Hello, Alice. You are 30 years old.'
// Default Parameters
var greet = function (name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name, "!");
};
greet('Bob'); // returns 'Hello, Bob!'
greet('Bob', 'Hi'); // returns 'Hi, Bob!'
