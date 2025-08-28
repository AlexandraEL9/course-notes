# Specialization Practice Questions

---

## Contents
Q1. Calc Tame and Space Complexity of a for loop with if else.


---

## Q1. Calc Tame and Space Complexity of a for loop with if else
![Q1](../images/practice-question-1.png)

```python
def two_sum_hashing(numbers, target):
    """
    Find any two values in `numbers` that sum to `target`.
    Returns the pair as a list [a, b]; returns [] if no pair exists.
    """

    visited = {}           # Hash table to record numbers we've seen so far.
                           # (A set() would also work; the True value is a placeholder.)

    for num in numbers:    # Walk through the list once, left to right.
        desired = target - num        # What number would complete the sum to `target`?
        if desired in visited:        # O(1) average: have we seen that complement already?
            return [num, desired]     # Yes → we found a valid pair; return immediately.
        else:
            visited[num] = True       # No → remember current number for future checks.

    return []               # Exhausted the list without finding a pair.

```

**Notes** 
- Define n: let 𝑛 be the length of numbers.
- Control flow: there’s one loop over numbers; no nested loops.
- Per-iteration work:
    - arithmetic: target - num → constant time.
    - hash-table lookup: desiredNum in visited → think average-case lookup cost for a Python dict/set.
    - hash-table insert: visited[num] = True → think average-case insert cost for a dict/set.

- Early return vs average: it may return early when a pair is found. For average-case Big-O, reason about how many elements you’d expect to see before finding a pair (hint: proportional to 𝑛, constant factors don’t change the class).
- Space growth: what’s the largest number of distinct items that can end up in visited before returning or finishing?

- Compose time complexity: (number of iterations) × (average cost per iteration).
    - **Time (average): O(n) → single pass over numbers; dict lookups/inserts are O(1) on average** 

- Compose space complexity: size of auxiliary data structures relative to 
𝑛 (ignore input storage).
    - **Space: O(n) → the visited hash table can grow to hold up to all seen elements (up to 𝑛) if no pair is found until the end.**

Optional check: compare with best case (pair found immediately) and worst case (no pair exists) to sanity-check your average-case conclusion.

---

## Q2 Time/Space COmplexity

![Q2](../images/practice-question2.png)

- *Name your symbols:* 
    - let 𝑉= number of vertices (nodes), E = number of edges. If it’s a tree, remember 
        𝐸 = 𝑉 − 1
        E=V−1.

**What operation happens how many times?**
- Each vertex is *discovered once and finished once* (pushed to / popped from the stack once each).

-Each edge is looked at a *constant number of times* (once per direction for undirected graphs).

**Traversal vs. search:**

- A *BST (Binary Search Tree)* search is where the log 𝑉 intuition comes from (you’re halving the search space).

- A *DFS (Depth First Search)* traversal that aims to “visit all nodes” does not halve anything; it systematically touches every reachable vertex (and edges to get there).

**Representation matters:**

- With an adjacency list, counting visits to vertices and adjacency lists leads to a total cost *proportional to “vertices + edges”.*

- With an adjacency matrix, *scanning neighbors costs proportional to  𝑉 per vertex.*

**Space accounting:**

You typically maintain a visited set (or color array) to avoid revisiting cycles → how big can that get relative to V?

The explicit stack (or recursion stack) grows with the current path length (i.e., the depth):

For a balanced tree, depth ~ logV.

For a path-like tree (degenerate), depth ~ 
𝑉
V.

For general graphs, worst-case path length is also bounded by V.

Sanity checks:

If you must “touch” every node to collect values, the running time must scale with at least the number of nodes.

For a tree, substitute 
𝐸 =𝑉 − 1
E=V−1 into your expression to simplify.

Changing recursion ↔ stack doesn’t change Big-O, only constants.
Time: can’t be O(1)—to “collect all node values” you must visit every node and follow their edges. DFS time is O(V + E) (nodes + edges). For a tree, that simplifies to O(n) because 
E=n−1.

Space: your guess is closer. DFS needs memory for the visited set (in graphs) and the stack/recursion path. In the worst case that’s O(V). (On a balanced tree the stack depth is 
O(logn), but in general/worst case it’s 
O(n)).

## Q3 T&S complexity on a palindrome function
![Q3](../images/practice-question3.png)

Time: O(n), where n is the string length.
You compare at most n/2 character pairs while moving left and right inward; each loop does O(1) work.

Space: O(1) extra space (just two indices).

(Best case can return early after 1 comparison, but worst/average is linear.)

## Q4 Coding TSC
No image for this problem unfortunately. Given a sorted array containing integer numbers and an integer target, I conduct a search algorithm on it in order to see if the target is present in that array or not. If it is, I return the index it was found at, else I return -1 to denote that it is not inside that array. My approach mirrors, if not is identical and effectively the same as, Binary Search. That is:
●	I select the middle of the array
●	I examine the middle element - if its bigger than my target, I dispose the right-half and only examine the left half (left of the target, where all the array elements are smaller)
●	If it’s bigger, then I do the opposite
●	I repeat until there is no more to search, or my middle element matches my target
●	Effectively, Binary Search
●	Hint: Each iteration, I dispose half of the search space / array each time. The array gets halved per iteration.
What is the Big O Time and Space complexity of this code?

**Thoughts**
⚙️ Binary Search: How It Works
- You’re always dividing the array into half (left or right side).
- In each iteration, you eliminate half of the remaining elements.
- This continues until:
    - You find the element
    - Or the search space becomes empty

