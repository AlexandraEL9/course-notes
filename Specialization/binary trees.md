# Binary Trees — Lesson 19 Notes

Based on the slide deck **“(Binary) Trees — Lesson 19 (CFGDegree → Full‑Stack Stream)”**.

---

## 1) Trees & Graphs (Quick Notes)

- A **tree** is a data structure made of **nodes** connected by **edges**.  
- One node is the **root**. Nodes can have **children**; a node with no children is a **leaf**.  
- A **graph** is a more general structure (nodes + edges) that **might not have a root**.  
- Every tree is a graph; not every graph is a tree.
![Binary Trees 1](/images/binary-trees1.png)

> Why is it called a “tree”? In CS diagrams we often draw the root at the top and the tree “grows” downward. Orientation doesn’t matter — the structure does.

![Binary Trees 2](/images/binary-trees2.png)

![Binary Trees 3](/images/binary-trees3.png)

---

## 2) Binary Trees (BT)

- A **Binary Tree** is a tree where **each node has at most two children** (commonly called **left** and **right**).  
- A **k‑ary tree** is a tree where each node has up to _k_ children; a binary tree is the case where _k = 2_.
![Binary Trees 4](/images/binary-trees4.png)

### Common Binary Tree “Types” (descriptive labels)

- **Perfect**: Every **internal** node has **exactly two** children **and** all leaves are at the **same depth**.
![Binary Trees 5](/images/binary-trees5.png)  

- **Complete**: All levels are **completely filled** except possibly the **last**, and the last level’s nodes are as **far left as possible**. 
![Binary Trees 6](/images/binary-trees6.png)  

- **(Left-)Incomplete example**: A non-complete tree where the lowest level leaves are not as far left as possible. 
![Binary Trees 7](/images/binary-trees7.png)  

- **Balanced**: For **every** node, the heights of left vs right subtrees differ by **no more than 1**.  
![Binary Trees 8](/images/binary-trees8.png)  

- **Imbalanced**: Violates the above height condition.  
![Binary Trees 9](/images/binary-trees9.png)  

- **Full (a.k.a. proper, 2-tree)**: Every **non-leaf** node has **exactly two** children.
![Binary Trees 10](/images/binary-trees10.png)  

> These are all still binary trees — the “type” words are adjectives that describe extra properties.

---

## 3) Why Binary Trees? (Applications)
- Storing/manipulating **hierarchical data** (e.g., file systems, game scenes).  
- Making information easier to **search**.  
- Managing **sorted** data (see **Binary Search Trees**).  
- **Image compositing** in graphics.  
- **Routing** algorithms.  
- **Multi‑stage decision making** (e.g., game AI decision trees).  
- Examples: **Chess algorithms**, **3‑D video games**, **document storage in memory**.

---

## 4) Binary Search Trees (BST)

A **BST** is a **Binary Tree with an ordering rule** on every node:

- Values in the **left** subtree are **\<** the node’s value.  
- Values in the **right** subtree are **≥** the node’s value.  
- **Every** node must satisfy this property (recursively).
![Binary Trees 11](/images/binary-trees11.png)  

**Why BSTs?** When reasonably balanced, operations like **search** and **insert** run in **O(log n)** time (because the search space roughly halves at each step).

> Note: Unbalanced BSTs can degrade to **O(n)** in the worst case.

---

## 5) Core Terminology (quick reference)
- **Height** of a node: number of edges on the **longest path** from that node down to a leaf.  
- **Depth** of a node: number of edges from the **root** to that node.  
- **Level**: nodes with the same **depth**.  
- **Subtree**: a node and all its descendants.

---

## 6) Implementing Binary Trees (Python)

### Node structure
```python
class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def __repr__(self):
        return f"Node({self.value!r})"
```

### In Class Example
```js
/*
NODE CLASS IMPLEMENTATION

- INSERT method
compares the value of the node to the parent node
and decides whether to add it as a left node or right node.

NB: if the node is greater than the parent node,
it is inserted as a right node; otherwise,​ it’s inserted left.

- FIND method
while searching for a value in the tree,
we need to traverse the node from left to right and with a parent.

*/


class TreeNode {
  constructor(data) {
    // value of the node
    this.data = data
    // left child
    this.left = null
    // right child
    this.right = null
  }

  insert(data) {
    if (this.data) {
      if (data <= this.data) {
        if (!this.left) {
          this.left = new TreeNode(data)
        } else {
          this.left.insert(data)
        }
      } else if (data > this.data) {
        if (!this.right) {
          this.right = new TreeNode(data)
        } else {
          this.right.insert(data)
        }
      }
    } else {
      this.data = data
    }
  }

  search(value) {
    if (value < this.data) {
      if (!this.left) {
        return `${value} is not found`
      }
      return this.left.search(value)
    } else if (value > this.data) {
      if (!this.right) {
        return `${value} is not found`
      }
      return this.right.search(value)
    } else {
      return `${this.data} is found`
    }
  }
}

class SumLeafNodes {
  /*
  Class for finding the sum of all leaf nodes of a binary tree
  */
  constructor() {
    // initializing total to 0
    this.total = 0
  }

  sumLeafNodes(tree) {
    /*
    Recursive function for finding the sum of all leaf nodes of a binary tree
    */
    if (!tree) {
      return
    } else if (!tree.left && !tree.right) {
      // if tree has no left child and no right child then add its data to total
      this.total = this.total + tree.data
    } else {
      // recursively traverse through the tree
      this.sumLeafNodes(tree.left)
      this.sumLeafNodes(tree.right)
    }

    return this.total
  }
}

 function printTree(node, prefix = '', isLeft = true) {
    if (node === null) {
      return
    }

    // Print right child first (appears on top)
    printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)

    // Print this node
    console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data)

    // Print left child (appears below)
    printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)
  }

tree = new TreeNode(27)
tree.insert(14)
tree.insert(35)
tree.insert(31)
tree.insert(10)
tree.insert(9)
tree.insert(17)
tree.insert(15)



printTree(tree)

const obj = new SumLeafNodes()
const sum = obj.sumLeafNodes(tree)
console.log(sum)
```


