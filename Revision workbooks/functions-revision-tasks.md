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

✅ 1. Quick Fill-in-the-Blank (Retrieval)
Say or write your answers before checking!

A function expression is when a function is **stored/ assigned** to a variable.
The function in an expression is often **anonymous** (has no name).
The **return** keyword is used to return a value from a function.
The console.log() method is used to **log/ send** a value to the screen.

✅ 2. Code Reading Challenge
What will this log to the console?
```js

const greet = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet("Zara"));
```

Answer: "Hi, Zara!"

✅ 3. Debug the Bug
What’s wrong with this code?
```js
const addNumbers = function(a, b) {
  return a + b;
};

let result = addnumbers(3, 4);
console.log(Result);
```
Answer: case issues of R and r in 'result' variable name
  same with
  addnumbers ➤ should be addNumbers (case-sensitive)

✅ 4. True or False? Function Concepts
Function expressions are hoisted like function declarations.
FALSE

An anonymous function has no name.
TRUE -  the name is the variable name that the function is stored in

You can pass a function expression into another function.
TRUE- refer to the variable name?
Functions are values — so yes! You pass them using their variable name

The return statement must always be used in a function.
FALSE - Only needed if you want to send back a value

✅ 5. Write Your Own
Write a function expression called tripleIt that:
- Takes one number
- Returns the number multiplied by 3
- Call it with 7 and store the result in a variable called output
- Log output to the console
```js
//Write a function expression called tripleIt that:
//- Takes one number
const tripleIt = function(number) {
//- Returns the number multiplied by 3
  return number * 3;
}
// Call it with 7 and store the result in a variable called output
let output = triplet(7);
//- Log output to the console
console.log(output);  // should return 21
```

---

✅ 1. Quick Fire: Fill in the Blanks
Say or write your answers before checking!

A function expression is a function stored in a **variable**.
In a function expression, the function is often **annonymous** (has no name).
You call a function expression using the **variable** name.
The return statement sends a **value** back to where the function was called.

✅ 2. Code Reading
What will this log to the console?
```js
const describeAnimal = function(type, name) {
  return `This is my ${type}, ${name}.`;
};

let message = describeAnimal("rabbit", "Pretzel");
console.log(message); // "This is my rabbit, Pretzel."
```

✅ 3. Debug the Bug
There’s something wrong here. What needs fixing?
```js

const double = function(num) {
  return num * 2;
};

let result = Double(4);
console.log(Result);
```
Thare are casing issues with the variable names double/ Double and result/ Result

✅ 4. True or False?
Function expressions must have a name.
   FALSE- there are ofter annonymous

A function can return a string, number, or even another function.
  TRUE

A function will always run as soon as it's defined.
  FALSE - it must be called();

You can call a function expression before it's defined in the code.
  FALSE- How will it know?

  ✅ 5. Code Task
Write a function expression called greetUser that:
- Takes a name
- Returns a message like Hello, NAME!
- Call it with your name and log the result
```js
// Write a function expression called greetUser that:
//- Takes a name
const greetUser = function(name) {
  //- Returns a message like Hello, NAME!
  return `Hello, ${name}!`;
};
//- Call it with your name and log the result
let greeting = greetUser("Roman");
console.log(greeting);
```

---

✅ 1. Fill in the Gaps (Retrieval Practice)
Say or write your answers before checking:

A function declared with function is a **function declaration**.
A function stored in a variable is called an **function expression**.
Function expressions are not **hoisted**, so you must define them before use.
The return keyword gives **a value** back to where the function was called.

✅ 2. Code Reading
What does this code log?
```js
const makeGreeting = function(name) {
  return `Hi, ${name}!`;
};

let greeting = makeGreeting("Iman");
console.log(greeting); // "Hi, Iman!"
```

✅ 3. Debug the Bug
There’s a small bug in this function expression. Fix it!
```js
const shoutLoud = function message {
  return "HEY!";
};

console.log(shoutLoud());
```
Should message be within parentheses as a parameter
```js
const shoutLoud = function () {
  return "HEY!";
};

console.log(shoutLoud()); // HEY!
```

✅ 4. True or False?
A function expression can be passed into another function. 
  **TRUE- Functions are values — they can be passed**

You can define a function expression after it is called.  
  **FALSE - Not hoisted**

The name of a function expression must match the variable it’s assigned to. 
  **FALSE - You can use anonymous functions**

Every function must return a value. 
  **FALSE - Functions can return nothing (undefined)**


✅ 5. Code Task
Write a function expression called isEven that:
- Takes a number
- Returns true if it’s even, false if it’s odd
- Call it with the number 8 and store the result in output
- Log output
```js
// function declaration version
function isEven (number) {
  if (number % 2 === 0) {
    console.log(`The number ${number} is even`)
  } else {
    console.log(`The number ${number} is odd`)
  }
}
isEven(8);
```
```js
// function expression version
const isEven = function (number) {
  return number % 2 === 0;
};

let output = isEven(7);
console.log(output); // true
```

---

✅ 1. Fill in the Gaps (Retrieval Practice)
Say or write your answers first:

An arrow function is a shorter version of a **function expression**.
Arrow functions use the **=>** symbol.
If the function body is one line, you can **remove** the curly braces and return.
Arrow functions do not have their own **function call??**.
  ❌ They do not have their own this
→ This is important when you work with objects and methods.

✅ 2. Code Reading
What does this arrow function return?
```js
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));  // 12
```

✅ 3. Debug the Bug
What’s wrong with this code?
```js
const sayHello = name => {
  "Hello, " + name;
};

console.log(sayHello("Zara"));
```
This doesn’t return anything — the string is just sitting there.
No return KW

✅ 4. True or False?
Arrow functions can return strings or numbers.
  TRUE
Arrow functions can be used as constructors with new.
  FALSE - They cannot be used with new
Arrow functions can be written without parentheses if they take one parameter.
  TRUE

Arrow functions are always hoisted like function declarations.
  FALSE - Function expressions (including arrow functions) are not hoisted

  `new` is used for making objects from constructors

Arrow functions must be defined before you use them

✅ 5. Code Task
Write an arrow function called shoutName that:
- Takes a name as a parameter
- Returns the name in ALL CAPS with an exclamation mark (e.g. "ROMAN!")
- Call it with your name and log the result
```js
const shoutName = name => name.toUpperCase() + "!";
console.log(shoutName("Roman")); // ROMAN!
// OR
// with interpolation
const shoutName = name => `${name.toUpperCase()}!`;
console.log(shoutName("Roman")); // ROMAN!
```

---