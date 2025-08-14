// Node is where data is stores in the linked list
// each node has a pointer - this references to the next node in the list
// the last node points to null
class Node {
    // constructor initializes the node with data and sets the next pointer to null
  constructor(data = null, nextNode = null) {
    this.data = data; // data stored in the node
    this.next = nextNode; // pointer to the next node in the list
    this.next = null; // by default, the next pointer is set to null
  }
    // method to get the data stored in the node
    // return the data stored in this node
    getData() {
    return this.data;
  }
    // method to get the next node
    // return the next node in the list
    getNext() {
    return this.nextNode;
  }
    // method to set reference to the next node
    // set the next pointer to a new node
  setNext(newNext) {
    this.next = newNext;
  }
}

// linked list
// implement following linked list methods
// insert (returns the new head of the list)
// size (returns number of nodes in the list)
// search (returns the node with the given value, or null if not found)
// delete (removes the node with the given value)

class LinkedList{
    constructor(head = null){
        this.head = head; // head of the linked list (the first node AKA entry point)
    }
    // convert the linked list to a string for easy viewing
    toString() {
        let node = this.head; // start from the head of the list
        const nodes = []; // array to hold the data for display
        while (node != null) { // traverse the list until we reach the end
            nodes.push(str(node.data)); // add each node's data from each node to the array
            node = node.nextNode(); // move to the next node
        }
        node.push(null); // add null to the end of the array to indicate the end of the list
        return nodes.join(' -> '); // join the array into a string with ' -> '
    }
    // insert a new node with the given data at the beginning of the list
    insert(data) {
        const newNode = Node(data); // create a new node with the given data
        newNode.setNext(this.head); // set the new node's next pointer to the current head
        this.head = newNode; // update the head to point to the new node
    }
    // return/ get the size of the linked list
    size() {
        let current = this.head; // start from the head of the list
        let count = 0; // initialize a counter to zero
        while (current) { // traverse the list until we reach the end
            count++; // increment the counter for each node
            current = current.getNext(); // move to the next node
        }
        return count;
    }
    // search for a node with the given value
    search(data) {
        let current = this.head; // start from the head of the list
        let found = false; // flag to indicate if the node is found
        while (current && found == false) { // traverse the list until we reach the end
            if (current.getData() === data) { // check if the current node's data matches the search value
                found = true; // set the flag to true if the node is found
            }
            else {
                current = current.getNext(); // move to the next node
            }
        }
        if (current === null) {
            throw new ValueError("Data not in the list")
            return current; // return the current node if found, otherwise return null
        }
    }
    // delete a node with the given value
    delete(data) {
        const current = this.head; // start from the head of the list
        const previous = null; // initialize a variable to keep track of the previous node
        const found = false; // flag to indicate if the node is found
        while (current && found === false) { // traverse the list until we reach the end
            if (current.getData() === data) { // check if the current node's data matches the value to delete
                if (previous) { // if there is a previous node, set its next pointer to skip the current node
                    found = true
                
                } else { // if there is no previous node, it means we are deleting the head
                    previous = current;
                    current = current.getNext(); // move to the next node
                }
            }
            if (current === null) { // if we reach the end of the list without finding the node
                throw new ValueError("Data not in the list") // if we reach the end of the list without finding the node, throw an error
            }
        }
    }
}

/*
TASK

Find the length of a linked list.
A user should enter the elements of the linked list to create and then displays its length.

Steps:
1. Create a class Node.
2. Create a class LinkedList.
3. Define method append inside the class LinkedList to append data to the linked list.
4. Define method length.
5. The method length uses a loop to iterate over the nodes of the list to calculate its length.
6. Create an instance of LinkedList and prompt the user for its elements.
7. Display the length of the list by calling the method length.

*/