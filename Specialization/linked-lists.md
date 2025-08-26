# Linked Lists

## 1. Introduction to Linked Lists

A **linked list** is a data structure similar to arrays in that it can store data, but its elements are *not stored in contiguous memory locations*.

In memory, **"contiguous"** means that *items are stored right next to each other*, in consecutive memory addresses — like numbered seats in a row.

- **Arrays:** All elements sit next to each other in memory.

    - If the first element is at memory address 1000 and each element takes 4 bytes, the second will be at 1004, the third at 1008, and so on.

    - This is why arrays can do instant O(1) access — the computer can jump straight to start_address + (index × element_size).

- **Linked lists:** The elements (nodes) are scattered across memory.

    - Each node can be anywhere, because when you create a node, it’s stored wherever there’s free space in memory.

    - Nodes are connected by pointers (memory addresses) that tell the computer where the next node is.

Each linked list node contains:
- **Data** (value stored in the node)
- **Memory reference (pointer)** to the next node (the last node points to `null`)

**Visual Examples**
Array (contiguous)
``css
[Data1][Data2][Data3][Data4]
 ^1000   ^1004   ^1008   ^1012   (memory addresses in order)
```

Linked List (non-contiguous)
```css
[Data1|Next=7008]   [Data2|Next=3020]   [Data3|Next=NULL]
   ^1000                ^7008               ^3020
```
Here, the Next part of each node stores the memory address of the next node.

*In short:*

- Contiguous (arrays): Stored in one block → faster access but harder to resize.

- Non-contiguous (linked lists): Scattered in memory → slower access but easy to insert/remove nodes.

### Key Differences from Arrays
- **Array Access:** O(1) time complexity to access an element by index.
- **Linked List Access:** O(n) time complexity; must start from the head and traverse until the target node is found.
- Easier insertion and deletion compared to arrays.

```python
# Example Node structure in Python
class Node:
    def __init__(self, data):
        self.data = data  # Node data
        self.next = None  # Pointer to the next node
```

---

## 2. Advantages of Linked Lists
1. **Dynamic size:** Can easily grow or shrink.
2. **Ease of insertion/deletion:** No need to shift elements like in arrays.

---

## 3. Disadvantages of Linked Lists
1. **No random access:** Must traverse sequentially from the head.
2. **Extra memory overhead:** Each node stores a pointer.
3. **Not cache-friendly** due to scattered memory allocation.

💡 **Note:** Insertion at the start is always **O(1)**, but insertion in the middle requires traversal (**O(n)**).

---

## 4. Types of Linked Lists

### Singly Linked List
- Each node points to the next node only.
```python
# Singly Linked List Node
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

---

### Doubly Linked List
- Each node has **two pointers**: one to the next node and one to the previous node.
- Allows traversal in both directions.
- Requires extra memory for the additional pointer.

```python
# Doubly Linked List Node
class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
```

---

### Circular Linked List
- The last node points back to the first node, forming a **loop**.
- Can be **singly** or **doubly** linked.

---

## 5. Detecting a Circular Linked List – The Runner Technique
The **Runner Technique** (also called the "tortoise and hare" algorithm) uses two pointers:
1. **Slow pointer** moves one step at a time.
2. **Fast pointer** moves two steps at a time.
- If they meet, the linked list is circular.
- If the fast pointer reaches `null`, the list is not circular.

```python
# Detect if linked list is circular
def is_circular(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

---

## 6. Example Linked List Implementation

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.display()  # Output: 1 -> 2 -> 3 -> None
```

---

## 7. Summary Table

| Feature | Array | Linked List |
|---------|-------|-------------|
| Memory allocation | Contiguous | Scattered |
| Access time | O(1) | O(n) |
| Insertion/deletion | Costly | Easy |
| Extra memory | None | Pointer overhead |

---

## 8. Exercises
- Implement **insert_at_position**
- Implement **delete_node**
- Detect if a list is **palindromic**
