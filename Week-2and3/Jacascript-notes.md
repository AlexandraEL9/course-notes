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
  - [Data Types](#data-types)
  - [User Input with Prompt()](user-input-with-prompt)
  - [Numbers and Input](#numbers-and-input)
  - [Casting Dta Types](#casting-data-types)

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
```js
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Alex");
console.log(message);
```

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

### For Loops

`for` loops run a block of code a specific number of times.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Use `for` loops to loop through arrays or repeat actions a fixed number of times.

---

### While Loops

`while` loops continue as long as a condition is true.

```js
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
```

🚨 Be careful of **infinite loops** – always modify the loop variable.

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