# Code challenges

---

## Common Challenge Patterns
### BONUS TIPS / Things to remember
| Pattern               | When to Use                              |
| --------------------- | ---------------------------------------- |
| `.split('')`          | To turn a string into an array           |
| `Math.floor(num / 2)` | To count full pairs (e.g., socks)        |
| `.length`             | To check size of a string or array       |
| `return`              | To send a result back from a function    |
| `console.log()`       | To debug and see what your code is doing |


### Counting Things in an Array
Used when: You need to count how often something appears (like sock colors, letters, or even numbers)
```js
let count = 0;

for (let item of arr) {
  if (item === target) {
    count += 1;
  }
}
```

**Example Challenge:**

🎯 Mini Challenge: Count the Number 7s
🧠 Goal:
Write a function that counts how many times the number 7 appears in an array of numbers.
```js
// Input: [3, 7, 2, 7, 9, 7]
// Output: 3

// array 
let arr = [3, 7, 2, 7, 9, 7]

// create function
function countSeven(arr) {
    // set count variable
    let count = 0;
    // loop through array
    for (let num of arr) {
        if (num === 7) {
            count += 1
        }
    }
    return count;
}
let output = countSeven(arr); // 
console.log(output);    // logs the outputs
```
| Concept          | You used it to...                            |
| ---------------- | -------------------------------------------- |
| `let count = 0`  | Track how many 7s you've found               |
| `for...of` loop  | Go through each number in the array          |
| `if (num === 7)` | Check if the current number is 7             |
| `count += 1`     | Add 1 to the count if it is                  |
| `return`         | Return the final count from the function     |
| `console.log()`  | Show the result so you can check your output |


### 2. Sum All Numbers in an Array

Used when: You're adding up totals (prices, scores, etc.)
```js
let total = 0;

for (let num of arr) {
  total += num;
}
```

**Example Challenge:**
💰 Mini Challenge: Total Shopping Bill
🧠 Goal:
Write a function that returns the total cost of all items in a shopping basket (represented as an array of prices).
```js
// Input: [5.99, 2.50, 4.25]
// Output: 12.74

let prices = [5.99, 2.50, 4.25];
// create function
function totalCost(prices) {
  // your code here
  let total = 0;

  for (let price of prices) {
    total += price;
  }
  return total;
}
let output = totalCost(prices);
console.log(output); // 12.74

```
| Concept               | ✅ How You Used It                            |
| --------------------- | -------------------------------------------- |
| `let total = 0`       | To store the running total                   |
| `for...of` loop       | To go through each price in the array        |
| `+=` operator         | To add each price to the total               |
| `return total`        | To return the final result from the function |
| `console.log(output)` | To show the total in the console             |


### Frequency Map (Tally Counter)

Used when: You want to count how many times each unique item appears (e.g., {10: 2, 20: 3})
```js
let countMap = {};

for (let item of arr) {
  if (countMap[item]) {
    countMap[item] += 1;
  } else {
    countMap[item] = 1;
  }
}
```

**Example Challenge:**
🔢 Mini Challenge: Word Tally
🧠 Goal:
Write a function that counts how many times each word appears in an array of words.
```js
// Input:
["apple", "banana", "apple", "orange", "banana", "apple"]

// Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countWords(words) {
  // your code here

  //
  let countMap = {};

  for (let word of words) {
    if (countMap[word]) {
      countMap[word] += 1;
    } else {
      countMap[word] = 1;
    }
  }
  return countMap;
}
console.log(countWords(words));

```
| Concept               | You Used It To...                         |
| --------------------- | ----------------------------------------- |
| `countMap = {}`       | Create a blank object to tally values     |
| `for...of` loop       | Go through each word                      |
| `if (countMap[word])` | Check if the word is already in the tally |
| `+= 1` or `= 1`       | Increment or set the count                |
| `return`              | Send back the final count object          |


### Find the Maximum or Longest
Used when: You're trying to find the biggest number, longest word, etc.
```js
let max = arr[0];

for (let item of arr) {
  if (item > max) {
    max = item;
  }
}
```

**Example Challenge**
🦒 Mini Challenge: Tallest Person
🧠 Goal:
Write a function that returns the tallest height from an array of numbers representing people's heights (in cm).

```js
// Input:
//[160, 172, 168, 181, 177]

// Output:
//181

let heights = [160, 172, 168, 181, 177];

function findTallest(heights) {
  // your code
  let max = heights[0];

  for (let height of heights) {
    if (height > max) {
        max = height;
    }
  }
  return max;
}
console.log(findTallest(heights)); // 181
```
| Concept            | ✅ How You Used It                          |
| ------------------ | ------------------------------------------ |
| `let max = arr[0]` | Start with the first number as the maximum |
| `for...of` loop    | Go through each item in the array          |
| `if (item > max)`  | Compare each number to the current max     |
| `max = item`       | Update the max if a bigger number is found |
| `return max`       | Give back the result                       |
| `console.log()`    | Display the output in the console          |


