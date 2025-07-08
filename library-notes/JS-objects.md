# JavaScript Objects

## Table of Contents
- [What Are Objects?](#what-are-objects)
- [Access Properties in Objects](#access-properties-in-objects)
  - [Dot Notation](#dot-notation)
  - [Bracket Notation](#bracket-notation)
  - [Accessing All Keys or Values](#accessing-all-keys-or-values)
- [Add and Delete Properties in Objects](#add-and-delete-properties-in-objects)
  - [Add a Property](#add-a-property)
  - [Delete a Property](#delete-a-property)
- [Nested Objects](#nested-objects)
  - [Accessing Nested Objects' Data](#accessing-nested-objects-data)
- [Object Methods](#object-methods)
  - [Define and Call Methods](#define-and-call-methods)
  - [Object.keys()](#objectkeys)
  - [Object.values()](#objectvalues)
  - [Object.entries()](#objectentries)
  - [hasOwnProperty()](#hasownproperty)
  - [Library Inventory Challenge](#library-inventory-challenge)

---

## What are Objects?
Objects store data in key-value pairs.

```js
const book = {
  title: "Invisible Women",
  author: "Caroline Criado-Perez",
  year: 2019
};
console.log(book.title); // "Invisible Women"
```

---

### Access Properties in Objects
🔹 1. Object Basics: Key–Value Pairs
Objects store data in key–value pairs.
```js
const person = {
  name: "Alex",
  age: 40
};
```
In this object:

"name" is a key

"Alex" is its value

"age" is another key, and 40 is its value

#### Accessing Values — Two Ways
**Dot Notation (most common)**
**Bracket notation**

#### Dot Notation
```js
console.log(person.name); // Alex
console.log(person.age);  // 40
```
- Use when the key is a valid identifier (no spaces or symbols like -).
- Clean and easy to read.

#### Bracket Notation
```js
console.log(person["name"]); // Alex
console.log(person["age"]);  // 40
```
Use bracket notation when:
- The key has spaces or hyphens
- The key is stored in a variable

**Example:**
```js
const key = "name";
console.log(person[key]); // Alex
```

#### Accessing All Keys or Values
You can use special built-in methods:
```js
const keys = Object.keys(student);   // ["name", "grades", "contact"]
const values = Object.values(student); // ["Mei", [70, 85, 92], {…}]
```
Useful when looping over an object

### Add and Delete Properties in Objects
🧠 Mini Lesson: Adding a New Property
**Syntax:**
```js
objectName.newProperty = value;
```

**Example:**
```js
car.colour = "red";
```
That adds a new colour property to the car object.

**Further Example:**
```js
const kettle = {
  brand: "morphy richards",
  boil: function() {
    console.log(`Boiling water with the ${kettle.brand} kettle...`);
  }
};
kettle.colour = "silver"; // add new property

console.log(kettle); // check the full object

// Output example
{
  brand: "morphy richards",
  boil: ƒ,
  colour: "silver"
}
```

🧹 Deleting a Property from an Object
✅ Syntax:
```js
delete objectName.propertyName;
```
This removes the property from the object — permanently.

🔍 Example:
```js
const cat = {
  name: "Luna",
  age: 3,
  colour: "grey"
};

delete cat.age;

console.log(cat);

// Output example
{
  name: "Luna",
  colour: "grey"
}

```


### Nested Objects

Objects can contain other objects or arrays.

```js
let girl = {
  name: "Ana",
  age: 23,
  friends: ["Mei", "Sabina", "Nuala"],
  address: {
    number: 123,
    street: "Cambridge Road",
    city: "London"
  }
};
console.log(girl.address.city); // "London"
```

#### Accessing Nested Objects' Data

Objects can contain:

- Other objects
- Arrays
- Or both

You can **chain dot and bracket notation** as needed.

🔸 **Example:**
```js
const student = {
  name: "Mei",
  grades: [70, 85, 92],
  contact: {
    email: "mei@example.com",
    phone: "123-4567"
  }
};
```
✅ Access nested data:
```js
console.log(student.grades[1]);       // 85
console.log(student.contact.email);   // "mei@example.com"
console.log(student["contact"]["phone"]); // "123-4567"
```

---

### Object Methods

A function inside an object is called a method.

```js
let girl = {
  name: "Ana",
  sayHello: function() {
    console.log("Hola Amigas!");
  }
};

girl.sayHello(); // "Hola Amigas!"
```

### Object Methods
Objects store key–value pairs. Methods help you explore, loop, or modify them.
A method is just a function stored as a value inside an object.
| Method                | What it does                         | Example                                  |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| `Object.keys(obj)`    | Returns array of keys                | `Object.keys({a:1, b:2})` → `["a", "b"]` |
| `Object.values(obj)`  | Returns array of values              | `Object.values({a:1, b:2})` → `[1, 2]`   |
| `Object.entries(obj)` | Returns array of \[key, value] pairs | `Object.entries({a:1})` → `[["a", 1]]`   |
| `hasOwnProperty()`    | Checks if key exists in object       | `obj.hasOwnProperty("a")` → `true`       |

**Basic Structure**
```js
const dog = {
  name: "Scout",
  speak: function() {
    console.log("Woof!");
  }
};

dog.speak(); // "Woof!"
```
**Explanation**

- speak is a method of the dog object.
- It's defined like a property, but the value is a function.
- We call it with dog.speak() — just like we’d access a normal property, but we add () to run it.

✅ Object Properties vs Methods
| Name     | Example       | What it does                  |
| -------- | ------------- | ----------------------------- |
| Property | `dog.name`    | Stores a value                |
| Method   | `dog.speak()` | Performs an action (function) |

**Practice**
```js
const robot = {
  model: "T1000",
  greet: function() {
    console.log(`Beep! I am model ${robot.model}!`);
  }
};

robot.greet(); // "Beep! I am model T1000"
```
```js
const game = {
  title: "tic tac toe",
  start: function() {
    console.log(`Starting the game: ${game.title}`)
  }
};
game.start(); // "Starting the game: tic tac toe"
```

#### **Object.keys()**
Purpose: Get an array of all the keys in an object.

Syntax:
```js
Object.keys(object)
```
Example:
```js
const person = { name: "Alex", age: 40 };
console.log(Object.keys(person)); // ["name", "age"]
```
📝 Notes:
- Returns an array of strings (the property names).
- Useful for looping through an object using forEach or for...of.

🧠 TASK:
Use Object.keys() on this object and log the result:
```js
const planet = { name: "Earth", moons: 1, habitable: true };
console.log(Object.keys(planet)); // ["name", "moons", "habitable"]
```
- Object.keys(planet) returns an array of all the keys (property names) in the object.
- The order reflects the order the keys were defined.

#### **Object.values()**
Purpose:
Returns an array of all the values in an object.

Syntax:
```js
Object.values(object)
```
Example:
```js
const user = { name: "Alex", age: 40, isAdmin: false };
console.log(Object.values(user)); // ["Alex", 40, false]
```
📝 Notes:
- The returned array contains the values in the same order as the keys.
- Very useful when you only care about the data, not the keys.
- Often paired with .forEach() or .includes().

🧠 TASK:
Use Object.values() to get the values from this object and log them:
```js
const book = { title: "Matilda", author: "Roald Dahl", pages: 240 };
console.log(Object.values(book)); // ["Matilda", "Roald Dahl", 240]
```

#### **Object.entries()**
Purpose:
Returns an array of [key, value] pairs from an object.

Syntax:
```js
Object.entries(object)
```
Example:
```js
const car = { brand: "Toyota", year: 2020 };
console.log(Object.entries(car));
// [["brand", "Toyota"], ["year", 2020]]
```
📝 Notes:
- Each entry is a 2-item array: [key, value].
- You can loop over entries using .forEach() or for...of.
- Useful for transforming or displaying object data.

🧠 TASK:
Use Object.entries() to log all the entries of this object:
```js
const player = { name: "Sam", score: 42, level: 3 };
console.log(Object.entries(player)); // [["name", "Sam"], ["score", 42], ["level", 3]]
```
- Object.entries() turns the object into an array of key–value pairs.
- Each pair is in its own sub-array.

💬 Bonus idea: Loop over the entries and log a sentence like "name: Sam".
```js
const player = { name: "Sam", score: 42, level: 3 };

for (let key in player) {
  console.log(`${key}: ${player[key]}`);
}
// "name: Sam"
//"score: 42"
//"level: 3"
```

🧠 **Object Methods Challenge: Library Inventory**
📚 Scenario:
You’re building a simple library tracking system. You’ve got a book object, and you want to extract and display some key information using different object methods.

🔧 Your Task:
Given the following object:
```js
const book = {
  title: "Goodnight Moon",
  author: "Margaret Wise Brown",
  year: 1947,
  available: true
};
```
1. Use Object.keys() to get and log all the property names.
2. Use Object.values() to get and log all the values.
3. Use Object.entries() to log key–value pairs in this format:

```js
const book = {
  title: "Goodnight Moon",
  author: "Margaret Wise Brown",
  year: 1947,
  available: true
};

// 1. Object.keys()
console.log(Object.keys(book)); // ["title", "author", "year", "available"]

// 2. Object.values()
console.log(Object.values(book)); // ["Goodnight Moon", "Margaret Wise Brown", 1947, true]

// 3. Object.entries()
console.log(Object.entries(book)); // [["title", "SGoodnight Moon"], ["author", "Margaret Wise Brown"], ["year", 1947], ["available", true]]

// 4. Add describe method
book.describe = function() {
  // your code here
  for (let key in book) {
  console.log(`${book.title} by ${book.author} (${book.year})`);
}
};

// Call the method
book.describe();
```


---