# Count Things in Arrays

## Contents
- [Pattern Review: Counting Something in an Array](#pattern-review-counting-something-in-an-array)
- [1. Counting Things in Arrays](#1-counting-things-in-arrays)
  - [1.1 Mini Challenge: Count the Number 7s](#11-mini-challenge-count-the-number-7s)
  - [1.2 Mini Challenge:Count the Odds](#12-mini-challenge-count-the-odds)
  - [1.3 Mini Challenge: Count Even Numbers](#13-mini-challenge-count-even-numbers)
  - [1.4 Count the word "really" in Wannabe](#14-count-the-word-really-in-wannabe)
  - [1.5 Compare number of xs and os in an array](#15-compare-the-number-of-xs-and-os-in-an-array)
### Variations/ adaptations
  - [1.6 Count How Many Times a Given Word Appears in an Array of Sentences](#16-count-how-many-times-a-given-word-appears-in-an-array-of-sentences)
  - [1.7 Count the Vowels in a string](#16-count-the-vowels-in-a-string)
  - [1.8 Count Words with more than 3 letters](#17-count-words-with-more-than-3-letters)
  - [1.9 Count Something in Multiple Arrays](#18-count-something-in-multiple-arrays)
  - [1.91 Count Unique Values](#18-count-unique-values)

---

## Pattern Review: Counting Something in an Array

**Purpose:** Count how often a certain value or condition appears in a collection. (like sock colors, letters, or even numbers)

*Key Ingredients:*
- A loop (for...of, for, or .forEach)
- A conditional (if, often with ===, .includes(), or %)
- A counter variable (let count = 0)
- An increment (count += 1)
- A return or output step

**Basic Syntax:**
```js
let count = 0;

for (let item of arr) {
  if (item === target) {
    count += 1;
  }
}
```

---

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
| let count = 0  | Track how many 7s you've found               |
| for...of loop  | Go through each number in the array          |
| if (num === 7) | Check if the current number is 7             |
| count += 1     | Add 1 to the count if it is                  |
| return         | Return the final count from the function     |
| console.log()  | Show the result so you can check your output |

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
| split(" ") (String method)     | Broke the lyrics into an array of **individual words** based on spaces                |
| for...of loop                  | Allowed you to loop through each **word** in the lyrics                               |
| if (word === "really")         | Checked whether each word was **exactly** "really"                                  |
| let count = 0 and count += 1 | Tracked how many times the word "really" appeared                                   |
| return                         | Returned the final count from the function                                            |
| console.log()                  | Printed the result so you could check your output                                     |
| Template literal (` ... )   | Stored a **multi-line string** (the lyrics) easily in the lyrics variable           |
| String cleanup (optional step)   | You might use .replace(/[^\w]/g, "") to remove punctuation when needed              |
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
- use .toLowerCase
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
| .toLowerCase() | Ensures case doesn’t affect comparison       |
| for...of loop  | Iterates through each character in the array |
| if / else if   | Checks and counts x’s and o’s                |
| === comparison | Compares final counts                        |
| return         | Gives back true or false                 |


#### 1.6 Count How Many Times a Given Word Appears in an Array of Sentences
🔍 Challenge: Count How Many Times a Given Word Appears in an Array of Sentences
🧠 Goal:
- Write a function that takes in:
    - an array of sentences (strings),
    - a target word (string),
    - and returns how many times that word appears across all sentences.

```js
let sentences = [
  "The quick brown fox jumps over the lazy dog",
  "The dog barked at the fox",
  "Foxes are quick and smart"
];

let target = "fox";

// function declaration
function countWord(sentences) {
  let count = 0;
  // loop through each sentence in sentences array
  for (let sentence of sentences) {
    // lowercase it
    let lowerCased = sentence.toLowerCase();
    //console.log(lowerCased);
    // split sentenc into words
    let words = lowerCased.split(" ");
    //console.log(words);
    // loop through the words
    for (let word of words) {
      if (word === target) { // if word matches target variable
        count += 1; // add 1 to the count
      }
    }
  }
  return count;
}
//call
console.log(countWord(sentences, target)); // 2 (fox appears twice)
```

**Improvements:**

- allow "foxes" to also be valid
    - use `startsWith(target)` *(string Method)* instead of `===`
