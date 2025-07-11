# Code challenges

---

## 📚 Code Challenges — Contents

### 🔑 Common Patterns and Tips
- `.split('')`, `Math.floor()`, `.length`, `return`, `console.log()`

---

### 🎯 Patterns and Mini Challenges
![Coding Patterns Poster](/images/challenge-patterns-poster.png)
## Counting Things in Arrays
- [1. Counting Things in Arrays](#1-counting-things-in-arrays)
  - [1.1 Mini Challenge: Count the Number 7s](#11-mini-challenge-count-the-number-7s)
  - [1.2 Mini Challenge:Count the Odds](#12-mini-challenge-count-the-odds)
  - [1.3 Mini Challenge: Count Even Numbers](#13-mini-challenge-count-even-numbers)
  - [1.4 Count the word "really" in Wannabe](#14-count-the-word-really-in-wannabe)
  - [1.5 Compare number of xs and os in an array](#15-compare-the-number-of-xs-and-os-in-an-array)
### Variations/ adaptations
  - [1.6 Count the Vowels in a string](#16-count-the-vowels-in-a-string)
  - [1.7 Count Words with more than 3 letters](#17-count-words-with-more-than-3-letters)
  - [1.8 Count Something in Multiple Arrays](#18-count-something-in-multiple-arrays)
  - [1.9 Count Unique Values](#18-count-unique-values)


- [2. Sum All Numbers in an Array](#2-sum-all-numbers-in-an-array)
  - [2.1 Mini Challenge: Total Shopping Bill](#21-mini-challenge-total-shopping-bill)
  - [2.2 Total Up All Numbers](#22-total-up-all-numbers)
  - [2.3 Sum of Even Numbers](#23-sum-of-even-numbers)

- [3. Frequency Map (Tally Counter)](#3-frequency-map-tally-counter)
  - [3.1 Mini Challenge: Word Tally](#31-mini-challenge-word-tally)
  - [3.2 Most Frequent Number](#32-most-frequent-number)
  - [3.3 Tally Votes](#33-tally-votes)
  - [3.4 Highest Frequency Word](#34-highest-frequency-word)
  - [3.5 First Non-Repeating Character](#35-first-non-repeating-character)

- [4. Find the Maximum or Longest](#4-find-the-maximum-or-longest)
  - [4.1 Mini Challenge: Tallest Person](#41-mini-challenge-tallest-person)
  - [4.2 Find the Longest Word](#42-find-the-longest-word)

- [5. Track State with a Variable](#5-track-state-with-a-variable)
  - [5.1 Mini Challenge: Net Elevation](#51-mini-challenge-net-elevation)
  - [Track Temperature](#51-mini-challenge-net-elevation)

- [6. Check for a Condition](#6-check-for-a-condition)
  - [6.1 Mini Challenge: Print Only Long Words](#61-mini-challenge-print-only-long-words)

- [7. Split a String into Characters](#7-split-a-string-into-characters)
  - [7.1 Mini Challenge: Count the Letter "e"](#71-mini-challenge-count-the-letter-e)
  - [7.2 Count a Specific Letter "a"](#72-count-a-specific-letter-a)
  - [7.3 Count the word "really" in Wannabe](#73-count-the-word-really-in-wannabe)
  - [7.4 Count xs and os and compare](#74-count-xs-and-os-and-compare)
  - [7.5 Balanced Brackets](#75-balanced-brackets)
  - [7.6 Most Common Letter in a String](#76-most-common-letter-in-a-string)
  - [7.7 Alphabet Challenge - has whole alphabet](#77-alphabet-challenge-has-whole-alphabet)

- [8. Build a New Array](#8-build-a-new-array)
  - [8.1 Double the Numbers](#81-double-the-numbers)
  - [8.2 Mini Challenge: Word Lengths](#82-mini-challenge-word-lengths)

- [9. Check for a Palindrome](#9-check-for-a-palindrome)
  - [9.1 Mini Challenge: Palindrome Checker](#91-mini-challenge-palindrome-checker)
  - [9.2 Reverse Words in a String](#92-reverse-words-in-a-string)
  - [9.3 Reverse Words in a Sentence](#93-reverse-words-in-a-sentence)

- [10. Loop with Index](#10-loop-with-index)
  - [10.1 Mini Challenge: Compare Running Times](#101-mini-challenge-compare-running-times)
  - [10.2 Count Letter "a"](#102-count-letter-a)

---

### Bigger Challenges

- [11. Pair the Socks](#11-pair-the-socks)
- [12. Palindrome Checker](#12-palindrome-checker)
- [13. Photo Checker](#13-photo-checker)
- [14. A&E Wait Times](#14-a-e-wait-times)
- [15. Find matching Data in an Object](#15-find-matching-data-in-an-object)


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

### Common Challenge Patterns
- focus on challenges that use:
  - Loops with conditions
  - Arrays and string manipulation
  - Object/counting patterns (like tally counters)
  - Index-based comparisons
  - Basic logic (palindrome, sums, etc.)

### Key Skills Checklist
Make sure solid on:
- for and for...of loops
- if, %, ===, !==
- .length, .push(), .split(), .join(), .reverse(), .replace()
- Creating counters/objects to track frequency

### Challenge Strategy
For each problem:
- Restate it clearly in your own words.
- Write pseudocode first as comments (this earns marks!)
- Start simple — don’t overbuild logic.
- Test early — log progress after each step.

## Challenge Patterns

### 1. Counting Things in Arrays
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

#### 1.1 Mini Challenge: Count the Number 7s
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

#### 1.2 Mini Challenge: Count the Odds
Task:
Write a function that counts how many odd numbers are in an array.
```js
// Write a function that counts how many odd numbers are in an array.
// Input: [1, 2, 3, 4, 5]
// Output: 3 (odd numbers: 1, 3, 5)

// RESTATE: How many odd numbers are in the array?
// set array and log.
let array = [1, 2, 3, 4, 5];
console.log(array); //[1,2,3,4,5]
// set up function
function countOdds(array) {
  // set up count variable to track how many odd numbers
  let oddCount = 0;
  console.log(oddCount);
  // loop through numbers in array for...of
  for (let number of array) { // loop through each number
    // logic to check odd (% !== 0)
    if (number % 2 !== 0) { // check it is not divisible by 2 with not 0 remainders
      oddCount += 1;  // if it is, add 1 to the counter
    }
  }
  return oddCount;  // return the final count
}
// set up output variable
let output = countOdds(array);   // set output as called function with the array inputted
// log  Output: 3
console.log(output);  // logs 3
```
📘 Concepts Covered
  ✅ Looping with for...of
  ✅ Using % (modulus) to test for odd numbers
  ✅ Incrementing a count with += 1
  ✅ Returning values from a function
  ✅ Logging for debugging
  ✅ Writing clear comments & pseudocode


### 1.3 Mini Challenge: Count Even Numbers
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

#### 1.4 Count the word "really" in Wannabe
```js
// Spice Girls ("Wannabe")
// '''
// Yo, I'll tell you what I want, what I really, really want
// So tell me what you want, what you really, really want
// I'll tell you what I want, what I really, really want
// So tell me what you want, what you really, really want
// I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
// I wanna really, really, really wanna zigazig ah"
// '''
// Count how many times the word "really" appears in the Spice Girls lyrics.
// NB: it is entirely up to you whether to write function or just write script
// in the console.

// set lyrics
let lyrics = `
Yo, I'll tell you what I want, what I really, really want
So tell me what you want, what you really, really want
I'll tell you what I want, what I really, really want
So tell me what you want, what you really, really want
I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
I wanna really, really, really wanna zigazig ah"
`;
//console.log(lyrics);

// function
function countReallys(lyrics) {
  // split into words - .split
  let words = lyrics.split(" ");
  //console.log(words);
  // set up count to track
  let count = 0;

  //loop through lyrics
  for (let word of words) {
    // Remove punctuation (commas, quotes, brackets, etc.)
    let cleanWord = word.replace(/[^\w]/g, ""); // keep only letters and numbers
    if (cleanWord === "really") {
      count += 1;
    }
  }
  return count;
}
console.log(countReallys(lyrics)); // 11
```
| 💡 **Skill / Concept**           | ✅ **How it was used**                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| `split(" ")` (String method)     | Broke the lyrics into an array of **individual words** based on spaces                |
| `for...of` loop                  | Allowed you to loop through each **word** in the lyrics                               |
| `if (word === "really")`         | Checked whether each word was **exactly** `"really"`                                  |
| `let count = 0` and `count += 1` | Tracked how many times the word `"really"` appeared                                   |
| `return`                         | Returned the final count from the function                                            |
| `console.log()`                  | Printed the result so you could check your output                                     |
| Template literal (`` `...` ``)   | Stored a **multi-line string** (the lyrics) easily in the `lyrics` variable           |
| String cleanup (optional step)   | You might use `.replace(/[^\w]/g, "")` to remove punctuation when needed              |
| Manual debugging                 | You manually **counted occurrences** to verify the code’s output matched expectations |

#### 1.5 Compare number of xs and os in an array
```js
// Create a function which reads an array of xs and os, counts them,
// then returns true if the same amount or false if not.

let input = ["x", "o", "x", "o", "x", "x", "o", "o"];
console.log(input);

function ExOh(input) {
  let countX = 0;
  let countO = 0;

  for (let letter of input) {
    if (letter === "x") {
      countX += 1;
    } else if (letter === "o") {
      countO += 1;
    }
  }

  return countX === countO; // comparison oporator to test if true - are they both the same?
}

console.log(ExOh(input)); // Expected: true
```

**Version with case sensitivity:**
- use `.toLowerCase`
```js
// Create a function which reads an array of xs and os of different cases and counts them,
// then returns true if the same amount or false if not.

let input = ["x", "X", "O", "o"];
console.log(input); // ["x", "X", "O", "o"]

function ExOh(input) {
  // set up counters
  let countX = 0;
  let countO = 0;

  // loop through each letter in the array
  for (let letter of input) {
    // convert letter to lowercase so it's case-insensitive
    let lower = letter.toLowerCase();

    if (lower === "x") {
      countX += 1;
    } else if (lower === "o") {
      countO += 1;
    }
  }

  // return true if counts match
  return countX === countO;
}

console.log(ExOh(input)); // true
```
| Concept          | Description                                  |
| ---------------- | -------------------------------------------- |
| `.toLowerCase()` | Ensures case doesn’t affect comparison       |
| `for...of` loop  | Iterates through each character in the array |
| `if / else if`   | Checks and counts x’s and o’s                |
| `===` comparison | Compares final counts                        |
| `return`         | Gives back `true` or `false`                 |


### 2. Sum All Numbers in an Array

Used when: You're adding up totals (prices, scores, etc.)
```js
let total = 0;

for (let num of arr) {
  total += num;
}
```

**Example Challenge:**

#### 2.1 Mini Challenge: Total Shopping Bill
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

### 2.2 Total Up All Numbers
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

### 2.3 Sum of Even Numbers
Task:
Write a function that returns the sum of all even numbers in an array.
```js
// Write a function that returns the sum of all even numbers in an array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12  (2 + 4 + 6)

// set array
let arrayNumbers = [1, 2, 3, 4, 5, 6];

// create function
function sumOfEvens(arrayNumbers) {
  //set total
  let total = 0;
  // loop through numbers in array (for...of)
  for (let num of arrayNumbers) {
    // logic for is even
    if (num % 2 === 0) {
      // if the remainder when /by 2 is )
      total += num; // add to the total running count
    }
  }
  return total;
}
console.log(sumOfEvens(arrayNumbers)); // 12
```
✅ Pattern Used: "Sum if Condition is Met"
| Concept         | What You Did                                      |
| --------------- | ------------------------------------------------- |
| `for...of` loop | Loop through each number in the array             |
| `num % 2 === 0` | Check if a number is even (no remainder when ÷ 2) |
| `total += num`  | Add even numbers to the total                     |
| `return`        | Return the final total from the function          |
| `console.log()` | Display the result for testing                    |


### 3. Frequency Map (Tally Counter)
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

#### 3.1 Mini Challenge: Word Tally
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

#### 3.2 Most Frequent Number
Task:
Write a function that returns the number that appears most often in the array.
```js
// Write a function that returns the number that appears most often in the array.
// Input: [1, 2, 2, 3, 3, 3, 1]
// Output: 3 (because 3 appears 3 times)

// Step 0: Set up input array
let input = [1, 2, 2, 3, 3, 3, 1];

// Step 1: Create the function
function mostFrequent(input) {
  // Step 2: Create an empty object to store frequency of each number
  let countMap = {};

  // Step 3: Count how many times each number appears in the array
  for (let number of input) {
    // If the number is already in countMap, add 1 to its count
    if (countMap[number]) {
      countMap[number] += 1;
    } else {
      // If it's the first time we see the number, start its count at 1
      countMap[number] = 1;
    }
  }

  // Step 4: Find the number with the highest frequency
  let maxCount = 0;            // tracks the highest count seen so far
  let mostFrequentNum = null; // will store the number with that highest count

  // Step 5: Loop through the frequency map (countMap)
  for (let number in countMap) {
    // If this number’s count is higher than the current max, update both
    if (countMap[number] > maxCount) {
      maxCount = countMap[number];         // update max count
      mostFrequentNum = Number(number);    // convert string key back to number
    }
  }

  // Step 6: Return the number that appeared the most
  return mostFrequentNum;
}

// Step 7: Call the function and print the result
console.log(mostFrequent(input)); // Output: 3
```

**Key Concepts Covered:**
- *Frequency Map (Tally Counter)*: Using an object to count how many times each number appears.
- `for...of` loop: Iterating over values in an array.
- `for...in` loop: Iterating over keys in an object.
- *Tracking a maximum:* Keeping track of the highest count seen so far.
- *Type conversion:* Object keys are strings, so we convert them back to numbers with Number().

#### 3.3 Tally Votes
```js
//Write a function that takes an array of strings (votes) and returns an object tallying how many times each option appears.

// Input: ["blue", "red", "blue", "green", "blue", "red"]
// Output: { blue: 3, red: 2, green: 1 }

// set array
let coloursArray = ["blue", "red", "blue", "green", "blue", "red"];
console.log(coloursArray);

// create function
function colourTally(coloursArray) {
  // set countMap
  let countMap = {};
  //Count how many times each number appears in the array
  for (let colour of coloursArray) {
    // logic for adding to colours
    if (countMap[colour]) {
      countMap[colour] += 1;
    } else {
      countMap[colour] = 1;
    }
  }
  return countMap;
}
// call function with parameter
console.log("Tally:", colourTally(coloursArray));
```

#### 3.4 Highest Frequency Word
```js
// Write a function that returns the word that appears most often in a sentence.

// Input: "I love love love coding coding"

let input = "I love love love coding coding";

// function
function mostFrequent(input) {
  // Step 1: Split the sentence into words
  let words = input.split(" "); // ["I", "love", "love", "love", "coding", "coding"]
  // create empty object
  let countMap = {};
  // count how many times each number appears
  for (let word of words) {
    if (countMap[word]) {
      countMap[word] += 1;
    } else {
      countMap[word] = 1;
    }
  }
  //find number with highest frequency
  let maxCount = 0;
  let mostFrequentWord = null; // intentionally absent

  // loop through new object
  for (let word in countMap) {
    if (countMap[word] > maxCount) {
      maxCount = countMap[word];
      mostFrequentWord = word;
    }
  }
  return mostFrequentWord;
}
console.log(mostFrequent(input));
```
| Concept               | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `.split(" ")`         | Split the sentence into an array of words           |
| `object as counter`   | Track how many times each word appears (`countMap`) |
| `for...of` loop       | Loop through each word in the array                 |
| `for...in` loop       | Loop through keys (words) in the object             |
| `max tracker pattern` | Track which word has the highest frequency          |

#### 3.5 First Non-Repeating Character
```js
//Challenge: First Non-Repeating Character
// Write a function that returns the first character in a string that doesn’t repeat.
//Ignore case
// Ignore spaces and punctuation
//Return null if every character repeats
// input: let input = "stress";
// expected output: "t" // (because 's' and 'r' repeat, but 't' is the first that doesn't)

// input
let input = "Stress!";

// function
function findFirstNonRepeat(input) {
  // Clean string to lowercase and remove punctuation/spaces
  let lowerCased = input.toLowerCase();
  let cleanedString = lowerCased.replace(/[^a-z]/g, "");

  // Step 1: Count frequency of each character
  let countMap = {};
  for (let letter of cleanedString) {
    if (countMap[letter]) {
      countMap[letter] += 1;
    } else {
      countMap[letter] = 1;
    }
  }

  // Step 2: Find the first character with a count of 1
  for (let letter of cleanedString) {
    // for each letter in the cleaned string
    // Check the count of this letter in the countMap object
    if (countMap[letter] === 1) {
      // If this letter appears exactly once, return it immediately
      // (This is the first non-repeating letter in the string)
      return letter;
    }
  }

  // Step 3: If no unique character found, return null
  return null;
}

// call
console.log(findFirstNonRepeat(input)); // "t"
console.log(findFirstNonRepeat("aabbcc"));  // null
console.log(findFirstNonRepeat("Swiss"));   // "w"
```
| **Pattern / Skill**               | **Used For / Explanation**                                                        |
| --------------------------------- | --------------------------------------------------------------------------------- |
| **String cleaning**               | `.toLowerCase()` and `.replace(/[^a-z]/g, "")` used to normalize input            |
| **Split string into characters**  | Implicit via `for...of` loop to iterate over each character                       |
| **Frequency Map / Tally Counter** | Used to count how many times each character appears using an object `{}`          |
| **for...of loop**                 | To iterate over characters in the cleaned string                                  |
| **Conditionals (`if/else`)**      | To tally character counts and check for first unique character                    |
| **Early Return**                  | Returns the first character found with count `=== 1`, ending the loop immediately |
| **Return `null` as fallback**     | If no character has a unique count, the function returns `null` at the end        |
| **Object lookup**                 | Using `countMap[letter]` to retrieve frequency in constant time                   |


### 4. Find the Maximum or Longest
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

#### 4.1 Mini Challenge: Tallest Person
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

#### 4.2 Find the Longest Word
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


### 5. Track State with a Variable
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

#### 5.1 Mini Challenge: Net Elevation
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


### 6. Check for a Condition
Used when: You only want to do something if a rule is met (inside a loop or function)
```js
if (condition) {
  // do something
}
```

**Example Challenge**

### 6.1 Mini Challenge: Print Only Long Words
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


### 7. Split a String into Characters
Used when: You want to treat each letter like an array item
```js
let chars = str.split('');  // turns "hello" into ['h', 'e', 'l', 'l', 'o']
```

**Example Challenge**

#### 7.1 Mini Challenge: Count the Letter "e"
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

#### 7.2 Count a Specific Letter "a"
```js
// Write a function that counts how many times the letter "a" appears in a string.
// // Input: "javascript is amazing"
// Output: 4

// set string
let str = "javascript is amazing";

//create function
function countA(str) {
  // split string into characters
  let characters = str.split("");
  // set up counter to track
  let aCount = 0;

  // loop through each character (now an array of characters)
  for (let char of characters) {
    if (char === "a") {
      aCount += 1;
    }
  }
  //return final count
  return aCount;
}
console.log(countA(str)); // 4
```

#### 7.3 Count the word "really" in Wannabe
```js
// Spice Girls ("Wannabe")
// '''
// Yo, I'll tell you what I want, what I really, really want
// So tell me what you want, what you really, really want
// I'll tell you what I want, what I really, really want
// So tell me what you want, what you really, really want
// I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
// I wanna really, really, really wanna zigazig ah"
// '''
// Count how many times the word "really" appears in the Spice Girls lyrics.
// NB: it is entirely up to you whether to write function or just write script
// in the console.

// set lyrics
let lyrics = `
Yo, I'll tell you what I want, what I really, really want
So tell me what you want, what you really, really want
I'll tell you what I want, what I really, really want
So tell me what you want, what you really, really want
I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
I wanna really, really, really wanna zigazig ah"
`;
//console.log(lyrics);

// function
function countReallys(lyrics) {
  // split into words - .split
  let words = lyrics.split(" ");
  //console.log(words);
  // set up count to track
  let count = 0;

  //loop through lyrics
  for (let word of words) {
    // Remove punctuation (commas, quotes, brackets, etc.)
    let cleanWord = word.replace(/[^\w]/g, ""); // keep only letters and numbers
    if (cleanWord === "really") {
      count += 1;
    }
  }
  return count;
}
console.log(countReallys(lyrics)); // 11
```
| 💡 **Skill / Concept**           | ✅ **How it was used**                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| `split(" ")` (String method)     | Broke the lyrics into an array of **individual words** based on spaces                |
| `for...of` loop                  | Allowed you to loop through each **word** in the lyrics                               |
| `if (word === "really")`         | Checked whether each word was **exactly** `"really"`                                  |
| `let count = 0` and `count += 1` | Tracked how many times the word `"really"` appeared                                   |
| `return`                         | Returned the final count from the function                                            |
| `console.log()`                  | Printed the result so you could check your output                                     |
| Template literal (`` `...` ``)   | Stored a **multi-line string** (the lyrics) easily in the `lyrics` variable           |
| String cleanup (optional step)   | You might use `.replace(/[^\w]/g, "")` to remove punctuation when needed              |
| Manual debugging                 | You manually **counted occurrences** to verify the code’s output matched expectations |

#### 7.4 Count xs and os and compare
```js
// Create a function which reads a string of xs and os, counts them,
// then returns true if the same amount or false if not.

let input = "xoxoxxoo";
console.log(input);

function ExOh(input) {
  // split string into characters
  let chars = input.split("");
  console.log(chars);
  // set up variables for x and o
  let countX = 0;
  let countO = 0;

  for (let letter of chars) {
    if (letter === "x") {
      countX += 1;
    } else if (letter === "o") {
      countO += 1;
    }
  }

  return countX === countO; // comp logic - are they the same? t/F
}

console.log(ExOh(input)); // Expected: true
```

**version with capitals and lc**
- add `.toLowerCase` step
```js
// Create a function which reads a string of xs and os Of different cases and  counts them,
// then returns true if the same amount or false if not.

let input = "XoxoxxOo";
console.log(input);

function ExOh(input) {
  // lowercase the entire string
  let lowercased = input.toLowerCase();
  console.log(lowercased);
  // split string into characters
  let chars = lowercased.split("");
  console.log(chars);
  // set up variables for x and o
  let countX = 0;
  let countO = 0;

  for (let letter of chars) {
    if (letter === "x") {
      countX += 1;
    } else if (letter === "o") {
      countO += 1;
    }
  }

  return countX === countO; // ✅ This line must be *after* the loop
}

console.log(ExOh(input)); // Expected: true
```

#### 7.5 Balanced Brackets
```js
//Challenge: Balanced Brackets (Easy–Medium)
//Write a function that takes a string of only "(" and ")" and returns true if the brackets are balanced, or false if not.
//A string is balanced if every open ( has a matching close ) in the correct order.
let input = "(())";

function balancedBrackets(input) {
  // split string into characters
  let characters = input.split("");
  console.log(characters);

  // set up variables for "(" and ")"
  let countOpen = 0;
  let countClosed = 0;

  // loop through array for...of
  for (let char of characters) {
    if (char === "(") {
      countOpen += 1;
    } else if (char === ")") {
      countClosed += 1;
    }
  }
  return countOpen === countClosed;
}
console.log(balancedBrackets(input));
```

#### 7.6 Most Common Letter in a String
```js
// Most Common Letter (Ignore Case)
// Write a function that takes a string and returns the letter that appears the most often (case-insensitive). Ignore spaces and punctuation.
// Input: "Hello, how are you?"
// Output: "o"  // because "o" appears 3 times

let string = "Hello, how are you?";

function mostFrequentLetter(string) {
  // Step 1: Lowercase everything for case-insensitive comparison
  let lowerCase = string.toLowerCase();

  // Step 2: Remove punctuation and spaces
  let cleanedString = lowerCase.replace(/[^a-z]/g, "");

  // Step 3: Count each letter (frequency map)
  let countMap = {};
  for (let letter of cleanedString) {
    if (countMap[letter]) {
      countMap[letter] += 1;
    } else {
      countMap[letter] = 1;
    }
  }

  // Step 4: Find letter with the highest frequency
  let maxCount = 0;
  let mostFrequent = null;

  for (let letter in countMap) {
    if (countMap[letter] > maxCount) {
      maxCount = countMap[letter];
      mostFrequent = letter;
    }
  }

  // Step 5: Return the most frequent letter
  return mostFrequent;
}

console.log(mostFrequentLetter(string)); // o
```
| Step | Pattern Name             | Explanation                             |
| ---- | ------------------------ | --------------------------------------- |
| 1    | 🧹 Clean and Normalize   | `.toLowerCase()`, `.replace()` to clean |
| 2    | 🔁 Frequency Map (Tally) | `{}` object with `for...of` loop        |
| 3    | 🔍 Max Tracker Pattern   | Compare and track highest count         |

#### 7.7 Alphabet Challenge - has whole alphabet
Create a function which checks a string and:
- returns true if it has at least every letter of the alphabet at least once
- returns false if it is missing letters of the alphabet
```js
function hasAllLetters(str) {
  // Step 1: clean the string (lowercase + remove non-letters)
  let cleanedString = str.toLowerCase().replace(/[^a-z]/g, "");

  // Step 2: model alphabet
  let modelAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // Step 3: loop through each letter in the model alphabet
  for (let letter of modelAlphabet) { // for each letter in the model alphabet
    // Check if each letter exists in the cleaned string
    if (!cleanedString.includes(letter)) { //If the cleaned string does not contain this letter
      return false; // as soon as one letter is missing, return false
    }
  }

  // Step 4: if all letters were found, return true
  return true;
}
console.log(hasAllLetters("The quick brown fox jumps over the lazy dog")); // true
console.log(hasAllLetters("Hello world")); // false
```
| Pattern                          | How it’s used                                           |
| -------------------------------- | ------------------------------------------------------- |
| **Split a string**               | `.split("")` if needed — or `for...of` on modelAlphabet |
| **Clean input**                  | `.toLowerCase()` + `.replace(/[^a-z]/g, "")`            |
| **Check for condition**          | `if (!cleanedString.includes(letter))`                  |
| **Loop through reference array** | `for (let letter of modelAlphabet)`                     |



### 8. Build a New Array
Used when: You’re transforming one array into another (e.g., doubling numbers)
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


### 9. Check for a Palindrome
Used when: You want to know if something reads the same forward/backward
```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

**Example Task**

#### 9.1 Mini Challenge: Palindrome Checker
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

#### 9.2 Reverse Words in a String
Task:
Write a function that reverses the order of words (not the letters) in a string.
```js
// Write a function that reverses the order of words (not the letters) in a string.
// Input: "I love coding"
// Output: "coding love I"

// RESTATE: re order the WORDS (keep as words, NOT split into letters)
// create words variable
let sentence = "I love coding";
console.log(sentence);
// create function
function reverseSentence(sentence) {
  // split sentence into words array with split(" ")
  let wordsArray = sentence.split(" ");
  console.log("After split:", wordsArray); // ["I", "love", "coding"]
  // reverse array
  let reversedArray = wordsArray.reverse();
  console.log("After reverse:", reversedArray);
  // join back together with .join(" ")
  let reversedSentence = reversedArray.join(" ");
  console.log(reversedSentence);
}
reverseSentence(sentence);
```
| Concept         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `.split(" ")`   | Converts string into an array of words                |
| `.reverse()`    | Reverses the array in-place                           |
| `.join(" ")`    | Turns the array back into a single string with spaces |
| `console.log()` | Used to debug and show output at each step            |
✅ What to Add (Optional):
- to make the function return the reversed sentence (not just log it):
```js
return reversedSentence;
```
Then do:
```js
let result = reverseSentence(sentence);
console.log("Final result:", result);
```

#### 9.3 Reverse Words in a Sentence
- With a return
```js
//Reverse Words in a Sentence
//Write a function that reverses the order of words (not letters) in a sentence.
// Input: "Bootcamp is fun"
// Output: "fun is Bootcamp"

//sentence variable
let sentence = "Bootcamp is fun";
console.log(sentence);

// create function
function reverseSentence(sentence) {
  // split sentence into words (split "space")
  let wordsArray = sentence.split(" ");
  console.log("After split:", wordsArray);
  // reverse array
  let reversedArray = wordsArray.reverse();
  console.log("After reverse:", reversedArray);
  // join sentence back together
  let reversedSentence = reversedArray.join(" ");
  return reversedSentence;
}
// Call function
let output = reverseSentence(sentence);
console.log("Reversed Sentence:", output);
```
| Concept          | What You Did                                          |
| ---------------- | ----------------------------------------------------- |
| `.split(" ")`    | Turn a sentence into an array of words                |
| `.reverse()`     | Reverse the order of items in the array               |
| `.join(" ")`     | Combine the words back into a sentence                |
| Function calling | Passed an argument to a function and returned a value |
| `console.log()`  | Used to trace each step and verify the output         |


### 10. Loop with Index
Used when: You need to compare items at positions (like comparing front row and back row heights)
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


---

## Bigger Challenges

#### 11. Pair the Socks

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

#### 12. Palindrome Checker
```js
// 🧪 INPUT
let str = "banana";

// ✅ FUNCTION to find the longest palindromic substring
function longestPalindrome(str) {
  // 📌 Step 1: Create a variable to track the longest palindrome we find
  let longest = "";

  // 🔁 Outer loop: go through each character as a possible start point
  for (let start = 0; start < str.length; start++) {
    // 🔁 Inner loop: go through each character as a possible end point
    // We start at start + 1 so that we get at least 1 character in the substring
    for (let end = start + 1; end <= str.length; end++) {
      // ✂️ Step 2: Slice out a substring from start to end
      let substring = str.slice(start, end);

      // 🔍 Step 3: Check if the substring is a palindrome
      // We reverse the substring and compare with the original
      let reversed = substring.split("").reverse().join("");

      if (substring === reversed) {
        // ✅ It's a palindrome — now check if it's the longest we've seen
        if (substring.length > longest.length) {
          // 🆕 Update the longest variable
          longest = substring;
        }
      }
    }
  }

  // 🔚 Return the longest palindrome found
  return longest;
}

// ✅ TEST CASES
console.log(longestPalindrome("banana")); // "anana"
console.log(longestPalindrome("racecar")); // "racecar"
console.log(longestPalindrome("hello")); // "ll"
console.log(longestPalindrome("abc")); // "a" (or "b" or "c", any 1-letter palindrome)
```
**Explanation**
| Line                                     | What's happening                         |
| ---------------------------------------- | ---------------------------------------- |
| `for (let start = 0...)`                 | Start index of the substring             |
| `for (let end = start + 1...)`           | End index (exclusive)                    |
| `str.slice(start, end)`                  | Creates a substring to check             |
| `.split('').reverse().join('')`          | Checks if that substring is a palindrome |
| `if (substring.length > longest.length)` | Updates if it's the longest seen so far  |

#### 13. Photo Checker
```js
// Function to check if one group can stand behind the other based on height

// Input: two arrays of student heights (same length)
// Output: true if each student in one row is strictly taller than the one in front

function classPhoto(purpleHeights, blackHeights) {
  // Step 1: Sort both arrays in ascending order so we can compare positions easily
  purpleHeights.sort((a, b) => a - b);
  blackHeights.sort((a, b) => a - b);

  // Step 2: Decide who stands in the back row by comparing tallest students
  let backRow = [];
  let frontRow = [];

  // If purple’s tallest student is taller than black’s tallest, purple goes in the back
  if (purpleHeights[purpleHeights.length - 1] > blackHeights[blackHeights.length - 1]) {
    backRow = purpleHeights;
    frontRow = blackHeights;
  } else {
    backRow = blackHeights;
    frontRow = purpleHeights;
  }

  // Step 3: Compare each student in both rows
  for (let i = 0; i < backRow.length; i++) {
    // If anyone in the back is NOT taller than the person in front → return false
    if (backRow[i] <= frontRow[i]) {
      return false;
    }
  }

  // If we made it through the loop without returning false, it’s a valid photo
  return true;
}

// Test input
let purpleHeights = [5, 8, 1, 3, 4];
let blackHeights = [6, 9, 2, 4, 5];

console.log(classPhoto(purpleHeights, blackHeights)); // ✅ true
```
| Step | What It Does                                       | Code / Concept                   |
| ---- | -------------------------------------------------- | -------------------------------- |
| 1️⃣  | Sort both arrays by height (ascending)             | `.sort((a, b) => a - b)`         |
| 2️⃣  | Decide who stands in back based on tallest student | `if (last purple > last black)`  |
| 3️⃣  | Compare each position to check back > front        | `if (backRow[i] <= frontRow[i])` |
| ✅    | Return true if all back-row students are taller    | `return true`                    |
| ❌    | Return false as soon as one comparison fails       | `return false`                   |

| Concept / Pattern                 | Description                                                            | Example in Code                                      |
| --------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| **Sorting Arrays**                | Sort arrays in ascending order to allow easy comparison                | `.sort((a, b) => a - b)`                             |
| **Comparing Largest Elements**    | Use the last item in a sorted array to determine who should go in back | `if (arr1[arr1.length - 1] > arr2[arr2.length - 1])` |
| **Assigning Roles**               | Use conditional logic to assign who’s in front and who’s in back       | `backRow = purpleHeights; frontRow = blackHeights;`  |
| **Loop with Index (`for`)**       | Needed to compare corresponding elements in both arrays                | `for (let i = 0; i < backRow.length; i++)`           |
| **Element-by-element Comparison** | Check that every student in the back row is taller than the front      | `if (backRow[i] <= frontRow[i]) return false;`       |
| **Early Return**                  | Stop the function and return false if any invalid case is found        | `return false;`                                      |
| **Boolean Return**                | Function returns a single true or false value based on all checks      | `return true;`                                       |

#### 14. A&E Wait Times
```js
// A&E Waiting Time Challenge

// Goal: Return the minimum total waiting time for all patients.
// Strategy: Use a greedy approach — treat shorter appointments first.

function minimumWaitingTime(times) {
  // Step 1: Sort consultation times in ascending order
  let sortedTimes = times.sort((a, b) => a - b);
  console.log("Sorted times:", sortedTimes);

  // Step 2: Set up total waiting time tracker
  let totalWait = 0;

  // Step 3: Loop through each patient's consultation
  for (let i = 0; i < sortedTimes.length; i++) {
    let time = sortedTimes[i]; // current consultation time

    // Step 4: Count how many people are still to be seen after this patient
    let patientsAfter = sortedTimes.length - (i + 1);

    // Step 5: Add this patient's wait impact to the total wait time
    totalWait += time * patientsAfter;
  }

  // Step 6: Return final total waiting time
  return totalWait;
}

// Test case
let times = [3, 2, 1, 2, 6];
console.log("Minimum total waiting time:", minimumWaitingTime(times)); // Expected: 17
```
| Patient (index) | Time | Patients After | Wait Added (time × after) |
| --------------- | ---- | -------------- | ------------------------- |
| 0               | 1    | 4              | 1 × 4 = 4                 |
| 1               | 2    | 3              | 2 × 3 = 6                 |
| 2               | 2    | 2              | 2 × 2 = 4                 |
| 3               | 3    | 1              | 3 × 1 = 3                 |
| 4               | 6    | 0              | 6 × 0 = 0                 |
| **Total**       | —    | —              | **17**                    |

| Pattern / Skill                  | Where It Was Used                                   | Purpose / Description                                                      |
| -------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------- |
| **Sorting (Greedy Strategy)**    | `sortedTimes = times.sort((a, b) => a - b);`        | Ensures shortest consultations come first to reduce total wait time.       |
| **Loop with Index (`for` loop)** | `for (let i = 0; i < sortedTimes.length; i++)`      | Allows us to calculate how many patients come **after** each one.          |
| **Array Access**                 | `let time = sortedTimes[i];`                        | Accessing the current consultation time from the sorted array.             |
| **Subtraction (Math Logic)**     | `let patientsAfter = sortedTimes.length - (i + 1);` | Counts how many patients will wait after the current one.                  |
| **Multiplication for impact**    | `totalWait += time * patientsAfter;`                | Multiplies time by how many patients it affects — this is the “wait cost.” |
| **Running Total / Accumulator**  | `let totalWait = 0;` and `totalWait += ...`         | Accumulates the total waiting time as we process each patient.             |
| **Return Value**                 | `return totalWait;`                                 | Returns the final result of the total waiting time.                        |
| **Testing with Input**           | `console.log(minimumWaitingTime([3, 2, 1, 2, 6]));` | Checks if the function behaves correctly for a known case.                 |
| **Console Logging**              | `console.log("Sorted times:", sortedTimes);`        | Debugging step to ensure sorting is correct.                               |

### 15. Find matching Data in an Object
```js
// Write a function that:
// Extracts values from index 10 to 15 for each array,
// Returns an array of zone names where the slice includes 42.

let sensorData = {
  zoneA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 42, 44, 45, 46, 47, 48, 49],
  zoneB: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  zoneC: [11, 12, 13, 14, 15, 42, 17, 18, 19, 20, 21, 22, 23, 24],
  zoneD: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 42, 14, 15]
};

function extractsData(sensorData) {
  // Array to hold zones where the slice includes 42
  let matchingZones = [];

  // Loop through each zone name in the object
  for (let zone in sensorData) {
    let readings = sensorData[zone];             // Get that zone's array
    let slice = readings.slice(10, 16);          // Extract index 10–15
    if (slice.includes(42)) {                    // Check if slice contains 42
      matchingZones.push(zone);                  // If yes, add zone name
    }
  }

  return matchingZones; // Return result
}

console.log(extractsData(sensorData)); // ✅ ["zoneA", "zoneD"]
```
**Pattern Used**
- Loop through object (for...in)
- Array slicing (.slice(10, 16))
- Condition check (.includes(42))
- Building a new array (.push())
