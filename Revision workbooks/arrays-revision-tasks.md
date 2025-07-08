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