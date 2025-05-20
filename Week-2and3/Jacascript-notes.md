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

- [Variables, Conditions & Functions](#Variables-Conditions-and-Functions)
  - [Using `let`](#using-let)
  - [Boolean Data Type](#boolean-data-type)
  - [Comparison Operators](#comparison-operators)
  - [If/Else Conditions](#ifelse-conditions)
  - [Logical Operators](#logical-operators)
  - [Else If Statements](#else-if-statements)
  - [Functions](#functions)
  - [Undefined vs Null](#undefined-vs-null)
  - [Scope](#scope)

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

