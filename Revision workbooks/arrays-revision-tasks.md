# Arrays Revision Tasks

---

```js
let fruit = ["apple", "plum", "apricot", "banana", "avocado"];

fruit.forEach(function(aFruit) {
  if (aFruit.startsWith("a")) {
    console.log(aFruit);
  }
});
```

Answer from memory (no notes!): // NOT COVERED YET! MAKE TODAY@S NEW LEARNING!!!

| Feature         | `forEach()`                               | `map()`                                             |
| --------------- | ----------------------------------------- | --------------------------------------------------- |
| Purpose         | Runs code for each element (side effects) | Transforms each element and returns a **new array** |
| Return value    | `undefined`                               | New array (same length)                             |
| Common use case | Logging, DOM manipulation, simple loops   | Transforming data into a new array                  |

**Example:**
```js
let numbers = [1, 2, 3];

numbers.forEach(num => console.log(num * 2)); // logs 2, 4, 6

let doubled = numbers.map(num => num * 2);    // returns [2, 4, 6]
console.log(doubled);
```

📘 Also New: startsWith()
Used with strings

Returns true if the string starts with a given character or substring
```js
let fruit = "apple";
console.log(fruit.startsWith("a")); // true
console.log(fruit.startsWith("p")); // false
```


🧪 3. Bonus: Predict the Output
What will this log?
```js
let animals = ["cat", "dog", "elephant"];
animals.forEach((animal, index) => {
  console.log(index + ": " + animal);
});
// 0: cat  
// 1: dog  
// 2: elephant
```
i is the index (0, 1, 2)

a is the animal

---

✅ 1. Quick Recall (No Notes)
Answer from memory: 

a. What does find() return if no match is found?
   It returns `undefined` if no element passes the test.
b. What’s the difference between find() and findIndex()?
   find finds the first item in the array that passes the test, whereas findIndex returns the index plave in the array of the passiing item

 ✏️ 2. Code Writing Task
Here’s a new array of books:
```js
let books = [
  { title: "Moby Dick", pages: 720 },
  { title: "The Hobbit", pages: 310 },
  { title: "Animal Farm", pages: 112 }
];
```
Write two regular functions:
- A find() to return the first book with more than 500 pages
- A findIndex() to return the index of the first book with fewer than 150 pages
```js
let books = [
  { title: "Moby Dick", pages: 720 },
  { title: "The Hobbit", pages: 310 },
  { title: "Animal Farm", pages: 112 }
];

// - A find() to return the first book with more than 500 pages
function isOver500(book) {
  return book.pages > 500;
}

let firstOver500 = books.find(isOver500);
console.log(firstOver500); // { title: "Moby Dick", pages: 720 }

// - A findIndex() to return the index of the first book with fewer than 150 pages
function fewer150(book) {
  return book.pages < 150;
}
let index = books.findIndex(fewer150);
console.log(index); // 2
```

🔍 3. Predict the Output
What will this code log?
```js
let scores = [30, 55, 72, 48, 90];

function isHighScore(score) {
  return score >= 70;
}

let topScore = scores.find(isHighScore);
let topScoreIndex = scores.findIndex(isHighScore);

console.log(topScore); //72 (only finds the 1st score over 70)
console.log(topScoreIndex); // 2
```

---


🔁 1. Quick Recall (No Notes)
Answer from memory:

a. What does findIndex() return if no element matches?
   **-1**
b. What’s the main difference between filter() and find()?
   **`.filter()` will find all of the items in an array which meet a condition whereas `.find()` will find the first instance of an item meeting the condition.

✏️ 2. Predict the Output
What will this log?
```js
let users = [
  { username: "alice", active: true },
  { username: "bob", active: false },
  { username: "carol", active: true }
];

function isInactive(user) {
  return user.active === false;
}

let inactiveUser = users.find(isInactive);
let inactiveIndex = users.findIndex(isInactive);

console.log(inactiveUser); //   { username: "bob", active: false },
console.log(inactiveIndex); // 1
```

💡 3. Write Your Own Code
Write two functions using this array:
```js
let animals = [
  { name: "Rex", species: "dog" },
  { name: "Mittens", species: "cat" },
  { name: "Fluffy", species: "rabbit" },
  { name: "Spot", species: "dog" }
];
```
Write:
- A find() function that returns the first cat
- A findIndex() function that returns the index of the first rabbit
✅ Use regular functions (not arrow functions).
```js
let animals = [
  { name: "Rex", species: "dog" },
  { name: "Mittens", species: "cat" },
  { name: "Fluffy", species: "rabbit" },
  { name: "Spot", species: "dog" }
];
// - A find() function that returns the first cat
function isCat(animal) {
  return animal.species === "cat";
}
// - A findIndex() function that returns the index of the first rabbit
function isRabbit(animal) {
  return animal.species === "rabbit";
}


// log find cat
let firstCat = animals.find(isCat);
console.log(firstCat); //   { name: "Mittens", species: "cat" },

// log find index
let index = animals.findIndex(isRabbit);
console.log(index); //2

```

---
🔁 1. Quick Recall (No Notes)
Answer from memory:

a. What’s the difference between .slice() and .splice()?
   Slice returns a poertion of an array whereas splice can add, remove, or replace items in an array
b. What does .reduce() do?
   reduce will reduce array item to a single value eg summing all of the entries in an array of numbers.

   🔎 2. Predict the Output
```js
let letters = ["a", "b", "c", "d"];
let removed = letters.splice(1, 2);

console.log(removed); // "b", "c"
console.log(letters); // "a", "d"
```
What will be logged?

✏️ 3. Write Your Own Code
Using this array:

```js
let numbers = [2, 4, 6, 8];
```
Write a program that:
- Uses .map() to double each number
- Uses .reduce() to add all the numbers together
- Logs both results

✅ Use regular function syntax (no arrow functions)
```js
let numbers = [2, 4, 6, 8];
const doubled = numbers.map(function (num) {
  return num * 2;
});
const total = doubled.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(doubled); // [4,8,12,16]
console.log(total); // 40
```

---
🔁 1. Quick Recall (No Notes)
Answer from memory:
a. What does .some() return? When is it useful?
- Spme returns true if any/ at least one element passes a test/ condition. or false if not.

b. What’s the difference between .filter() and .map()?
  - filter just returns parts of an array that match a condition whereas map will create a new array out of actions done to the old array.

🔎 2. Predict the Output
```js
let prices = [5, 12, 18, 25];

function isExpensive(price) {
  return price > 20;
}

let result1 = prices.filter(isExpensive);
let result2 = prices.some(isExpensive);
let result3 = prices.every(isExpensive);

console.log(result1); // [25]
console.log(result2); // true
console.log(result3); // false
```

✏️ 3. Write Your Own Code
Given this array:
```js
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Daisy", age: 19 }
];
```
Write:
- A .filter() to return all users aged 18+
- A .map() to return just their names
- A .some() to check if anyone is under 18
- A .reduce() to return the total age of all users
✅ Use regular functions (no arrow functions)
```js
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Daisy", age: 19 }
];

function oldEnough(users) {
  return users.age >= 18;
}

function getName(user) {
  return user.name;
}

function tooYoung(user) {
  return user.age < 18;
}

function addAges(accumulator, user) {
  return accumulator + user.age;
}

let filtered = users.filter(oldEnough);
let mapped = filtered.map(getName);
let somed = users.some(tooYoung);
let reduced = users.reduce(addAges, 0);

console.log(filtered);
console.log(mapped);
console.log(somed);
console.log(reduced);
```

---