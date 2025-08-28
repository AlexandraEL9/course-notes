# Search & Sort Algorithms — Lesson 20

## Agenda
1. Search & Sort introduction  
2. Search & Sort algorithms review  
3. Practice

---

## Why Search & Sort?
Most programs need to **search** or **sort** data. Learning these algorithms builds problem‑solving skills and helps you compare approaches for a task.

![sorting](/images/search-sort1.png)

![sorting](/images/search-sort2.png)

### Why Sorting Helps
- **Faster searching** on sorted data.  
- **Easier selection** based on ordering (min, max, top‑k).  
- **Duplicate detection** becomes simpler.  
- **Distribution analysis** (counts, ranges) is quicker.

---
## TSC of sort types
![TSC of sort types](/images/tsc-sort-types.png)

## Core Sorting Algorithms

### Bubble Sort KEYYY!!!(simple, educational, small datasets)

![bubble-sort](/images/bubble-sort.png)

**Idea:** Repeatedly step through the list, swap adjacent elements if they are in the wrong order. Keep passing until no swaps occur.
```js
//bubble sort
//compares adjacent elements and swaps them if they are in the wrong order
//keep going until no more swaps are needed
const bubbleSort = (arr) => {
  //helper function to swap two elements in array
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  const n = arr.length;
  var swapped = true; //flag to track if any swaps occured in this pass
  var x = -1; //counter to reduce the no. of comparisons each pass

  //loop until no swaps occur
  while (swapped) {
    swapped = false; //assumes no swaps will happen this pass
    x = x + 1; //increment pass counter

    //compare adjacent elements - skip last x elements as they are already swapped
    for (let i = 1; i < n - x; i++) {
      //if current element smaller than previous element, they're in wrong order
      if (arr[i - 1] > arr[i]) {
        swap(i - 1, i); //swap them
        swapped = true; //mark that a swap occurred
      }
    }
  }
  return arr; //return sorted array
};

//test the function
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", testArray);
const sorted = bubbleSort([...testArray]); //use spread operator to avoid modifying original
console.log("Sorted array:", sorted);
```
**Notes:** Repeated passes over the unsorted portion. Worst‑case time ≈ O(n²).

---

### KEY1!!!! Selection Sort (in‑place, minimal extra memory, small data sets, memory constrained environments) !!!!!

![selection-sort](/images/selection-sort.png)

**Idea:** Treat the array as two parts: sorted (front) and unsorted (rest). Repeatedly find the **minimum** in the unsorted part and swap it into the next sorted position.
```js
//selection sort
//find the smallest element and put it at the beginning
//then find the next smallest and put it in the second position, and so on
const selectionSort = (arr) => {
  //loop through each position in the array
  for (let i = 0; i < arr.length; i++) {
    var minimum = i; //assume current position has the minimum value

    //look through the remaining unsorted portion to find the actual minimum
    for (let j = i + 1; j < arr.length; j++) {
      //select the smallest value by updating minimum index
      if (arr[j] < arr[minimum]) {
        minimum = j; //found a smaller value, update minimum index
      }
    }

    //place the minimum value at the front of the sorted end of the array
    //swap current position with the minimum value found
    [arr[minimum], arr[i]] = [arr[i], arr[minimum]];
  }
  return arr;
};

//test the function
// const testArray2 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray2);
// const selectionSorted = selectionSort([...testArray2]);
// console.log("Selection sorted:", selectionSorted);
```
**Notes:** In‑place. Useful when memory is tight.

---

### Insertion Sort KEYYY1 (great on small/nearly‑sorted data)
![insertion-sort](/images/insertion-sort.png)
**Idea:** Like sorting playing cards in your hand. Grow a **sorted** left part by inserting each next element into its correct position.
```js
//insertion sort
//take each element and insert it into its correct position
//among the already sorted elements (like sorting playing cards in your hand)
const insertionSort = (arr) => {
  //start from the second element (first element is considered "sorted")
  for (let i = 0; i < arr.length; i++) {
    const cursor = arr[i]; //current element to be inserted
    var pos = i; //position where we'll insert the cursor

    //move cursor backwards until we find its correct position
    //keep shifting larger elements to the right
    while (pos > 0 && arr[pos - 1] > cursor) {
      //swap the number down the list (shift larger element right)
      arr[pos] = arr[pos - 1];
      pos = pos - 1; //move position backwards
    }

    //break and do the final swap - insert cursor at correct position
    arr[pos] = cursor;
  }
  return arr;
};

//test the function
// const testArray3 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray3);
// const insertionSorted = insertionSort([...testArray3]);
// console.log("Insertion sorted:", insertionSorted);
```
**Notes:** Simple and stable. Efficient for nearly sorted inputs.

