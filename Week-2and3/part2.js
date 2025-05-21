let message = "goodbye"
console.log(message)

// variables with let
let price = 100; // This is what changes after the discount is applied
const discount = 20;

console.log("Price: " + price);

// Apply the discount
price = price * ((100 - discount) / 100);

console.log("New Price: " + price);

// comparison operators

// declare variables
let temperature = 18
const perfect = 18

// compare variables
console.log(temperature === perfect) // true- same value and type

// do we have enough money for a day out?
let money = 9
const travel = 4
const food = 5

console.log(money >= travel + food) // true- 5 + 4 = 9

// operators practise
console.log( (5 * 2) == (3 + 7) ) // true- same value and type
console.log( (5 * 2) === (3 + 7) ) // true- same value and type
console.log( (5 * 2) != "ten" ) // false- same value and type

console.log( (3 * 4) > (2 * 5) ) // false- same value and type
console.log( (3 * 4) >= (2 * 5) ) // true- same value and type
console.log( (3 * 4) < (2 * 5) ) // false- same value and type

// if... else statements
// declare variables
const userChoice = "books";

// condition logic
if (userChoice === "books") {
    console.log("You chose books.");
} else {
    console.log("You chose something else.");
}

const userChoice2 = "netflix";
if (userChoice2 === "books"){
    console.log("You chose books") 
}
else {
    console.log("You chose something else")
}

// Logical operators
const userChoice3 = "BOOKS"; 
if (userChoice3 === "Books" || userChoice3 === "books" ) {
    console.log ("📚");
}
else if (userChoice3 === "Movies" || userChoice3 === "movies" ){
    console.log ("🍿");
}
else {
    console.log("🎶");
}

const userChoice4 = "Veg";
if (userChoice4 === "Veg" || userChoice4 === "veg" ) {
    console.log ("🥦");
}
else if (userChoice4 === "Fruit" || userChoice4 === "fruit" ){
    console.log ("🍎");
}
else {
    console.log("❓");
}

// FUNCTIONS
// function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

//call the function
greet("Alex");