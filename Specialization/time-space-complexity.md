# Time and Space Complexity

## Agenda
1. Complexity Analysis
2. Big O Notation
3. Practice and Coding

---

## Why Learn This?
Many interview processes have **unreasonable expectations** – you might be asked to solve problems you'd never encounter in the job (e.g., inverting a binary tree).  
However:
- Considering this *helps write better code*.
- These topics are **common in technical interviews** regardless of the role.
- Useful for **career progression** when switching jobs.
- Relevant for understanding algorithm efficiency in **real-world development**.

> **Note:** It's also ideal to revise **OOP concepts** and **networking basics** (TCP/IP, packets, etc.), even though they're not covered here.

---

## Mindset for Learning This
- The content is **difficult**, so **struggling is normal**.
- **Rejection** in interviews is normal – it's not a measure of your talent.
- Factors influencing rejection:
  - Interviewer having a bad day
  - Panic or poor time management during interview
  - Unfamiliarity with a problem-solving technique
- These are **some of the hardest areas in CS** – persistence is key.

---

## Keyword - Algorithm
An algorithm is simply a step-by-step set of instructions for solving a problem or performing a task.

- Think of it as a recipe in cooking:
    - It has a goal (make a cake).
    - It has steps (mix ingredients, preheat oven, bake, cool).
    - If you follow the steps correctly, you get the desired result.

- Key points about algorithms
    - Well-defined – Each step must be clear and unambiguous.
    - Finite – It should finish in a limited number of steps.
    - Input – It can take data to work on (e.g., numbers, text).
    - Output – It produces a result based on the input.
    - Effective – Steps should be simple enough to be carried out.

**Example in plain language**
*Problem:* Find the largest number in a list.
Algorithm:
- Assume the first number is the largest.
- Compare it to the next number.
- If the next number is bigger, update your "largest" value.
-  Continue until you reach the end of the list.
-  Output the "largest" value.
```js
function findLargestNumber(numbers) {
    // Step 1: Assume the first number is largest
    let largest = numbers[0];

    // Step 2: Compare with each number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; // Step 3: Update largest if bigger
        }
    }

    // Step 4: Return the largest
    return largest;
}

console.log(findLargestNumber([3, 7, 2, 9, 5])); // Output: 9
```

## Programming Language for Examples
- We'll use **JavaScript** for examples since it’s a primary Full-Stack language.
- **Concepts are universal** – you can practice in Python or any language.
- Benefits:
  - Reinforce JS syntax for Full-Stack development
  - Understand algorithms **independent of language**

---

**Algorithms** and **time/space complexity** are like the *recipe and the cost* of making that recipe.

1️⃣ **Algorithm = *What to do***
An algorithm is the logical sequence of steps to solve a problem.
Example: Finding the largest number in a list (the recipe).

## Complexity Analysis

**Definition:**  
The process of determining how efficient an algorithm is.  
This involves measuring:
- **Time Complexity:** How fast the algorithm runs - How many operations does the algorith need to perform
- **Space Complexity:** How much auxiliary memory it uses

Why it matters:
- Helps compare algorithms
- Informs decisions about trade-offs between time and space

---

## Time vs Space Complexity

2️⃣ **Time Complexity** = How long it takes
- Time complexity *measures how the execution time grows as the input size increases*.
- It’s **not about the exact seconds it takes**, but how the time scales.
- We use Big O notation to describe this.

3️⃣ **Space Complexity** = How much memory it uses
Space complexity *measures how much extra memory (RAM) the algorithm needs* beyond the input.
- Variables, arrays, and temporary storage all contribute.
- Some algorithms trade time for space, or space for time.

![Time and Space Complexity Diagram](../images/algorithm_time_space_diagram.png)

| Term             | Meaning |
|------------------|---------|
| **Time Complexity** | A measure of **execution time** growth **relative to input size** |
| **Space Complexity** | A measure of **memory usage** growth **relative to input size** |

Both are expressed in **Big O notation**.

