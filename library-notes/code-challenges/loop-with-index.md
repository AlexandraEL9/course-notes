# Loop with index challenge pattern

[Pattern Review](#pattern-review)
- [10. Loop with Index](#10-loop-with-index)
  - [10.1 Mini Challenge: Compare Running Times](#101-mini-challenge-compare-running-times)
  - [10.2 Count Letter "a"](#102-count-letter-a)
  - [Count Letter "a" in multiple words](#count-letter-a-in-multiple-words)
  - [Product Price Comparison](#product-price-comparison)

---

### Pattern Review
Used when: You need to compare or reference elements at specific positions (like comparing front row and back row heights) in an array (or similar data structures like strings or objects). 
- access or compare elements at specific positions in an array (or string). The index (i) is key to accessing the correct position in the array.

*You often use this when:*

- You need to access elements in a particular order (by index).
- You want to compare elements at the same index in different arrays.
- You are processing data with a condition that depends on the index.

*This pattern is useful when:*

- Comparing items at corresponding positions (e.g., comparing the heights of two people).
- Processing arrays of equal length in tandem.
- Working with both index and value at the same time, especially when you need to perform specific tasks based on the position.

**Basic Syntax:**
```js
for (let i = 0; i < arr.length; i++) {
  // use arr[i]
}
```

**Example Challenge**

#### 10.1 Mini Challenge: Compare Running Times
🧠 Goal:
You’re given two arrays:
- One with the running times of Team A
- One with the running times of Team B
- Write a function that returns how many times Team A was faster (i.e., had a lower time) than Team B at the same index.
```js
let teamA = [12, 15, 10, 13];
let teamB = [14, 15, 11, 14];

// Output: 2
// (Team A was faster at index 0 and index 2)
function countFasterRuns(teamA, teamB) {
  // your code here
  let count = 0; // count tracks the times team a is faster

  for (let i = 0; i < teamA.length; i++) {
  // use arr[i]
    if (teamA[i] < teamB[i]) {
        count += 1;
    }
  }
  return count;
}
console.log(countFasterRuns(teamA, teamB)); // logs 3 (team A faster 3 times)
```
| Concept                    | ✅ Used it for...                     |
| -------------------------- | ------------------------------------ |
| `for` loop with index `i`  | Compare items at matching positions  |
| `if (teamA[i] < teamB[i])` | Check condition using array index    |
| `count += 1`               | Tally how many comparisons were true |
| `return count`             | Send the result back                 |

#### 10.2 Count Letter "a"
Concepts: loop + if + string indexing

Task:
Count how many times the letter 'a' appears in a string.
``` js
// Input: "banana"
// Output: 3
let str = "banana";
function countA(str) {
  // your code here
  // split string into individual characters
  //store in an arrar called chars
  let chars = str.split(""); // turns "banana" into ['b', 'a', 'n', 'a', 'n', 'a']

  // set up counter to track as
  let count = 0;

  // loop through each character in the array
  for (let char of chars) {
    if (char === "a") {
      count += 1;
    }
  }
  // return final count
  return count;
}
console.log(countA(str)); // output: 3
```
| Concept          | How You Used It                            |
| ---------------- | ------------------------------------------ |
| `.split('')`     | To break a string into characters          |
| `for...of` loop  | To go through each letter                  |
| `if` statement   | To check if a character is `'a'`           |
| Counter variable | To keep track of how many `'a'`s you found |
| `return`         | To give the answer back                    |

#### 10.3 Slice and check keys - data
🔍 Challenge: Slice & Check Keys
You are given an object representing sensor data from different zones in a building. Each key is a zone name, and the value is an array of numbers.

Your task:
- Write a function that:
- Extracts the values from index 10 to 15 (inclusive of 10, up to but not including 16) for each array.
- Returns an array of zone names (keys) where the extracted slice includes the number 42.

```js
// DATA
let sensorData = {
  "zoneA": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 42, 44, 45, 46, 47, 48, 49],
  "zoneB": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  "zoneC": [11, 12, 13, 14, 15, 42, 17, 18, 19, 20, 21, 22, 23, 24],
  "zoneD": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 42, 14, 15],
};

```

---


### BONUS TIPS / Things to remember
| Pattern               | When to Use                              |
| --------------------- | ---------------------------------------- |
| `.split('')`          | To turn a string into an array           |
| `Math.floor(num / 2)` | To count full pairs (e.g., socks)        |
| `.length`             | To check size of a string or array       |
| `return`              | To send a result back from a function    |
| `console.log()`       | To debug and see what your code is doing |

### Count Letter "a" in multiple words
Given an array of strings, write a function that returns an array of numbers where each number is the count of the letter "a" in each corresponding word.
```js
let words = ["banana", "apple", "grape", "mango"];
// Output: [3, 1, 1, 1]

let words = ["banana", "apple", "grape", "mango"];

function countA(words) {
  let result = []; // to store the counts of 'a' for each word
  
  // Loop through each word in the array
  for (let word of words) {
    // Split each word into characters
    let characters = word.split("");
    
    // Set up counter for each word
    let count = 0;
    
    // Loop through each character in the word
    for (let char of characters) {
      if (char === "a") {
        count += 1;
      }
    }
    
    // Add the count for this word to the result array
    result.push(count);
  }
  
  return result;
}

console.log(countA(words)); // Output: [3, 1, 1, 1]

```
**Explanation:**

- The outer loop goes through each word in the words array.
- Each word is split into individual characters.
- The inner loop counts how many times the letter "a" appears in each word.
- The result is stored in an array, which is returned.

---

### Product Price Comparison
You have two arrays representing the prices of the same products in two different stores. Write a function that compares the prices and returns how many times Store A is cheaper than Store B at the same index.
```js
let storeA = [15, 20, 10, 25];
let storeB = [18, 22, 12, 20];
// Output: 2
// (Store A is cheaper at index 0, index 1, and index 2)
function compareA(storeA, storeB) {
  //set up count
  let count = 0;

  // set up loop
  for (let i = 0; i < storeA.length; i++) {
    // logic
    if (storeA[i] < storeB[i]) {
      count += 1;
    }
  }
  return count;
}
console.log(compareA(storeA, storeB)); // 3
```

---