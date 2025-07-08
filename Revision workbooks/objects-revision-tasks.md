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

✅ Day 3 Revision: JavaScript Objects
🔄 1. Quick Recall
Answer in your own words:

a. What is an object method?
   ✅ A method is a function stored as a property of an object.
    It’s how an object can perform actions.
b. How do you call (run) a method inside an object?
   create the function within the object itself???
   ❓How do you run a method once it exists in an object?
✅ You run it like this: objectName.methodName()

   ✏️ 2. Code Challenge
Create an object called musicPlayer with:
- a song property (string)
- a play method that logs:
- "Playing [song name]..."
- (use musicPlayer.song inside the method)
- Then run the method.
```js
//Create an object called musicPlayer with:
let musicPlayer = {
  //- a song property (string)
  song: "Back to Black",
  //- a play method that logs:
  play: function() {
    //- "Playing [song name]..."
    console.log(`Playing ${musicPlayer.song}!`)
  }
}
//- (use musicPlayer.song inside the method)
//- Then run the method.
musicPlayer.play(); //Playing "Back to Black!"
```


---

🔄 1. Quick Recall
Answer in your own words:

a. What’s the difference between a property and a method in an object?
   a property is a part that makes up an object e.g. the name property of a 'person' object. The object can have many properties that make up the object
   A property holds data (like a name, age, or colour).
   A method is a function stored inside the object — it performs actions.

b. How would you add a new property to an existing object?
   // I don't know- need a reminder lesson

✏️ 2. Code Challenge
Create an object called kettle with:
- a brand property (string)
- a boil method that logs:- "Boiling water with the [brand] kettle..."
(Use kettle.brand inside the method)
Then:
- Add a new property called colour and set it to "silver"
- Log the entire object to the console to check your changes 
```js
// Create an object called kettle with:
const kettle = {
  brand: "morphy richards",
  boil: function() {
    console.log(`Boiling water with the ${kettle.brand} kettle...`);
  }
}
// Add a new property called colour and set it to "silver"
kettle.colour = "silver"; // add new property

// Log the entire object to the console to check your changes
console.log(kettle); // check the full object

```