# JavaScript - Object Oriented Programming

## Table of Contents
- [OOP in JavaScript](#oop-in-javascript)
  - [Learning Objectives](#learning-objectives)
  - [What is OOP?](#what-is-oop)
    - [Key Principles of OOP](#key-principles-of-oop)
- [Objects and Classes](#objects-and-classes)
  - [What is an Object?](#what-is-an-object)
    - [Dog Object Example](#example-1-a-dog-object)
    - [Movie Object Example](#example-2-a-movie-object)
    - [Product Object Example](#example-3-a-product-object-in-an-online-store)
    - [Student Object Example](#example-4-a-student-object)
  - [Why Classes?](#why-classes)
    - [this Keyword](#what-does-this-mean)
    - [Class Syntax Example](#syntax-example)
    - [Car Class Example](#car-example)
- [Encapsulation](#encapsulation)
  - [Private Fields Example](#example-with-private-fields-es6)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)
- [Exercise](#✏️-exercise)
- [SOLID Principles](#solid-principles)
- [Summary](#summary)

---

# OOP in JavaScript

## Learning Objectives
By the end of this session, you should be able to:
- Understand Object-Oriented Programming (OOP) concepts.
- Practice OOP in JavaScript using objects, classes, and principles.

---

## What is OOP?
OOP stands for **Object-Oriented Programming**. It's a paradigm based on **objects** that contain **data (properties)** and **behavior (methods)**.

### Key Principles of OOP
| Principle      | Explanation |
|----------------|-------------|
| **Encapsulation** | Bundling data and methods together; restricts access to internal details. |
| **Abstraction**   | Hides complexity and shows only relevant parts to the user. |
| **Inheritance**   | One class can inherit the properties and methods of another. |
| **Polymorphism**  | Same method name can behave differently on different classes. |

---

## Objects and Classes

### What is an Object?
An object is a structure that holds data and behavior as key-value pairs.

| Concept      | Description                            | Example                   |
| ------------ | -------------------------------------- | ------------------------- |
| **Property** | Describes the object's characteristics | `brand: "Toyota"`         |
| **Method**   | Describes what the object can do       | `drive: function() {...}` |

**Example 1: A Dog Object**
```js
const dog = {
  name: "Buddy",
  breed: "Labrador",
  age: 3,
  bark: function () {
    console.log("Woof!");
  }
};
```
- Data (Properties): `name`, `breed`, `age
- Behaviour (Method): `bark()`

**Example 2: A Movie Object**
```js
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  play: function () {
    console.log("Playing movie...");
  }
};
```
- Data (Properties): `title`, `director`, `year`
- Behaviour (Method): `play()`

**Example 3: A Product Object in an Online Store**
```js
const product = {
  name: "Wireless Headphones",
  price: 79.99,
  inStock: true,
  addToCart: function () {
    console.log("Added to cart!");
  }
};
```
- Data (Properties): `name`, `price`, `inStock`
- Behaviour (Method): `addToCart()`

**Example 4: A Student Object**
```js
const student = {
  name: "Aisha",
  age: 21,
  enrolled: true,
  study: function () {
    console.log("Studying...");
  }
};
```
- Data (Properties): `name`, `age`, `enrolled`
- Behaviour (Method): `study()`


### Why Classes?
Instead of writing out 100 similar objects manually, we use **classes** to create **multiple instances**.

| Term            | Definition                                                                                                          | Example in Context                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Class**       | A **template or blueprint** for creating objects with the same structure and behavior.                              | `class Student { ... }` defines a blueprint for students.            |
| **Instance**    | A **specific object** created using a class. Each instance has its own data.                                        | `const student1 = new Student("Alice", "Adams")`                     |
| **Constructor** | A **special method** inside a class that runs when a new instance is created. It sets up the object’s initial data. | `constructor(first_name, last_name) { ... }` initializes properties. |

**What does `this` mean?**

`this` refers to the current object — the specific instance that is using the code.

"`this` is the object doing the work."

Inside a class method (like the constructor), `this` points to the new object being created or the object calling the method.

| Context                  | `this` refers to...                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| Inside a **constructor** | The **new object being created**                                                                 |
| Inside a **method**      | The **object calling the method**                                                                |
| Outside a class (global) | The **global object** (e.g., `window` in browsers) — but this is context-sensitive in JavaScript |



### Syntax Example:
```js
class Student {
  constructor(first_name, last_name) {
    this.first_name = first_name
    this.last_name = last_name
  }

  greet() {
    return `Hello, ${this.first_name} ${this.last_name}`;
  }
}

const student1 = new Student("Alice", "Adams");
console.log(student1.greet()); // Hello, Alice Adams
```

Car example
1. Create a `Car` class with:
    - make
    - model
    - year
    - a method: `display_car_info()`
```js
class Car{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayCarInfo = ()=>{
        return `${this.make} ${this.model} ${this.year}`
    }
}

const car1 = new Car("Toyota", "Corolla", 2020)
const car2 = new Car("Ford", "Mondeo", 2003)
console.log(car1.displayCarInfonfo())
console.log(car2.displayCarInfo())
```

---

## Encapsulation

Encapsulation = Variables + Methods inside a single unit (a class).

### Why it's useful:
- Reduces complexity
- Increases security
- Improves maintainability

### Example with Private Fields (ES6+):
```js
class Person {
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const person = new Person("Alice", 30);
console.log(person.getAge()); // 30
// console.log(person.#age); ❌ Error: private field
```

---

##  Inheritance

Inheritance allows a class to use properties and methods from another class.

### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some sound";
  }
}
// subclass (child class) inheriting from animal
class Dog extends Animal {
  makeSound() {
    return "Bark";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Meow";
  }
}

const pet = new Dog("Rover");
const pet = new Cat("Mittens");
console.log(pet.makeSound()); // Bark
```

---

## Polymorphism

Polymorphism allows the **same method name** to behave differently depending on the class.

### Example:
```js
class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  calculateArea() {
    return "π × r²";
  }
}

class Square extends Shape {
  calculateArea() {
    return "side × side";
  }
}
```

---

## ✏️ Exercise

1. Create a `Car` class with:
    - make
    - model
    - year
    - a method: `display_car_info()`

2. Create an `ElectricCar` subclass that adds:
    - batteryCapacity (kWh)
    - method: `estimate_range()` (5 km per kWh)
```js
// 1. Create Car Class with make, model, year
class Car{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayCarInfo = ()=>{
        return `${this.make} ${this.model} ${this.year}`
    }
}

// 2. Create ElectricCar
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity
  }
  estimateRange() {
    return this.batteryCapacity * 5;
  }
}

// 3. Create and test instances
const car1 = new Car("Toyota", "Corolla", 2020) //
const car2 = new Car("Ford", "Mondeo", 2003)
// electric car example
const electricCar1 = new ElectricCar("Tesla", "Model E", 2024, 75);
console.log(car1.displayCarInfo())
console.log(car2.displayCarInfo())
// show electric car info
console.log(electricCar1.displayCarInfo()); // Tesla Model E 2024
// show estimated range of electric car
console.log(`Estimated Range: ${electricCar1.estimateRange()} km`); // 375 km

```

---

## SOLID PRINCIPLES
---

## Summary

- OOP helps us **organise**, **reuse**, and **extend** code.
- Use **classes** and **inheritance** to reduce duplication.
- Use **encapsulation** and **abstraction** for clean APIs.
- Use **polymorphism** to allow flexible method reuse.