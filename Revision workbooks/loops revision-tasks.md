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