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
## Number Methods
✅ 1. Multiple Choice: Understanding Math.floor()
What will Math.floor(-3.9) return?

A. -3
**B. -4**
C. 3
D. -5

🎲 2. Coding Task: Random Whole Number 1–10
Write a function called rollTen that returns a random whole number between 1 and 10, inclusive.
```js
function rollTen() {
  return Math.floor(Math.random() * 10) + 1;
}
rollTen();
```

💷 3. Format with .toFixed()
You are building a receipt system. You have this price:
```js
let price = 12.5;
```
Format the price so it logs as:
➡️ "£12.50"
```js
let price = 12.5;
console.log(`£${price.toFixed(2)}`); //  "£12.50"
```

🔍 4. Debugging Challenge
What’s wrong with this code, and how would you fix it?
```js
let number = 3.499;
let rounded = number.toFixed;
console.log(rounded(2));
```
round will round to the nearest whole integer so no decimal places perhaps - also the (2) should be with the toFixed() to go to 2dp.
Also no use of Math to go to math js toolbox

It depends on what is wanted?
If rounding to nearest whole number:
```js
let number = 3.499;
console.log(Math.round(number));    //3
```
If fixing to2dp
```js
let number = 3.499;
console.log(number.toFixed(2)); // "3.50"
```

📊 5. Coding Task: Highest and Lowest
Given these prices:
```js
let prices = [4.75, 8.99, 2.5, 10.25];
```
Write code to:
- Find the highest and lowest prices
Log them in this format:
```yaml
Cheapest: £2.50
Most expensive: £10.25
```
```js
let prices = [4.75, 8.99, 2.5, 10.25];

console.log(`Cheapest: £${Math.min(4.75, 8.99, 2.5, 10.25).toFixed(2)}`);
console.log(`Most Expensive: £${Math.max(4.75, 8.99, 2.5, 10.25).toFixed(2)}`);
```
2.5 - I want to make £2.50- adde toFixed

---

## String Methods Revision
🔡 1. Multiple Choice: includes()
What will this log?
```js
let message = "The secret code is hidden";
console.log(message.includes("Code"));
```
A. true
**B. false** - due to capital C in console.log "Code".
C. "true"
D. Error

✂️ 2. Coding Task: Slice the Word
You’re given the string:
```js
let insect = "Caterpillar";
```
🧠 Task:
Use .slice() to extract just the "pillar" part and log it.
```js
let insect = "Caterpillar";
console.log(insect.slice(5, 11));
```

✨ 3. Transform & Clean
Given this string:
```js
let messy = "   Warning! Malware detected!   ";
```
Write code to:
- Remove the extra spaces from both ends.
- Convert it to all uppercase.
- Log the final cleaned string.
```js
let messy = "   Warning! Malware detected!   ";
let trimmed = messy.trim();
let final = trimmed.toUpperCase();

console.log(final);
```

📍 4. Predict the Output: .indexOf()
What will this return?
```js
let sentence = "I love pancakes and waffles";
console.log(sentence.indexOf("waffles"));
// 20
```
🔧 5. Mini Challenge: String Repair
You're given a sentence with a small typo:
```js
let typo = "Please do not ajust the volume";
```
🧠 Task:
Use a string method to correct "ajust" to "adjust" and log the fixed sentence.
```js
let typo = "Please do not ajust the volume";
// use .replace()
let fixed = typo.replace("ajust", "adjust");
console.log(fixed); // "Please do not adjust the volume"
```

---