### Track State with a Variable
Used when: You need to remember or follow a changing value, like elevation in counting valleys
```js
let state = 0;

for (let step of steps) {
  if (step === 'U') {
    state += 1;
  } else {
    state -= 1;
  }
}
```

**Example Challenge**
🧗‍♂️ Mini Challenge: Net Elevation
🧠 Goal:
Write a function that takes a sequence of 'U' (uphill) and 'D' (downhill) steps and returns the final elevation relative to sea level (0).

```js
// Input:
//"UUDDUUDD"

// Output:
//0  (went up 2, down 2, up 2, down 2 — back to sea level)

//"UUUDDDDU"
// Output:
//0  (up 3, down 4, up 1 → net change = 0)

let path = "UUDDUUDD";

function finalElevation(path) {
  // your code here
  let elevation = 0;

  for (step of path) {
    if (step === "U") {
      elevation += 1;
    } else if (step === "D") {
      elevation -= 1;
    }
  }
  return elevation;
}
console.log(finalElevation(path));  // output 0

```
| Concept                   | Explanation                                |
| ------------------------- | ------------------------------------------ |
| `let elevation = 0`       | Starting elevation (sea level)             |
| `for...of` loop           | Loop through each step in the path         |
| `step === "U"` / `"D"`    | Check if we go up or down                  |
| `+= 1`, `-= 1`            | Update elevation accordingly               |
| `return`                  | Give back the final elevation              |
| Function parameter `path` | Makes your function reusable for any input |


### Check for a Condition
Used when: You only want to do something if a rule is met (inside a loop or function)
```js
if (condition) {
  // do something
}
```

**Example Challenge**
✅ Mini Challenge: Print Only Long Words
🧠 Goal:
Write a function that goes through an array of words and prints only the ones longer than 5 letters.

```js
// Input:
//["dog", "giraffe", "sun", "elephant", "cat"]

// Output:
//giraffe  
//elephant

let words = ["dog", "giraffe", "sun", "elephant", "cat"];
function printLongWords(words) {
  for (let word of words) {
    if (word.length > 5) {
      console.log(word);
    }
  }
}

printLongWords(words);

```
| Concept             | ✅ Used it to...                         |
| ------------------- | --------------------------------------- |
| `for...of` loop     | Go through each word in the array       |
| `if (condition)`    | Check if the word length is > 5         |
| `console.log(word)` | Print the word if the condition is true |


### Split a String into Characters
Used when: You want to treat each letter like an array item
```js
let chars = str.split('');  // turns "hello" into ['h', 'e', 'l', 'l', 'o']
```

**Example Challenge**
🔤 Mini Challenge: Count the Letter "e"
🧠 Goal:
Write a function that counts how many times the letter "e" appears in a given string.
```js
// Input: "elephants are excellent"
// Output: 5
let str = "elephants are excellent"
function countEs(str) {
  // your code here
  let chars = str.split('');

  // set up counter to track as
  let count = 0;

  // loop through each character in the array
  for (let char of chars) {
    if (char === "e") {
      count += 1;
    }
  }
  // return final count
  return count;
}
console.log(countEs(str)); // output: 6
```
| Concept             | ✅ How You Used It                           |
| ------------------- | ------------------------------------------- |
| `.split('')`        | Turned a string into an array of characters |
| `for...of` loop     | Checked each character one by one           |
| `if (char === 'e')` | Checked for a match                         |
| `count += 1`        | Increased the counter                       |
| `return count`      | Sent back the result                        |


### Build a New Array
Used when: You’re transforming one array into another (e.g., doubling numbers)
```js
let result = [];

for (let num of arr) {
  result.push(num * 2);
}
```

**Example Challenge**

🔄 Mini Challenge: Word Lengths
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


### Check for a Palindrome
Used when: You want to know if something reads the same forward/backward
```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

**Example Task**
🔁 Mini Challenge: Palindrome Checker
🧠 Goal:
Write a function that checks whether a given word is a palindrome (reads the same forwards and backwards).

```js
//EXAMPLES
//isPalindrome("racecar"); // ✅ true  
//isPalindrome("apple");   // ❌ false  
//isPalindrome("madam");   // ✅ true 

