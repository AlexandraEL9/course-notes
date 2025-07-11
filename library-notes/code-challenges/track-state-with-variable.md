# Track State with Variable

## Contents
[Patern Review](#pattern-review)
- [5. Track State with a Variable](#5-track-state-with-a-variable)
  - [5.1 Mini Challenge: Net Elevation](#51-mini-challenge-net-elevation)
  - [Final Temperature](final-temperature)

---
| Concept                   | Purpose                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| **Track state**           | Follow a changing quantity (e.g. elevation, balance, temperature).    |
| **Initialize a variable** | Set the starting state (e.g. `let elevation = 0`)                     |
| **Loop through input**    | For...of / For loop, usually over a string or array                   |
| **Conditionally update**  | Use `if`/`else` to update the state depending on current value        |
| **Return the result**     | Output the final tracked state (e.g. final elevation, score, balance) |


### 5. Track State with a Variable
Used when: You need to remember or follow a changing value, like elevation in counting valleys
```js
let state = 0;

for (let step of steps) {
  if (step === 'U') {
    state += 1;
  } else {
    state -= 1;
  }
}
```
```js
function finalElevation(path) {
  let elevation = 0;

  for (let step of path) {
    if (step === 'U') {
      elevation += 1;
    } else if (step === 'D') {
      elevation -= 1;
    }
  }

  return elevation;
}
```

**Example Challenge**

#### 5.1 Mini Challenge: Net Elevation
🧠 Goal:
Write a function that takes a sequence of 'U' (uphill) and 'D' (downhill) steps and returns the final elevation relative to sea level (0).

```js
// Input:
//"UUDDUUDD"

// Output:
//0  (went up 2, down 2, up 2, down 2 — back to sea level)

//"UUUDDDDU"
// Output:
//0  (up 3, down 4, up 1 → net change = 0)

let path = "UUDDUUDD";

function finalElevation(path) {
  // your code here
  let elevation = 0;

  for (step of path) {
    if (step === "U") {
      elevation += 1;
    } else if (step === "D") {
      elevation -= 1;
    }
  }
  return elevation;
}
console.log(finalElevation(path));  // output 0

```
| Concept                   | Explanation                                |
| ------------------------- | ------------------------------------------ |
| `let elevation = 0`       | Starting elevation (sea level)             |
| `for...of` loop           | Loop through each step in the path         |
| `step === "U"` / `"D"`    | Check if we go up or down                  |
| `+= 1`, `-= 1`            | Update elevation accordingly               |
| `return`                  | Give back the final elevation              |
| Function parameter `path` | Makes your function reusable for any input |

#### Final Temperature
You're given a string of weather changes:

- "H" = hotter by 1 degree
- "C" = colder by 1 degree
- "S" = stay the same

Write a function finalTemperature that returns the final temperature relative to a starting point (which is 0 by default).
```js
// Example:
// "HHCCHS" -> +1 (hotter, hotter, colder, colder, hotter, same) = 1
```
```js
let input = "HHCCHS";
function finalTemp(input) {
  let temperature = 0;

  for (letter of input) {
    if (letter === "H") {
      temperature += 1;
    } else if (letter === "C") {
      temperature -= 1;
    }
  }
  return temperature;
}
console.log(finalTemp(input)); // 1
```