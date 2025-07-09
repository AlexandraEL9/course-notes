# JavaScript Functions Notes

## Contents
- [Functions](#functions)
  - [Anatomy of a simple function](#anatomy-of-a-simple-function)
  - [Declaring a Function](#declaring-a-function)
  - [Calling the Function](#calling-the-function)
  - [Functions with Parameters](#functions-with-parameters)
  - [Parameters vs Arguments](#parameters-vs-arguments)
  - [Anatomy of a function with parameters](#anatomy-of-a-function-with-parameters)
  - [Real-world Analogy](#real-world-analogy)
  - [Functions with multiple parameters](#functions-with-multiple-parameters)
  - [Functions with RETURN values](#functions-with-return-values)
  - [Side-by-Side Comparison: return vs console.log only](#side-by-side-comparison-return-vs-consolelog-only)
  - [Adding Logic in functions](#adding-logic-in-functions)
- [Function TASKS!](#function-tasks)
  - [Check if a number is Even or odd](#check-if-a-number-is-even-or-odd)
  - [Shout a message!](#shout-a-message)
  - [Double each number in an arrary](#double-each-number-in-an-arrary)
- [Function Expressions](#function-expressions)
  - [Syntax](#syntax)
  - [Anatomy of a Function Expression](#anatomy-of-a-function-expression)
  - [Comparison: Function Declaration vs Expression](#comparison-function-declaration-vs-expression)
  - [Example: Function Expression that greets a user](#example-function-expression-that-greets-a-user)
  - [TASK: Write your own function expression](#task-write-your-own-function-expression)
- [Arrow Functions](#arrow-functions)

  ---

  ## Functions

Functions let us group reusable code into named blocks.

### Anatomy of a simple function
```js
//function keyword         function name {
    // codeblock to be run in curly braces
// }
// call the function

                             // further example
//function keyword  function name {
    function          greet() {
    // codeblock to be run in curly braces
    console.log("Hello!");
// } 
    }
// call the function
greet();
```

**Anatomy of a basic function**
| Part            | Explanation                                                 | Layman’s Phrasing                               |
| --------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| `function`      | Keyword that tells JavaScript you're creating a function    | *I'm making a reusable mini-program*            |
| `greet`         | The **function name** — how you refer to it later           | *I'll call this one ‘greet’*                    |
| `()`            | Empty parentheses (no parameters yet)                       | *This function doesn’t need any extra info yet* |
| `{ ... }`       | The **function body** — the code that runs when you call it | *Do this when the function is used*             |
| `console.log()` | Example of an action the function performs                  | *Say “Hello!”*                                  |
| `greet();`      | **Calling** the function (this runs the code inside)        | *Now run that mini-program*                     |


### Declaring a Function:
```js
function greet() {
  console.log("Hello!");
}
```

### Calling the Function:
```js
greet(); // Outputs "Hello!"
```

### Functions with Parameters:
Sometimes a function needs specific info to perform a task.
Parameters act like variables
Parameters are like input variables you pass into a function so it can work with different values each time it's called.

**Parameters vs Arguments**
| Term          | Example                 | What it Means                                         |
| ------------- | ----------------------- | ----------------------------------------------------- |
| **Parameter** | `animal`, `name`        | The **placeholder** inside the function definition    |
| **Argument**  | `"Rabbit"`, `"Pancake"` | The **actual value** passed when calling the function |

```js
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Alex");
console.log(message);
```

```js
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Asha");
greetUser("Jamie");
```
This function greets a person by name. You give it a name, and it prints a personalised message like:

- “Hello, Asha!”

- “Hello, Jamie!”

**Anatomy of a function with parameters**
| Part                       | Explanation                                                        | Layman’s Phrasing                                |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| `function greetUser(name)` | The function takes a parameter called `name`                       | *Hey function, expect a name when you’re called* |
| `name` (in brackets)       | This is a **parameter** — a placeholder for the value passed in    | *This is the info I need to do my job*           |
| `` `Hello, ${name}!` ``    | Uses **template literals** to include the parameter in the message | *Say Hello to whoever was passed in*             |
| `greetUser("Asha")`        | Calling the function and passing `"Asha"` as the argument          | *Call the function using “Asha” as the name*     |
| `greetUser("Jamie")`       | You can reuse the function with different values                   | *Now say hello to “Jamie”*                       |

**Real-world Analogy:**
A function with a parameter is like a custom cake order:

- Function: “MakeCake(flavour)”

- Parameter: “Chocolate”, “Vanilla”, “Lemon”

The baker follows the same recipe but uses your input flavour
```js
function MakeCake(flavour) {
  console.log(`Cake order: ${flavour}`);
}
MakeCake("Chocolate");
MakeCake("Vanilla");
MakeCake("Lemon");
```
This function works like a cake shop: you tell it what flavour you want, and it "prints the receipt" for that order using your input.
| Part                           | Explanation                                                        | Layman's Phrasing                             |
| ------------------------------ | ------------------------------------------------------------------ | --------------------------------------------- |
| `function MakeCake(flavour)`   | Defines a function that expects **one input** (called `flavour`)   | *Create a cake using the flavour you tell me* |
| `{ console.log(...) }`         | This is the code that runs each time the function is called        | *Print out the order details*                 |
| `` `Cake order: ${flavour}` `` | A **template string** — it includes the flavour inside the message | *Say what flavour the customer chose*         |
| `MakeCake("Chocolate")`        | Calls the function with `"Chocolate"` as the flavour               | *Bake a chocolate cake*                       |
| `MakeCake("Vanilla")`          | Reuses the same function with a different input                    | *Bake a vanilla cake*                         |
| `MakeCake("Lemon")`            | Reuses it again — no need to rewrite the function                  | *Bake a lemon cake*                           |


### Functions with multiple parameters

**Example: Cake shop taking flavour and size**
```js
function makeCake(flavour, size) {
  console.log(`Cake order: a ${size} ${flavour} cake.`);
}

makeCake("Chocolate", "large");
makeCake("Vanilla", "small");
```

This function lets you customise two parts of the cake order: the flavour and the size.

You can use this approach for anything that needs more than one input — like a name + age, price + tax, or colour + shape.



**Anatomy:**
| Part                              | Explanation                                                        | Layman’s Phrasing                              |
| --------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| `function makeCake(...)`          | Function definition with **two parameters** inside the parentheses | *Expect two pieces of info: flavour and size*  |
| `flavour, size`                   | Parameters — placeholders for the inputs you'll pass in            | *I need both what kind of cake and how big*    |
| `` `a ${size} ${flavour} cake` `` | Template string combining both inputs                              | *Build the cake description using both values* |
| `makeCake("Chocolate", "large")`  | Function call with arguments `"Chocolate"` and `"large"`           | *Make a large chocolate cake*                  |
| `makeCake("Vanilla", "small")`    | Another function call with different arguments                     | *Make a small vanilla cake*                    |

### Functions with RETURN values
A return tells the function to send a value back to wherever it was called from.
Unlike console.log, which just shows something on screen, return gives you something to use or store.
```js
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // 7
```
This function adds two numbers and gives back the answer so you can use it or store it.

**Anatomy of a function with a return**
| Part                     | Explanation                                                    | Layman’s Phrasing                          |
| ------------------------ | -------------------------------------------------------------- | ------------------------------------------ |
| `function add(a, b)`     | Function with two input parameters                             | *This function needs two numbers*          |
| `return a + b;`          | **Returns** the sum back to where the function was called from | *Give back the total of those two numbers* |
| `let result = add(3, 4)` | The result is **stored** in a variable called `result`         | *Store the answer so we can use it later*  |
| `console.log(result)`    | Print the result to the console                                | *Show the final answer: 7*                 |

❗ **Why use return instead of console.log?**
| `console.log()`                         | `return`                                       |
| --------------------------------------- | ---------------------------------------------- |
| Just **displays** something             | Actually **sends data back** from the function |
| Doesn’t let you use the value elsewhere | You **can store or reuse** the returned value  |
| Great for testing/debugging             | Essential for calculations & logic flow        |

**Cake example**
```js
function buildCake(flavour, size) {
  return `You ordered a ${size} ${flavour} cake.`;
}

let message = buildCake("lemon", "medium");
console.log(message); // You ordered a medium lemon cake.
```

**Side-by-Side Comparison: return vs console.log only**
| Function Type           | With `return`                             | Without `return` (just `console.log`)             |
| ----------------------- | ----------------------------------------- | ------------------------------------------------- |
| **Code**                | `return result;`                          | `console.log(result);`                            |
| **Gives a value back?** | ✅ Yes — gives a result that can be reused | ❌ No — just displays something                    |
| **Can be stored/used?** | ✅ Yes — in variables, calculations, etc.  | ❌ No — the value disappears after it's printed    |
| **Purpose**             | 🧠 Produce and give back a value          | 🗣️ Show something on screen (good for debugging) |
| **Result**              | You get the value to work with            | You only *see* the value — you can't reuse it     |

Use return when you want to use or store the value later

Use console.log() when you just want to see what’s happening (debugging or user feedback)

### Adding Logic in functions
We add logic inside functions so the function can make decisions, do calculations, or process input before giving back an answer.

🧠 The purpose of logic in functions:
✅ To make the function smart and flexible

✅ So it can respond differently based on what it’s given

✅ To keep code reusable and tidy

Logic goes inside the curly braces { } — that's the function body.
```js
function example(input) {
  // 🧠 logic goes here
  if (input > 10) { // if the number inputted is greater than 10
    return "Big number!"; // return "Big Number"
  } else {                // else
    return "Small number."; //return small number
  }
}
let result = example(78);     // so if we input 78
console.log(result); // should log "Big number!"
```
The function runs the logic when it’s called, then uses return to give back the result.

**Example: Cake Shop**
```js
function getCakePrice(size, flavour) {  // usual function creation
  let basePrice;  // declares a variable for the value to be stored in once logic is run

  // logic to set base price by size
  if (size === "small") {
    basePrice = 10;
  } else if (size === "medium") {
    basePrice = 15;
  } else if (size === "large") {
    basePrice = 20;
  } else {
    return "Invalid size";
  }

  // logic to adjust price for fancy flavours
  if (flavour === "chocolate" || flavour === "red velvet") {
    basePrice += 5;
  }

  return `The price for a ${size} ${flavour} cake is £${basePrice}.`;
}

// Examples:
console.log(getCakePrice("medium", "vanilla"));     // £15
console.log(getCakePrice("large", "chocolate"));    // £25
console.log(getCakePrice("small", "red velvet"));   // £15
```
🧠 What’s happening:
- You pass in size and flavour.

- Logic chooses a base price based on size.

- If the flavour is fancier, it adds £5.

- The function then returns a complete message.

#### Function TASKS!

1. Check if a number is Even or odd
```js
// Write a function called checkEvenOdd that takes one number
// add logs whether it is even or odd

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
checkEvenOdd(7); // should log: "7 is odd"
checkEvenOdd(4); // should log: "4 is even"
```

2. Shout a message!
```js
// Write a function shout that takes a message (string)
// and logs it in ALL CAPS with an exclamation mark.
function shout(message) {
  // use string method .toUpperCase() to turn letters to uppercase
  console.log(message.toUpperCase() + "!");
}

shout("hello");  // "HELLO!"
shout("good luck");  // "GOOD LUCK!"
```

2. Double each number in an arrary
```js
// Write a function doubleNumbers that takes an array of numbers
// and logs each number doubled.

doubleNumbers([1, 2, 3]); // should log: 2, 4, 6
```

### Function Expressions
A **function expression** is when you create a function and *assign it to a variable*.

It’s a way to **store a function like a value**, so you can reuse or pass it around later.

**Syntax:**
```js
const sayHello = function() {
  console.log("Hello!");
};
sayHello();
```

**Anatomy of a Function Expression:**
| Part                   | Explanation                                          | Layman’s Phrasing                            |
| ---------------------- | ---------------------------------------------------- | -------------------------------------------- |
| `const sayHello =`     | Declare/ create the variable in which to store the function   | *This is a variable called sayHello. It shall/ will be'*              |
| `function()`           | Anonymous function (no name here!)                   | *a function with no parameters* |
| `{ console.log(...) }` | The function body — runs when the variable is called | *This is what the function does*             |
| `sayHello();`          | Calling the function using the variable name         | *Run the code saved in this variable*        |
✏️ Note: Unlike function declarations, function expressions don’t get hoisted — meaning you can’t call them before they're defined.

**Comparison:  Function Declaration vs Expression**
| Feature              | Function Declaration                    | Function Expression                |
| -------------------- | --------------------------------------- | ---------------------------------- |
| Syntax               | `function greet() { ... }`              | `const greet = function() { ... }` |
| Name                 | Has a name                              | Often anonymous                    |
| Hoisted?             | ✅ Yes – can be used before it's defined | ❌ No – must be defined first       |
| Can be stored/passed | ❌ Not directly                          | ✅ Yes – treat as a value           |

**Example: Function Expression that greets a user
```js
const greetUser = function(name) {
  console.log(`Hello, ${name}!`);
};

greetUser("Asha");  // Hello, Asha!
greetUser("Jamie"); // Hello, Jamie!
```

**TASK: Write your own function expression**
✏️ Task:
Write a function expression called doubleIt that:
Takes one number
Returns double the number
Call it with the number 6 and store the result in a variable called output
Log output to the console
```js
//Write a function expression called doubleIt that:
//Takes one number
const doubleIt = function(number) {
//Returns double the number
  return number * 2;
}
//Call it with the number 6 and store the result in a variable called output
let result = doubleIt(6);
//Log output to the console
console.log(result);
```
---

## Arrow Functions
✅ What is an Arrow Function?
- An arrow function is a shorter way to write a function expression using the => arrow syntax.
- It still lets you:
- Store a function in a variable
- Take parameters
- Return values

### Syntax comparison
| Task                     | Function Expression                             | Arrow Function                                   |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------ |
| No parameters            | `const greet = function() { return "Hi"; };`    | `const greet = () => "Hi";`                      |
| One parameter            | `const square = function(n) { return n * n; };` | `const square = n => n * n;`                     |
| Multiple parameters      | `const add = function(a, b) { return a + b; };` | `const add = (a, b) => a + b;`                   |
| With multiple statements | Use `{}` and `return`                           | Must use `{}` and `return`                       |
| No `this` binding        | Uses traditional `this`                         | Arrow functions **do not** have their own `this` |


### Basic Syntax
Function Expression:
```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```
Arrow Function (equivalent):
```js
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

### Anatomy of an Arrow Function
| Part             | Explanation                         | Layman’s Phrasing                       |
| ---------------- | ----------------------------------- | --------------------------------------- |
| `const greet =`  | Store function in a variable        | *This is the name I’ll use to call it*  |
| `(name)`         | Function **parameter(s)**           | *This is the info the function expects* |
| `=>`             | Arrow function syntax               | *Do this when called...*                |
| `{ return ... }` | Function **body** with return value | *Give this back when called*            |

#### Shorter Version for One-Liner Returns
If the function just returns something in one line, you can:
- Remove the {} and return
- Keep everything inline
```js
const greet = (name) => `Hello, ${name}!`;
```
⚠️ Only works if you're returning one thing on the same line.

#### Rules and Notes
| Rule                                         | Example                               |
| -------------------------------------------- | ------------------------------------- |
| No parameters? Use empty `()`                | `() => "Hi"`                          |
| One parameter? Drop the brackets             | `name => "Hello " + name`             |
| Multiple parameters? Use `()`                | `(a, b) => a + b`                     |
| More than 1 statement? Use `{}` and `return` | `(x) => { let y = x * 2; return y; }` |

#### Special Cases
1. No Parameters
You must use empty parentheses:
```js
const sayHello = () => "Hello!";
```

2. One Parameter
You can omit the parentheses:
```js
const double = x => x * 2;
```

3. Multiple Parameters
Use parentheses around them:
```js
const add = (a, b) => a + b;
```

4. Function Body with Logic
Use curly braces and return:
```js
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
```

#### Arrow Function vs Regular Function
| Feature                 | Arrow Function         | Regular Function                         |
| ----------------------- | ---------------------- | ---------------------------------------- |
| Syntax                  | Shorter, cleaner       | Longer                                   |
| `this` keyword behavior | ❗ Inherits from parent | Own value (context bound)                |
| Hoisting                | ❌ Not hoisted          | ✅ Declarations are hoisted               |
| Good for                | Short callbacks, logic | Complex methods or `this`-dependent code |

#### Examples
```js
const square = x => x * x;
console.log(square(5)); // 25

const shout = message => message.toUpperCase() + "!";
console.log(shout("hello")); // "HELLO!"
```

**More Examples**
1. Greet Someone
```js
const greet = name => `Hello, ${name}!`;
console.log(greet("Asha")); // "Hello, Asha!"
```

2. Add Two Numbers
```js
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8
```

3. Double a Number (with block body)
```js
const double = number => {
  return number * 2;
};
```

#### Task: Try it yourself!
Write an arrow function called isOdd that:
- Takes a number
- Returns true if it’s odd, false if it’s even
- Call it with 7 and log the result
```js
const isOdd = number => {
  return number % 2 !== 0;
};
console.log(isOdd(7));  // true
```
- number % 2 !== 0 checks if the number leaves a remainder when divided by 2 (which means it’s odd).
- return sends back true or false.
