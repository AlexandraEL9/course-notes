# Build a New Array

- [8. Build a New Array](#8-build-a-new-array)
  - [8.1 Double the Numbers](#81-double-the-numbers)
  - [8.2 Mini Challenge: Word Lengths](#82-mini-challenge-word-lengths)
  - [Multiply by a Given Factor](#multiply-by-a-given-factor)

---

## Pattern Review
*Purpose:* transforming one array into another by iterating through the original array, applying a certain operation or transformation to each element, and storing the results in a new array.

**The core concept focuses on:**

- Creating a new array (let result = []) to store the transformed values.
- Looping over the original array using for...of.
- Performing a transformation on each element inside the loop.
- Pushing the result of each transformation into the new array using .push().
- Returning the new array once the loop is complete.

This pattern is versatile and can be applied to a variety of challenges.

**Basic Syntax:**
```js
let result = [];

for (let num of arr) {
  result.push(num * 2);
}
```

**Example Challenge**

#### 8.2 Mini Challenge: Word Lengths
🧠 Goal:
Write a function that takes an array of words and returns a new array with the length of each word.
```js
// Input:
//["apple", "banana", "kiwi"]

// Output:
//[5, 6, 4]

let words = ["apple", "banana", "kiwi"];

function wordLengths(words) {
  let result = [];

  for (let word of words) {
    result.push(word.length);
  }

  return result; // ✅ Return the result array
}

console.log(wordLengths(words)); // ✅ Call with 'words', not 'result'
// returns with [5, 6, 4]
```
| Concept            | ✅ What it Did                             |
| ------------------ | ----------------------------------------- |
| `let result = []`  | Created a new array to store results      |
| `for...of` loop    | Loop through each word                    |
| `word.length`      | Got the number of characters in each word |
| `result.push(...)` | Added the word length to the result array |
| `return result`    | Sent the new array back from the function |
| `console.log(...)` | Displayed the result in the console       |

#### 8.1 Double the Numbers
Concepts: loop + arithmetic

Task:
Return a new array where each number is doubled.
```js
// Input: [1, 2, 3]
// Output: [2, 4, 6]
let arr = [1, 2, 3];
function doubleNumbers(arr) {
  // your code here
  // create new array to store doubled numbers
  let result = [];
  // loop through each number in the input array
  for (let num of arr) {
    result.push(num * 2); // double it a push it into the new array
  }
  return result;
}
console.log(doubleNumbers(arr)); // output [2, 4, 6]
```
| Concept              | How You Used It                        |
| -------------------- | -------------------------------------- |
| `for...of` loop      | To go through each number in the array |
| `*` (multiplication) | To double each number                  |
| `.push()`            | To add items to the result array       |
| `return`             | To give back the full array            |
| `console.log()`      | To display the output                  |

#### Multiply by a Given Factor
return the length of each word in an array of strings.
```js
// Input: [2, 4, 6], factor = 3
// Output: [6, 12, 18]

let input = [2, 4, 6];

function multiply(input, factor) {
  let results = [];

  // loop through input
  for (let numbers of input) {
    results.push(numbers * factor);
  }
  return results;
}
console.log(multiply(input, 3)); // [6,12,18]
```