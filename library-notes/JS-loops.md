# Loops

## Table of Contents

- [Loops Overview](#loops)
- [Types of Loops](#types-of-loops)
  - [For Loop](#for-loops)
  - [While Loop](#while-loops)
  - [Do...While Loop](#dowhile-loops)
  - [For...in Loop](#forin-loop)
  - [For...of Loop](#forof-loops)
- [Loop Control: break and continue](#loop-control-break-and-continue)
- [Loop Helpers (Array Methods)](#loop-helpers)
  - [forEach()](#foreach)
  - [map()](#map)
  - [filter()](#filter)
  - [reduce()](#reduce)
- [Loop Helpers Summary Table](#summary-table)
- [const vs let](#const-vs-let)
- [Recap](#recap)
- [Further Reading](#further-reading)

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

### Break and Continue

### Loop Helpers

`forEach`, `map`, `filter`, `reduce`
These are **array methods** — they aren’t “loops” in the traditional sense, but they let you loop through arrays in a clean and modern way.

They are often used instead of `for` or `for...of` loops.

#### forEach
Run a function once for each item in an array.
✅ Use it when you want to do something with each item, but don’t need a new array.

**Example:**
```js
const animals = ["rabbit", "dog", "cat"];

animals.forEach(function(animal) {
  console.log(animal);
});
```

**Anatomy of a forEach:**
| Part                   | Explanation                     | Layman’s phrasing                  |
| ---------------------- | ------------------------------- | ---------------------------------- |
| `animals.forEach(...)` | Calls `.forEach()` on the array | *Go through each item in the list* |
| `animal =>`            | Function to run on each item    | *For every item, do this...*       |
| `console.log(animal)`  | Action to run for each item     | *Print the current animal*         |


#### map()
Create a new array by changing each item in the original array.
✅ Use it when you want to transform each value.
**Example:**
```js
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```

**Anatomy**
| Part               | Explanation                        | Layman’s phrasing                    |
| ------------------ | ---------------------------------- | ------------------------------------ |
| `numbers.map(...)` | Calls `.map()` on the array        | *Go through each number in the list* |
| `function(num)`    | A function that runs once per item | *For each number, run this function* |
| `return num * 2`   | Sends back the new value           | *Double the number and return it*    |
| `doubled`          | Stores the result (new array)      | *Save the new changed list*          |
✅ Always returns a new array, same length as the original.

#### .filter
Create a new array containing only the items that pass a test.

**Example:**
```js
const scores = [50, 80, 40, 100];

const passing = scores.filter(function(score) {
  return score >= 60;
});

console.log(passing); // [80, 100]
```

**Anatomy:**
| Part                 | Explanation                                     | Layman’s phrasing                     |
| -------------------- | ----------------------------------------------- | ------------------------------------- |
| `scores.filter(...)` | Calls `.filter()` on the array                  | *Go through each score in the list*   |
| `function(score)`    | A function that runs once per score             | *For each score, use this function*   |
| `return score >= 60` | Test: keep only scores that pass this condition | *Return true if it’s a passing score* |
| `passing`            | Stores the result (new array of passing scores) | *Save only the passing scores*        |
✅ Returns a new array, which may be shorter than the original.

#### .reduce()
Take an array and reduce it to one value (a number, string, object, etc.) by running a function on each item.

✅ Use it when you want to:

- Add up numbers
- Combine values
- Build a single result from a list

**Example: add numbers in an array**
```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
});

console.log(total); // 10
```
⚙️ How It Works Step by Step
With [1, 2, 3, 4]:

Step 1: acc = 1, current = 2 → returns 3

Step 2: acc = 3, current = 3 → returns 6

Step 3: acc = 6, current = 4 → returns 10

So total is 10.


**Anatomy**
| Part                             | Explanation                                               | Layman’s phrasing                  |
| -------------------------------- | --------------------------------------------------------- | ---------------------------------- |
| `numbers.reduce(...)`            | Calls `.reduce()` on the array                            | *Work through the whole list*      |
| `function(accumulator, current)` | A function with two parameters:                           | *Keep track of the total as we go* |
| `accumulator`                    | The running total (starts with the first item by default) | *What we’ve built up so far*       |
| `current`                        | The current item in the loop                              | *The number we’re on right now*    |
| `return accumulator + current`   | Add the current number to the total                       | *Add it to the running total*      |
| `total`                          | Stores the final result                                   | *This is the final sum*            |

**example: Starting value**
You can set your own starting value for the accumulator:
```js
const total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0); // 0 is the starting value
```

**Examples**
```js
// Combine strings
const words = ["I", "love", "coding"];
const sentence = words.reduce(function(acc, word) {
  return acc + " " + word;
});
// "I love coding"

// Count total length
const names = ["Alex", "Sam"];
const totalLength = names.reduce(function(acc, name) {
  return acc + name.length;
});
// 8
```

**Summary Table**
| Method    | Returns     | Use For...                             |
| --------- | ----------- | -------------------------------------- |
| `forEach` | ❌ Nothing   | Doing something with each item         |
| `map`     | ✅ New array | Changing each item                     |
| `filter`  | ✅ New array | Keeping only items that pass a test    |
| `reduce`  | ✅ One value | Turning the whole array into one thing |

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