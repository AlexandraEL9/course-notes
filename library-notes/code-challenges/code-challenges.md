# Code challenges

---

## 📚 Code Challenges — Contents

---

### Bigger Challenges

- [11. Pair the Socks](#11-pair-the-socks)
- [12. Palindrome Checker](#12-palindrome-checker)
- [13. Photo Checker](#13-photo-checker)
- [14. A&E Wait Times](#14-a-e-wait-times)
- [15. Find matching Data in an Object](#15-find-matching-data-in-an-object)



## Bigger Challenges

#### 11. Pair the Socks

**Key Skills**
| Concept            | What it Does                                     |
| ------------------ | ------------------------------------------------ |
| Object as a tally  | `colorCount` stores how many socks of each color |
| Loop through array | Builds up the tally of sock colors               |
| `Math.floor()`     | Calculates full pairs (ignores odd leftovers)    |
| `for...in` loop    | Loops through object properties (sock colors)    |

```js
// The array of sock colors (each number represents a color)
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Our function to count how many pairs we can form
function sockMerchant(n, ar) {
  // Step 1: Create an empty object to count each color
  let colorCount = {};

  // Step 2: Loop through the sock array
  for (let i = 0; i < ar.length; i++) {
    let color = ar[i]; // Get the color at position i

    // If this color is already in our object, add 1 to its count
    if (colorCount[color]) {
      colorCount[color] += 1;
    } else {
      // If we're seeing this color for the first time, set count to 1
      colorCount[color] = 1;
    }

    // 🔍 At the end of this loop, colorCount might look like:
    // { 10: 4, 20: 3, 30: 1, 50: 1 }
  }

  // Step 3: Now loop through the colorCount object to count pairs
  let totalPairs = 0;

  for (let color in colorCount) {
    let count = colorCount[color]; // How many socks of this color
    let pairs = Math.floor(count / 2); // Divide by 2 and round down

    totalPairs += pairs; // Add this color's pairs to total
  }

  // Step 4: Return the final number of pairs
  return totalPairs;
}

// Step 5: Call the function and print the result to the console
console.log(sockMerchant(ar.length, ar));  // Output: 3
```

---

#### 12. Palindrome Checker
```js
// 🧪 INPUT
let str = "banana";

// ✅ FUNCTION to find the longest palindromic substring
function longestPalindrome(str) {
  // 📌 Step 1: Create a variable to track the longest palindrome we find
  let longest = "";

  // 🔁 Outer loop: go through each character as a possible start point
  for (let start = 0; start < str.length; start++) {
    // 🔁 Inner loop: go through each character as a possible end point
    // We start at start + 1 so that we get at least 1 character in the substring
    for (let end = start + 1; end <= str.length; end++) {
      // ✂️ Step 2: Slice out a substring from start to end
      let substring = str.slice(start, end);

      // 🔍 Step 3: Check if the substring is a palindrome
      // We reverse the substring and compare with the original
      let reversed = substring.split("").reverse().join("");

      if (substring === reversed) {
        // ✅ It's a palindrome — now check if it's the longest we've seen
        if (substring.length > longest.length) {
          // 🆕 Update the longest variable
          longest = substring;
        }
      }
    }
  }

  // 🔚 Return the longest palindrome found
  return longest;
}

// ✅ TEST CASES
console.log(longestPalindrome("banana")); // "anana"
console.log(longestPalindrome("racecar")); // "racecar"
console.log(longestPalindrome("hello")); // "ll"
console.log(longestPalindrome("abc")); // "a" (or "b" or "c", any 1-letter palindrome)
```
**Explanation**
| Line                                     | What's happening                         |
| ---------------------------------------- | ---------------------------------------- |
| `for (let start = 0...)`                 | Start index of the substring             |
| `for (let end = start + 1...)`           | End index (exclusive)                    |
| `str.slice(start, end)`                  | Creates a substring to check             |
| `.split('').reverse().join('')`          | Checks if that substring is a palindrome |
| `if (substring.length > longest.length)` | Updates if it's the longest seen so far  |

#### 13. Photo Checker
```js
// Function to check if one group can stand behind the other based on height

// Input: two arrays of student heights (same length)
// Output: true if each student in one row is strictly taller than the one in front

function classPhoto(purpleHeights, blackHeights) {
  // Step 1: Sort both arrays in ascending order so we can compare positions easily
  purpleHeights.sort((a, b) => a - b);
  blackHeights.sort((a, b) => a - b);

  // Step 2: Decide who stands in the back row by comparing tallest students
  let backRow = [];
  let frontRow = [];

  // If purple’s tallest student is taller than black’s tallest, purple goes in the back
  if (purpleHeights[purpleHeights.length - 1] > blackHeights[blackHeights.length - 1]) {
    backRow = purpleHeights;
    frontRow = blackHeights;
  } else {
    backRow = blackHeights;
    frontRow = purpleHeights;
  }

  // Step 3: Compare each student in both rows
  for (let i = 0; i < backRow.length; i++) {
    // If anyone in the back is NOT taller than the person in front → return false
    if (backRow[i] <= frontRow[i]) {
      return false;
    }
  }

  // If we made it through the loop without returning false, it’s a valid photo
  return true;
}

// Test input
let purpleHeights = [5, 8, 1, 3, 4];
let blackHeights = [6, 9, 2, 4, 5];

console.log(classPhoto(purpleHeights, blackHeights)); // ✅ true
```
| Step | What It Does                                       | Code / Concept                   |
| ---- | -------------------------------------------------- | -------------------------------- |
| 1️⃣  | Sort both arrays by height (ascending)             | `.sort((a, b) => a - b)`         |
| 2️⃣  | Decide who stands in back based on tallest student | `if (last purple > last black)`  |
| 3️⃣  | Compare each position to check back > front        | `if (backRow[i] <= frontRow[i])` |
| ✅    | Return true if all back-row students are taller    | `return true`                    |
| ❌    | Return false as soon as one comparison fails       | `return false`                   |

| Concept / Pattern                 | Description                                                            | Example in Code                                      |
| --------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| **Sorting Arrays**                | Sort arrays in ascending order to allow easy comparison                | `.sort((a, b) => a - b)`                             |
| **Comparing Largest Elements**    | Use the last item in a sorted array to determine who should go in back | `if (arr1[arr1.length - 1] > arr2[arr2.length - 1])` |
| **Assigning Roles**               | Use conditional logic to assign who’s in front and who’s in back       | `backRow = purpleHeights; frontRow = blackHeights;`  |
| **Loop with Index (`for`)**       | Needed to compare corresponding elements in both arrays                | `for (let i = 0; i < backRow.length; i++)`           |
| **Element-by-element Comparison** | Check that every student in the back row is taller than the front      | `if (backRow[i] <= frontRow[i]) return false;`       |
| **Early Return**                  | Stop the function and return false if any invalid case is found        | `return false;`                                      |
| **Boolean Return**                | Function returns a single true or false value based on all checks      | `return true;`                                       |

#### 14. A&E Wait Times
```js
// A&E Waiting Time Challenge

// Goal: Return the minimum total waiting time for all patients.
// Strategy: Use a greedy approach — treat shorter appointments first.

function minimumWaitingTime(times) {
  // Step 1: Sort consultation times in ascending order
  let sortedTimes = times.sort((a, b) => a - b);
  console.log("Sorted times:", sortedTimes);

  // Step 2: Set up total waiting time tracker
  let totalWait = 0;

  // Step 3: Loop through each patient's consultation
  for (let i = 0; i < sortedTimes.length; i++) {
    let time = sortedTimes[i]; // current consultation time

    // Step 4: Count how many people are still to be seen after this patient
    let patientsAfter = sortedTimes.length - (i + 1);

    // Step 5: Add this patient's wait impact to the total wait time
    totalWait += time * patientsAfter;
  }

  // Step 6: Return final total waiting time
  return totalWait;
}

// Test case
let times = [3, 2, 1, 2, 6];
console.log("Minimum total waiting time:", minimumWaitingTime(times)); // Expected: 17
```
| Patient (index) | Time | Patients After | Wait Added (time × after) |
| --------------- | ---- | -------------- | ------------------------- |
| 0               | 1    | 4              | 1 × 4 = 4                 |
| 1               | 2    | 3              | 2 × 3 = 6                 |
| 2               | 2    | 2              | 2 × 2 = 4                 |
| 3               | 3    | 1              | 3 × 1 = 3                 |
| 4               | 6    | 0              | 6 × 0 = 0                 |
| **Total**       | —    | —              | **17**                    |

| Pattern / Skill                  | Where It Was Used                                   | Purpose / Description                                                      |
| -------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------- |
| **Sorting (Greedy Strategy)**    | `sortedTimes = times.sort((a, b) => a - b);`        | Ensures shortest consultations come first to reduce total wait time.       |
| **Loop with Index (`for` loop)** | `for (let i = 0; i < sortedTimes.length; i++)`      | Allows us to calculate how many patients come **after** each one.          |
| **Array Access**                 | `let time = sortedTimes[i];`                        | Accessing the current consultation time from the sorted array.             |
| **Subtraction (Math Logic)**     | `let patientsAfter = sortedTimes.length - (i + 1);` | Counts how many patients will wait after the current one.                  |
| **Multiplication for impact**    | `totalWait += time * patientsAfter;`                | Multiplies time by how many patients it affects — this is the “wait cost.” |
| **Running Total / Accumulator**  | `let totalWait = 0;` and `totalWait += ...`         | Accumulates the total waiting time as we process each patient.             |
| **Return Value**                 | `return totalWait;`                                 | Returns the final result of the total waiting time.                        |
| **Testing with Input**           | `console.log(minimumWaitingTime([3, 2, 1, 2, 6]));` | Checks if the function behaves correctly for a known case.                 |
| **Console Logging**              | `console.log("Sorted times:", sortedTimes);`        | Debugging step to ensure sorting is correct.                               |

### 15. Find matching Data in an Object
```js
// Write a function that:
// Extracts values from index 10 to 15 for each array,
// Returns an array of zone names where the slice includes 42.

let sensorData = {
  zoneA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 42, 44, 45, 46, 47, 48, 49],
  zoneB: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  zoneC: [11, 12, 13, 14, 15, 42, 17, 18, 19, 20, 21, 22, 23, 24],
  zoneD: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 42, 14, 15]
};

function extractsData(sensorData) {
  // Array to hold zones where the slice includes 42
  let matchingZones = [];

  // Loop through each zone name in the object
  for (let zone in sensorData) {
    let readings = sensorData[zone];             // Get that zone's array
    let slice = readings.slice(10, 16);          // Extract index 10–15
    if (slice.includes(42)) {                    // Check if slice contains 42
      matchingZones.push(zone);                  // If yes, add zone name
    }
  }

  return matchingZones; // Return result
}

console.log(extractsData(sensorData)); // ✅ ["zoneA", "zoneD"]
```
**Pattern Used**
- Loop through object (for...in)
- Array slicing (.slice(10, 16))
- Condition check (.includes(42))
- Building a new array (.push())