4️⃣ **Why they’re connected**
When we design or choose an algorithm:
- We care about time complexity (speed) for performance.
- We care about space complexity (memory usage) for efficiency.
- Sometimes we trade one for the other:
- A faster algorithm might need more memory.
- A memory-saving algorithm might take longer to run.

✅ **In short:**
- *Algorithm* = the steps to solve a problem
- *Time complexity* = how the runtime grows with input size
- *Space complexity* = how the memory usage grows with input size
Both complexities *help us judge how “good” an algorithm is compared to others*.

---

## Big O Notation

**Purpose:** Describes time or space complexity of algorithms in terms of input size.
- Variables used in Big O notation denote the sizes of inputs to algorithms.

**Variables:**  
`n`, `m` represent sizes of different inputs.

Example:
```javascript
// O(n + m) example: traverse an array of length n and a string of length m
function processArrayAndString(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        // process array element
    }
    for (let j = 0; j < str.length; j++) {
        // process string character
    }
}
```

### Common Big O Complexities
| Complexity   | Big O        | Example |
|--------------|--------------|---------|
| Constant     | `O(1)`       | Accessing an element in an array |
| Logarithmic  | `O(log n)`   | Binary search |
| Linear       | `O(n)`       | Iterating through a list |
| Log-linear   | `O(n log n)` | Merge sort |
| Quadratic    | `O(n^2)`     | Nested loops |
| Cubic        | `O(n^3)`     | Triple nested loops |
| Exponential  | `O(2^n)`     | Recursive Fibonacci |
| Factorial    | `O(n!)`      | Solving the travelling salesman problem with brute force |

#### Complexities in more detail:

#### Constant `O(1)`
When we say Constant time in the context of time complexity, we’re talking about *algorithms whose execution time does not depend on the size of the input*.
**That means:**
- Whether you have 10 items or 10 million items, the operation still takes about the same amount of time.
- The runtime is O(1) — a flat line on a graph of time vs. input size.
- “Constant” doesn’t mean instantaneous — it still takes some time — but the time is fixed for any size of input.
- In Big O, we drop constants like 5, 20, etc., because they don’t scale with input size.
- In Big O, “constant” refers to how the runtime behaves as the input size (n) changes.
    - If the runtime does not change with input size, then it’s O(1) — constant time complexity.
    - But having a literal constant (like the number 5 in code) doesn’t automatically make the algorithm O(1).

**Examples:**
```js
// Constant time O(1)
console.log(array[3])
```
```js
// Accessing the first element of an array
let arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // O(1)
```
**This is O(1) because:**
The computer can *directly jump to the position in memory without looping* through the array.

```js
// Accessing an array element by index O(1)
let arr = [5, 8, 12, 19];
let value = arr[2]; // Always the same time, no matter array size
```
```js
// Inserting/removing at the end of an array (most languages) O(1)
let arr = [1, 2, 3];
arr.push(4); // Add to end — O(1)
arr.pop();   // Remove from end — O(1)
```
(Inserting at the start is NOT O(1) in most languages — it’s O(n) because elements shift.)
```js
// Accessing a property in a hash map / object O(1) 
let user = { name: "Alex", age: 40 };
console.log(user.name); // O(1)
```
```js
// Swapping two variables O(1) 
let a = 5, b = 10;
let temp = a;
a = b;
b = temp; // O(1)
```
Why it matters
- O(1) operations are the most efficient in terms of scaling — 
    - if you can replace an O(n) search with an O(1) lookup (e.g., by using a hash map), you drastically improve performance for large datasets.

![ chart comparing O(1) (constant time) to O(n) (linear time):](../images/o1_vs_on_chart.png)

**Non O(1) vs O(1) examples:**
```js
function printFiveTimes(arr) {
    for (let i = 0; i < arr.length; i++) { // loops over n items
        console.log(5); // literal constant
    }
}
```
- Even though you’re printing a literal 5, you’re still looping over the entire array.
- Runtime grows with n → O(n), not O(1).
**VS**
```js
function printFive() {
    console.log(5); // literal constant, runs once
}
```
- Only one step, regardless of input size.
- Runtime does not change → O(1).

