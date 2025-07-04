# Objects Revision Tasks

---
🔄 1. Quick Recall
Answer in your own words (don’t peek at notes!):

a. What does the this keyword refer to inside an object method? 
    👉 this refers to the object that the method belongs to — the one that’s calling the method.
```js
    const dog = {
  name: "Scout",
  bark: function() {
    console.log(`${this.name} says woof`);
  }
};

dog.bark(); // Scout says woof
```
Here, `this.name` points to `dog.name`.


b. How do you delete a property from an object?
     Use the delete keyword:
```js
const book = {
  title: "Invisible Women",
  author: "Caroline Criado-Perez"
};

delete book.author; // removes the 'author' property
console.log(book); // { title: "Invisible Women" }
```

✏️ 2. Code Challenge
Create an object called student with the following:
A name property (string)
A marks property (array of 3 numbers)
A method called average that:
calculates and returns the average of the 3 marks
```js
const student = {
  name: "Alex",
  marks: [63, 75, 59],
  average: function() {
    let total = 0;
    for (let mark of this.marks) {
      total += mark;
    }
    return total / this.marks.length;
  }
};

console.log(student.average()); // Output: 65.666...
```
---