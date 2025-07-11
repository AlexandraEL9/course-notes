# Split a String Pattern

[Pattern Review](#pattern-review)
- [7. Split a String into Characters](#7-split-a-string-into-characters)
  - [7.1 Mini Challenge: Count the Letter "e"](#71-mini-challenge-count-the-letter-e)
  - [7.2 Count a Specific Letter "a"](#72-count-a-specific-letter-a)
  - [7.3 Count the word "really" in Wannabe](#73-count-the-word-really-in-wannabe)
  - [7.4 Count xs and os and compare](#74-count-xs-and-os-and-compare)
  - [7.5 Balanced Brackets](#75-balanced-brackets)
  - [7.6 Most Common Letter in a String](#76-most-common-letter-in-a-string)
  - [7.7 Alphabet Challenge - has whole alphabet](#77-alphabet-challenge-has-whole-alphabet)
  - [How Many Digits?](#how-many-digits)

---

## Pattern Review

Used when: You want to treat each string/ letter like an array item or a sequence of elements

- Characters (.split(''))
- Words (.split(' '))
- Sentences (.split('.'))
- Or using custom delimiters (e.g. .split(','))

**Common Use Cases:**
| Goal                         | Pattern Used                               |
| ---------------------------- | ------------------------------------------ |
| Count specific characters    | `str.split('')` and loop with condition    |
| Compare frequencies          | Use two or more counters or a tally object |
| Clean and normalize          | `.toLowerCase()`, `.replace()`             |
| Check inclusion of model set | Loop through model array + `.includes()`   |
| Word-based analysis          | `str.split(' ')` and loop through words    |
| Balance or symmetry checks   | Use counters or a stack-like approach      |

**Basic Syntax:**
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

#### How Many Digits?
Write a function that counts how many digits (0–9) appear in a given string.
Ignore letters and punctuation.

```js
let input = "abc123def45";

function countDigits(input) {
  let characters = input.split("");
  //console.log(characters);

  let counter = 0;

  for (let character of characters) {
    if (character >= "0" && character <= "9") {
      counter += 1;
    }
  }
  return counter;
}
console.log(countDigits(input)); //11
console.log(countDigits("No digits here!")); // 0
console.log(countDigits("Room 101")); // 3
```
| Concept               | Used Here                                        |
| --------------------- | ------------------------------------------------ |
| `.split('')`          | Split string into characters                     |
| `for...of`            | Loop through each character                      |
| Character range check | `'0' <= char <= '9'` check via string comparison |
| Counter tracking      | `counter += 1`                                   |
| Return result         | `return counter`                                 |
