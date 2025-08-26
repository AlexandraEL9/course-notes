# Search & Sort Algorithms — Lesson 20

> Concise notes distilled from the *Search & Sort Algorithms* slides (CFGDegree — Full‑Stack Stream, Lesson 20).

## Agenda
1. Search & Sort introduction  
2. Search & Sort algorithms review  
3. Practice

---

## Why Search & Sort?
Most programs need to **search** or **sort** data. Learning these algorithms builds problem‑solving skills and helps you compare approaches for a task.

### Why Sorting Helps
- **Faster searching** on sorted data.  
- **Easier selection** based on ordering (min, max, top‑k).  
- **Duplicate detection** becomes simpler.  
- **Distribution analysis** (counts, ranges) is quicker.

---

## Core Sorting Algorithms

### Bubble Sort KEYYY!!!(simple, educational, small datasets)
**Idea:** Repeatedly step through the list, swap adjacent elements if they are in the wrong order. Keep passing until no swaps occur.
```python
def bubble_sort(a):
    n = len(a)
    while True:
        swapped = False
        for i in range(1, n):
            if a[i-1] > a[i]:
                a[i-1], a[i] = a[i], a[i-1]
                swapped = True
        n -= 1  # last element is in place
        if not swapped or n <= 1:
            break
    return a
```
**Notes:** Repeated passes over the unsorted portion. Worst‑case time ≈ O(n²).

---

### KEY1!!!! Selection Sort (in‑place, minimal extra memory, small data sets, memory constrained environments) !!!!!
**Idea:** Treat the array as two parts: sorted (front) and unsorted (rest). Repeatedly find the **minimum** in the unsorted part and swap it into the next sorted position.
```python
def selection_sort(a):
    n = len(a)
    for i in range(n - 1):
        min_i = i
        for j in range(i + 1, n):
            if a[j] < a[min_i]:
                min_i = j
        if min_i != i:
            a[i], a[min_i] = a[min_i], a[i]
    return a
```
**Notes:** In‑place. Useful when memory is tight.

---

### Insertion Sort KEYYY1 (great on small/nearly‑sorted data)
**Idea:** Like sorting playing cards in your hand. Grow a **sorted** left part by inserting each next element into its correct position.
```python
def insertion_sort(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key
    return a
```
**Notes:** Simple and stable. Efficient for nearly sorted inputs.

---

### Merge Sort GOOD TO KNOW!!!   (divide & conquer)
**Idea:** Recursively split the list to single‑element sublists, then **merge** them back in order. Traversable data 
```python
def merge(left, right):
    i = j = 0
    out = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    out.extend(left[i:]); out.extend(right[j:])
    return out

def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    return merge(left, right)
```
**Notes:** Classic example of divide‑and‑conquer.

---

### Quick Sort Often used together with merge sort   good BigO (partition around a pivot)
**Idea:** Pick a **pivot**. Partition elements into \< pivot and \> pivot, then recursively sort the partitions.
```python
def _partition(a, lo, hi):
    pivot = a[hi]
    i = lo
    for j in range(lo, hi):
        if a[j] <= pivot:
            a[i], a[j] = a[j], a[i]
            i += 1
    a[i], a[hi] = a[hi], a[i]
    return i

def _quicksort(a, lo, hi):
    if lo < hi:
        p = _partition(a, lo, hi)
        _quicksort(a, lo, p - 1)
        _quicksort(a, p + 1, hi)

def quick_sort(a):
    _quicksort(a, 0, len(a) - 1)
    return a
```
**Notes:** Widely used. Average time ≈ O(n log n).

---

## Core Searching Algorithms

### Linear Search (sequential)
**Idea:** Walk the array from left to right and compare each element with the target.
```python
def linear_search(a, x):
    for i, v in enumerate(a):
        if v == x:
            return i
    return -1  # not found
```
**Notes:** Works on **unsorted** data.

---

### Binary Search (on sorted data)
**Idea:** Repeatedly check the middle element and narrow the search to the half that could contain the target.
```python
def binary_search(a, x):
    lo, hi = 0, len(a) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if a[mid] == x:
            return mid
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```
**Notes:** Requires a **sorted** array.

---

## Visuals Mentioned
- Binary structure and **BST vs array** illustrations (conceptual).  
- Sorting visual summary (timings equalized for comparison).

---

## More Sorts to Explore
Shell • Heap • Counting • Bucket • Radix • Cubesort • many more…

---

## Practice Ideas
- Trace each algorithm by hand on a short list.  
- Identify when a sort is **stable** or **in‑place**.  
- Compare which algorithms need the input to be **sorted** first (for searching).  
- Implement and test with random lists and edge cases (empty, 1 element, duplicates, already sorted).

---

*End of notes.*
