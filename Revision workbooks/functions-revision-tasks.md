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

FUNCTION OF THE DAY
Write a function called describeWeather that:
- Takes two parameters: temperature (a number) and condition (a string like "sunny", "rainy", "snowy")
- Returns a sentence like:
"It's 15°C and sunny today." or "It's 3°C and snowy today."
- Use a template string to build the sentence
- Call the function and log the result
```js
function describeWeather(temperature, condition) {
  let tempNote = "";
  // temperature logic
  if (temperature <= 5) {
    tempNote = "wrap up Warm!";
  } else if (temperature >= 20) {
    tempNote = "bust out the Hawaian Shirt!";
  } else {
    tempNote = "have a lovely day!";
  }
  return `Today it's ${temperature} degrees and ${condition} - ${tempNote}`;
}
let output = describeWeather(22, "cloudy");
console.log(output); // "Today it's 22 degrees and cloudy"
```

✅ 1. Fill in the Blanks (Retrieval Practice)
A function that gives a result back to be used later should use the  **return** keyword.
A function with logic like if...else is making a **decision**.
You call a function by writing its **name** followed by parentheses.
If you forget to use return, the function will return **undefined** by default.

✅ 2. Code Reading Challenge
What will this log?
```js
function moodMessage(mood) {
  if (mood === "happy") {
    return "Smile on!";
  } else if (mood === "tired") {
    return "Take a rest.";
  } else {
    return "Have a good day.";
  }
}

console.log(moodMessage("tired"));  // "Take a rest."
```

✅ 3. Debug the Bug
Fix the logic and syntax in this function:
```js
function isHot(temp) {
  if (temp > 30) { // no brackets
    return "Too hot!";
  } else {
    return "Not too hot.";
  }
}
console.log(isHot(32)); // "Too hot!"
```
No function call/ output
No brackets

✅ 4. True or False?
- Every if must have an else. FALSE

- A function can return different values depending on the input.  TRUE

- `return` immediately ends the function and sends back a value. TRUE

- A function can contain other functions. TRUE

✅ 5. Quick Code Task
Write a function called isTeenager that:
- Takes an age as a parameter
- Returns true if the age is between 13 and 19 (inclusive), otherwise false
- Call it with the value 15 and log the result
```js
function isTeenager(age) {
  if (age >= 13 && age <= 19) {
    return true;
  } else {
    return false;
  }
}
console.log(isTeenager(15));  // true
```

---

## Function of the day
Write a function called getDiscountedPrice that:
- Takes two parameters:
- originalPrice (a number)
- discountPercent (a number from 0 to 100)
- Calculates the discounted price
- Call the function with 20 and 30
- Log the result
```js
function getDiscountedPrice(originalPrice, discountPercent) {
  let discountedPrice = originalPrice - (originalPrice * discountPercent) / 100;
  return `The discounted price is £${discountedPrice.toFixed(2)}`;
}

let result = getDiscountedPrice(20, 30);
console.log(result); // "The discounted price is £14.00"
```

✅ 1. Quick-Fill Retrieval (Say or Write First)
The return keyword sends a **value** back to where the function was called.

You can use **logic** to make decisions inside a function.

Functions can take one or more **parameters** as input.

A function with no return gives back **undefined** by default.

.toFixed(2) formats a number to **2** decimal places.


✅ 2. Code Reading Challenge
What does this function return?
```js
function convertToPounds(kg) {
  let pounds = kg * 2.20462;
  return `That's ${pounds.toFixed(1)} lbs.`;
}

console.log(convertToPounds(5));
// Thats 11.0 lbs
```

✅ 3. Debug the Bug
What’s wrong with this function?
```js
function sayHi(name) {
  return "Hi " + name
}

console.log(sayHi("Sam"))
```
- Missing semi colon at end of return statement and console.log

✅ 4. True or False?
- A function must always return a string. **false**

- if...else is often used inside functions to control the return value. **false**

You can store the result of a function in a variable. **true**

The console.log() inside a function replaces the need for return. **true**

✅ 5. Code Task
Write a function called makeGreeting that:
- Takes a name and a timeOfDay (e.g., "morning", "evening")
- Returns a message like: "Good evening, Jamie!"
- Call it with "Jamie" and "evening", and log the result
```js
function makeGreeting(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}
let result = makeGreeting("Jamie", "evening");
console.log(result);
```

---