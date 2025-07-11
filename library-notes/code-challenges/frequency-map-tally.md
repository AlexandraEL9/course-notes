# frequency Map (Tally)

## Contents
[Pattern Review](#pattern-review)
- [3. Frequency Map (Tally Counter)](#3-frequency-map-tally-counter)
  - [3.1 Mini Challenge: Word Tally](#31-mini-challenge-word-tally)
  - [3.2 Most Frequent Number](#32-most-frequent-number)
  - [3.3 Tally Votes](#33-tally-votes)
  - [3.4 Highest Frequency Word](#34-highest-frequency-word)
  - [3.5 First Non-Repeating Character](#35-first-non-repeating-character)
  - [3.6 Most Frequent letter in a paragraph](#36-most-frequent-letter-in-a-paragraph)

---

### Pattern Review

Used when: You want to count how many times each unique item appears in a collection *(array or structure)* (e.g., {10: 2, 20: 3})

**Core Structure:**
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

#### 3.6 Most Frequent letter in a paragraph

Write a function that returns the most frequent letter (a–z) in a paragraph of text.
- Ignore spaces, punctuation, and case.
- If there's a tie, return the one that comes first alphabetically.

```js
//Input:
  //"The rain in SPAIN stays mainly in the plain."

//Output:
  //"i"  // appears 6 times
// input
let paragraph = "The rain in SPAIN stays mainly in the plain.";

function mostFrequentLetter(paragraph) {
  // clean input: lowercase and only letters (no punc)
  let lower = paragraph.toLowerCase();
  //console.log(lower);
  let cleaned = lower.replace(/[^a-z]/g, "");
  //console.log(cleaned);

  // create tally/map to count letters
  let countMap = {};
  for (let letter of cleaned) {
    if (countMap[letter]) {
      countMap[letter] += 1;
    } else {
      countMap[letter] = 1;
    }
  }
  // find highest frequency
  let maxCount = 0;
  let mostFrequentLetter = null;
  for (let letter in countMap) {
    // count logic with tie breaker
    if (  // if
      countMap[letter] > maxCount ||
      // the count of the letter is > than the maxcount so far OR
      (countMap[letter] === maxCount && letter < 
       // the count of the letter is the same as the maxcount AND the letter is < less than
       mostFrequentLetter) //the most frequent letter
    ) {
      maxCount = countMap[letter];
      mostFrequentLetter = letter;
    }
  }
  return mostFrequentLetter;
}
mostFrequentLetter(paragraph);
console.log(mostFrequentLetter(paragraph));
```