### Depth‑First Traversals (recursive)
```python
def preorder(node):
    """Root, Left, Right"""
    if not node:
        return []
    return [node.value] + preorder(node.left) + preorder(node.right)

def inorder(node):
    """Left, Root, Right"""
    if not node:
        return []
    return inorder(node.left) + [node.value] + inorder(node.right)

def postorder(node):
    """Left, Right, Root"""
    if not node:
        return []
    return postorder(node.left) + postorder(node.right) + [node.value]
```

### Breadth‑First Traversal (level‑order)
```python
from collections import deque

def level_order(root):
    if not root:
        return []
    q = deque([root])
    order = []
    while q:
        node = q.popleft()
        order.append(node.value)
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
    return order
```

### Example tree
```python
#        8
#      /   \
#     3     10
#    / \      \
#   1   6       14
#      / \     /
#     4   7    13

root = Node(8,
    left=Node(3,
        left=Node(1),
        right=Node(6, left=Node(4), right=Node(7))
    ),
    right=Node(10,
        right=Node(14, left=Node(13))
    )
)

print("preorder:", preorder(root))   # [8, 3, 1, 6, 4, 7, 10, 14, 13]
print("inorder:", inorder(root))     # [1, 3, 4, 6, 7, 8, 10, 13, 14]
print("postorder:", postorder(root)) # [1, 4, 7, 6, 3, 13, 14, 10, 8]
print("level:", level_order(root))   # [8, 3, 10, 1, 6, 14, 4, 7, 13]
```

---

## 7) BST Operations (Python)

```python
class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        """Insert value into the BST (iterative)."""
        new_node = Node(value)
        if not self.root:
            self.root = new_node
            return

        cur = self.root
        while True:
            if value < cur.value:
                if cur.left:
                    cur = cur.left
                else:
                    cur.left = new_node
                    return
            else:  # value >= cur.value goes to the right
                if cur.right:
                    cur = cur.right
                else:
                    cur.right = new_node
                    return

    def search(self, value):
        """Return True if value exists in the BST, else False."""
        cur = self.root
        while cur:
            if value == cur.value:
                return True
            cur = cur.left if value < cur.value else cur.right
        return False

    @staticmethod
    def from_iterable(values):
        bst = BST()
        for v in values:
            bst.insert(v)
        return bst
```

**Usage**
```python
bst = BST.from_iterable([8, 3, 10, 1, 6, 14, 4, 7, 13])
print(bst.search(7))   # True
print(bst.search(2))   # False
```

> Average time: **search/insert = O(log n)**, **space = O(h)** (height). Worst‑case time degrades to **O(n)** if the tree becomes a chain.

---

## 8) Checking Common Properties

### Height and balance
```python
def height(node):
    if not node:
        return -1  # by convention: empty tree height = -1, leaf height = 0
    return 1 + max(height(node.left), height(node.right))

def is_balanced(node):
    """Balanced if every node's subtrees differ in height by no more than 1."""
    def helper(n):
        if not n:
            return (True, -1)
        lb, lh = helper(n.left)
        rb, rh = helper(n.right)
        balanced = lb and rb and abs(lh - rh) <= 1
        return (balanced, 1 + max(lh, rh))

    return helper(node)[0]
```

### Full tree
```python
def is_full(node):
    if not node:
        return True
    if (node.left is None) != (node.right is None):  # exactly one child
        return False
    return is_full(node.left) and is_full(node.right)
```

### Perfect tree
A perfect tree with height `h` has exactly `2^(h+1) - 1` nodes.

```python
def count_nodes(node):
    if not node:
        return 0
    return 1 + count_nodes(node.left) + count_nodes(node.right)

def is_perfect(node):
    h = height(node)
    expected = (1 << (h + 1)) - 1
    return count_nodes(node) == expected
```

### Complete tree (level‑order check)
```python
from collections import deque

def is_complete(root):
    if not root:
        return True
    q = deque([root])
    seen_null = False
    while q:
        node = q.popleft()
        if node:
            if seen_null:
                return False
            q.append(node.left)
            q.append(node.right)
        else:
            seen_null = True
    return True
```

---

## 9) Practice Prompts
- Build a BST from a list and print **inorder** (should appear sorted).  
- Write `min_value(root)` and `max_value(root)` for a BST.  
- Implement `delete(value)` for BST (handle 0, 1, and 2‑child cases).  
- Given a list of numbers, compare the **height** of the BST built from them to the height of a **balanced** tree of the same size.  
- Convert a **sorted array** to a **height‑balanced BST** (divide‑and‑conquer).

---

## 10) Key Takeaways
- Binary trees are versatile structures for **hierarchy** and **search**.  
- **BSTs** add an ordering rule that enables **logarithmic** operations when balanced.  
- Structural adjectives (perfect, full, complete, balanced) describe **extra properties** that are useful for reasoning about shape and performance.  
- Practice traversals and property checks to build fluency.