---

### Merge Sort GOOD TO KNOW!!!   (divide & conquer)
![insertion-sort](/images/insertion-sort.png)
**Idea:** Recursively split the list to single‑element sublists, then **merge** them back in order. Traversable data 
```js
//merge sort
//sivide and conquer - split array in half repeatedly until you have
//single elements, then merge them back together in sorted order

//main function: recursively divide array into smaller pieces
const mergeSort = (arr) => {
  //base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  //find the middle point to split array in half
  const mid = Math.floor(arr.length / 2);

  //splice arr in half so arr ends up being right half
  //splice() removes elements and returns them, modifying original array
  const left = arr.splice(0, mid);

  //recursively sort both halves and merge them
  //left = left half, arr = right half (after splice)
  return merge(mergeSort(left), mergeSort(arr));
};

//helper function: merge two sorted arrays into one sorted array
const merge = (left, right) => {
  var arr = []; //result array to build

  //loop until one array is empty
  //compare front elements and take the smaller one
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift()); //remove and add first element from left
    } else {
      arr.push(right.shift()); //remove and add first element from right
    }
  }

  //add all remaining elements to a single array
  //one array might still have elements left
  return [...arr, ...left, ...right];
};

//test the function
// const testArray5 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray5);
// const mergeSorted = mergeSort([...testArray5]);
// console.log("Merge sorted:", mergeSorted);
```
**Notes:** Classic example of divide‑and‑conquer.

---

### Quick Sort Often used together with merge sort   good BigO (partition around a pivot)
![quick-sort](/images/quick-sort.png)
**Idea:** Pick a **pivot**. Partition elements into \< pivot and \> pivot, then recursively sort the partitions.
```js
/**
 * Quick Sort (simple version, NOT in-place)
 * -----------------------------------------
 * Idea:
 * 1) Choose a pivot value from the array (here: the middle element).
 * 2) Partition all items into three buckets:
 *      - less  : values <  pivot
 *      - equal : values === pivot (handles duplicates cleanly)
 *      - greater: values >  pivot
 * 3) Recursively quickSort the less and greater buckets.
 * 4) Concatenate: sortedLess + equal + sortedGreater
 *
 * This is easy to understand and avoids tricky index math.
 * Trade-off: uses extra space to build the buckets.
 *
 * Time (average):  O(n log n)
 * Time (worst):    O(n^2)   (e.g., very unlucky pivot choices)
 * Space:           O(n)     (because of the extra arrays)
 * Stability:       Not stable (relative order of equal items isn’t guaranteed)
 */
function quickSort(arr) {
  // Base case: arrays of length 0 or 1 are already sorted.
  if (arr.length <= 1) return arr.slice(); // return a copy for consistency

  // --- 1) Choose a pivot ---
  // Common choices: first, last, middle, or "median-of-three".
  // Middle is a simple, decent default for learning.
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // --- 2) Partition into three buckets ---
  const less = [];
  const equal = [];
  const greater = [];

  // Walk through every element and bucket it relative to the pivot.
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value < pivot) {
      less.push(value);
    } else if (value > pivot) {
      greater.push(value);
    } else {
      // value === pivot
      equal.push(value);
    }
  }

  // --- 3) Recursively sort the "less" and "greater" buckets ---
  const sortedLess = quickSort(less);
  const sortedGreater = quickSort(greater);

  // --- 4) Combine results: sortedLess + equal + sortedGreater ---
  return [...sortedLess, ...equal, ...sortedGreater];
}

// ---------------- DEMO ----------------
const nums = [64, 34, 25, 12, 22, 11, 90, 12, 64];
console.log("Original:", nums);
const sorted = quickSort(nums);
console.log("Sorted:  ", sorted);
// Note: nums is unchanged because this implementation is not in-place.
```
**Notes:** Widely used. Average time ≈ O(n log n).

---

## Core Searching Algorithms

