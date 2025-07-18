# JavaScript Operators

### Table of Contents
- [What Are Operators?](#operators)
- [Types of Operators](#types-of-operators)
- [Arithmetic Operators](#arithmetic-operators)
  - [Task: Predict the Output](#task--predict-the-output)
- [Assignment Operators](#assignment-operators)
  - [Task: What's the Final Value of x?](#task-whats-the-final-value-of-x)
- [Comparison Operators](#comparison-operators)
- [Logical Operators](#logical-operators)
- [String Operators](#string-operators)
- [Ternary Operator](#ternary-operator)
  - [Task: What Will Be the Grade?](#task-what-will-be-the-grade)
- [Summary Table](#summary-table)

---

## Operators
**Operators** are special symbols or keywords that perform operations on values (operands).
For example: `+`, `-`, `=`, `===`, `&&`

### Types of operators 
| Operator Type          | Description                | Example             |
| ---------------------- | -------------------------- | ------------------- |
| **Arithmetic**         | Math operations            | `5 + 2`             |
| **Assignment**         | Assign values to variables | `x = 10`            |
| **Comparison**         | Compare two values         | `a === b`           |
| **Logical**            | Combine boolean values     | `a && b`            |
| **String**             | Work with text strings     | `'Hi' + ' there'`   |
| **Unary**              | Work with a single operand | `typeof x`          |
| **Ternary**            | Shorthand for `if/else`    | `condition ? a : b` |
| **Bitwise** (advanced) | Operate on bits            | `a & b`             |

### Arithmetic Operators
Perform basic maths operations
| Operator | Description         | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `5 + 2`  | `7`    |
| `-`      | Subtraction         | `5 - 2`  | `3`    |
| `*`      | Multiplication      | `5 * 2`  | `10`   |
| `/`      | Division            | `10 / 2` | `5`    |
| `%`      | Modulus (remainder) | `10 % 3` | `1`    |
| `**`     | Exponentiation      | `2 ** 3` | `8`    |

**TASK- Predict the Output:**
```js
console.log(6 + 3); //9
console.log(10 % 4); //2
console.log(2 ** 4); //2*2*2*2 16
```

### Assignment Operators
Used to assign or update values in variables
| Operator | Example  | Equivalent To   |
| -------- | -------- | --------------- |
| `=`      | `x = 5`  | Assign 5 to `x` |
| `+=`     | `x += 2` | `x = x + 2`     |
| `-=`     | `x -= 3` | `x = x - 3`     |
| `*=`     | `x *= 4` | `x = x * 4`     |
| `/=`     | `x /= 2` | `x = x / 2`     |

**TASK-What's the final value of x?**
```js
let x = 10; // 10 
x += 5; // 15 (10 + 5)
x *= 2; // 30 (15 * 2)
console.log(x); // 30
```

## Comparison Operators

Use these to compare values: Each expression returns either `true` or `false`.

| Operator | Description                    | Example        | Result   |
|----------|--------------------------------|----------------|----------|
| `==`     | Equal to (value only)          | `5 == '5'`     | `true`   |
| `===`    | Strict equality (value & type) | `5 === '5'`    | `false`  |
| `!=`     | Not equal                      | `5 != 10`      | `true`   |
| `!==`    | Not equal (strict)             | `5 !== '5'`    | `true`   |
| `>`      | Greater than                   | `5 > 3`        | `true`   |
| `<`      | Less than                      | `5 < 3`        | `false`  |
| `>=`     | Greater than or equal          | `5 >= 5`       | `true`   |
| `<=`     | Less than or equal             | `4 <= 5`       | `true`   |


### 🔍 Equality: `==` vs `===`

####  `==` (Loose Equality)
Compares values **after type conversion**.

```js
console.log(5 == '5'); // true — values are equal after coercion
```
#### `===` (Strict Equality)
Compares value and type. No coercion.
```js
console.log(5 === '5'); // false — number !== string
```
#### Inequality: `!=` vs `!==`
!= checks loose inequality (ignores type)

!== checks strict inequality (type-sensitive)

```js

console.log(3 != '3');   // false
console.log(3 !== '3');  // true
```

#### Greater / Less Than
These work with numbers, and also lexicographically with strings.

```js
console.log(7 > 3);    // true
console.log(5 <= 4);   // false
```

#### Lexicographical Comparison (Alphabetical)
Strings are compared letter by letter using Unicode values.

```js
console.log("apple" < "banana");   // true
console.log("Zebra" < "apple");    // true (uppercase < lowercase)
console.log("cat" > "car");        // true ('t' > 'r')
```
💡 Notes:
- Uppercase letters come before lowercase ones
- It's case-sensitive
- Useful in sorting and filtering strings

##### Mini Tasks
```js
console.log("dog" > "cat"); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false

let score = 75;
console.log(score >= 70); //true

let loggedIn = true;
console.log(loggedIn !== false); // true
```

🧠 Stretch Task
Sort these words alphabetically using comparison logic:

"peach", "pear", "Plum", "pineapple"
```js
console.log("Plum" < "peach" && "peach" < "pear" && "pear" < "pineapple");
```
💡 Bonus Tip (Sorting in Code)
You could sort them like this:

```js
let words = ["peach", "pear", "Plum", "pineapple"];
console.log(words.sort());
// ["Plum","peach","pear","pineapple"]
```

**Example: Compare words alphabetically**
Let’s say we want to compare two words and check which one should come first in an alphabetical list.
```js
let word1 = "apple";
let word2 = "banana";

if (word1 < word2) {
  console.log(`${word1} comes before ${word2}`);
} else {
  console.log(`${word2} comes before ${word1}`);
}

// apple comes before banana
```

**Example with uppercase:**
```js
let a = "Zebra";
let b = "apple";

if (a < b) {
  console.log(`${a} comes before ${b}`);
} else {
  console.log(`${b} comes before ${a}`);
}
// "Zebra comes before apple"
```

**Mini Task - Predict the Output:**
```js
let a = "cat";
let b = "car";

console.log(a < b);  // FALSE
```

---

## Logical Operators

Combine conditions with:

| Operator | Description         | Example                       | Result |
|----------|---------------------|-------------------------------|--------|
| `&&`     | AND (both true)     | `isSunny && hasSunglasses`    | true   |
| `||`     | OR (either true)    | `choice === "books" || "Books"`| true   |
| `!`      | NOT (opposite)      | `!isScary`                    | false  |

---


### String Operators
JS uses + to join strings (concatenation)
```js
let greeting = "Hello" + " " + "world!";
console.log(greeting); // "Hello world!"
```
You can also use `+=` to append to strings:
```js
let text = "I like ";
text += "JavaScript!";
console.log(text); // "I like JavaScript!"
```

### Ternary Operator
Shorthand `if...else`
```js
condition ? value_if_true : value_if_false
```
**Example**
```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
```

**Task: What will be the grade?**
```js
let score = 75;
let grade = score >= 70 ? "Pass" : "Fail";
console.log(grade); // "Pass"
```

### Summary Table:
| Type       | Example      | Result/Use                    |
| ---------- | ------------ | ----------------------------- |
| Arithmetic | `4 + 2`      | `6`                           |
| Assignment | `x += 2`     | Adds 2 to `x`                 |
| Comparison | `a === b`    | Strict equality               |
| Logical    | `a && b`     | AND operation                 |
| String     | `"Hi" + "!"` | `"Hi!"`                       |
| Ternary    | `a ? b : c`  | If a is true, return b else c |

---