# Find the Maximum / Longest

[Pattern Review](#pattern-review)
- [4. Find the Maximum or Longest](#4-find-the-maximum-or-longest)
  - [4.1 Mini Challenge: Tallest Person](#41-mini-challenge-tallest-person)
  - [4.2 Find the Longest Word](#42-find-the-longest-word)
  - [Most Expensive Product](#most-expensive-product)

---

## Pattern Review

**Purpose**
- To search through a collection (usually an array) and find the biggest value by some comparison — could be:

    - A number (max value)
    - A string (longest/shortest)
    - An object property (e.g. tallest person from object array)

**Core Pattern**
```js
let max = arr[0];

for (let item of arr) {
  if (item > max) {
    max = item;
  }
}
return max;
```

**Adaptations**

- Use .length for string length comparisons.

- Use item.property if working with objects.

- Can compare earliest/latest, smallest/largest, etc.

- The pattern can even be adapted to return the index, or the whole object, not just the max value.

#### 4.1 Mini Challenge: Tallest Person
🧠 Goal:
Write a function that returns the tallest height from an array of numbers representing people's heights (in cm).

```js
// Input:
//[160, 172, 168, 181, 177]

// Output:
//181

let heights = [160, 172, 168, 181, 177];

function findTallest(heights) {
  // your code
  let max = heights[0];

  for (let height of heights) {
    if (height > max) {
        max = height;
    }
  }
  return max;
}
console.log(findTallest(heights)); // 181
```
| Concept            | ✅ How You Used It                          |
| ------------------ | ------------------------------------------ |
| `let max = arr[0]` | Start with the first number as the maximum |
| `for...of` loop    | Go through each item in the array          |
| `if (item > max)`  | Compare each number to the current max     |
| `max = item`       | Update the max if a bigger number is found |
| `return max`       | Give back the result                       |
| `console.log()`    | Display the output in the console          |

#### 4.2 Find the Longest Word
Concepts: loop + string methods + comparison

Task:
Write a function that returns the longest word in an array.
```js
// Input: ['cat', 'elephant', 'bat']
// Output: 'elephant'
let words = ["cat", "elephant", "bat"];
function longestWord(words) {
  // your code here
  let maxWord = words[0];

  for (let word of words) {
    // compare lengths of words
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
}
let output = longestWord(words);
console.log(output);
```
| Concept               | How Used                                  |
| --------------------- | ----------------------------------------- |
| `for...of` loop       | To look at each word in the array         |
| `.length`             | To compare word lengths                   |
| Variable reassignment | `maxWord = word` to track the longest one |
| `return`              | To give the result back to the caller     |

#### Most Expensive Product
🎯 Goal:
Write a function that returns the name of the most expensive product from an array of objects.

➕ Input:
```js
[
  { name: "Toothbrush", price: 2.99 },
  { name: "Shampoo", price: 5.49 },
  { name: "Face Cream", price: 7.25 },
  { name: "Soap", price: 1.99 }
]
✅ Output: 'Face Cream'
```
```js
let input = [
  { name: "Toothbrush", price: 2.99 },
  { name: "Shampoo", price: 5.49 },
  { name: "Face Cream", price: 7.25 },
  { name: "Soap", price: 1.99 }
];

function findMostExpensive(input) {
  // 1. Assume the first item is the most expensive to start with
  let mostExpensive = input[0];

  // 2. Loop through each product in the array
  for (let product of input) {
    // 3. If current product is more expensive than our current mostExpensive
    if (product.price > mostExpensive.price) {
      // 4. Update mostExpensive to be the current product
      mostExpensive = product;
    }
  }

  // 5. Return the name of the most expensive product
  return mostExpensive.name;
}

console.log(findMostExpensive(input)); // "Face Cream"

```
| Step | `product`            | `product.price` | `mostExpensive.name` | `mostExpensive.price` | Comparison (`>`)? | Action Taken         |
| ---- | -------------------- | --------------- | -------------------- | --------------------- | ----------------- | -------------------- |
| 1    | `{Toothbrush, 2.99}` | 2.99            | Toothbrush           | 2.99                  | –                 | Initial value        |
| 2    | `{Shampoo, 5.49}`    | 5.49            | Toothbrush           | 2.99                  | ✅ Yes             | Update to Shampoo    |
| 3    | `{Face Cream, 7.25}` | 7.25            | Shampoo              | 5.49                  | ✅ Yes             | Update to Face Cream |
| 4    | `{Soap, 1.99}`       | 1.99            | Face Cream           | 7.25                  | ❌ No              | No change            |

| Concept                      | How It’s Used                                              |
| ---------------------------- | ---------------------------------------------------------- |
| `let mostExpensive = arr[0]` | Start with first item as the "current maximum"             |
| `for...of` loop              | Loop through each object in the array                      |
| `if (product.price > ...)`   | Compare values of a specific property                      |
| `mostExpensive = product`    | Reassign if a new max is found                             |
| `return mostExpensive.name`  | Return specific part of the object (just the `name` field) |

