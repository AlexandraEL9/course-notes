# LOOPS Revision

---
📘 1. Review Question – Explain in Your Own Words
What is the main difference between a while loop and a do...while loop?

*A while loop runs the loop BEFORE a condition is true (so may not run at all) wheras a do...while loop runs the loop at least once and then checks the condidion.

🧮 2. Mini Task – Loop Through an Object
Given this object:

```js
const pet = {
  name: "Pretzel",
  type: "Rabbit",
  age: 2
};
```
Use a for...in loop to log this format for each property:

name: Pretzel
type: Rabbit
age: 2
```js
for (let key in pet) {
    console.log(`${key}: ${pet[key]}`);
}
```

⚖️ 3. Complete the Table – Loop Helpers // Not learned yet
| Method    | Description                                   | Returns a new array? | Good for...                        |
| --------- | --------------------------------------------- | -------------------- | ---------------------------------- |
| `forEach` | Runs a function on each item in an array      | ❌ No                 | Doing something with each item     |
| `map`     | Creates a new array by transforming each item | ✅ Yes                | Changing each item (e.g. multiply) |
| `filter`  | Creates a new array of items that pass a test | ✅ Yes                | Keeping only some items            |


🐛 4. Fix the Broken Loop
Here’s some code with a subtle bug:
```js
const nums = [1, 2, 3, 4, 5];

for (let i = 0; i <= nums.length; i++) {
  console.log(nums[i]);
}
```
What’s wrong? How would you fix it?
Is it because it's a for loop but should be a for.. of loop as it's working with an array so should be 
```js
for (let numbers of nums) {
    console.log(numbers);
}
```
---


📘 1. Explain in Your Own Words
What does .map() do, and how is it different from .forEach()?
(Explain it clearly like you're teaching someone who knows forEach but not map.)

`.map()` creates a new array after something has been done to the items whwrwas .`forEach()` is saying you want to do something to the items in an array.

🔨 2. Mini Coding Task – Use .filter()
You have an array of words:
```js
const words = ["apple", "banana", "fig", "grape", "kiwi"];
```
Write a .filter() that returns only the words with more than 4 letters.
```js
const words = ["apple", "banana", "fig", "grape", "kiwi"];

const words4 = words.filter(function(word) {
  return word.length > 4;
});
console.log(words4);
```
   .length counts the length of the word.

⚖️ 3. Complete the Comparison Table
Fill in the missing row:
| Method    | Returns New Array? | Used For...                    |
| --------- | ------------------ | ------------------------------ |
| `forEach` | ❌ No               | Doing something with each item |
| `map`     | ✅ Yes              | Changing each item             |
| `filter`  | ✅ Yes              | Keeping items that pass a test |
| `reduce`  | ❌ No               | Takes an array to reduce to a single result                             |

🐞 4. Spot the Mistake – Fix the Code
Here’s some broken code:
```js
const nums = [1, 2, 3, 4];

const doubled = nums.map(function(x) {
  x * 2;
});

console.log(doubled);
```
What will this print? Why doesn’t it work as expected?
There is no return statement

How should it be fixed?
Add return statement so changes are returned back to the array
```js
const nums = [1, 2, 3, 4];

const doubled = nums.map(function(x) {
  return x * 2;
});

console.log(doubled);
```

---

📘 1. Explain in Your Own Words
What does .filter() do, and what does it return?
   Filter will search through items in arrays and find those matching a condition, then return the entries matching that condition.

  🔍 2. Debug the Code – .map() Problem
What’s wrong with this code? Fix it so it works correctly:
```js
const names = ["Alex", "Sam", "Charlie"];

const nameLengths = names.map(function(name) {
  name.length;
});

console.log(nameLengths);
```
No return satement

⚙️ 3. Fill in the Table: Loop vs Helper
Complete the comparison:
| Feature           | `for` loop | `.forEach()` | `.map()` |
| ----------------- | ---------- | ------------ | -------- |
| Can change items? |     Yes    |    Yes       |     Yes  |
| Returns a result? |      No   |    No      |     yes  |
| Syntax length     |       long |  short       |     short|

🧠 4. Challenge Task – Use .reduce()
Write a .reduce() that takes this array of numbers and returns their product (all multiplied together):
```js
const nums = [2, 3, 4];

const product = nums.reduce(function(accumulator, current) {
  return accumulator * current;
});
console.log(product); // 24 (2 * 3) 6    (6 * 4)  24
```