### Linear Search (sequential)
![linear search](/images/linear-search.png)
**Idea:** Walk the array from left to right and compare each element with the target.
```js
// Linear Search: return the index of x in array a, or -1 if not found
function linearSearch(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return i; // found at index i
    }
  }
  return -1; // not found
}

// Demo
const arr = [7, 3, 9, 1, 3];
console.log(linearSearch(arr, 9)); // 2
console.log(linearSearch(arr, 4)); // -1
```
**Notes:** Works on **unsorted** data.
- Time complexity is O(n) in the worst case.
(If you just need existence or first index, JavaScript also has arr.indexOf(x) and arr.includes(x).)

---

### Binary Search (on sorted data)
![binary search](/images/binary-search.png)
**Idea:** Repeatedly check the middle element and narrow the search to the half that could contain the target.
```js
// Binary search on a sorted (ascending) array.
// Returns the index of x, or -1 if not found.
function binarySearch(a, x) {
  let lo = 0;
  let hi = a.length - 1;

  while (lo <= hi) {
    // Use Math.floor to get the middle index
    const mid = Math.floor((lo + hi) / 2);
    if (a[mid] === x) return mid;
    if (a[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

// Demo
// const arr = [1, 3, 5, 7, 9, 11];
// console.log(binarySearch(arr, 7));  // 3
// console.log(binarySearch(arr, 4));  // -1
```
**Notes:** Requires a **sorted** array.

---

## Visuals Mentioned
![binary-structure](/images/binary-structure.png)
![binary vs array](/images/binary-vs-array.png)
- Binary structure and **BST vs array** illustrations (conceptual).  
- Sorting visual summary (timings equalized for comparison).

## BST vs Array — Conceptual Comparison
Mental model
```css
Array (contiguous in memory)          BST (linked nodes, hierarchical)

[ A ][ B ][ C ][ D ][ E ]            (B)
 0    1    2    3    4               / \
                                     A   D
                                        / \
                                       C   E
```

### Core operations (n = number of elements, h = tree height)
| Operation           | Unsorted Array   | Sorted Array (ascending)        | BST (unbalanced)             | BST (balanced: AVL/RB)  |
| ------------------- | ---------------- | ------------------------------- | ---------------------------- | ----------------------- |
| Lookup by index `i` | **O(1)**         | **O(1)**                        | **N/A**                      | **N/A**                 |
| Search by value `x` | O(n)             | **O(log n)** (binary search)    | Avg **O(log n)**, worst O(n) | **O(log n)**            |
| Insert              | Amortized O(1)\* | **O(n)** (shift to keep sorted) | Avg **O(log n)**, worst O(n) | **O(log n)**            |
| Delete (by value)   | O(n)             | **O(n)** (maintain order)       | Avg **O(log n)**, worst O(n) | **O(log n)**            |
| Range query \[a..b] | O(n)             | **O(log n + k)**                | **O(log n + k)**             | **O(log n + k)**        |
| k-th smallest       | O(1) by index    | **O(1)** by index               | O(h)\*\*                     | O(log n)\*\*            |
| Memory overhead     | Low (contiguous) | Low                             | Higher (node pointers)       | Higher (node + balance) |


* Append at end. Inserting at arbitrary position is O(n).
** With an order-statistics tree (store subtree sizes) it’s O(log n); plain BST is O(h).

### When to choose which?

- Sorted Array (static or mostly-read data)
    - Best when the dataset is mostly static and you do many searches.
    - Superb cache locality → very fast constants for binary search and scanning.
    - Inserts/deletes are expensive due to shifting (O(n)).

- Balanced BST (e.g., AVL / Red–Black) (dynamic set)
    - Best for frequent inserts/deletes while keeping log-time searches.
    - Natural support for range queries and in-order traversal (sorted output).
    - Slightly worse constants and cache behavior than arrays; extra memory per node.

- Unbalanced BST
    - Fine for random inserts (often near-balanced in practice) but can degrade to a linked list shape (O(n)) if inputs are adversarial (e.g., already sorted).

**Practical notes**
- Cache locality: Arrays win. BSTs jump around memory (pointer chasing).
- Duplicates: Arrays handle them trivially; BSTs need a tie-break rule or counts at nodes.
- Building structures:
    - From unsorted data → sort into array: O(n log n); then binary search is ready.
    - From sorted array → you can build a perfectly balanced BST in O(n) by recursing on midpoints.
- Ordered traversal:
    - Array: already indexed; full sorted walk is O(n).
    - BST: in-order traversal yields sorted order in O(n).

**Quick rule of thumb**
- Mostly read-only + lots of lookups? → Sorted array + binary search.
- Lots of inserts/deletes + lookups + ranges? → Balanced BST.
- Need random access by index? → Array (BSTs don’t do O(1) index access).