**Time Complexity:** O(log n)
- Why? Because you halve the array each time.
- If the array has n elements:
    - After 1 step: n / 2
    - After 2 steps: n / 4
    - ...
    - After k steps: n / 2^k
    - You stop when n / 2^k = 1, which implies k = log₂(n)
- So, the time complexity is O(log n).

**Space Complexity**
Case 1: Iterative Binary Search
- You use constant space (just a few pointers like left, right, mid).
- ➤ Space complexity: O(1)

Case 2: Recursive Binary Search
- Each recursive call adds a new stack frame.
- Max depth = log n (since it halves each time)
- ➤ Space complexity: O(log n)

✅ Final Answer:
Type	Complexity
Time	O(log n)
Space (iterative)	O(1)
Space (recursive)	O(log n)

---

**Q5 Coding**

```js
/**
 * Determines whether the 'sequence' array is a valid subsequence of 'array'.
 * A valid subsequence means the numbers appear in the same order (but not necessarily consecutively).
 * 
 * @param {number[]} array - The main array to search within
 * @param {number[]} sequence - The sequence to validate
 * @returns {boolean} - True if sequence is a valid subsequence of array, else false
 */
function isValidSubsequence(array, sequence) {
    let arrIdx = 0; // pointer for array
    let seqIdx = 0; // pointer for sequence

    // Loop through array until we reach the end of either array or sequence
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) { //Keep looping as long as we haven’t reached the end of either the main array or the sequence array
            // If elements match, move to next element in sequence
            seqIdx++;
        }
        // Always move to the next element in the array
        arrIdx++;
    }

    // If we reached the end of the sequence, it's a valid subsequence
    return seqIdx === sequence.length; // return when the seqIdx is the same as sequence.length (so the end of the sequence?)
}
```
**Test Examples:**
```js
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,-2])); // false
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10])); // true
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [25]));        // true
console.log(isValidSubsequence(
    [5,1,22,25,6,-1,8,10, -1, 4, 3, 2, -1, 0, 8, 5, 9, 8],
    [5, 1, -1, 8, -1, -1, 0, 5]
)); // true
console.log(isValidSubsequence([5,1, -1, 3], [5, 1, -1, 8, -1, -1, 0, 5])); // false
```
**Explanation of the Logic**
1. You walk through both arrays using two pointers:
    - arrIdx for the array
    - seqIdx for the sequence

2. For each element in array, check if it matches the current sequence[seqIdx]:
    - If it does, move to the next item in sequence
    - If not, keep moving through array

3. If you reach the end of the sequence, it means all its elements were found in the correct order within the array.

**Big O Complexity**
| Type      | Complexity | Why?                                               |
| --------- | ---------- | -------------------------------------------------- |
| **Time**  | O(n)       | You scan through the array once at most            |
| **Space** | O(1)       | You only use two pointers regardless of input size |

✅ Efficient: No nested loops
✅ Simple: Easy to reason about and debug
✅ Optimal: No better solution in terms of time/space for this problem

---

**Q6**
Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array.
```js
function findThreeLargestNumbers(array) {
    // Start with three lowest possible values
    let smallest = -Infinity;
    let mid = -Infinity;
    let largest = -Infinity;

    // Loop through each number in the array
    for (let num of array) {
        // Check if current number is bigger than the biggest so far
        if (num > largest) {
            // Shift down the other values before replacing largest
            smallest = mid;
            mid = largest;
            largest = num;
        } else if (num > mid) {
            // If it's not bigger than largest but bigger than mid
            smallest = mid;
            mid = num;
        } else if (num > smallest) {
            // If it's not bigger than mid but bigger than smallest
            smallest = num;
        }
    }

    // Return in ascending order
    return [smallest, mid, largest];
}
```
**Test Examples**
```js
console.log(findThreeLargestNumbers([141, 1, 17, -17, -27, 18, 541, 8, 7, 7])); 
// → [18, 141, 541]

console.log(findThreeLargestNumbers([3, 1, 2])); 
// → [1, 2, 3]

console.log(findThreeLargestNumbers([142, 6, 34, 67, 31, -2, -5, 8])); 
// → [34, 67, 142]

console.log(findThreeLargestNumbers([-4, 0, -2, -8, -142, -2, -8])); 
// → [-2, -2, 0]
```
**Explanation of the Logic**

- maintaining three "buckets" (smallest, mid, largest) to track the top 3 numbers we've seen so far:

1. Every time we see a new number, we compare it:
    - If it’s bigger than the largest, we shift all 3 values down and replace the largest.
    - If it’s only bigger than the mid, we shift down smallest and replace mid.
    - If it’s only bigger than smallest, we replace smallest.

2. At the end of the loop, we’ve seen all numbers once, and we’ve kept track of the three biggest — even if duplicates are present.

3. The final output is returned as [smallest, mid, largest], which is sorted in ascending order as required.

**TSC**
| Metric    | Value | Explanation                                        |
| --------- | ----- | -------------------------------------------------- |
| **Time**  | O(n)  | Each element is visited once                       |
| **Space** | O(1)  | Only 3 variables are used regardless of input size |

✅ No sort needed → Sorting is O(n log n), so this is faster
✅ Handles duplicates → e.g. returns [10, 10, 12] if needed
✅ Space-efficient → Fixed memory use
✅ Straightforward logic once understood


