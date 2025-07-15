# Check for a Condition

- [6. Check for a Condition](#6-check-for-a-condition)
- [Print Only Long Words](#print-only-long-words)
- [Print Only Even Numbers](#print-only-even-numbers)
- [Words That Start with a Vowel](#words-that-start-with-a-vowel)
- [Words That Start with a Vowel- Count](#words-that-start-with-a-vowel-count)


### 6. Check for a Condition
Used when: You only want to do something if a rule is met (inside a loop or function)

- Filter elements
- Trigger actions only when something matches a rule
- Make decisions inside loops or functions

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

#### Print Only Even Numbers
🔧 Your Task:
Write a function that loops through an array of numbers and prints only the even ones.
```js
let numbers = [3, 4, 7, 10, 15, 16];

function printEvens(numbers) {
  for (let number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}
printEvens(numbers);
```
| Concept               | ✅ Used it to...                           |
| --------------------- | ----------------------------------------- |
| `for...of` loop       | Go through each number in the array       |
| `if (condition)`      | Check if the number is even (`% 2 === 0`) |
| `console.log(number)` | Print the number if the condition is true |


### Challenge: Words That Start with a Vowel
🟨 Goal:
Write a function that goes through an array of words and prints only the ones that start with a vowel (a, e, i, o, u — case-insensitive).
```js
["apple", "banana", "umbrella", "dog", "elephant", "Cat"]
```
```js
let words = ["apple", "banana", "umbrella", "dog", "elephant", "Cat"];

function checkVowels(words) {
  // loop through words array
  for (let word of words) { // for every word in words
    if ("aeiou".includes(word[0].toLowerCase())) {  // if aeiou is included at the [0] index position of the word (.made to lowercase)
      console.log(word);  // log the word
    }
  }
}
checkVowels(words);
```

#### Words That Start with a Vowel- Count
*MODIFICATION:*
  - instead of printing the words, it returns how many start with a vowel. 
```js
let words = ["apple", "banana", "umbrella", "dog", "elephant", "Cat"];

function checkVowels(words) {
  // set up count
  let count = 0;
  // loop through words array
  for (let word of words) {
    // for every word in words
    if ("aeiou".includes(word[0].toLowerCase())) {
      // if aeiou is included at the [0] index position of the word (.made to lowercase)
      count += 1; // add 1 to the count running total
    }
  }
  return count; // return the result
}
console.log(checkVowels(words)); // 3
``` 
| Concept          | ✅ Used it to...                                     |
| ---------------- | --------------------------------------------------- |
| `for...of` loop  | Go through each word                                |
| `if (condition)` | Check if first letter is a vowel                    |
| `.toLowerCase()` | Handle both uppercase and lowercase words           |
| `count += 1`     | Keep track of how many words matched the condition  |
| `return`         | Send back the result so it can be printed or reused |
