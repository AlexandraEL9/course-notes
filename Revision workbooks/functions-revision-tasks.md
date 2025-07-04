# Function Revision Tasks

---
✅ 1. Fill in the blanks
You wrote:

✅ A parameter is a placeholder for a value
✅ An argument is the value
⚠️ The return keyword is used to store a value
✅ The console.log() function is used to log

     CORRECTION
     ✅ The return keyword is used to send a value back from the function.
        You can then store that returned value in a variable, but return itself doesn't store it.

✅ 2. Code Reading
```js
Copy
Edit
function getGreeting(name) {
  return `Hi, ${name}!`;
}

let greeting = getGreeting("Sam");
console.log(greeting);
```
✔️ You said: "Hi, Sam!"

✅ 3. Debug the Bug
✔️ You correctly spotted the issue — missing closing parenthesis.

✅ Correct version:

```js
Copy
Edit
sayHello("Asha");
```

✅ 4. Concept Check: Return vs Log
| Statement                                                      | Your Answer | Correct? | Explanation                                                |
| -------------------------------------------------------------- | ----------- | -------- | ---------------------------------------------------------- |
| `return` sends a value out of the function so it can be reused | ❌ FALSE     | ✅ TRUE   | Return **does** send the value back                        |
| `console.log()` is the best way to pass data between functions | ❌ FALSE     | ✅ TRUE   | Correct – it's for **display**, not passing data           |
| You can have a function with no `return` at all                | ✅ TRUE      | ✅ TRUE   | Correct! Not all functions return values                   |
| A `return` will stop the function immediately                  | ❌ FALSE     | ✅ TRUE   | `return` ends the function – anything after it doesn’t run |

🧠 So 3/4 were marked as false when two of them should’ve been true — but your instincts were close!

✅ 5. Write Your Own
Write a function called addThree that takes a number and returns that number plus 3.

Call it with the number 5 and store the result in a variable called result. Then log result.

```js
// write function called addThree that takes a number
function addThree(number) {
    // take number and return number + 3
    return number + 3;
}
// call with number 5 and store in a variable called result
let result = addThree(5);
//log result
console.log(result);
```
✅ Perfect execution! That’s exactly right — clear, complete, and correct.
| Step                        | What’s Happening                              |
| --------------------------- | --------------------------------------------- |
| `function addThree(number)` | Declares a function with a `number` parameter |
| `return number + 3;`        | Calculates and **returns** the result         |
| `addThree(5)`               | Calls the function with `5` (an **argument**) |
| `let result = ...`          | Stores the returned value (8) in a variable   |
| `console.log(result);`      | Prints `8` to the console                     |

---