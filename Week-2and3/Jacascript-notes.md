# JavaScript

---

## Contents
- [Intro to JavaScript](#intro-to-git-and-github)
  - [Your Tools](#your-tools)
  - [Assignment Overview](#assignment-overview)
  - [Strings and Output](#strings-and-output)
  - [Comments](#comments)
  - [Constants](#constants)
  - [Concatenation](#concatenation)
  - [Interpolation](#interpolation)
  - [Operators](#operators)
  - [Data Types](#data-types)
  - [User Input with Prompt()](user-input-with-prompt)
  - [Numbers and Input](#numbers-and-input)
  - [Casting Dta Types](#casting-data-types)
  - [Data Type Methods](#data-type-methods)

- [Variables, Conditions & Functions](#variables-conditions-and-functions)
  - [Using `let`](#using-let)
  - [Boolean Data Type](#boolean-data-type)
  - [Comparison Operators](#comparison-operators)
  - [If/Else Conditions](#ifelse-conditions)
  - [Logical Operators](#logical-operators)
  - [Else If Statements](#else-if-statements)
  - [Functions](#functions)
  - [Undefined vs Null](#undefined-vs-null)
  - [Scope](#scope)

- [Arrays, Loops and Objects](#arrays-loops-and-objects)
  - [Arrays](#arrays)
    - [Array Basics](#array-basics)
    - [push() and pop()](#push-and-pop)
    - [slice() and splice()](#slice-and-splice)
    - [shift() and unshift()](#shift-and-unshift)
  - [Objects](#objects)
    - [Nested Objects](#nested-objects)
    - [Object Methods](#object-methods)
  - [Loops](#loops)
    - [For Loops](#for-loops)
    - [While Loops](#while-loops)
  - [const vs let](#const-vs-let)

- [The DOM Part 1](#the-dom-part-1)
  - [JavaScript Web Apps](#javascript-web-apps)
  - [Just Enough HTML and CSS](#just-enough-html-and-css)
  - [Output Text to a Web Page](#output-text-to-a-webpage)
  - [Create and Modify HTML Elements](#create-and-modify-html-elements)
  - [DOM Events](#dom-events)

- [The DOM Part 2](#the-dom-part-2)
  - [Working With Collections](#working-with-collections)
  - [Nested Elements](#nested-elements)
  - [Event Listeners](#event-listeners)
  - [Timers](#timers)
  - [Traversing th DOM](#traversing-the-dom)
  - [Local Storage](#local-storage)

- [Intro to TypeScript](#intro-to-typescript)
  - [Understanding Typescript](#understanding-typescript)
  - [Installing & Setting Up](#installing-setting-up)
  - [Syntax & Usage](#syntax-usage)
    - [Types](#types)
    - [Functions](#functions)
    - [Interfaces](#interfaces)
    - [Type Assertions](#type-assertions)

- [Exceptions and Debugging](#exceptions-and-debugging)
  - [Exceptions](#exceptions)
    - [try...catch](#try-catch)
    - [Custom Exceptions](#custom-exceptions)
  - [Debugging](#debugging)
  - [Techniques](#techniques)
  - [Logging](#logging)
  - [The debugger keyword](#the-debugger-keyword)
  - [Breakpoints](#breakpoints)
  - [Chrome DevToold Summary](#chrome-devtools-summary)


- [JEST Testing](#jest-testing)
1. [Introduction to Testing](#introduction-to-testing)
2. [Types of Testing](#types-of-testing)
3. [Using Jest](#using-jest)
4. [Writing Tests in Jest](#writing-tests-in-jest)
5. [Test-Driven Development (TDD)](#test-driven-development-tdd)
6. [Asynchronous Testing](#asynchronous-testing)
7. [Mocking in Jest](#mocking-in-jest)
8. [Snapshot Testing](#snapshot-testing)
9. [Code Coverage](#code-coverage)
10. [Best Practices](#best-practices)
11. [Other Testing Frameworks](#other-testing-frameworks)

- [OOP in Javascript](#oop-in-javascript)
  - [What is OOP?](#what-is-oop)
  - [Objects & Classes](#objects-classes)
  - [Encapsulation](#encapsulation)
  - [Inheritance](#inheritance)
  - [Polymorphism](#polymorphism)

---

## Introduction to JavaScript

- JavaScript is one of the most popular programming languages.

- Used to **make websites interactive**.

- Offers many career opportunities.

- JS = JavaScript (not Java).

- Super fun and widely supported!

---

## Your Tools

You’ll be using:

- Chrome (or Chromium-based browser)

- CodePen (web-based editor – great for sharing and experimenting)

- Instructor-provided links for live coding and demos

---

## Assignment Overview

Assignment 1: JavaScript

- Released after the first session via the #announcements channel on Slack.

- 2 questions:

 - 1 creative coding question

 - 1 research question (with 3 sub-topics)

- Worth 44 marks total

- Focused on:

 - Code quality

 - Creativity

 - Use of JavaScript concepts (from all 6 lessons)

 - Practical and readable code

---

## Strings and Output

`console.log`
- Used to print output to the console.

- Strings are placed in double quotes "like this".

**Example**
```js
console.log("Hello, world!");
```

**Run the console in VSCode:**
```bash
node part1.js # runs console in terminal
#OR
#In Debug Console
#Run > Start Debugging> Node.js
```

**Debugging**
- Mistakes happen! Use the console to check for syntax errors and typos

---

## Comments

- Comments are ignored by the browser - they're for humans reading the code:

**Example:**
```js
// This is a single-line comment

/*
This is a
multi-line comment
*/
```

---

## Contstants

- A constant **stores a value that doesn't change**.

- Use `const` to declare it.

**Example**
```js
const greeting = "Hello there!"; /* Creates the greeting */
console.log(greeting); /* Show the 'greeting' in the console */
```
- You can only assign a value to a constant once.

---

## Concatenation

- Concatenation = joining strings together with `+`

**Example**
```js
const name = "Alex"; /* Create the const variable */
console.log("Hello, " + name + "!"); /* Log the greeting and name to the console */
```

---

## Interploation *(Template Literals)*

- Easier and cleaner way to **insert values into strings**.

- Uses **template literals**: backticks `, ${} for variables.

- Uses `backticks instead of quotes
- Uses `${variable}` to insert values

```js
const name = "Alex";
console.log(`Hello, ${name}!`);
```

---

## Operators
**Operators** are special symbols or keywords that perform operations on values (operands).
For example: `+`, `-`, `=`, `===`, `&&`

### Types of operators 
| Operator Type          | Description                | Example             |
| ---------------------- | -------------------------- | ------------------- |
| **Arithmetic**         | Math operations            | `5 + 2`             |
| **Assignment**         | Assign values to variables | `x = 10`            |
| **Comparison**         | Compare two values         | `a === b`           |
| **Logical**            | Combine boolean values     | `a && b`            |
| **String**             | Work with text strings     | `'Hi' + ' there'`   |
| **Unary**              | Work with a single operand | `typeof x`          |
| **Ternary**            | Shorthand for `if/else`    | `condition ? a : b` |
| **Bitwise** (advanced) | Operate on bits            | `a & b`             |

### Arithmetic Operators
Perform basic maths operations
| Operator | Description         | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 2`  | `7`    |
| `-`      | Subtraction         | `5 - 2`  | `3`    |
| `*`      | Multiplication      | `5 * 2`  | `10`   |
| `/`      | Division            | `10 / 2` | `5`    |
| `%`      | Modulus (remainder) | `10 % 3` | `1`    |
| `**`     | Exponentiation      | `2 ** 3` | `8`    |

**TASK- Predict the Output:**
```js
console.log(6 + 3); //9
console.log(10 % 4); //2
console.log(2 ** 4); //2*2*2*2 16
```

### Assignment Operators
Used to assign or update values in variables
| Operator | Example  | Equivalent To   |
| -------- | -------- | --------------- |
| `=`      | `x = 5`  | Assign 5 to `x` |
| `+=`     | `x += 2` | `x = x + 2`     |
| `-=`     | `x -= 3` | `x = x - 3`     |
| `*=`     | `x *= 4` | `x = x * 4`     |
| `/=`     | `x /= 2` | `x = x / 2`     |

**TASK-What's the final value of x?**
```js
let x = 10; // 10 
x += 5; // 15 (10 + 5)
x *= 2; // 30 (15 * 2)
console.log(x); // 30
```

### String Operators
JS uses + to join strings (concatenation)
```js
let greeting = "Hello" + " " + "world!";
console.log(greeting); // "Hello world!"
```
You can also use `+=` to append to strings:
```js
let text = "I like ";
text += "JavaScript!";
console.log(text); // "I like JavaScript!"
```

### Ternary Operator
Shorthand `if...else`
```js
condition ? value_if_true : value_if_false
```
**Example**
```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
```

**Task: What will be the grade?**
```js
let score = 75;
let grade = score >= 70 ? "Pass" : "Fail";
console.log(grade); // "Pass"
```

### Summary Table:
| Type       | Example      | Result/Use                    |
| ---------- | ------------ | ----------------------------- |
| Arithmetic | `4 + 2`      | `6`                           |
| Assignment | `x += 2`     | Adds 2 to `x`                 |
| Comparison | `a === b`    | Strict equality               |
| Logical    | `a && b`     | AND operation                 |
| String     | `"Hi" + "!"` | `"Hi!"`                       |
| Ternary    | `a ? b : c`  | If a is true, return b else c |

---

## Data Types

- String: "text"

- Number: 42, 3.14

- Boolean: `true`, `false`

- Operators behave differently with different types!

## User Input with `prompt()
`prompt()` pops up a box to get input from the user:

**Example:**
```js
const name = prompt("What's your name?");
console.log(`Hello, ${name}!`);
```

**Maths Operators**:

| Operator | Name               | Example  | Result |
| -------- | ------------------ | -------- | ------ |
| `+`      | Addition           | `2 + 3`  | `5`    |
| `-`      | Subtraction        | `10 - 4` | `6`    |
| `*`      | Multiplication     | `5 * 2`  | `10`   |
| `/`      | Division           | `10 / 2` | `5`    |
| `**`     | Exponentiation     | `2 ** 3` | `8`    |
| `%`      | Modulo (remainder) | `7 % 3`  | `1`    |

---

## Casting Data Types

- Casting = **changing a value's type.**

**Example:**

```js
const input = prompt(Enter a number);
const result = Number(input) + 1;
console.log(result);
```

- `Number(value)` converts to a number
- `String(value)` converts to a string

## Data-Type Methods
JavaScript data types like strings, arrays, objects, and numbers come with built-in methods — these are like mini-tools you can use to work with the data.

### String methods
Strings are sequences of characters. Methods help you inspect, change, or extract parts of strings.

| Method           | What it does                        | Example                                   |
| ---------------- | ----------------------------------- | ----------------------------------------- |
| `.length`        | Returns number of characters        | `"hello".length` → `5`                    |
| `.toUpperCase()` | Converts to uppercase               | `"hi".toUpperCase()` → `"HI"`             |
| `.toLowerCase()` | Converts to lowercase               | `"HI".toLowerCase()` → `"hi"`             |
| `.includes()`    | Checks if a string contains another | `"cat".includes("a")` → `true`            |
| `.indexOf()`     | Finds position of a substring       | `"hello".indexOf("e")` → `1`              |
| `.slice()`       | Extracts a part of the string       | `"hello".slice(1, 4)` → `"ell"`           |
| `.trim()`        | Removes whitespace from ends        | `"  hi  ".trim()` → `"hi"`                |
| `.replace()`     | Replaces part of a string           | `"apples".replace("p", "b")` → `"abbles"` |

#### Examples

1. `length`
- Purpose: Get the number of characters in a string (including spaces and punctuation).

` Syntax:`
```js
string.length
```

`Example:`
```js
const name = "Alex";
console.log(name.length); // 4
```
📝 Notes:
- It's a property, not a method — no parentheses ().
- Includes all characters.

`TASK:`
Create a string variable with your favourite food.
Log how many characters are in it using .length.
```js
const faveFood = "Lasagna";
console.log(faveFood.length);  // should log 7
```

2. `toUpperCase`
- Purpose: Convert all characters to uppercase.

` Syntax:`
```js
string.toUpperCase()
```

`Example:`
```js
const greeting = "hello";
console.log(greeting.toUpperCase()); // "HELLO"

```
📝 Notes:
- Doesn’t change the original string unless you reassign it.

`TASK:`
Write a string with a short sentence.
Log the uppercase version of it.
```js
const mySentence = "a sentence to make uppercase";
console.log(mySentence.toUpperCase()); // "A SENTENCE TO MAKE UPPERCASE"
```

3 . `toLowerCase`
- Purpose: Convert all characters to lowercase.

` Syntax:`
```js
string.toLowerCase()
```

`Example:`
```js
const shout = "WATCH OUT!";
console.log(shout.toLowerCase()); // "watch out!"
```

📝 Notes:
- Useful for comparing input like usernames, emails, etc.

`TASK:`
Create a variable with a loud, shouty word.
Use .toLowerCase() to calm it down.
```js
const mySentence = "WHAT ON EARTH ARE YOU DOING";
console.log(mySentence.toLowerCase()); // "what on earth are you doing"
```

4 . `includes`
- Purpose: Check if a string contains a specific substring.

` Syntax:`
```js
string.includes(searchString)

```

`Example:`
```js
const phrase = "I love chocolate";
console.log(phrase.includes("choc")); // true
```

📝 Notes:
- Case-sensitive.
- Returns a boolean (true or false).

`TASK:`
Write a sentence and check if it includes the word "love".
```js
const mySentence = "I love my rabbits, Pancake and Pretzel!";
console.log(mySentence.includes("love")); // true
```

5 . `slice`
- Extract part of a string without changing the original.

` Syntax:`
```js
string.slice(startIndex, endIndex)
```

`Example:`
```js
const word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"
```

📝 Notes:
- `endIndex` is not included.
- If you skip `endIndex`, it goes to the end.
- Accepts negative indexes too.

`TASK:`
Create a string "Caterpillar" and slice it to get just "pillar".
```js
const myString = "catterpillar";
console.log(myString.slice(6)); 
```

6 . `trim()`
- Removes whitespace (spaces, tabs, line breaks) from both the start and end of a string.

` Syntax:`
```js
string.trim()
```

`Example:`
```js
const messy = "   tidy up!   ";
const clean = messy.trim();
console.log(clean); // "tidy up!"
```

📝 Notes:
- It doesn’t affect the middle of a string.
- Often used to clean up user input or pasted text.

`TASK:`
Create a string "Caterpillar" and slice it to get just "pillar".
```js
let input = "   hello world   ";
console.log(input.trim());
```

#### Challenge
You’ve been given a coded message. Your job is to:

- Clean it up (remove leading/trailing spaces).

- Make it shout-worthy (uppercase).

- Check if it contains the word "SECRET".

- Slice out just the secret word from the sentence.

- Log the final message and info to the console.

```js
let rawMessage = "   there's a secret hidden in plain sight.  ";

// Step 1: Trim whitespace
let trimmedMessage = rawMessage.trim();

// Step 2: Convert to uppercase
let upperCased = trimmedMessage.toUpperCase();

// Step 3: Check if it includes the word "SECRET"
let included = upperCased.includes("SECRET");

// Step 4: Slice out the word "SECRET" from the sentence
let sliced = upperCased.slice(10, 17);

// Step 5: Log your final message and info
console.log("Cleaned Message:", upperCased);
console.log("Contains SECRET?", included);
console.log("Extracted Word:", sliced);
```



### Array Methods
Arrays hold lists of values. These methods let you add, remove, search, or loop over items.
| Method        | What it does                            | Example                            |
| ------------- | --------------------------------------- | ---------------------------------- |
| `.length`     | Number of items in array                | `[1, 2, 3].length` → `3`           |
| `.push()`     | Adds item to end                        | `arr.push(4)` → adds 4 to end      |
| `.pop()`      | Removes last item                       | `arr.pop()` → removes last         |
| `.shift()`    | Removes first item                      | `arr.shift()` → removes first      |
| `.unshift()`  | Adds item to start                      | `arr.unshift(0)` → adds 0 at start |
| `.includes()` | Checks if value is in array             | `[1,2,3].includes(2)` → `true`     |
| `.indexOf()`  | Finds index of value                    | `[1,2,3].indexOf(2)` → `1`         |
| `.slice()`    | Copies part of the array                | `arr.slice(1,3)` → `[2,3]`         |
| `.splice()`   | Adds/removes items at specific index    | `arr.splice(1,1)` → removes 1 item |
| `.map()`      | Transforms each item, returns new array | `arr.map(x => x*2)`                |
| `.filter()`   | Returns new array with matching items   | `arr.filter(x => x > 2)`           |
| `.forEach()`  | Runs a function for each item           | `arr.forEach(x => console.log(x))` |
| `.join()`     | Turns array into string with separator  | `[1,2,3].join("-")` → `"1-2-3"`    |

### Object Methods
Objects store key–value pairs. Methods help you explore, loop, or modify them.
| Method                | What it does                         | Example                                  |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| `Object.keys(obj)`    | Returns array of keys                | `Object.keys({a:1, b:2})` → `["a", "b"]` |
| `Object.values(obj)`  | Returns array of values              | `Object.values({a:1, b:2})` → `[1, 2]`   |
| `Object.entries(obj)` | Returns array of \[key, value] pairs | `Object.entries({a:1})` → `[["a", 1]]`   |
| `hasOwnProperty()`    | Checks if key exists in object       | `obj.hasOwnProperty("a")` → `true`       |

### Number Methods (and Math)
JavaScript numbers don’t have many methods, but you use the Math object for common tasks.
| Method / Property | What it does                        | Example                          |
| ----------------- | ----------------------------------- | -------------------------------- |
| `.toFixed(n)`     | Rounds number to `n` decimal places | `(3.1415).toFixed(2)` → `"3.14"` |
| `Math.round()`    | Rounds to nearest whole number      | `Math.round(4.6)` → `5`          |
| `Math.floor()`    | Rounds down                         | `Math.floor(4.9)` → `4`          |
| `Math.ceil()`     | Rounds up                           | `Math.ceil(4.1)` → `5`           |
| `Math.random()`   | Random number between 0 and 1       | `Math.random()` → `0.36` (etc.)  |
| `Math.max(…)`     | Finds highest                       | `Math.max(1,5,3)` → `5`          |



---

## Variables, Conditions and Functions

---

## Using `let`

`let` allows us to create **reassignable variables**.  
Unlike `const`, you can update a `let` variable’s value.

```js
let score = 10;
score = 15;
console.log(score); // Outputs 15

let score2 = 85;
console.log("initial score: " + score);

score2 = 92
console.log("updated score " + score2);
```

🧠 Use `const` unless you specifically need to reassign a variable.

---

## Boolean Data Type

A **Boolean** represents a value that is either `true` or `false`.

```js
const isSunny = true;
console.log(isSunny); // true
```

> Do not use quotation marks around `true` or `false` — they are keywords.

---

## Comparison Operators

Use these to compare values:

| Operator | Description                    | Example        | Result   |
|----------|--------------------------------|----------------|----------|
| `==`     | Equal to (value only)          | `5 == '5'`     | `true`   |
| `===`    | Strict equality (value & type) | `5 === '5'`    | `false`  |
| `!=`     | Not equal                      | `5 != 10`      | `true`   |
| `!==`    | Not equal (strict)             | `5 !== '5'`    | `true`   |
| `>`      | Greater than                   | `5 > 3`        | `true`   |
| `<`      | Less than                      | `5 < 3`        | `false`  |
| `>=`     | Greater than or equal          | `5 >= 5`       | `true`   |
| `<=`     | Less than or equal             | `4 <= 5`       | `true`   |

---

## If/Else Conditions

Use `if...else` to run different code depending on a condition.

```js
const choice = prompt("Do you prefer books or movies?");

if (choice === "books") {
  console.log("📚");
} else {
  console.log("🍿");
}
```

🧠 JavaScript is **case sensitive** — `"Books"` is not the same as `"books"`.

---

## Logical Operators

Combine conditions with:

| Operator | Description         | Example                       | Result |
|----------|---------------------|-------------------------------|--------|
| `&&`     | AND (both true)     | `isSunny && hasSunglasses`    | true   |
| `||`     | OR (either true)    | `choice === "books" || "Books"`| true   |
| `!`      | NOT (opposite)      | `!isScary`                    | false  |

---

## Else If Statements

Use `else if` to handle multiple specific conditions:

```js
const choice = prompt("Pick books, movies, or songs");

if (choice === "books") {
  console.log("📚");
} else if (choice === "songs") {
  console.log("🎵");
} else {
  console.log("🍿");
}
```

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
---

## Undefined vs Null

| Term        | Meaning                                 |
|-------------|-----------------------------------------|
| `undefined` | Variable declared but not assigned a value |
| `null`      | Explicitly set to no value               |

```js
let msg;
console.log(msg); // undefined

let value = null;
console.log(value); // null
```

---

## Scope

Scope controls **where variables can be accessed**.

### Function Scope:
```js
function showName() {
  const name = "Alex";
  console.log(name);
}
console.log(name); // ❌ Error: not accessible outside function
```

### Block Scope:
```js
let outside = "hi";
if (true) {
  let inside = "hello";
  outside = "updated";
}
console.log(outside); // "updated"
// console.log(inside); // ❌ Error
```

🧠 Best practice: Declare variables in the smallest scope possible.

---

## Arrays

### Array Basics

An array stores multiple values in a single variable.

```js
let fruit = ["apple", "plum", "cherry", "avocado"];
console.log(fruit.length);   // 4
console.log(fruit[0]);       // "apple"
```

Arrays use **zero-based indexing**, and `.length` returns the number of elements.

---

### push() and pop()

- `push()` adds an item to the end of the array.
- `pop()` removes the last item and returns it.

```js
fruit.push("banana");
fruit.pop();
```

---

### slice() and splice()

- `slice(start, end)` returns a portion of the array.
- `splice(start, deleteCount, items...)` modifies the array by adding/removing elements.

```js
fruit.slice(2); // returns from index 2 onward
fruit.splice(1, 1); // removes 1 item at index 1
fruit.splice(1, 0, "banana", "melon"); // adds 2 items at index 1
```

---

### shift() and unshift()

- `shift()` removes the **first** item from an array.
- `unshift(item)` adds an item to the **beginning**.

```js
fruit.shift();
fruit.unshift("strawberry");
```

---

## Objects

Objects store data in key-value pairs.

```js
const book = {
  title: "Invisible Women",
  author: "Caroline Criado-Perez",
  year: 2019
};
console.log(book.title); // "Invisible Women"
```

---

### Nested Objects

Objects can contain other objects or arrays.

```js
let girl = {
  name: "Ana",
  age: 23,
  friends: ["Mei", "Sabina", "Nuala"],
  address: {
    number: 123,
    street: "Cambridge Road",
    city: "London"
  }
};
console.log(girl.address.city); // "London"
```

---

### Object Methods

A function inside an object is called a method.

```js
let girl = {
  name: "Ana",
  sayHello: function() {
    console.log("Hola Amigas!");
  }
};

girl.sayHello(); // "Hola Amigas!"
```

---

## Loops
A loop is a way to **repeat a set of instructions multiple times** — either a specific number of times or while a condition is true.

Instead of repeating code like this:
```js
console.log("Hi");
console.log("Hi");
console.log("Hi");
```
You can write:
```js
for (let i = 0; i < 3; i++) {
  console.log("Hi");
}
```

### Types of Loops
| Loop Type    | Description                                              |
| ------------ | -------------------------------------------------------- |
| `for` loop   | Repeat a block of code a set number of times             |
| `while` loop | Keep looping **while a condition is true**               |
| `do...while` | Like `while`, but always runs the code **at least once** |


### For Loops

`for` loops run a block of code a specific number of times.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);  // prints 1 to 5
}
```
**What's happening:**
- `let i = 1` - the starting value
- `i <= 5` - loop condition (keep going while true)
- ` `i++` - increase `i` by 1 each time

### Anatomy of a `for` loop
| Part              | Explanation    | Layman’s phrasing (narrative)    |
| ----------------- | -------------- | -------------------------------- |
| `for (...)`       | The **loop keyword** — tells JavaScript to repeat something using specific rules. | *Let’s repeat something several times, using the rules inside.* |
| `let i = 0`       | **Initialisation** — creates a variable (`i`) and sets its starting value.        | *Start counting from 0.*                                        |
| `i < 5`           | **Condition** — as long as this is `true`, the loop keeps going.                  | *Keep looping as long as `i` is less than 5.*                   |
| `i++`             | **Update** — runs after each loop; increases `i` by 1 so we move toward stopping. | *Add 1 to the counter each time.*                               |
| `{ ... }`         | **Loop body** — the code inside the curly braces runs each time the loop repeats. | *Do this over and over again.*                                  |
| `console.log(i);` | An **example action** — this line runs each time the loop repeats.                | *Print the current number (`i`) each time.*                     |



Use `for` loops to loop through arrays or repeat actions a fixed number of times.

---
### `for...in` and `for...of` loops
 especially useful for working with objects and arrays.

 #### For...in loop
 Used to loop through the keys (property names) of an object.
 ```js
 const user = {
  name: "Alex",
  age: 40,
  city: "Manchester"
};

for (let key in user) {
  console.log(key);           // name, age, city
  console.log(user[key]);     // Alex, 40, Manchester
}
```

**Anatomy of a `for...in`**
| Part           | Explanation                                         | Layman’s phrasing                  |
| -------------- | --------------------------------------------------- | ---------------------------------- |
| `for (let key` | Declare a loop variable that will hold the key name | *Let’s look at each key in turn*   |
| `in user)`     | Go through each **key** in the object               | *Loop through the object's labels* |
| `user[key]`    | Use bracket notation to get the value by key        | *Get the value for each key name*  |

#### `for...of` loops
Used to loop through the values of an iterable, like arrays, strings, or sets.

**Example: Array**
```js
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);  // red, green, blue
}
```

**Example: String**
```js
for (let char of "Hi") {
  console.log(char);  // H, i
}
```

#### Anatomy of a `for..in` loop
| Part                | Explanation                           | Layman’s phrasing                       |
| ------------------- | ------------------------------------- | --------------------------------------- |
| `for (let item`     | Declare a variable to hold each value | *Let’s go through each item one by one* |
| `of iterable)`      | The thing you're looping through      | *Look through the array/string/etc.*    |
| `console.log(item)` | Use the value directly                | *Do something with each item*           |

**Comparison: `for...in` vs `for...of`**
| Feature           | `for...in`                    | `for...of`                                     |
| ----------------- | ----------------------------- | ---------------------------------------------- |
| Loops over        | **Keys** (property names)     | **Values** of iterable objects                 |
| Best for          | Objects                       | Arrays, strings, sets, NodeLists, etc.         |
| Output            | Keys (e.g. `"name"`, `"age"`) | Values (e.g. `"Alex"`, `40`)                   |
| Accessing values  | Use `object[key]`             | Use the `item` variable directly               |
| Use with objects? | ✅ Yes                         | ❌ Not directly (throws error on plain objects) |
| Use with arrays?  | ✅ Yes, but gives indexes      | ✅ Yes, gives actual values                     |

### Loop Control: break and continue
Use these to control the flow inside a loop.

- break: exit the loop early

- continue: skip to the next iteration
```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 5) break;     // stop at 4
  console.log(i);
}
```

---

### While Loops
A while loop is a way to repeat a block of code as long as a condition is true.

You use it when:

- You don’t know exactly how many times to loop.

Y- ou want to keep looping until something changes.

- `while` loops continue as long as a condition is true.

```js
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
```
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```
This prints numbers 1 to 5 — same output as a for loop, but the structure is more flexible.

#### Anatomy of a `while` loop
| Part             | Explanation                                                                   | Layman’s phrasing (narrative)                    |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| `let i = 1`      | **Initialisation** — sets the starting point **before** the loop begins.      | *Start counting from 1.*                         |
| `while (i <= 5)` | **Condition** — checks if the loop should keep going.                         | *Keep looping while `i` is 5 or less.*           |
| `{ ... }`        | **Loop body** — contains the code to run on each loop.                        | *Do this every time the condition is true.*      |
| `console.log(i)` | **Example task** — prints the current value of `i`.                           | *Say the number out loud.*                       |
| `i++`            | **Update** — increases `i` to eventually stop the loop (must be done inside). | *Add 1 to the counter so we don’t loop forever.* |


🚨 Be careful of **infinite loops** – always modify the loop variable.


#### Comparison: For vs While loops
| Feature               | `for` loop                                       | `while` loop                                         |
| --------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| Structure             | All parts (start, condition, update) in one line | Parts are separated (init above, update inside loop) |
| Best for              | When you **know how many times** to loop         | When you **don’t know how many times** to loop       |
| Condition checked     | Before each loop                                 | Before each loop                                     |
| Update position       | In loop definition (`for (...; ...; update)`)    | Inside the loop body                                 |
| Simpler for counting  | ✅ Yes — great for counting                       | Can be used, but requires manual setup               |
| Risk of infinite loop | Low (if written correctly)                       | Higher — you must remember to update manually        |

### Do...While Loops
A do...while loop is a loop that:

✅ Always runs the code at least once, then
🔁 keeps running while a condition is true.

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```
Even if i started at 100, the loop body would still run once before checking the condition.
**Example:**
A menu prompt where you always want to show the menu once, even if the user exits immediately:
```js
let choice;
do {
  choice = prompt("Enter a number, or type 'exit' to quit:");
} while (choice !== "exit");
```

#### Anatomy of a `do...while` loop
| Part              | Explanation                                                                     | Layman’s phrasing (narrative)                        |
| ----------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `let i = 1`       | **Initialisation** — sets up your counter **before** the loop starts.           | *Start counting from 1.*                             |
| `do { ... }`      | **Loop body** — this code runs **first**, even before the condition is checked. | *Do this action at least once, no matter what.*      |
| `console.log(i)`  | **Task to repeat** — this line runs inside the loop.                            | *Say the number.*                                    |
| `i++`             | **Update** — increase the counter so the loop can eventually stop.              | *Move one step closer to stopping.*                  |
| `while (i <= 5);` | **Condition** — checked *after* running the loop body at least once.            | *Should we do that again? Only if `i` is 5 or less.* |


**Comparison table: `for` vs `while` vs `do...while`**
| Feature                  | `for` loop                       | `while` loop                     | `do...while` loop                    |
| ------------------------ | -------------------------------- | -------------------------------- | ------------------------------------ |
| Runs code at least once? | ❌ No (only if condition is true) | ❌ No (only if condition is true) | ✅ Yes (runs once before checking)    |
| Structure                | All-in-one line                  | Condition first, body second     | Body first, condition last           |
| Condition checked        | Before loop                      | Before loop                      | After loop body                      |
| Best for                 | Known number of loops            | Unknown number, with pre-check   | When the task must run at least once |
| Update position          | In loop header                   | Inside loop body                 | Inside loop body                     |
| Risk of infinite loop    | Low if written well              | Medium                           | Medium–High if condition never false |



---

## const vs let

You can modify the **contents** of an array or object declared with `const`, but you can't reassign the variable.

```js
const fruit = ["apple", "plum"];
fruit.push("orange"); // ✅ allowed
fruit = ["banana"];   // ❌ error
```

---

## Recap

✅ Use arrays to store data  
✅ Use `push()`, `pop()`, `splice()`, `slice()` for manipulation  
✅ Use `for` and `while` loops for repetition  
✅ Create and use objects (including nested ones)  
✅ Write and use object methods  
✅ Understand `const` with reference types  

📚 Further reading:
- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

---

## The DOM Part 1
## JavaScript Web Apps

**What is the DOM?**
- The **Document Object Model** (DOM) lets JavaScript read/write web page content.
- Enables interactivity by linking JavaScript with HTML elements.

---

## 📝 Outputting Text

### `document.write()`
```js
document.write("Hello 👋")
```
- Adds text directly to the page.
- **Not recommended** for precise control — better methods exist.

---

## 🔤 Just Enough HTML

- **HTML (HyperText Markup Language)** structures web content.
- Uses **tags** like `<h1>` or `<p>` for meaning and layout.
- In **CodePen**, we can write minimal HTML to get started.

---

## 🔎 DOM: Read/Write Text

### Example:
```html
<div id="message">Hello 👋</div>
```

### JS:
```js
document.getElementById("message").textContent = "New message!";
```
- Use `getElementById()` to select an element.
- Use `textContent` to update its text.

---

## 🖱️ DOM Events

- Events run code **when something happens** (e.g., button click).
- Example:

```html
<button onclick="convertCurrency()">Convert</button>

<input type="number" onchange="convertCurrency()">
```

### JavaScript:
```js
function convertCurrency() {
  // do something
}
```

---

## 🏗️ Creating HTML Elements

### JavaScript:
```js
let heading = document.createElement("h1");
heading.textContent = "Hello World!";
document.body.appendChild(heading);
```

- `createElement()` creates new elements.
- `appendChild()` adds them to the page.

---

## 🎨 Just Enough CSS

- Use **CSS** to style HTML.
- You can target:
  - **Tags** (`body {}`)
  - **Classes** (`.my-class {}`)
  - **IDs** (`#my-id {}`)

### Example:
```css
p {
  color: red;
  font-family: Helvetica;
}
```

---

## 🎨 Update Styles with JavaScript

### Example:
```js
document.body.style.backgroundColor = "red";
```

- Select elements and modify their style directly in JS.

---

## ✅ Recap: You Can Now
- Use basic HTML & CSS to build and style a page.
- Use the **DOM** to:
  - Read and write text
  - Respond to events
  - Create and append elements
  - Change styles with JavaScript

---

## 🔗 Useful References
- [CodePen Autocomplete](https://blog.codepen.io/documentation/autocomplete)
- [MDN DOM Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🔍 `textContent` vs `innerText` vs `innerHTML`
| Property      | Description |
|---------------|-------------|
| `textContent` | Fastest and safest (plain text only) |
| `innerText`   | Affects visible text only, respects CSS |
| `innerHTML`   | Inserts HTML (can be a security risk) |

---
## The DOM: Part 2

### Working with Collections

`getElementsByTagName()`

- Selects all elements with a given tag.

- Returns a live HTMLCollection.

```js
let paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
  p.style.color = 'blue';
}
```

`getElementsByClassName()`

- Selects elements with a specific class name.

- Useful when elements have different tags but the same styling need.

```js
let highlights = document.getElementsByClassName('highlight');
for (let h of highlights) {
  h.style.fontWeight = 'bold';
}
```

---

### Nested Elements

Select elements *within* another element

```js
const list = document.getElementById("fruit-list");
const items = list.getElementsByTagName("li");
for (let item of items) {
  item.textContent += " 🍓";
}
```

---

### Event Listeners

Respond to user actions (like clicks, form submits).

`addEventListener()`
```js
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

You can also change elements directly:
```js
title.style.color = "green";
```

---

### Timers

Use `setTimeout()` to deley code execution
```js
setTimeout(() => {
  alert("This shows after 1 second!");
}, 1000);
```

---

### Traversing the DOM - `classList`

Use `classList.add()` and `classList.remove()` to apply or remove styles.
```js
element.classList.add("highlighted");
element.classList.remove("hidden");
```

---

### Local Storage

Persist data in the browser across sessions.

```js
localStorage.setItem("name", "Alex");
let storedName = localStorage.getItem("name");
```

Store objects with JSON:
```js
let todos = ["Task 1", "Task 2"];
localStorage.setItem("todos", JSON.stringify(todos));
```

---

### Quick HTML Element Reference

`<input>`, `<label>`, `<p>`, `<div>`, `<h1>–<h6>`, `<ul>`, `<li>`, `<select>`, `<option>`, `<button>`

---

### Useful CSS Properties

```css

background-color: lavender;
font-family: 'Arial', sans-serif;
text-align: center;
text-decoration: underline;
```

---

## Intro to TypeScript

### Understanding TypeScript?

- A *typed* superset of JavaScript.

- Adds *static types* and features that enhance:

- - Code reliability

- - Maintainability

- - Developer productivity

TypeScript code is *transpiled to JavaScript*, which runs in browsers, Node.js, Deno, etc.

#### Benefits over JavaScript

✅ Static Typing: Type errors caught at compile time.

✅ Type Safety: Fewer runtime bugs.

✅ Improved maintainability: Interfaces, types, and better structure.

✅ Better developer tooling: Autocompletion, refactoring tools, etc.

### Who Uses TypeScript?
Used by major companies and open-source projects due to its structure and safety features.

---

### Installing & Setting Up

#### Install TypeScript

- Project Level:
```bash
npm install typescript --save-dev
```

```ts
tsc --init
// OR
npx tsc --init

// OR
- Golbal install *(recommended for CLI usage):
```bash
npm install -g typescript
```

#### Create a TypeScript Project
```bash
mkdir typescript-project && cd typescript-project
npm init
npm install typescript --save-dev
tsc --init
```
- Creates `tsconfig.json to configure TypeScript compiler options.

---

### Syntax & Usage

#### Types

🔹 **Primitive Types**
string, number, boolean, null, undefined, symbol, bigint

🔸 **Complex Types**
Objects, arrays, functions, user-defined types

🔹 **Union & Intersection Types**
Union (|): multiple possible types

Intersection (&): combine multiple types

🔸 **Tuples**
-  Fixed-length arrays with specified types
```ts
let user: [string, number] = ["Alice", 30];
```

🔹 **Enums**
Named constants

```ts
Copy
Edit
enum Color { Red, Green, Blue }
```

---

#### Functions

- Typed arguments and return values
```ts
function greet(name: string, place?: string): string {
  return `Hello ${name}, I love ${place}`;
}
```
- **Optionam Parameters**: `place?`
- **Default Parameters**:
```ts
function greet(name = "person") {...}
```

#### Interfaces

- Define the **shape of objects**
```ts
interface Person {
  name: string;
  age: number;
  city?: string;
}
```
- Used for:
- - Code consistency

- - Autocompletion

- - Compile-time safety

#### Interface vs Type Alias

| Feature       | Interface          | Type Alias          |
| ------------- | ------------------ | ------------------- |
| Extends       | ✅ Yes              | ❌ Not directly      |
| Implements    | ✅ Yes (with class) | ❌ No                |
| Complex Types | ❌ No               | ✅ Yes (e.g. unions) |

---

#### Type Assertions

Tell the compiler to treat a variable as a specific type

```ts
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
```

Useful when:

  - Working with any

  - Parsing JSON

  - Overriding type inference

---

## Exceptions and Debugging

### Exceptions

**What is an Exception?**
- an unexpected event (like an error) that interrupts the normal flow of a program
- in JS we 'handle' them to prevent app crashes and allow *graceful failure*

**Common JS Error types**
| Error Type       | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `SyntaxError`    | Bad syntax, like missing a bracket                             |
| `ReferenceError` | Using a variable that doesn't exist                            |
| `TypeError`      | Using the wrong data type (e.g., calling a method on a number) |
| `RangeError`     | Value out of range (e.g., invalid array length)                |


### try...catch

```js
try {
  // code to run
} catch (error) {
  console.error("Something went wrong:", error);
}
```

✅ Use sparingly – don’t overuse try...catch
✅ Be specific with error types
✅ Always log errors for debugging
✅ Consider fallback actions or recovery if possible

### Custom Exceptions

- you can create and throw your own errors

```js
throw new ERROR("This is a custom error message");
```

**Application**
Write a safeDivide(num, denom) function:

  - Use try...catch
  - Throw error if denom is 0
  - Return result if valid
  - Log error if caught

```js
// create the function
function safeDivide(numerator, denominator) {
  try {
    // check if denominator is 0
    if (denominator === 0) {
      // if it is 0, throw the custom error- the one we anticipate
      throw new Error("Cannot divide by zero");
    }
    // if valid, return the result of the division
    return numerator / denominator;

  } catch (error) {
    // this is called IF error is thrown
    // log error message to console
    console.log("Error:", error.message);
  }

}
// test calls to see behaviour
//console.log(safeDivide(10, 2));
//console.log(safeDivide(10, 0));
```

## Debugging
**What is Debugging?**

- The process of finding and fixing bugs in your code.

- Makes code more reliable and easier to maintain.

### Techniques

#### Logging
```js
console.log("Variable value:", myVar);
console.error("Something broke:", err);
```

#### The debugger Keyword
- acts like a breakpoint embedded in code
- pauses ...
```js
function checkSomething(x) {
  debugger;  // pauses execution here
  return x + 1;
}
```

#### Breakpoints
- In Chrome DevTools
  - You can pause execution at a line in the browser.
  - Inspect variables, step through code line-by-line.

#### Chrome DevTools Summary

| Tool        | What it Does                       |
| ----------- | ---------------------------------- |
| Console     | View logs & interact with JS       |
| Sources     | Step through code, set breakpoints |
| Elements    | Inspect/edit HTML + CSS            |
| Network     | Monitor requests/responses         |
| Performance | Profile code speed & efficiency    |

---

## JEST Testing

### Introduction to Testing

Testing in software development evaluates an application to ensure it meets requirements, works as expected, and is free from defects.

### Benefits:
- **Validation and Verification** 
  - *Validation:* the software does what its supposed to
  - *Verification:* the software is built to specification and designs (requirements, design, user expectations)
- **Quality Assurance**
  - improve quality of software - detecting defects early - reliable, stable, performs as expected under various conditions
- **Risk Reduction**
  - identify and fix defects before release of software to users- reduces risk of failures/ errors - builds confidence of stakeholders

---

### Types of Testing

#### Unit Testing
Tests individual components or functions in isolation.

#### Integration Testing
Tests the interaction between units/modules.

#### End-to-End Testing
Tests the complete flow of an application from the user’s perspective.

---

## Using Jest

**Jest** is a JavaScript testing framework by Facebook.

### Key Features:
- Test isolation
  - runs tests in parallel - ensuring test environments are isolated to avoid side effects
- Snapshot testing
  - create snapshots of application output and automatically compare during tests
- Mocking and spies
  - mocking functions, modules, timers- simulate complex dependencies during tests

### Install:
```bash
npm install --save-dev jest
```

### Add script to `package.json`:
```json
"scripts": {
  "test": "jest"
}
```

---

### Writing Tests in Jest

- create a directory called **tests** and put a test file (e.g. sum.test.js)

```js
// sum.js
// function 1
function sum(a, b) {
    return a + b;
}

// multiply function
function multiply(a, b) {
    return a * b;
}

// subtract function
function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

module.exports = { sum, multiply, subtract, divide };
// exports the four functions (sum, multiply, subtract, and divide) so they can be used in other files
```

```js
//sum.test.js
 
// import the sum, multiply, subtract, and divide functions from another file so they can be used in your test file.
const { sum, multiply, subtract, divide } = require('../src/sum');

// addition
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

#### Basic Syntax:
```js
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```
#### Anatomy of the Test
| Part                      | Explanation       | Layman's phrasing (narrative)         |
| ------------------------- | ---------------- | --------------------------------- |
| `test(...)`               | A **Jest function** that defines a single test. It takes two arguments: the test name and the logic. | *This is a Jest test to check something specific.*     |
| `"adds 1 + 2 to equal 3"` | A **description** of what you're testing — shown in the test results.                                | *If we add 1 and 2, does it equal 3?*                  |
| `() => { ... }`           | A **callback function** that runs the test — contains your test code.                                | *Let's run the test and see if the result is correct.* |
| `expect(...)`             | An **assertion** — tells Jest what you expect the outcome to be.                                     | *I expect this to happen...*                           |
| `sum(1, 2)`               | The **function being tested** — you're passing in test values.                                       | *...the sum of 1 and 2...*                             |
| `.toBe(3)`                | A **matcher** — checks if the result is exactly 3 (`===`).                                           | *...should be exactly 3 (in both value and type).*     |



#### Common Matchers:
- `toBe()`
- `toBeTruthy()` / `toBeFalsy()`
- `toContain()`
- `toHaveLength()`
- `toBeGreaterThan()`

#### Example: tobe()
```js
function multiply(a, b) {
  return a * b;
}

// Test
test("multiplies 2 and 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});
```
| Part               | Explanation                                     | Layman's phrasing                 |
| ------------------ | ----------------------------------------------- | --------------------------------- |
| `test(...)`        | Defines the test.                               | *Let's test something.*           |
| `"5 is exactly 5"` | Describes the test being run.                   | *We're checking that 5 equals 5.* |
| `() => { ... }`    | The test code block.                            | *Run the test logic.*             |
| `expect(5)`        | The actual value you're testing.                | *I expect 5...*                   |
| `.toBe(5)`         | Checks that the value is exactly 5 using `===`. | *...to be exactly 5.*             |


#### Example: toBeTruthy() / toBeFalsy()
`toBeTruthy()` and `toBeFalsy()` can be confusing at first because they don’t mean strictly true or false, but rather if a value acts truthy or falsy in JavaScript logic.

In JavaScript, some values automatically behave like true (truthy) or false (falsy) when used in conditions:

**Truthy examples:**
- true

- "hello" (non-empty strings)

- 1, -10, 3.14 (non-zero numbers)

- {} (objects), [] (arrays)

**Falsy examples:**
- false

- 0

- "" (empty string)

- null

- undefined

- NaN

```js
test("true is truthy", () => {
  expect(true).toBeTruthy();
});

test("0 is falsy", () => {
  expect(0).toBeFalsy();
});
```
| Part            | Explanation                                                | Layman's phrasing             |
| --------------- | ---------------------------------------------------------- | ----------------------------- |
| `expect(true)`  | Testing a truthy value.                                    | *I expect true...*            |
| `.toBeTruthy()` | Asserts that the value is truthy (not false, 0, '', etc.). | *...to count as 'true-ish'.*  |
| `expect(0)`     | Testing a falsy value.                                     | *I expect zero...*            |
| `.toBeFalsy()`  | Asserts that the value is falsy.                           | *...to count as 'false-ish'.* |

**Example: Check a user typed something**

So let's say you're testing a form input:
```js
function hasInput(value) {
  return !!value; // returns true if there's something, false if empty
}
```
You want to check if the function correctly returns true (truthy) when the user types something, and false (falsy) when they don't.
```js
test("has input returns truthy for non-empty string", () => {
  expect(hasInput("hello")).toBeTruthy();
});

test("has input returns falsy for empty string", () => {
  expect(hasInput("")).toBeFalsy();
});
```

#### Example: toContain()
```js
test("array contains 2", () => {
  expect([1, 2, 3]).toContain(2);
});
```
| Part                | Explanation                                 | Layman's phrasing                  |
| ------------------- | ------------------------------------------- | ---------------------------------- |
| `expect([1, 2, 3])` | Testing an array.                           | *I expect this list \[1, 2, 3]...* |
| `.toContain(2)`     | Checks if the array contains the value `2`. | *...to contain the number 2.*      |

#### Example: toHaveLength()
```js
test("string has length 5", () => {
  expect("Hello").toHaveLength(5);
});
```
| Part               | Explanation                              | Layman's phrasing              |
| ------------------ | ---------------------------------------- | ------------------------------ |
| `expect("Hello")`  | Testing a string.                        | *I expect the word "Hello"...* |
| `.toHaveLength(5)` | Checks that it has exactly 5 characters. | *...to have 5 letters.*        |

#### Example: toBeGreaterThan()
```js
test("10 is greater than 5", () => {
  expect(10).toBeGreaterThan(5);
});
```
| Part                  | Explanation                    | Layman's phrasing         |
| --------------------- | ------------------------------ | ------------------------- |
| `expect(10)`          | The number being tested.       | *I expect 10...*          |
| `.toBeGreaterThan(5)` | Checks if it's greater than 5. | *...to be bigger than 5.* |

---

### Test-Driven Development (TDD)

TDD is writing tests before writing the code.

#### Red-Green-Refactor Cycle:
1. **Red:** Write a failing test.
2. **Green:** Write code to make it pass.
3. **Refactor:** Clean up code while keeping test green.

---

## Asynchronous Testing

- Used for testing Promises, async/await, and callbacks.
- involves checking the behavior of code that doesn't execute
immediately
- is common in JavaScript, especially when working with external resources
like APIs, databases, or file systems.

**Asynchronous Testing:** Jest ensures that tests wait for asynchronous operations to
complete before making assertions, allowing for accurate validation of code that relies on
delayed or background processes.
**Testing Strategies:** To test asynchronous code in Jest, developers use techniques like
waiting for Promises to resolve, employing async/await to pause execution until the
asynchronous operation completes, and using Jest's mocking capabilities to simulate
asynchronous behavior, thereby allowing tests to be isolated from external dependencies.

### With Promises:
```js
return fetchData().then(data => {
  expect(data).toBe("Hello");
});
```

### With Async/Await:
```js
test("async test", async () => {
  const data = await fetchData();
  expect(data).toBe("Hello");
});
```

---

## Mocking in Jest

### `jest.fn()`
Creates a mock function.
```js
const mockFn = jest.fn();
mockFn("arg");
expect(mockFn).toHaveBeenCalled();
```

### `jest.mock()`
Mocks an entire module.
```js
jest.mock('./api');
api.fetchData.mockResolvedValue("Mock Data");
```

---

## Snapshot Testing

Captures output and compares it with a saved version.

```js
test("renders correctly", () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## Code Coverage

Measure how much of your code is tested.

### Run with coverage:
```bash
npx jest --coverage
```

### Types of Coverage:
- Statement
- Branch
- Function
- Line

---

## Best Practices

- Keep tests small and focused
- Use descriptive names
- DRY: eliminate redundant setup

---

## Other Testing Frameworks

- **Mocha** – flexible and customizable
- **Jasmine** – BDD style
- **AVA** – fast and minimalist
- **QUnit** – used with jQuery
- **Tape** – simple and TAP-compliant

---

## OOP in JavaScript

## Learning Objectives
By the end of this session, you should be able to:
- Understand Object-Oriented Programming (OOP) concepts.
- Practice OOP in JavaScript using objects, classes, and principles.

---

## What is OOP?
OOP stands for **Object-Oriented Programming**. It's a paradigm based on **objects** that contain **data (properties)** and **behavior (methods)**.

### Key Principles of OOP
| Principle      | Explanation |
|----------------|-------------|
| **Encapsulation** | Bundling data and methods together; restricts access to internal details. |
| **Abstraction**   | Hides complexity and shows only relevant parts to the user. |
| **Inheritance**   | One class can inherit the properties and methods of another. |
| **Polymorphism**  | Same method name can behave differently on different classes. |

---

## Objects and Classes

### What is an Object?
An object is a structure that holds data and behavior as key-value pairs.

| Concept      | Description                            | Example                   |
| ------------ | -------------------------------------- | ------------------------- |
| **Property** | Describes the object's characteristics | `brand: "Toyota"`         |
| **Method**   | Describes what the object can do       | `drive: function() {...}` |

**Example 1: A Dog Object**
```js
const dog = {
  name: "Buddy",
  breed: "Labrador",
  age: 3,
  bark: function () {
    console.log("Woof!");
  }
};
```
- Data (Properties): `name`, `breed`, `age
- Behaviour (Method): `bark()`

**Example 2: A Movie Object**
```js
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  play: function () {
    console.log("Playing movie...");
  }
};
```
- Data (Properties): `title`, `director`, `year`
- Behaviour (Method): `play()`

**Example 3: A Product Object in an Online Store**
```js
const product = {
  name: "Wireless Headphones",
  price: 79.99,
  inStock: true,
  addToCart: function () {
    console.log("Added to cart!");
  }
};
```
- Data (Properties): `name`, `price`, `inStock`
- Behaviour (Method): `addToCart()`

**Example 4: A Student Object**
```js
const student = {
  name: "Aisha",
  age: 21,
  enrolled: true,
  study: function () {
    console.log("Studying...");
  }
};
```
- Data (Properties): `name`, `age`, `enrolled`
- Behaviour (Method): `study()`


### Why Classes?
Instead of writing out 100 similar objects manually, we use **classes** to create **multiple instances**.

| Term            | Definition                                                                                                          | Example in Context                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Class**       | A **template or blueprint** for creating objects with the same structure and behavior.                              | `class Student { ... }` defines a blueprint for students.            |
| **Instance**    | A **specific object** created using a class. Each instance has its own data.                                        | `const student1 = new Student("Alice", "Adams")`                     |
| **Constructor** | A **special method** inside a class that runs when a new instance is created. It sets up the object’s initial data. | `constructor(first_name, last_name) { ... }` initializes properties. |

**What does `this` mean?**

`this` refers to the current object — the specific instance that is using the code.

"`this` is the object doing the work."

Inside a class method (like the constructor), `this` points to the new object being created or the object calling the method.

| Context                  | `this` refers to...                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| Inside a **constructor** | The **new object being created**                                                                 |
| Inside a **method**      | The **object calling the method**                                                                |
| Outside a class (global) | The **global object** (e.g., `window` in browsers) — but this is context-sensitive in JavaScript |



### Syntax Example:
```js
class Student {
  constructor(first_name, last_name) {
    this.first_name = first_name
    this.last_name = last_name
  }

  greet() {
    return `Hello, ${this.first_name} ${this.last_name}`;
  }
}

const student1 = new Student("Alice", "Adams");
console.log(student1.greet()); // Hello, Alice Adams
```

Car example
1. Create a `Car` class with:
    - make
    - model
    - year
    - a method: `display_car_info()`
```js
class Car{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayCarInfo = ()=>{
        return `${this.make} ${this.model} ${this.year}`
    }
}

const car1 = new Car("Toyota", "Corolla", 2020)
const car2 = new Car("Ford", "Mondeo", 2003)
console.log(car1.displayCarInfonfo())
console.log(car2.displayCarInfo())
```

---

## Encapsulation

Encapsulation = Variables + Methods inside a single unit (a class).

### Why it's useful:
- Reduces complexity
- Increases security
- Improves maintainability

### Example with Private Fields (ES6+):
```js
class Person {
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const person = new Person("Alice", 30);
console.log(person.getAge()); // 30
// console.log(person.#age); ❌ Error: private field
```

---

##  Inheritance

Inheritance allows a class to use properties and methods from another class.

### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some sound";
  }
}
// subclass (child class) inheriting from animal
class Dog extends Animal {
  makeSound() {
    return "Bark";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Meow";
  }
}

const pet = new Dog("Rover");
const pet = new Cat("Mittens");
console.log(pet.makeSound()); // Bark
```

---

## Polymorphism

Polymorphism allows the **same method name** to behave differently depending on the class.

### Example:
```js
class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  calculateArea() {
    return "π × r²";
  }
}

class Square extends Shape {
  calculateArea() {
    return "side × side";
  }
}
```

---

## ✏️ Exercise

1. Create a `Car` class with:
    - make
    - model
    - year
    - a method: `display_car_info()`

2. Create an `ElectricCar` subclass that adds:
    - batteryCapacity (kWh)
    - method: `estimate_range()` (5 km per kWh)
```js
// 1. Create Car Class with make, model, year
class Car{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayCarInfo = ()=>{
        return `${this.make} ${this.model} ${this.year}`
    }
}

// 2. Create ElectricCar
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity
  }
  estimateRange() {
    return this.batteryCapacity * 5;
  }
}

// 3. Create and test instances
const car1 = new Car("Toyota", "Corolla", 2020) //
const car2 = new Car("Ford", "Mondeo", 2003)
// electric car example
const electricCar1 = new ElectricCar("Tesla", "Model E", 2024, 75);
console.log(car1.displayCarInfo())
console.log(car2.displayCarInfo())
// show electric car info
console.log(electricCar1.displayCarInfo()); // Tesla Model E 2024
// show estimated range of electric car
console.log(`Estimated Range: ${electricCar1.estimateRange()} km`); // 375 km

```

---

## SOLID PRINCIPLES
---

## Summary

- OOP helps us **organise**, **reuse**, and **extend** code.
- Use **classes** and **inheritance** to reduce duplication.
- Use **encapsulation** and **abstraction** for clean APIs.
- Use **polymorphism** to allow flexible method reuse.