#### Decision Checklist!

Is it O(1)? Quick Questions to Ask Yourself
Does the number of steps change if the input size changes?

❌ Yes → Not O(1)

✅ No → Could be O(1)

Do you loop through the input (or part of it) based on its size?

    ✅ Any loop that depends on n → Not O(1)

    ✅ Loops with a fixed number of iterations (e.g., for i=1 to 10) → O(1)

Do you directly access a single element by index/key without searching?

    ✅ Example: arr[5] or obj["key"] → O(1)

    ❌ Example: Finding a value in an unsorted list → O(n)

Does the work scale with how much data is in the input?

    ✅ If yes → Not O(1)

    ❌ If no → O(1)

Are you creating or copying data based on input size?

    ✅ If you copy the whole list, string, etc. → Not O(1)

    ❌ If you just make a single variable → O(1)

**Examples**
| Code                    | Complexity | Why                                             |
| ----------------------- | ---------- | ----------------------------------------------- |
| `let x = arr[3];`       | O(1)       | Direct index access, no matter how big `arr` is |
| `arr.push(10);`         | O(1)       | Adding to end in most languages                 |
| Loop over entire array  | O(n)       | Steps grow with `n`                             |
| Copy entire array       | O(n)       | Memory and time grow with `n`                   |
| Nested loops over array | O(n²)      | Work grows with square of `n`                   |

**Flow Chart**
![Is it O(1) flow chart](../images/is_it_o1_flowchart.png)

---

#### Linear TIME `O(n)`
**What it means:**
Runtime grows proportionally with input size. Double the input → roughly double the work.

**Key characteristics**

- Exactly one pass (or a constant number of passes) over the data.
- Each iteration does O(1) work on average.
- Forms like `n`, `2n`, `n/2`, `3n + 10` are all O(n).
- Often paired with *O(1)* space (e.g., running totals) or *O(n)* space (e.g., frequency maps).

**When you’ll see it**
- Scans, filters, maps, reduces.
- Two-pointer scans (palindrome, merging, partitioning).
- Sliding window with fixed window size.
- Building a `Set/Map` from an array (average).
- Tree traversal when there are n nodes (e.g., DFS/BFS on a tree): visit each node once.

**Examples:**
```js
// Linear time O(n)
array.forEach((n) => {
  console.log(n)
  console.log(n)
})
```
```js
// Linear time O(n)
array.forEach((n) => {
  console.log(n)
  console.log(n)
})
```
```js
// Linear search in unsorted array — O(n) time, O(1) space
function includes(arr, target) {
  for (const x of arr) if (x === target) return true;
  return false;
}
```
```js
// Frequency map — O(n) time, O(n) space
function freq(arr) {
  const count = new Map();
  for (const x of arr) count.set(x, (count.get(x) || 0) + 1);
  return count;
}
```
```js
// Two pointers (palindrome-like) — O(n) time, O(1) space
function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
}
```
```js
// Sliding window (fixed size k) — O(n) time, O(1) space
function maxWindowSum(arr, k) {
  if (arr.length < k) return 0;
  let win = 0;
  for (let i = 0; i < k; i++) win += arr[i];
  let best = win;
  for (let i = k; i < arr.length; i++) {
    win += arr[i] - arr[i - k];
    if (win > best) best = win;
  }
  return best;
}
```
```js
// Remove duplicates — O(n) time avg, O(n) space
const unique = (arr) => [...new Set(arr)];
```

**Non- O(n) vs O(n)**
```js
// ❌ Not O(n): nested scan from includes() inside a loop → O(n²)
function firstDupe_bad(arr) {
  const seen = [];
  for (const x of arr) {
    if (seen.includes(x)) return x; // includes is O(n)
    seen.push(x);
  }
  return -1;
}

// ✅ O(n): use a Set for O(1) avg lookups
function firstDupe_good(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return x;
    seen.add(x);
  }
  return -1;
}
```
```js
let array = [0, 1, 2, 3, 4, 5,6]

const doubleArray = (input) => {
    let output= []
  input.forEach((num) => {
    output.push(num * 2)
  })
  return output
}

const answer = doubleArray(array)
```
#### Decision checklist — Is it O(n)?

