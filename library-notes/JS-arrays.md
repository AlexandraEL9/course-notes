# Arrays

## 📚 Table of Contents – Array Methods

## 🔹 Basics  
- [`.push()`](#push)
- [`.pop()`](#pop)
- [`.shift()`](#shift)
- [`.unshift()`](#unshift)

## ✂️ Extract & Modify  
- [`.slice()`](#slice)
- [`.splice()`](#splice)
- [Slice vs Splice Comparison](#slice-vs-splice-comparison)

## 🔁 Loop-Like Methods  
- [`forEach()`](#foreach)
- [`map()`](#map)
- [`filter()`](#filter)
- [`reduce()`](#reduce)

## 🔎 Search Methods  
- [`find()`](#find)
- [`findIndex()`](#findindex)

## 🧪 Extra Useful Methods  
- [`join()`](#join)
- [`reverse()`](#reverse)
- [Secret Word Builder Challenge](#quick-challenge-secret-word-builder)


### Array Basics

An array stores multiple values in a single variable.

```js
let fruit = ["apple", "plum", "cherry", "avocado"];
console.log(fruit.length);   // 4
console.log(fruit[0]);       // "apple"
```

Arrays use **zero-based indexing**, and `.length` returns the number of elements.

---

## Array Methods
### Push / Pop
#### `.push()`
Purpose: Add one or more items to the end of an array.

Syntax:
```js
array.push(item1, item2, ...)
```
Example:
```js
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```
📝 Notes:
- Changes the original array (does not return a new one).
- Returns the new length of the array.

🧠 TASK:
Start with an array of 2 animals. Push 2 more to the end and log the updated array.
```js
let animals = ["cat", "dog"];
animals.push("rabbit", "parrot");
console.log(animals); // ["cat", "dog", "rabbit", "parrot"]
```

#### `.pop()`
Purpose: Remove the last item from an array.

Syntax:
```js
array.pop()
```
Example:
```js
let numbers = [1, 2, 3];
let last = numbers.pop();
console.log(numbers); // [1, 2]
console.log(last);    // 3
```
📝 Notes:
- Removes and returns the last item.
- Changes the original array.

🧠 TASK:
Create an array of colours. Pop the last one off and log both the new array and the popped value.
```js
let colours = ["red", "green", "blue"];
let removed = colours.pop();
console.log(colours); // ["red","green"]
console.log(removed); // "blue"
```

#### `.shift()`
Purpose: Removes the first item from an array.

Syntax:
```js
array.shift()
```
Example:
```js
let queue = ["first", "second", "third"];
let removed = queue.shift();
console.log(queue);   // ["second", "third"]
console.log(removed); // "first"
```
📝 Notes:
- Changes the original array.
- Returns the item that was removed.
- Often used for queue-like behavior (FIFO: First In, First Out).

🧠 TASK:
Create an array of 3 book titles. Use .shift() to remove the first one.
Log the updated array and the removed book.
```js
let books = ["1984", "Brave New World", "Fahrenheit 451"];
let firstBook = books.shift();
console.log(books);      // ["Brave New World", "Fahrenheit 451"]
console.log(firstBook);  // "1984"
```

#### `.unshift()`
Purpose: Adds one or more items to the start of an array.

Syntax:
```js
array.unshift(item1, item2, ...)
```
Example:
```js
let tasks = ["review PR", "attend meeting"];
tasks.unshift("check email");
console.log(tasks); // ["check email", "review PR", "attend meeting"]
```
📝 Notes:
- Changes the original array.
- Returns the new length of the array.
- Useful for adding things in queue-style order.

🧠 TASK:
Create an array of 2 countries. Use .unshift() to add a third one at the beginning.
Log the new array.
```js
let countries = ["France", "Germany"];
countries.unshift("Italy");
console.log(countries); // [Italy", "France", "Germany"]
```

#### `.slice()`
Purpose: Returns a shallow copy of a portion of an array.

✅ Non-destructive: does not change the original array.

Syntax:
```js
array.slice(startIndex, endIndex)
```
Example:
```js
let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);
console.log(result);  // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]
```
📝 Notes:
- endIndex is not included.
- Can use negative indexes (e.g. slice(-2) gets the last two items).
- Great for copying arrays or parts of arrays.

🧠 TASK:
Create an array of five fruits. Use .slice() to get the middle three.
```js
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let middle = fruits.slice(1, 4);
console.log(middle); // ["banana","cherry","date"]
```
| Part                           | What It Does                 | Layman’s Phrase                           |
| ------------------------------ | ---------------------------- | ----------------------------------------- |
| `fruits`                       | The original array           | “Start with the fruit list”               |
| `.slice(...)`                  | Calls the `slice()` method   | “Take a slice (copy part of the list)”    |
| `1` (startIndex)               | Start copying **at index 1** | “Start at the second item (banana)”       |
| `4` (endIndex, exclusive)      | Stop **before index 4**      | “Stop before the fifth item (elderberry)” |
| `["banana", "cherry", "date"]` | Resulting array              | “This is the sliced-out middle section”   |


#### `.splice()`
Purpose: Adds, removes, or replaces items in place.

❗ Destructive: modifies the original array.

Syntax:
```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```
Example:
```js
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");
console.log(colors); // ["red", "yellow", "blue"]
```
📝 Notes:
- First number = where to start
- Second number = how many to delete
- Any extra items = what to insert
- Can be used just to delete, just to insert, or both

🧠 TASKS:
Task A – Remove 2 items:
```js
let pets = ["dog", "cat", "rabbit", "hamster"];
pets.splice(1, 2);
console.log(pets); // ["dog","hamster"]
```

Task B – Replace 1 item:
```js
let tools = ["hammer", "screwdriver", "wrench"];
tools.splice(2, 1, "drill");
console.log(tools); // ["hammer","screwdriver","drill"]
```
| Part                       | What It Does                                    | Layman’s Phrase                    |
| -------------------------- | ----------------------------------------------- | ---------------------------------- |
| `tools`                    | The original array                              | “Start with the tool list”         |
| `.splice(...)`             | Calls the `splice()` method                     | “Cut into the array and change it” |
| `2` (startIndex)           | Start at index `2` (the third item: `"wrench"`) | “Go to the third item in the list” |
| `1` (deleteCount)          | Delete **1** item (just `"wrench"`)             | “Remove one item here”             |
| `"drill"` (item to insert) | Insert `"drill"` at that same position          | “Put 'drill' in its place”         |
| `tools` (final array)      | Becomes `["hammer", "screwdriver", "drill"]`    | “Here’s the updated list”          |


**slice vs splice comparison**
| Feature                     | `.slice()`                                                        | `.splice()`                                           |
| --------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| **Purpose**                 | Copies part of an array                                           | Adds, removes, or replaces items in an array          |
| **Changes original?**       | ❌ No – returns a new array                                        | ✅ Yes – modifies the original array                   |
| **Return value**            | A new **shallow copy** of part of the array                       | An array of **removed elements**                      |
| **Use case**                | When you want to **extract** items without affecting the original | When you want to **insert, delete, or replace** items |
| **Arguments**               | `slice(start, end)`                                               | `splice(start, deleteCount, ...itemsToAdd)`           |
| **End index behavior**      | End index is **exclusive**                                        | No end index – you specify how many to delete         |
| **Negative indexes?**       | ✅ Yes – can count from end                                        | ✅ Yes – but be careful with behavior                  |
| **Safe to use in `const`?** | ✅ Yes, if you're not changing the original array                  | ⚠️ Yes, but it **modifies** the contents              |



### `forEach`, `map`, `filter`, `reduce`
These are **array methods** — they aren’t “loops” in the traditional sense, but they **let you loop through arrays** in a clean and modern way.

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

#### find()
- Returns the first element that passes a test
- If no match is found, it returns undefined

**Example:**
```js
// find() first matching element
let numbers = [3, 7, 11, 18, 21];

function isEven(num) {
  return num % 2 === 0;
}

let firstEven = numbers.find(isEven);
console.log(firstEven); // 18
```
✅ find() will return the first value in the array that passes the test.

#### findIndex()
- Returns the index of the first element that passes a test
- If no match is found, it returns -1

**Example:**
```js
// find() index of first matching element
let words = ["apple", "banana", "plum"];

function longerThanFive(word) {
  return word.length > 5;
}

let index = words.findIndex(longerThanFive);
console.log(index); // 1 (banana)
```
✅ findIndex() gives you the index (position) of the first match.

**Compare: `find()` vs `findIndex()`**
| Method        | Returns      | If no match? |
| ------------- | ------------ | ------------ |
| `find()`      | First value  | `undefined`  |
| `findIndex()` | Index number | `-1`         |

**Practice tasks**
```js
// predict the output
let ages = [8, 15, 21, 32, 14];

function isAdult(age) {
  return age >= 18;
}

let adult = ages.find(isAdult);
let adultIndex = ages.findIndex(isAdult);

console.log(adult);       // 21, 32
console.log(adultIndex);  // 2, 3
```

```js
// write own code
let people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];
// a find function to return 1st person over 25
function challenge25(person) {
  return person.age > 25;
}
let firstChallenge25 = people.find(challenge25);
console.log(firstChallenge25);
// a find index function to return the index of the first person under 18
function challenge18(person) {
  return person.age < 18;
}
let challenge18Index = people.findIndex(challenge18);
console.log(challenge18Index);
```

#### `.join()`
Purpose: Combines all the elements of an array into a single string, with an optional separator between items.

Syntax:
```js
array.join(separator)
```
Example:
```js
const letters = ["a", "b", "c"];
const word = letters.join("-");
console.log(word); // "a-b-c"
```
📝 Notes:
- The separator is optional — if omitted, it defaults to a comma (,).
- Common separators: "", " ", "-", "|".
- Returns a string, not an array.
- Doesn’t modify the original array.

🧠 TASK:
Join an array of three animal names into a sentence with spaces between them.
```js
const animals = ["cat", "dog", "rabbit"];
const result = animals.join(" ");
console.log(result); // "cat dog rabbit"
```

#### `.reverse()`
Purpose: Reverses the order of the items in the array.

Syntax:
```js
array.reverse()
```
Example:
```js
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
📝 Notes:
- Modifies the original array (⚠️ destructive).
- Can be useful before joining or mapping in reverse order.
- Often paired with .slice() if you want a reversed copy without changing the original.

```js
const original = [1, 2, 3];
const reversedCopy = original.slice().reverse(); // non-destructive version
```
🧠 TASK:
Reverse this array of numbers and log both the reversed array and the original:

```js
const nums = [10, 20, 30];
nums.reverse();
console.log(nums); // [30, 20, 10]
```

🧠 **Quick Challenge: Secret Word Builder**
🧩 Scenario:
You’re given an array of letters in reverse order. Your task is to:
- Reverse the array to get the correct order.
- Join the letters into a single word with no spaces.
- Log the final word.
🧪 Starting code:
```js
// expected output: horse
let scrambled = ["e", "s", "r", "o", "h"];

// create variable to hold reversed letters
let reversed = scrambled.reverse();
console.log(reversed); // ["h","o","r","s","e"]

//create output variable to save joined version
let optput = reversed.join("");
console.log(output); // "horse"
```

---