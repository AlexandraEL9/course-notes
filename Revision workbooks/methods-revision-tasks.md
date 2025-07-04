# Methods Revision Tasks

---
🧪 1. Quick Recall (Spaced Retrieval)
Q: What does .trim() do?
Type your answer in your own words, then check below: Removes white space from start and end of string

🔁 2. Spot the Error
Q: What’s wrong with this line?
```js
let result = "Hello!".includes("hello").toUpperCase();
```
includes makes a boolean- can't turn a boolean to uppercase

3. Complete the following:
```js
let sentence = "Cats are amazing!";
let word = sentence.includes("amazing");
console.log(word); // true

// explabation: if it's returning true then it's a method that returns a boolean so could be includes.
```

🛠 4. Code Writing Task
Write a short program that:

Stores a string: " I like JavaScript. "
Trims the whitespace
Converts it to lowercase
Checks if it includes the word "javascript"
✅ Bonus: Print all three steps to the console.
```js
// Stores a string: " I like JavaScript. "
let string = " I like JavaScript. "; 
//Trims the whitespace 
let trimmedString = string.trim();
//Converts it to lowercase
let lowercaseString = trimmedString.toLowerCase();
//Checks if it includes the word "javascript"
let included = lowercaseString.includes("javascript");

//Bonus: Print all three steps to the console.
console.log(trimmedString);
console.log(lowercaseString);
console.log(included);
```

🔀 5. Match Method to Purpose
Match the method to its correct description:

| Method             | Description                      |
| ------------------ | -------------------------------- |
| A. `toUpperCase()` | 1. Cut out part of a string      |
| B. `slice()`       | 2. Make everything uppercase     |
| C. `includes()`    | 3. Check if string contains text |
A,2
B,1
C,3

---