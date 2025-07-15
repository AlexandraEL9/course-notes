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

---
📘 1. Explain in Your Own Words
What’s the difference between .map() and .filter() in terms of what they return and when you would use each?
  **map creates a new array once an action has been done to items in the array, whereas filter does not change items, it filters out only the entries matching a condition**

2. Fix the Bug – .reduce() Issue
Here’s a broken attempt at combining words:
```js
const words = ["keep", "it", "sweet"];

const sentence = words.reduce(function(word) {
  return word + " ";
});

console.log(sentence);
```
What’s wrong with this code, and how would you fix it?
  **only gave one parameter (word), but .reduce() needs two:  accumulator (running total/result) and  current (current word)
  ```js
  const sentence = words.reduce(function(acc, word) {
  return acc + " " + word;
});
  ```

3. Mini Table – Match the Tool to the Task
Match each task to the best method: `forEach`, `map`, `filter`, or `reduce`.
| Task                                      | Best Method |
| ----------------------------------------- | ----------- |
| Print each item in a list                 |  `forEach`  |
| Turn an array of numbers into a total sum | `reduce`    |
| Double each number in an array            | `map`       |
| Keep only even numbers from an array      | `filter`    |

4. Stretch Challenge – Combine Helpers
You have this array:
```js
const nums = [1, 2, 3, 4, 5, 6];
```
Write code that:
- Filters to keep only even numbers
- Doubles each of those numbers
- Adds them all together with .reduce()
```js
const nums = [1, 2, 3, 4, 5, 6];

// Filters to keep only even numbers
const evens = nums.filter(function(num) {
  return num % 2 === 0;
});
//Doubles each of those numbers
const doubled = evens.map(function(num) {
  return num * 2;
});
//Adds them all together with .reduce()
const total = doubled.reduce(function(accumulator, current) {
  return accumulator + current;
});
console.log(evens); // [2, 4, 6]
console.log(doubled); // [4, 8, 12]
console.log(total); // 24
```

---
## DAILY LOOP - WHILE loop
📘 1. Explain in Your Own Words
What is a while loop and when would you use it instead of a for loop?

  A while loop only runs for as long as a condition is met or true whereas a for loop will run a specific number of times. While loops are better for when you are unsure how often a loop will need to run

   🔨 2. Mini Coding Task
Write a while loop that prints the numbers 1 to 5.
```js
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

🧠 3. Spot the Mistake
What's wrong with this while loop? What will happen if you run it?
   It has no update statement so it will just run forever!!
```js
let i = 1;
while (i <= 5) {
  console.log(i);
}
```
Fix it so it works properly. 
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

💡 4. Bonus Challenge
Write a while loop that counts down from 5 to 1.
```js
let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}
```

---



