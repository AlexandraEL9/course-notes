# Stacks & Queues

## Lesson 15 — CFGDegree → Full-Stack Stream

---

## Agenda
1. Data structures: Stack & Queue
2. Queue
3. Stack
4. Practice and coding

---

## Stack and Queue Overview

### Queue
A **queue** is a collection of objects that are inserted and removed based on the **First-In, First-Out (FIFO)** principle.

**Key points:**
- First item added is the first one removed.
- Insertion happens at the **rear**.
- Deletion happens at the **front**.

### Stack
A **stack** is a collection of objects that are inserted and removed according to the **Last-In, First-Out (LIFO)** principle.

**Key points:**
- Last item added is the first one removed.
- Insertion and deletion happen at the **same end** (top).

**Summary:**  
- **STACK → LIFO**  
- **QUEUE → FIFO**  

---

## Queue Anatomy

**Operations:**
- **enqueue**: Adds an item to the queue.  
  _Overflow_ condition if queue is full.
- **dequeue**: Removes an item from the queue (same order they were added).  
  _Underflow_ condition if queue is empty.
- **front**: Get the front item from the queue.
- **rear**: Get the last item from the queue.

**Diagram:**
```
[ front ] -> [ item1, item2, item3, ... ] <- [ rear ]
```

---

## Queue Implementation

### JavaScript
```javascript
// Using array
let queue = [];
queue.push(1);  // enqueue
queue.shift();  // dequeue

// Using @datastructures-js/deque
// https://www.npmjs.com/package/@datastructures-js/deque
const Deque = require('@datastructures-js/deque');
const q = new Deque();
q.pushBack(1);  // enqueue
q.popFront();   // dequeue
```

### Python
```python
# Using list
queue = []
queue.append(1)  # enqueue
queue.pop(0)     # dequeue

# Using collections.deque
from collections import deque
q = deque()
q.append(1)   # enqueue
q.popleft()   # dequeue

# Using queue.Queue
from queue import Queue
q = Queue()
q.put(1)   # enqueue
q.get()    # dequeue
```

---

## Stack Anatomy

**Operations:**
- **empty()** — Returns whether the stack is empty.
- **size()** — Returns the size of the stack.
- **top()** — Returns a reference to the topmost element of the stack.
- **push(x)** — Adds element `x` at the top of the stack.
- **pop()** — Deletes the topmost element of the stack.

**Diagram:**
```
[top] -> [ item_n, ..., item3, item2, item1 ]
```

---

## Stack Implementation

### JavaScript
```javascript
// Using array
let stack = [];
stack.push(1);  // push
stack.pop();    // pop

// Using @datastructures-js/deque
// https://www.npmjs.com/package/@datastructures-js/deque
const Deque = require('@datastructures-js/deque');
const s = new Deque();
s.pushBack(1);  // push
s.popBack();    // pop
```

### Python
```python
# Using list
stack = []
stack.append(1)  # push
stack.pop()      # pop

# Using collections.deque
from collections import deque
s = deque()
s.append(1)  # push
s.pop()      # pop

# Using queue.LifoQueue
from queue import LifoQueue
s = LifoQueue()
s.put(1)  # push
s.get()   # pop
```

---

## Practice & Exercises
Try implementing:
1. A queue using both `list` and `deque` in Python.
2. A stack using `array` in JavaScript.
3. Detect overflow and underflow conditions.

---

**References:**
- https://www.npmjs.com/package/@datastructures-js/deque
- https://docs.python.org/3/library/collections.html#deque-objects
- https://docs.python.org/3/library/queue.html