let str = "racecar";
function isPalindrome(str) {
  // your code here
  return str === str.split('').reverse().join('');
}
```
| Step            | What it Does                                       | Example with `"racecar"`                                   |
| --------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| `str.split('')` | Turns the string into an array of characters       | `["r", "a", "c", "e", "c", "a", "r"]`                      |
| `.reverse()`    | Reverses the array in place                        | `["r", "a", "c", "e", "c", "a", "r"]` (same in this case!) |
| `.join('')`     | Joins the characters back into a string            | `"racecar"`                                                |
| `str === ...`   | Compares the original string with the reversed one | `"racecar" === "racecar"` → ✅ `true`                       |


### Loop with Index
Used when: You need to compare items at positions (like comparing front row and back row heights)
```js
for (let i = 0; i < arr.length; i++) {
  // use arr[i]
}
```

**Example Challenge**
ChatGPT said:
Absolutely! Here's a mini challenge that uses the “Loop with Index” pattern:

👟 Mini Challenge: Compare Running Times
🧠 Goal:
You’re given two arrays:

One with the running times of Team A

One with the running times of Team B

Write a function that returns how many times Team A was faster (i.e., had a lower time) than Team B at the same index.
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


### BONUS TIPS / Things to remember
| Pattern               | When to Use                              |
| --------------------- | ---------------------------------------- |
| `.split('')`          | To turn a string into an array           |
| `Math.floor(num / 2)` | To count full pairs (e.g., socks)        |
| `.length`             | To check size of a string or array       |
| `return`              | To send a result back from a function    |
| `console.log()`       | To debug and see what your code is doing |


---

## Mini Challenges
*A selection of mini challenges*

### MINI CHALLENGE 1: Count Even Numbers
Concepts: loop + if + modulus (%)

Task:
Write a function that counts how many even numbers are in an array.
```js
// Input: [2, 3, 4, 5, 6]
// Output: 3 (because 2, 4, and 6 are even)

function countEvens(arr) {
  // your code here
  // set count variable to track even numbers
  let count = 0;
  // loop through array - for...of to go through each number in the array
  for (let num of arr) {
    if (num % 2 === 0) {    // check the number is even
        count += 1; // if it is, add it to the running total
    }
  }
  return count; //return the final count from the function
}
let output = countEvens([2, 3, 4, 5, 6]); // call the countEven function, pass it the array as the argument, function runs and stores result in 'output'
console.log(output);    // logs the outputs
```

### MINI CHALLENGE 2: Find the Longest Word
Concepts: loop + string methods + comparison

Task:
Write a function that returns the longest word in an array.
```js
// Input: ['cat', 'elephant', 'bat']
// Output: 'elephant'
let words = ["cat", "elephant", "bat"];
function longestWord(words) {
  // your code here
  let maxWord = words[0];

  for (let word of words) {
    // compare lengths of words
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
}
let output = longestWord(words);
console.log(output);
```
| Concept               | How Used                                  |
| --------------------- | ----------------------------------------- |
| `for...of` loop       | To look at each word in the array         |
| `.length`             | To compare word lengths                   |
| Variable reassignment | `maxWord = word` to track the longest one |
| `return`              | To give the result back to the caller     |

### MINI CHALLENGE 3: Double the Numbers
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

### MINI CHALLENGE 4: Count the Letter "a"
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


### MINI CHALLENGE 5: Total Up All Numbers
Concepts: loop + accumulator variable

Task:
Return the sum of all numbers in an array.
```js
// Input: [3, 5, 2]
// Output: 10
let arr = [3, 5, 2];
function sumNumbers(arr) {
  // your code here
  // create variable to store total
  let total = 0;

  // loop through each number in the array
  for (let num of arr) {
    total += num; // add each number to the total
  }
  // return the total
  return total;
}
// call the function and log the result
console.log(sumNumbers(arr)); // output 10
```
| Concept               | How You Used It                        |
| --------------------- | -------------------------------------- |
| Accumulator (`total`) | To keep a running total of the sum     |
| `for...of` loop       | To go through each number in the array |
| `+=` operator         | To add each number to the total        |
| `return`              | To send back the final total           |
| `console.log()`       | To display the result in the console   |

---

## Bigger Challenges

## Pair the Socks

**Key Skills**
| Concept            | What it Does                                     |
| ------------------ | ------------------------------------------------ |
| Object as a tally  | `colorCount` stores how many socks of each color |
| Loop through array | Builds up the tally of sock colors               |
| `Math.floor()`     | Calculates full pairs (ignores odd leftovers)    |
| `for...in` loop    | Loops through object properties (sock colors)    |

```js
// The array of sock colors (each number represents a color)
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Our function to count how many pairs we can form
function sockMerchant(n, ar) {
  // Step 1: Create an empty object to count each color
  let colorCount = {};

  // Step 2: Loop through the sock array
  for (let i = 0; i < ar.length; i++) {
    let color = ar[i]; // Get the color at position i

    // If this color is already in our object, add 1 to its count
    if (colorCount[color]) {
      colorCount[color] += 1;
    } else {
      // If we're seeing this color for the first time, set count to 1
      colorCount[color] = 1;
    }

    // 🔍 At the end of this loop, colorCount might look like:
    // { 10: 4, 20: 3, 30: 1, 50: 1 }
  }

  // Step 3: Now loop through the colorCount object to count pairs
  let totalPairs = 0;

  for (let color in colorCount) {
    let count = colorCount[color]; // How many socks of this color
    let pairs = Math.floor(count / 2); // Divide by 2 and round down

    totalPairs += pairs; // Add this color's pairs to total
  }

  // Step 4: Return the final number of pairs
  return totalPairs;
}

// Step 5: Call the function and print the result to the console
console.log(sockMerchant(ar.length, ar));  // Output: 3
```

---


