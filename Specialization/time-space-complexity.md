# Time and Space Complexity

## Agenda
1. Complexity Analysis
2. Big O Notation
3. Practice and Coding

---

## Why Learn This?
Many interview processes have **unreasonable expectations** – you might be asked to solve problems you'd never encounter in the job (e.g., inverting a binary tree).  
However:
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

## Programming Language for Examples
- We'll use **JavaScript** for examples since it’s a primary Full-Stack language.
- **Concepts are universal** – you can practice in Python or any language.
- Benefits:
  - Reinforce JS syntax for Full-Stack development
  - Understand algorithms **independent of language**

---

## Complexity Analysis

**Definition:**  
The process of determining how efficient an algorithm is.  
This involves measuring:
- **Time Complexity:** How fast the algorithm runs
- **Space Complexity:** How much auxiliary memory it uses

Why it matters:
- Helps compare algorithms
- Informs decisions about trade-offs between time and space

---

## Time vs Space Complexity

| Term             | Meaning |
|------------------|---------|
| **Time Complexity** | A measure of **execution time** growth relative to input size |
| **Space Complexity** | A measure of **memory usage** growth relative to input size |

Both are expressed in **Big O notation**.

---

## Big O Notation

**Purpose:** Describes time or space complexity of algorithms in terms of input size.

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