---

## More Sorts to Explore
Shell • Heap • Counting • Bucket • Radix • Cubesort • many more…
![more sort types](/images/more-sort-types.png)

---

## Practice Ideas
- Trace each algorithm by hand on a short list.  
- Identify when a sort is **stable** or **in‑place**.  
- Compare which algorithms need the input to be **sorted** first (for searching).  
- Implement and test with random lists and edge cases (empty, 1 element, duplicates, already sorted).

---

*End of notes.*

### JS file
```js
//implementation of various sorting techniques - they are from various sources

//bubble sort
//compares adjacent elements and swaps them if they are in the wrong order
//keep going until no more swaps are needed
const bubbleSort = (arr) => {
  //helper function to swap two elements in array
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  const n = arr.length;
  var swapped = true; //flag to track if any swaps occured in this pass
  var x = -1; //counter to reduce the no. of comparisons each pass

  //loop until no swaps occur
  while (swapped) {
    swapped = false; //assumes no swaps will happen this pass
    x = x + 1; //increment pass counter

    //compare adjacent elements - skip last x elements as they are already swapped
    for (let i = 1; i < n - x; i++) {
      //if current element smaller than previous element, they're in wrong order
      if (arr[i - 1] > arr[i]) {
        swap(i - 1, i); //swap them
        swapped = true; //mark that a swap occurred
      }
    }
  }
  return arr; //return sorted array
};

//test the function
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", testArray);
const sorted = bubbleSort([...testArray]); //use spread operator to avoid modifying original
console.log("Sorted array:", sorted);

//selection sort
//find the smallest element and put it at the beginning
//then find the next smallest and put it in the second position, and so on
const selectionSort = (arr) => {
  //loop through each position in the array
  for (let i = 0; i < arr.length; i++) {
    var minimum = i; //assume current position has the minimum value

    //look through the remaining unsorted portion to find the actual minimum
    for (let j = i + 1; j < arr.length; j++) {
      //select the smallest value by updating minimum index
      if (arr[j] < arr[minimum]) {
        minimum = j; //found a smaller value, update minimum index
      }
    }

    //place the minimum value at the front of the sorted end of the array
    //swap current position with the minimum value found
    [arr[minimum], arr[i]] = [arr[i], arr[minimum]];
  }
  return arr;
};

//test the function
// const testArray2 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray2);
// const selectionSorted = selectionSort([...testArray2]);
// console.log("Selection sorted:", selectionSorted);

//insertion sort
//take each element and insert it into its correct position
//among the already sorted elements (like sorting playing cards in your hand)
const insertionSort = (arr) => {
  //start from the second element (first element is considered "sorted")
  for (let i = 0; i < arr.length; i++) {
    const cursor = arr[i]; //current element to be inserted
    var pos = i; //position where we'll insert the cursor

    //move cursor backwards until we find its correct position
    //keep shifting larger elements to the right
    while (pos > 0 && arr[pos - 1] > cursor) {
      //swap the number down the list (shift larger element right)
      arr[pos] = arr[pos - 1];
      pos = pos - 1; //move position backwards
    }

    //break and do the final swap - insert cursor at correct position
    arr[pos] = cursor;
  }
  return arr;
};

//test the function
// const testArray3 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray3);
// const insertionSorted = insertionSort([...testArray3]);
// console.log("Insertion sorted:", insertionSorted);

//timing experiment
//generate random numbers for testing
//creates a random integer between 0 and 9999
const sample = () => Math.floor(Math.random() * 10000);

//this line creates an array of 1000 random numbers (commented out)
//const array = Array.from({length: 1000}, _ => sample())

const sampleSize = 100; //number of times to run each test

//a function similar to Python's timeit.timeit - measures execution time
const timeit = (sampleSize, testFunc) => {
  var total = 0; //total time accumulated across all runs

  //run the test function sampleSize times
  for (let i = 0; i < sampleSize; i++) {
    //create a fresh random array for each test (1000 elements)
    const array = Array.from({ length: 1000 }, (_) => sample());

    //record start time (in milliseconds)
    const start = performance.now();

    //run the sorting function
    testFunc(array);

    //record end time (in milliseconds)
    const end = performance.now();

    //calculate duration and convert to seconds
    const duration = (end - start) / 1000;
    total += duration; // Add to total time
  }

  return total; //return total time for all runs
};

//test each sorting algorithm and print results

//bubble sort test - usually the slowest
const bubbleTimeit = timeit(sampleSize, bubbleSort);
console.log(
  `Bubble sort run ${sampleSize} times in: ${bubbleTimeit} seconds\n`
);

//selection sort test - should be quicker than bubble sort
//reference: https://www.geeksforgeeks.org/selection-sort-vs-bubble-sort/
const selectionTimeit = timeit(sampleSize, selectionSort);
console.log(
  `Selection sort run ${sampleSize} times in: ${selectionTimeit} seconds\n`
);

//insertion sort test - often faster than bubble and selection for small arrays
const insertionTimeit = timeit(sampleSize, insertionSort);
console.log(
  `Insertion sort run ${sampleSize} times in: ${insertionTimeit} seconds\n`
);

//quick and merge sort are good to know rather than a must
//quick sort
//divide and conquer - pick a "pivot" element, partition array so smaller
//elements go left, larger go right, then recursively sort each side

//helper function No 1: partition the array around a pivot
//takes first element as pivot and rearranges array so:
//elements ≤ pivot go to the left
//elements > pivot go to the right
//returns the final position of the pivot
const partition = (array, begin, end) => {
  var pivotIdx = begin; //start with pivot at beginning

  //check each element from begin+1 to end
  for (let i = begin + 1; i < end + 1; i++) {
    //if current element is smaller than or equal to pivot
    if (array[i] <= array[begin]) {
      //swap it to the left side and move pivot boundary
      [array[i], array[pivotIdx]] = [array[pivotIdx], array[i]];
      pivotIdx += 1; //expand the "smaller than pivot" region
    }
  }

  //put pivot in its final correct position
  [array[pivotIdx], array[begin]] = [array[begin], array[pivotIdx]];
  return pivotIdx; //return where pivot ended up
};

//helper function No 2: recursive function to sort array segments
const quickSortRecursion = (array, begin, end) => {
  //base case: if segment has 0 or 1 elements, it's already sorted
  if (begin >= end) {
    return;
  }

  //partition array and get pivot's final position
  const pivotIdx = partition(array, begin, end);

  //recursively sort the left side (elements smaller than pivot)
  quickSortRecursion(array, begin, pivotIdx - 1);

  //recursively sort the right side (elements larger than pivot)
  quickSortRecursion(array, pivotIdx + 1, end);
};

//main function No 1: entry point for Quick Sort
const quickSort = (array, begin = 0, end = null) => {
  //set default end value if not provided
  if (!end) {
    end = array.length - 1;
  }

  //start the recursive sorting process
  return quickSortRecursion(array, begin, end);
};

//test the function
// const testArray4 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray4);
// const quickTestCopy = [...testArray4];
// quickSort(quickTestCopy);
// console.log("Quick sorted:", quickTestCopy);

//merge sort
//sivide and conquer - split array in half repeatedly until you have
//single elements, then merge them back together in sorted order

//main function: recursively divide array into smaller pieces
const mergeSort = (arr) => {
  //base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  //find the middle point to split array in half
  const mid = Math.floor(arr.length / 2);

  //splice arr in half so arr ends up being right half
  //splice() removes elements and returns them, modifying original array
  const left = arr.splice(0, mid);

  //recursively sort both halves and merge them
  //left = left half, arr = right half (after splice)
  return merge(mergeSort(left), mergeSort(arr));
};

//helper function: merge two sorted arrays into one sorted array
const merge = (left, right) => {
  var arr = []; //result array to build

  //loop until one array is empty
  //compare front elements and take the smaller one
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift()); //remove and add first element from left
    } else {
      arr.push(right.shift()); //remove and add first element from right
    }
  }

  //add all remaining elements to a single array
  //one array might still have elements left
  return [...arr, ...left, ...right];
};

//test the function
// const testArray5 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", testArray5);
// const mergeSorted = mergeSort([...testArray5]);
// console.log("Merge sorted:", mergeSorted);

//quick sort and merge sort testing
//quick sort test - should be much faster (O(n log n) average case)
const quickTimeit = timeit(sampleSize, quickSort);
console.log(`Quick sort run ${sampleSize} times in: ${quickTimeit} seconds\n`);

//merge sort test - consistently fast (always O(n log n))
const mergeTimeit = timeit(sampleSize, mergeSort);
console.log(`Merge sort run ${sampleSize} times in: ${mergeTimeit} seconds\n`);
```
