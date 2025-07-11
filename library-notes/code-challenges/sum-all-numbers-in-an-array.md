# Sum all Numbers in an Array

## Contents
[Pattern Review](#pattern-review)
- [2. Sum All Numbers in an Array](#2-sum-all-numbers-in-an-array)
  - [2.1 Mini Challenge: Total Shopping Bill](#21-mini-challenge-total-shopping-bill)
  - [2.2 Total Up All Numbers](#22-total-up-all-numbers)
  - [2.3 Sum of Even Numbers](#23-sum-of-even-numbers)
  - [2.4 Sum of Positive Steps Per Day](#24-sum-of-positive-steps-per-day)

---

## Pattern Review

**Purpose:**
To accumulate a total from a collection of values (usually stored in an array). This shows up in real-world scenarios like calculating:

- A total bill
- Total score
- Total steps taken
- Total length of strings
- Total calories, etc.

**Syntax:**
```js
let total = 0;                 // Step 1: Setup an accumulator
for (let value of arr) {       // Step 2: Loop through each value
  total += value;              // Step 3: Add to the accumulator
}
return total;                  // Step 4: Return the result
```

#### 2.1 Mini Challenge: Total Shopping Bill
🧠 Goal:
Write a function that returns the total cost of all items in a shopping basket (represented as an array of prices).
js
// Input: [5.99, 2.50, 4.25]
// Output: 12.74

let prices = [5.99, 2.50, 4.25];
// create function
function totalCost(prices) {
  // your code here
  let total = 0;

  for (let price of prices) {
    total += price;
  }
  return total;
}
let output = totalCost(prices);
console.log(output); // 12.74

| Concept               | ✅ How You Used It                            |
| --------------------- | -------------------------------------------- |
| let total = 0       | To store the running total                   |
| for...of loop       | To go through each price in the array        |
| += operator         | To add each price to the total               |
| return total        | To return the final result from the function |
| console.log(output) | To show the total in the console             |

### 2.2 Total Up All Numbers
Concepts: loop + accumulator variable

Task:
Return the sum of all numbers in an array.
```js
// Input: [3, 5, 2]
// Output: 10
let arr = [3, 5, 2];
function sumNumbers(arr) {
  // your code here
  // create variable to store total
  let total = 0;

  // loop through each number in the array
  for (let num of arr) {
    total += num; // add each number to the total
  }
  // return the total
  return total;
}
// call the function and log the result
console.log(sumNumbers(arr)); // output 10
```

| Concept               | How You Used It                        |
| --------------------- | -------------------------------------- |
| Accumulator (total) | To keep a running total of the sum     |
| for...of loop       | To go through each number in the array |
| += operator         | To add each number to the total        |
| return              | To send back the final total           |
| console.log()       | To display the result in the console   |

### 2.3 Sum of Even Numbers
Task:
Write a function that returns the sum of all even numbers in an array.
```js
// Write a function that returns the sum of all even numbers in an array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12  (2 + 4 + 6)

// set array
let arrayNumbers = [1, 2, 3, 4, 5, 6];

// create function
function sumOfEvens(arrayNumbers) {
  //set total
  let total = 0;
  // loop through numbers in array (for...of)
  for (let num of arrayNumbers) {
    // logic for is even
    if (num % 2 === 0) {
      // if the remainder when /by 2 is )
      total += num; // add to the total running count
    }
  }
  return total;
}
console.log(sumOfEvens(arrayNumbers)); // 12
```
| Concept         | What You Did                                      |
| --------------- | ------------------------------------------------- |
| for...of loop | Loop through each number in the array             |
| num % 2 === 0 | Check if a number is even (no remainder when ÷ 2) |
| total += num  | Add even numbers to the total                     |
| return        | Return the final total from the function          |
| console.log() | Display the result for testing      |

### 2.4 Sum of Positive Steps Per Day

**Pattern Used: "Sum if Condition is Met"**
*Context:*
You're given an array of step counts for a week. Some days you didn’t wear your fitness tracker, so those are recorded as null. You need to sum only the valid step counts.

```js
let weeklySteps = [5500, null, 8000, 4000, null, 7000, 3000];
```

#### Your Task
Write a function sumValidSteps that takes an array of numbers and null values, and returns the sum of non-null values.
```js
// input
let weeklySteps = [5500, null, 8000, 4000, null, 7000, 3000];

// sum only the valid step counts.

// declare function
function countSteps(weeklySteps) {
  // set up count variable
  let total = 0;
  // loop with condition
  for (let num of weeklySteps) //for every number of weekly steps
    if (num !== null) {
      //if the num is not=to null
      total += num; // get the total and add on the number
    }
  return total;
}
console.log(countSteps(weeklySteps));
```
| Concept             | How It Was Applied                          |
| ------------------- | ------------------------------------------- |
| `for...of` loop     | To go through each value in the array       |
| `if (num !== null)` | To skip nulls (i.e. missing data)           |
| `total += num`      | To add valid step counts to the running sum |
| `return total`      | To return the final step total              |
| `console.log()`     | To test the function                        |
