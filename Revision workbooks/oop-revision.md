# OOP revision Tasks

---
🧠 1. Quick-Fire Concepts
Q1. What are the four main principles of Object-Oriented Programming?
- Encapsulation, Abstraction, Inheritance, Polymorphism

Q2. What does the constructor method do in a class?
- constuctor is a method used inside a class that runs when an instance is created - sets up the data

Q3. What is the purpose of super() in a subclass?
- does it inherit from the main class into the subclass?

Q4. What does the this keyword refer to inside a method?
- focuses on the current object

Q5. What’s the difference between a class and an instance?
- is the class like the general version (make, model, year)
whereas
- the instance is when the values are added (ford, mondeo, 2013)

🔍 2. Code Check: What's the Output?
Q6. What will this log to the console?
```js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return `${this.title} by ${this.author}`;
  }
}

const myBook = new Book("1984", "George Orwell");
console.log(myBook.describe());
// "1984 by George Orwell"
```

🧪 3. Mini Tasks: Fix the Bug
Q7. Fix the typo so this code works:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const kitty = new Cat("Whiskers");
kitty.speak();
kitty.meow(); // ← typo!
```

🛠️ 4. Build It: Your Turn
Q8. Create a class called Laptop with:
- properties: brand, model, year
- method: getDetails() that returns a string like Dell XPS 2020

Q9. Create a subclass GamingLaptop that extends Laptop and adds:
- gpu as a property
- method: canRunGame(game) that logs Yes! if gpu is "RTX 3080", else "Maybe not..."
```js
class Laptop {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `${brand}, ${model}, ${year}`
    }
}

class GamingLaptop extends Laptop {
   constructor(brand, model, year, gpu) {
    super(brand, model, year);
    this.gpu = gpu;
   }
   canRunGames(game) {
    
   } 
}
```