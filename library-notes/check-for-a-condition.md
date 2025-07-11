# Check for a Condition

- [6. Check for a Condition](#6-check-for-a-condition)
- [Print Only Long Words](#print-only-long-words)
- [Print Only Even Numbers](#print-only-even-numbers)


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
