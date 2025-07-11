# Check for a Palindrome

[Pattern Review](#pattern-review)
- [9. Check for a Palindrome](#9-check-for-a-palindrome)
  - [9.1 Mini Challenge: Palindrome Checker](#91-mini-challenge-palindrome-checker)
  - [9.2 Reverse Words in a String](#92-reverse-words-in-a-string)
  - [9.3 Reverse Words in a Sentence](#93-reverse-words-in-a-sentence)
  - [Check a Sentence](#check-a-sentence)

### Pattern Review
Used when: You want to know if something reads the same forward/backward

*It involves:*

- Splitting the string into an array: Using split('') to turn the string into individual characters.
- Reversing the array: Using reverse() to reverse the order of characters in the array.
- Joining the array back into a string: Using join('') to combine the array back into a single string.
- Comparing the original string with the reversed string: If they match, the input is a palindrome.

**Basic Syntax:**
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

#### Check in a Sentence
**Task:** Write a function checkPalindrome that checks if a sentence (not just a single word) is a palindrome. Ignore spaces and case sensitivity.

*For example:*
- "A man a plan a canal Panama" should return true (palindrome).
- "Hello World" should return false (not a palindrome).

```js
let sentence = "A man a plan a canal Panama";

function checkPalindrome(sentence) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  let cleanedSentence = sentence.replace(/\s+/g, "").toLowerCase();
  return cleanedSentence === cleanedSentence.split("").reverse().join("");
}
console.log(checkPalindrome(sentence));
```