- Do you touch each element a constant number of times? → likely O(n).
- Are there k separate passes where k is constant? (`pass 1`, `pass 2`) → O(n).
- Is the loop bound proportional to input (e.g., `i += 2`, `i < n/2`)? Constants don’t matter → O(n).
- Does each iteration do only O(1) work (no inner linear search, no sort)? → O(n).
- Can it early exit sometimes? Best case may be O(1), but worst case still O(n).
- Are you copying/building a structure proportional to input size? → O(n) time (and O(n) space).

**Common gotchas**
- Sorting + scan is O(n log n), not O(n).
- Array `.includes/.indexOf` inside a loop → typically O(n²).
- Graph DFS/BFS: time O(V + E). For a tree, `E = V - 1` → O(n).
- Recursion with depth proportional to `n` → time O(n), stack O(n).

**Why it matters**

Linear algorithms are the practical *sweet spot for large inputs* —scales predictably, easy to reason about, and often *memory-friendly*. If you can turn a quadratic solution into a linear one, you’ve probably made the biggest win you’ll need.

---

## Quadratic TIME `O(n^2)

**What it means:**
Work grows roughly with the square of input size. Double n → ~four times the work.

**Key characteristics**

- Nested loops where each loop iterates ~n times.
- Or one loop of ~`n` and an inner loop that averages ~`n/2` → still O(n²) (constants drop).
- Summations like `1 + 2 + ... + (n-1)` = `n(n-1)/2` → O(n²).
- If loops iterate over different inputs of sizes `n` and `m`, complexity is O(n·m).

**When you’ll see it**

- Comparing all pairs: duplicates by pairwise check, closest pair brute force, two-sum without hashing.
- Quadratic sorts: bubble, insertion, selection (worst/avg).
- Operations on dense n×n structures (e.g., adjacency matrix scans).
- Naïve substring search: for each start position, scan forward.

**Examples**
```js
// Quadratic time O(n^2)
array.forEach((a) => {
  array.forEach((b) => {
    console.log(a, b)
  })
})
```
```js
// All pairs — O(n²) time, O(1) space
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
```js
// Upper triangle only — still O(n²)
function uniquePairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // (arr[i], arr[j]) each pair once
    }
  }
}
```
```js
// Selection sort — O(n²) time, O(1) space
function selectionSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }
    [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}
