# Operators Revision Tasks

---

🔁 1. Quick Recall — Fill in the blanks
What does each operator do? Fill in the blank:

** means __________ Exponents

!== checks __________ not the same  as

+= is a shorthand for __________ add to the running total

The result of "5" == 5 is __________ True

The ! operator __???_ a boolean value

🤔 2. What’s the Output?
Predict the result of each block without running the code:
```js
let a = 4; // 4
a *= 2; // 8
a -= 3; // 5
console.log(a); //5
```

```js
console.log(10 % 3 === 1 && 5 > 2); // true
```
```js
let loggedIn = false;
let message = loggedIn ? "Welcome!" : "Please log in";
console.log(message);   // "Please log in!
```

3. Write true or false for each:

7 === '7'  FALSE (not same type)

true || false      ?? Don't know    || means OR

5 <= 4    FALSE

!true      FALSE

4 + 2 * 3 === 18     FALSE

💡 4. Mini Application Challenge
Write a ternary operator that:

Given a variable temp, outputs "Cold" if temp is under 15, otherwise "Warm".
```js
let message = temp < 15 ? "Cold" : "Warm";

```
---

🔁 1. Quick Recall
Fill in the blanks with the correct operator or concept:

The && operator returns true only if **both are true**.

"10" === 10 evaluates to **False** because *they are not the same type*.

The % operator gives you **the remainders**.

x *= 3 is the same as **x = * 3**.

The ternary operator is a shorthand for **if...else**.

🤔 2. What’s the Output?
Try to solve these mentally (or on paper). No console allowed!

A.
```js
let a = 12;
a %= 5; //2
a += 2; // 4
console.log(a); // 4
```
B.
```js
let temp = 18;
let weather = temp < 15 ? "Cold" : "Warm";
console.log(weather); // "Warm"
```
C.
```js
let x = 3;
console.log(x > 1 && x < 5); // true
```

✅ 3. True or False?
State whether each expression evaluates to true or false:

!false   **true**

4 + 3 * 2 === 14 **false**

"apple" !== "Apple" **True-  string comparison is case-sensitive in JS**

10 % 2 === 1    **False - has no remainder so would be 0**

false || true **true because OR (||) means at least one is true.**

💡 4. Mini Task — Logic Check
Write a ternary expression that sets the variable access like this:

If age is 18 or over, access = "Granted"; otherwise, "Denied"

```js
let access = age >= 18 ? "Granted" : "Denied";
```
---
## Daily Revision: Comparison Operators

🔁 1. Quick Recall — Fill in the blanks
The === operator checks both **value** and **type**.

"5" == 5 is true because of **the values are the same but not the type**.

The result of 4 != "4" is **false — != allows type coercion → 4 != "4" is false**.

The result of 4 !== "4" is **true**.

"apple" < "Banana" evaluates to **false - uppercase letters have precedence over lowercase**.

🤔 2. What’s the Output?
Predict the result of each block without running the code.

A.
```js
console.log(5 > 3 && 3 < 1);    // false
```
B.
```js
let a = "Zoo";
let b = "apple";
console.log(a < b); // true due to capital Z
```
C.
```js
let score = 82;
let grade = score >= 70 ? "Pass" : "Fail";
console.log(grade); // "Pass"
```
D.
```js
console.log("ant" > "anchor");  // true
```

✅ 3. True or False?
Write true or false:

- "7" === 7 FALSE

- "a" < "z" TRUE

- "Zebra" < "ant"   TRUE

- 10 !== "10"   TRUE

- "cat" > "car" TRUE

💡 4. Mini Challenge
Write a condition using >= and === that checks if:
- A user’s age is 18 or over, and
- Their role is exactly "member"
- If true, set access = "Allowed", otherwise "Denied" (use a ternary operator).
```js
let age = 17;
let role = "member";

let access = age >= 18 && role === "member" ? "Allowed" : "Denied";
console.log(access); // ➜ "Denied"
```
---