```
```js
// Different input sizes — O(n·m)
function hasCommonElement(a, b) {
  for (const x of a) {
    for (const y of b) {
      if (x === y) return true;
    }
  }
  return false;
}
```
```js
// Accidental O(n²): linear search inside a loop
function uniqueSlow(arr) {
  const out = [];
  for (const x of arr) {
    if (!out.includes(x)) out.push(x); // includes is O(n)
  }
  return out; // total O(n²)
}
```

**Non O(n^2)**
```js
// ✅ O(n): build a Set, single pass lookups
function uniqueFast(arr) {
  return [...new Set(arr)];
}
```

#### Space notes
- Many quadratic-time algorithms still use O(1) or O(n) extra space.
- You hit O(n²) space when you store a 2D table (e.g., dynamic programming grids, adjacency matrices).

#### Decision checklist — Is it O(n²)?
- Do you have nested loops where the inner loop depends on n? → likely O(n²).

- Are you comparing every element to every other? → O(n²).

- Does the inner loop run about `n - i` times (triangular)? → still O(n²).

- Are there two inputs n and m with a nested loop across both? → O(n·m).

- Any linear search (`includes`, `indexOf`) inside a loop over the same collection? → often O(n²).

**Common gotchas**

- Sorting + linear pass is O(n log n) (sorting dominates), not O(n²).
- Two separate non-nested loops are O(n + n) = O(n), not O(n²).
- Adjacency list traversals of graphs are O(V + E), but an adjacency matrix scan is O(V²).
- Dynamic programming like edit distance is O(n·m) time and can be O(n·m) space.

**Why it matters**
Quadratic algorithms become slow quickly (10k items → ~100M operations). If it’s pairwise work, look for:

- Hashing to drop to O(n) (e.g., two-sum with a Set).
- Sorting + two pointers to drop to O(n log n).
- Divide & conquer or sweep-line patterns for geometry/string tasks.

---


## Summary
- **Time Complexity**: Speed of execution relative to input size
- **Space Complexity**: Memory use relative to input size
- **Big O Notation**: Standard way to express complexities
- Mastering these concepts is crucial for **technical interviews** and **efficient coding**.

---

## Practice
- Try implementing algorithms with different complexities.
- Compare `O(n)` vs `O(n^2)` solutions for the same problem.
- Optimise code by reducing unnecessary loops or memory use.

Your task: for time complexity, label each O(1), O(n), or O(n²). (Ignore space for now.)
(A)✅
```js
//O(1)
function A(arr, k) {
  return arr[k];
}
// 1 action, tells exactly where to look to retrieve once.
```
(B)✅
```js
// O(n)
function B(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// has a loop and only one loop, logs the index of the array so is proportional
```
(C)✅
```js
// O(n^2)
function C(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // constant work
    }
  }
}
// has a nested loop
```

(D)✅
```js
//(O(n))
function D(arr) {
  for (let i = 0; i < arr.length; i++) {/*...*/}
  for (let j = 0; j < arr.length; j++) {/*...*/}
}
// runs two passes over array (but not nested)
// both loops are O(n) so sum out as O(n)
```
(E)✅
```js
//O(n^2)
function E(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // process pair (i, j) once
    }
  }
}
// nested - O(n^2)
// BUT - only runes once - O(1)
// Unsure to know how to work it out?
```
(F)
```js
// O(n) - (average case)
function F(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
```
**One pass through `arr`. Each step does:**
- `seen.has(x)` → O(1) average (hash lookup)
- `seen.add(x)` → O(1) average (hash insert)
    - Total ≈ n * O(1) → O(n) time.
    - Early return doesn’t change the worst/average class.
Space is O(n) worst-case (if no duplicate until the end).

(G)
```js
//O(n^2) TIME O(n)space
function G(arr) {
  const out = [];
  for (const x of arr) {
    if (!out.includes(x)) out.push(x); // includes scans out
  }
  return out;
}
```
- `out.includes(x)` is a *linear scan* of `out`. As `out` grows, each check costs more.
Total work ≈ `1 + 2 + … + n` → `n(n+1)/2` → O(n²).

(H)✅
```js
//O(n) TIME, O(1) SPACE
function H(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    // constant work
  }
}
```
- `i += 2` still visits ~`n/2` indices → constants drop → O(n).

(I)✅
```js
//O(n) TIME, O(1) SPACE
function I(arr, target) {
  for (const x of arr) {
    if (x === target) return true; // may return early
  }
  return false;
}
```
Linear scan with possible early return. Best case is O(1) (target at start), but worst case touches all elements → O(n).

(J)✅
```js
// O(1)
function J(stack) {
  stack.push(1); // O(1)
  stack.push(2); // O(1)
  stack.pop();  // O(1)
  return stack.length;  // O(1)
}
```
Each operation (push, pop, read .length) is amortized O(1) on JS arrays used as stacks. No input-scaled loops → O(1) time, O(1) space.


(K)✅
```js
// O(n^2)
function K(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
  }
  return count;
}
// nestd loop make it O(n^2)
```
Two nested loops each run ~`n` times. The inner work (`===` + maybe `count++`) is constant, so total ≈ `n * n` → O(n²) time, O(1) space.

(L)
```js
// ????
function L(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
}
```
Two pointers move inward; the while runs about n/2 iterations, **constant work per step → O(n) time**, *O(1) extra space.*
Best case can return in O(1) (first mismatch), but worst/average is linear.

