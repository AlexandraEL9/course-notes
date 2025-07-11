# Data-Type Methods
JavaScript data types like strings, arrays, objects, and numbers come with built-in methods — these are like mini-tools you can use to work with the data.
![Method Types Poster](/images/method-types-poster.png)
---
# 📚 Table of Contents

- [📚 Table of Contents](#📚-table-of-contents)
- [String Methods](#string-methods)
  - [.length](#length)
  - [.toUpperCase()](#touppercase)
  - [.toLowerCase()](#tolowercase)
  - [.includes()](#includes)
  - [.indexOf()](#indexof)
  - [.slice()](#slice)
  - [.trim()](#trim)
  - [.replace()](#replace)
  - [.charAt()](#charat)
  - [.split()](#split)
  - [.startsWith() / .endsWith()](#startswith-/-endswith)
- [Array Methods](#array-methods)
  - [.length](#length)
  - [.push() / .pop()](#push-/-pop)
  - [.shift() / .unshift()](#shift-/-unshift)
  - [.includes()](#includes)
  - [.indexOf()](#indexof)
  - [.slice() / .splice()](#slice-/-splice)
  - [.forEach()](#foreach)
  - [.map()](#map)
  - [.filter()](#filter)
  - [.reduce()](#reduce)
  - [.find() / .findIndex()](#find-/-findindex)
  - [.join()](#join)
  - [.reverse()](#reverse)
  - [.sort()](#sort)
- [Object Methods](#object-methods)
  - [Object.keys()](#objectkeys)
  - [Object.values()`](#`objectvalues)
  - [`Object.entries()](#objectentries)
  - [.hasOwnProperty()](#hasownproperty)
  - [Custom Object Methods](#custom-object-methods)
- [Number Methods](#number-methods)
  - [.toFixed(n)](#tofixed(n))
  - [Math.floor()](#mathfloor)
  - [Math.ceil()](#mathceil)
  - [Math.round()](#mathround)
  - [Math.random()](#mathrandom)
  - [Math.min() / Math.max()](#mathmin-/-mathmax)

  ---

### String methods
Strings are sequences of characters. Methods help you inspect, change, or extract parts of strings.


| Method           | What it does                            | Example                                   |
| ---------------- | --------------------------------------- | ----------------------------------------- |
| `.length`        | Returns number of characters            | `"hello".length` → `5`                    |
| `.toUpperCase()` | Converts to uppercase                   | `"hi".toUpperCase()` → `"HI"`             |
| `.toLowerCase()` | Converts to lowercase                   | `"HI".toLowerCase()` → `"hi"`             |
| `.includes()`    | Checks if a string contains another     | `"cat".includes("a")` → `true`            |
| `.indexOf()`     | Finds position of a substring           | `"hello".indexOf("e")` → `1`              |
| `.slice()`       | Extracts a part of the string           | `"hello".slice(1, 4)` → `"ell"`           |
| `.trim()`        | Removes whitespace from both ends       | `"  hi  ".trim()` → `"hi"`                |
| `.replace()`     | Replaces part of a string (first match) | `"apples".replace("p", "b")` → `"abbles"` |
| `.charAt()`      | Returns the character at a given index  | `"hello".charAt(1)` → `"e"`               |
| `.split()`       | Splits string into array by separator   | `"a,b,c".split(",")` → `["a", "b", "c"]`  |
| `.startsWith()`  | Checks if string starts with given text | `"hello".startsWith("he")` → `true`       |
| `.endsWith()`    | Checks if string ends with given text   | `"hello!".endsWith("!")` → `true`         |s

#### Examples

## .length
- Purpose: Get the number of characters in a string (including spaces and punctuation).

` Syntax:`
```js
string.length
```

`Example:`
```js
const name = "Alex";
console.log(name.length); // 4
```
📝 Notes:
- It's a property, not a method — no parentheses ().
- Includes all characters.

`TASK:`
Create a string variable with your favourite food.
Log how many characters are in it using .length.
```js
const faveFood = "Lasagna";
console.log(faveFood.length);  // should log 7
```

### `toUpperCase`
- Purpose: Convert all characters to uppercase.

` Syntax:`
```js
string.toUpperCase()
```

`Example:`
```js
const greeting = "hello";
console.log(greeting.toUpperCase()); // "HELLO"

```
📝 Notes:
- Doesn’t change the original string unless you reassign it.

`TASK:`
Write a string with a short sentence.
Log the uppercase version of it.
```js
const mySentence = "a sentence to make uppercase";
console.log(mySentence.toUpperCase()); // "A SENTENCE TO MAKE UPPERCASE"
```

### `toLowerCase`
- Purpose: Convert all characters to lowercase.

` Syntax:`
```js
string.toLowerCase()
```

`Example:`
```js
const shout = "WATCH OUT!";
console.log(shout.toLowerCase()); // "watch out!"
```

📝 Notes:
- Useful for comparing input like usernames, emails, etc.

`TASK:`
Create a variable with a loud, shouty word.
Use .toLowerCase() to calm it down.
```js
const mySentence = "WHAT ON EARTH ARE YOU DOING";
console.log(mySentence.toLowerCase()); // "what on earth are you doing"
```

###  `includes`
- Purpose: Check if a string contains a specific substring.

` Syntax:`
```js
string.includes(searchString)

```

`Example:`
```js
const phrase = "I love chocolate";
console.log(phrase.includes("choc")); // true
```

📝 Notes:
- Case-sensitive.
- Returns a boolean (true or false).

`TASK:`
Write a sentence and check if it includes the word "love".
```js
const mySentence = "I love my rabbits, Pancake and Pretzel!";
console.log(mySentence.includes("love")); // true
```

### `slice`
- Extract part of a string without changing the original.

` Syntax:`
```js
string.slice(startIndex, endIndex)
```

`Example:`
```js
const word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"
```

📝 Notes:
- `endIndex` is not included.
- If you skip `endIndex`, it goes to the end.
- Accepts negative indexes too.

`TASK:`
Create a string "Caterpillar" and slice it to get just "pillar".
```js
const myString = "catterpillar";
console.log(myString.slice(6)); 
```

### `trim()`
- Removes whitespace (spaces, tabs, line breaks) from both the start and end of a string.

` Syntax:`
```js
string.trim()
```

`Example:`
```js
const messy = "   tidy up!   ";
const clean = messy.trim();
console.log(clean); // "tidy up!"
```

📝 Notes:
- It doesn’t affect the middle of a string.
- Often used to clean up user input or pasted text.

`TASK:`
Create a string "Caterpillar" and slice it to get just "pillar".
```js
let input = "   hello world   ";
console.log(input.trim());
```

#### Challenge
You’ve been given a coded message. Your job is to:

- Clean it up (remove leading/trailing spaces).

- Make it shout-worthy (uppercase).

- Check if it contains the word "SECRET".

- Slice out just the secret word from the sentence.

- Log the final message and info to the console.

```js
let rawMessage = "   there's a secret hidden in plain sight.  ";

// Step 1: Trim whitespace
let trimmedMessage = rawMessage.trim();

// Step 2: Convert to uppercase
let upperCased = trimmedMessage.toUpperCase();

// Step 3: Check if it includes the word "SECRET"
let included = upperCased.includes("SECRET");

// Step 4: Slice out the word "SECRET" from the sentence
let sliced = upperCased.slice(10, 17);

// Step 5: Log your final message and info
console.log("Cleaned Message:", upperCased);
console.log("Contains SECRET?", included);
console.log("Extracted Word:", sliced);
```

### `.replace()`
Purpose: Replace part of a string with something else (only the first match).

Syntax:
```js
string.replace(searchValue, newValue)
```
**Example:**
```js
const sentence = "I like apples";
const newSentence = sentence.replace("apples", "bananas");
console.log(newSentence); // "I like bananas"
```
📝 Notes:
- Only replaces the first occurrence.
- The original string is not changed unless you store the result in a variable.
- Case-sensitive.
- You can use a string or a regular expression as the first argument.

🧠 TASK:
Replace the word "cats" with "dogs" in the sentence below, and log the new sentence:
```js
const sentence = "Some people love cats, and some people fear cats.";
const updated = sentence.replace("cats", "dogs");
console.log(updated); // "Some people love dogs, and some people fear cats."
```

**To clean a string of spaces and punctuation:**
```js
let cleanedString = lowerCase.replace(/[^a-z]/g, "");
```
*Explanation:*
- /[^a-z]/g means:

- [^a-z] = match anything not a letter (a to z)

- g = global flag (replace all matches)


### `.indexOf()`
Purpose: Find the position (index) of the first occurrence of a character or substring in a string.

Syntax:
```js
string.indexOf(searchValue)
```
**Example:**
```js
const word = "JavaScript";
console.log(word.indexOf("S")); // 4
```
📝 Notes:
- Indexes start at 0.
- Returns -1 if the search value is not found.
- Case-sensitive.
- Useful for checking if something exists and where it is.

🧠 TASK:
Use .indexOf() to find the position of the word "chocolate" in this sentence:
```js
const sentence = "I love chocolate, chocolate is the best!";
console.log(sentence.indexOf("chocolate")); // 7
```
💬 Bonus challenge: What will it return? Why?
  7 - .indexOf() counts every character (including spaces) starting from 0.


### `.charAt()`
Purpose: Returns the character at a specific index in a string.

Syntax:
```js
string.charAt(index)
```
Example:
```js
const word = "JavaScript";
console.log(word.charAt(4)); // "S"
```
📝 Notes:
- Index starts at 0.
- If the index is out of range, it returns an empty string ("").
- You can also use string[index] as an alternative — both work the same way in most situations.

🧠 TASK:
Use .charAt() to get the third letter of your name (index 2):
```js
const name = "Alexandra";
console.log(name.charAt(2)); // "e"
```
✅ Try it with another name — what do you get?
```js
const name = "Roman";
console.log(name.charAt(2)); // "m"
```

### `.split()`
Purpose: Splits a string into an array of substrings, based on a given separator.

Syntax:
```js
string.split(separator)
```
Example:
```js
const names = "Alice,Bob,Charlie";
const result = names.split(",");
console.log(result); // ["Alice", "Bob", "Charlie"]
```
📝 Notes:
- The separator is what tells JavaScript where to "cut" the string — it can be a comma, space, dash, letter, etc.
- If you use "" (empty string), it splits the string into individual characters.
- The result is always an array.

🧠 TASK:
Split the sentence below into an array of words:
```js
const sentence = "Coding is really fun";
const words = sentence.split(" ");
console.log(words); // ["Coding", "is", "really", "fun"]
```
💬 Bonus: Try split("") on the same string and see what happens!
```js
const sentence = "Coding is really fun";
const words = sentence.split("");
console.log(words);

// [object Array] (20)
//["C","o","d","i","n","g"," ","i","s"," ","r","e","a","l","l","y"," ","f","u","n"]
```
splitting a string with "" (an empty string) gives you every individual character, including spaces, as separate array elements.
| Code                         | Result                    |
| ---------------------------- | ------------------------- |
| `"a,b,c".split(",")`         | `["a", "b", "c"]`         |
| `"hello world".split(" ")`   | `["hello", "world"]`      |
| `"abc".split("")`            | `["a", "b", "c"]`         |
| `"one:two:three".split(":")` | `["one", "two", "three"]` |


### .startsWith()
Purpose: Checks whether a string starts with a given set of characters.

Syntax:
```js
string.startsWith(searchString)
```
Example:
```js
const title = "JavaScript is fun";
console.log(title.startsWith("Java")); // true
```
📝 Notes:
- Case-sensitive ("java" would return false).
- Returns a boolean (true or false).
- Optional second argument: the position to start checking from (e.g. title.startsWith("Script", 4)).

🧠 TASK:
Check if this sentence starts with "Welcome":
```js
const sentence = "Welcome to the club.";
console.log(sentence.startsWith("Welcome")); // true
```

### .endsWith()
Purpose: Checks whether a string ends with a given set of characters.

Syntax:
```js
string.endsWith(searchString)
```
Example:
```js
const message = "Thanks for your time!";
console.log(message.endsWith("!")); // true
```
📝 Notes:
- Also case-sensitive.
- Optional second argument: check as if the string ended at a certain index.

🧠 TASK:
Check if this string ends with "bunnies":
```js

const sentence = "I live with two bunnies";
console.log(sentence.endsWith("bunnies")); // true
```

#### String Method Challenge: Message Check and Transform

🧠 String Methods Challenge: Message Check & Transform
📨 The Situation:
You receive a message from a user, but it's messy and inconsistent. You need to:

🔧 Your Task:
Given this string:
```js
let rawMessage = "   alert! a Virus has been detected in your system!   ";
```
Trim the whitespace from both ends.
Convert the message to uppercase.
Check if it starts with "ALERT" and ends with an exclamation mark ("!").
Replace "VIRUS" with "⚠️ THREAT"
Slice just the warning part: "ALERT! A ⚠️ THREAT HAS BEEN DETECTED"

Log:
The cleaned-up message
Whether it starts and ends correctly
The sliced warning

✏️ Starter Template:
```js
let rawMessage = "   alert! a Virus has been detected in your system!   ";

// Step 1: Trim whitespace
let trimmed = rawMessage.trim();

// Step 2: Convert to uppercase
let upper = trimmed.toUpperCase();

// Step 3: Check start and end
let startsCorrectly = upper.startsWith("ALERT");
let endsCorrectly = upper.endsWith("!");

// Step 4: Replace "VIRUS" with "⚠️ THREAT"
let replaced = upper.replace("VIRUS", "⚠️ THREAT");

// Step 5: Slice out warning only
let warning = replaced.slice(0, replaced.indexOf("YOUR") - 1);

// Step 6: Log everything
console.log("Cleaned Message:", replaced);
console.log("Starts with 'ALERT'?", startsCorrectly);
console.log("Ends with '!'", endsCorrectly);
console.log("Extracted Warning:", warning);
```

🧪 Optional Challenge Ideas:
Try making it case-insensitive using .toLowerCase() before checking .includes()

Count how many characters the final warning message has using .length


### Array Methods
Arrays hold lists of values. These methods let you add, remove, search, or loop over items.
| Method        | What it does                            | Example                            |
| ------------- | --------------------------------------- | ---------------------------------- |
| `.length`     | Number of items in array                | `[1, 2, 3].length` → `3`           |
| `.push()`     | Adds item to end                        | `arr.push(4)` → adds 4 to end      |
| `.pop()`      | Removes last item                       | `arr.pop()` → removes last         |
| `.shift()`    | Removes first item                      | `arr.shift()` → removes first      |
| `.unshift()`  | Adds item to start                      | `arr.unshift(0)` → adds 0 at start |
| `.includes()` | Checks if value is in array             | `[1,2,3].includes(2)` → `true`     |
| `.indexOf()`  | Finds index of value                    | `[1,2,3].indexOf(2)` → `1`         |
| `.slice()`    | Copies part of the array                | `arr.slice(1,3)` → `[2,3]`         |
| `.splice()`   | Adds/removes items at specific index    | `arr.splice(1,1)` → removes 1 item |
| `.map()`      | Transforms each item, returns new array | `arr.map(x => x*2)`                |
| `.filter()`   | Returns new array with matching items   | `arr.filter(x => x > 2)`           |
| `.forEach()`  | Runs a function for each item           | `arr.forEach(x => console.log(x))` |
| `.join()`     | Turns array into string with separator  | `[1,2,3].join("-")` → `"1-2-3"`    |
| `.reverse()`  |Reverses the array in place              | `	[1,2,3].reverse() → [3,2,1] `    |


## Array Methods
### Push / Pop
#### `.push()`
Purpose: Add one or more items to the end of an array.

Syntax:
```js
array.push(item1, item2, ...)
```
Example:
```js
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```
📝 Notes:
- Changes the original array (does not return a new one).
- Returns the new length of the array.

🧠 TASK:
Start with an array of 2 animals. Push 2 more to the end and log the updated array.
```js
let animals = ["cat", "dog"];
animals.push("rabbit", "parrot");
console.log(animals); // ["cat", "dog", "rabbit", "parrot"]
```

#### `.pop()`
Purpose: Remove the last item from an array.

Syntax:
```js
array.pop()
```
Example:
```js
let numbers = [1, 2, 3];
let last = numbers.pop();
console.log(numbers); // [1, 2]
console.log(last);    // 3
```
📝 Notes:
- Removes and returns the last item.
- Changes the original array.

🧠 TASK:
Create an array of colours. Pop the last one off and log both the new array and the popped value.
```js
let colours = ["red", "green", "blue"];
let removed = colours.pop();
console.log(colours); // ["red","green"]
console.log(removed); // "blue"
```

#### `.shift()`
Purpose: Removes the first item from an array.

Syntax:
```js
array.shift()
```
Example:
```js
let queue = ["first", "second", "third"];
let removed = queue.shift();
console.log(queue);   // ["second", "third"]
console.log(removed); // "first"
```
📝 Notes:
- Changes the original array.
- Returns the item that was removed.
- Often used for queue-like behavior (FIFO: First In, First Out).

🧠 TASK:
Create an array of 3 book titles. Use .shift() to remove the first one.
Log the updated array and the removed book.
```js
let books = ["1984", "Brave New World", "Fahrenheit 451"];
let firstBook = books.shift();
console.log(books);      // ["Brave New World", "Fahrenheit 451"]
console.log(firstBook);  // "1984"
```

#### `.unshift()`
Purpose: Adds one or more items to the start of an array.

Syntax:
```js
array.unshift(item1, item2, ...)
```
Example:
```js
let tasks = ["review PR", "attend meeting"];
tasks.unshift("check email");
console.log(tasks); // ["check email", "review PR", "attend meeting"]
```
📝 Notes:
- Changes the original array.
- Returns the new length of the array.
- Useful for adding things in queue-style order.

🧠 TASK:
Create an array of 2 countries. Use .unshift() to add a third one at the beginning.
Log the new array.
```js
let countries = ["France", "Germany"];
countries.unshift("Italy");
console.log(countries); // [Italy", "France", "Germany"]
```

#### `.slice()`
Purpose: Returns a shallow copy of a portion of an array.

✅ Non-destructive: does not change the original array.

Syntax:
```js
array.slice(startIndex, endIndex)
```
Example:
```js
let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);
console.log(result);  // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]
```
📝 Notes:
- endIndex is not included.
- Can use negative indexes (e.g. slice(-2) gets the last two items).
- Great for copying arrays or parts of arrays.

🧠 TASK:
Create an array of five fruits. Use .slice() to get the middle three.
```js
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let middle = fruits.slice(1, 4);
console.log(middle); // ["banana","cherry","date"]
```
| Part                           | What It Does                 | Layman’s Phrase                           |
| ------------------------------ | ---------------------------- | ----------------------------------------- |
| `fruits`                       | The original array           | “Start with the fruit list”               |
| `.slice(...)`                  | Calls the `slice()` method   | “Take a slice (copy part of the list)”    |
| `1` (startIndex)               | Start copying **at index 1** | “Start at the second item (banana)”       |
| `4` (endIndex, exclusive)      | Stop **before index 4**      | “Stop before the fifth item (elderberry)” |
| `["banana", "cherry", "date"]` | Resulting array              | “This is the sliced-out middle section”   |


#### `.splice()`
Purpose: Adds, removes, or replaces items in place.

❗ Destructive: modifies the original array.

Syntax:
```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```
Example:
```js
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");
console.log(colors); // ["red", "yellow", "blue"]
```
📝 Notes:
- First number = where to start
- Second number = how many to delete
- Any extra items = what to insert
- Can be used just to delete, just to insert, or both

🧠 TASKS:
Task A – Remove 2 items:
```js
let pets = ["dog", "cat", "rabbit", "hamster"];
pets.splice(1, 2);
console.log(pets); // ["dog","hamster"]
```

Task B – Replace 1 item:
```js
let tools = ["hammer", "screwdriver", "wrench"];
tools.splice(2, 1, "drill");
console.log(tools); // ["hammer","screwdriver","drill"]
```
| Part                       | What It Does                                    | Layman’s Phrase                    |
| -------------------------- | ----------------------------------------------- | ---------------------------------- |
| `tools`                    | The original array                              | “Start with the tool list”         |
| `.splice(...)`             | Calls the `splice()` method                     | “Cut into the array and change it” |
| `2` (startIndex)           | Start at index `2` (the third item: `"wrench"`) | “Go to the third item in the list” |
| `1` (deleteCount)          | Delete **1** item (just `"wrench"`)             | “Remove one item here”             |
| `"drill"` (item to insert) | Insert `"drill"` at that same position          | “Put 'drill' in its place”         |
| `tools` (final array)      | Becomes `["hammer", "screwdriver", "drill"]`    | “Here’s the updated list”          |


**slice vs splice comparison**
| Feature                     | `.slice()`                                                        | `.splice()`                                           |
| --------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| **Purpose**                 | Copies part of an array                                           | Adds, removes, or replaces items in an array          |
| **Changes original?**       | ❌ No – returns a new array                                        | ✅ Yes – modifies the original array                   |
| **Return value**            | A new **shallow copy** of part of the array                       | An array of **removed elements**                      |
| **Use case**                | When you want to **extract** items without affecting the original | When you want to **insert, delete, or replace** items |
| **Arguments**               | `slice(start, end)`                                               | `splice(start, deleteCount, ...itemsToAdd)`           |
| **End index behavior**      | End index is **exclusive**                                        | No end index – you specify how many to delete         |
| **Negative indexes?**       | ✅ Yes – can count from end                                        | ✅ Yes – but be careful with behavior                  |
| **Safe to use in `const`?** | ✅ Yes, if you're not changing the original array                  | ⚠️ Yes, but it **modifies** the contents              |



### `forEach`, `map`, `filter`, `reduce`
These are **array methods** — they aren’t “loops” in the traditional sense, but they **let you loop through arrays** in a clean and modern way.

They are often used instead of `for` or `for...of` loops.

#### forEach
Run a function once for each item in an array.
✅ Use it when you want to do something with each item, but don’t need a new array.

**Example:**
```js
const animals = ["rabbit", "dog", "cat"];

animals.forEach(function(animal) {
  console.log(animal);
});
```

**Anatomy of a forEach:**
| Part                   | Explanation                     | Layman’s phrasing                  |
| ---------------------- | ------------------------------- | ---------------------------------- |
| `animals.forEach(...)` | Calls `.forEach()` on the array | *Go through each item in the list* |
| `animal =>`            | Function to run on each item    | *For every item, do this...*       |
| `console.log(animal)`  | Action to run for each item     | *Print the current animal*         |


#### map()
Create a new array by changing each item in the original array.
✅ Use it when you want to transform each value.
**Example:**
```js
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```

**Anatomy**
| Part               | Explanation                        | Layman’s phrasing                    |
| ------------------ | ---------------------------------- | ------------------------------------ |
| `numbers.map(...)` | Calls `.map()` on the array        | *Go through each number in the list* |
| `function(num)`    | A function that runs once per item | *For each number, run this function* |
| `return num * 2`   | Sends back the new value           | *Double the number and return it*    |
| `doubled`          | Stores the result (new array)      | *Save the new changed list*          |
✅ Always returns a new array, same length as the original.

#### .filter
Create a new array containing only the items that pass a test.

**Example:**
```js
const scores = [50, 80, 40, 100];

const passing = scores.filter(function(score) {
  return score >= 60;
});

console.log(passing); // [80, 100]
```

**Anatomy:**
| Part                 | Explanation                                     | Layman’s phrasing                     |
| -------------------- | ----------------------------------------------- | ------------------------------------- |
| `scores.filter(...)` | Calls `.filter()` on the array                  | *Go through each score in the list*   |
| `function(score)`    | A function that runs once per score             | *For each score, use this function*   |
| `return score >= 60` | Test: keep only scores that pass this condition | *Return true if it’s a passing score* |
| `passing`            | Stores the result (new array of passing scores) | *Save only the passing scores*        |
✅ Returns a new array, which may be shorter than the original.

#### .reduce()
Take an array and reduce it to one value (a number, string, object, etc.) by running a function on each item.

✅ Use it when you want to:

- Add up numbers
- Combine values
- Build a single result from a list

**Example: add numbers in an array**
```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
});

console.log(total); // 10
```
⚙️ How It Works Step by Step
With [1, 2, 3, 4]:

Step 1: acc = 1, current = 2 → returns 3

Step 2: acc = 3, current = 3 → returns 6

Step 3: acc = 6, current = 4 → returns 10

So total is 10.


**Anatomy**
| Part                             | Explanation                                               | Layman’s phrasing                  |
| -------------------------------- | --------------------------------------------------------- | ---------------------------------- |
| `numbers.reduce(...)`            | Calls `.reduce()` on the array                            | *Work through the whole list*      |
| `function(accumulator, current)` | A function with two parameters:                           | *Keep track of the total as we go* |
| `accumulator`                    | The running total (starts with the first item by default) | *What we’ve built up so far*       |
| `current`                        | The current item in the loop                              | *The number we’re on right now*    |
| `return accumulator + current`   | Add the current number to the total                       | *Add it to the running total*      |
| `total`                          | Stores the final result                                   | *This is the final sum*            |

**example: Starting value**
You can set your own starting value for the accumulator:
```js
const total = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0); // 0 is the starting value
```

**Examples**
```js
// Combine strings
const words = ["I", "love", "coding"];
const sentence = words.reduce(function(acc, word) {
  return acc + " " + word;
});
// "I love coding"

// Count total length
const names = ["Alex", "Sam"];
const totalLength = names.reduce(function(acc, name) {
  return acc + name.length;
});
// 8
```

**Summary Table**
| Method    | Returns     | Use For...                             |
| --------- | ----------- | -------------------------------------- |
| `forEach` | ❌ Nothing   | Doing something with each item         |
| `map`     | ✅ New array | Changing each item                     |
| `filter`  | ✅ New array | Keeping only items that pass a test    |
| `reduce`  | ✅ One value | Turning the whole array into one thing |

#### find()
- Returns the first element that passes a test
- If no match is found, it returns undefined

**Example:**
```js
// find() first matching element
let numbers = [3, 7, 11, 18, 21];

function isEven(num) {
  return num % 2 === 0;
}

let firstEven = numbers.find(isEven);
console.log(firstEven); // 18
```
✅ find() will return the first value in the array that passes the test.

#### findIndex()
- Returns the index of the first element that passes a test
- If no match is found, it returns -1

**Example:**
```js
// find() index of first matching element
let words = ["apple", "banana", "plum"];

function longerThanFive(word) {
  return word.length > 5;
}

let index = words.findIndex(longerThanFive);
console.log(index); // 1 (banana)
```
✅ findIndex() gives you the index (position) of the first match.

**Compare: `find()` vs `findIndex()`**
| Method        | Returns      | If no match? |
| ------------- | ------------ | ------------ |
| `find()`      | First value  | `undefined`  |
| `findIndex()` | Index number | `-1`         |

**Practice tasks**
```js
// predict the output
let ages = [8, 15, 21, 32, 14];

function isAdult(age) {
  return age >= 18;
}

let adult = ages.find(isAdult);
let adultIndex = ages.findIndex(isAdult);

console.log(adult);       // 21, 32
console.log(adultIndex);  // 2, 3
```

```js
// write own code
let people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];
// a find function to return 1st person over 25
function challenge25(person) {
  return person.age > 25;
}
let firstChallenge25 = people.find(challenge25);
console.log(firstChallenge25);
// a find index function to return the index of the first person under 18
function challenge18(person) {
  return person.age < 18;
}
let challenge18Index = people.findIndex(challenge18);
console.log(challenge18Index);
```

#### `.join()`
Purpose: Combines all the elements of an array into a single string, with an optional separator between items.

Syntax:
```js
array.join(separator)
```
Example:
```js
const letters = ["a", "b", "c"];
const word = letters.join("-");
console.log(word); // "a-b-c"
```
📝 Notes:
- The separator is optional — if omitted, it defaults to a comma (,).
- Common separators: "", " ", "-", "|".
- Returns a string, not an array.
- Doesn’t modify the original array.

🧠 TASK:
Join an array of three animal names into a sentence with spaces between them.
```js
const animals = ["cat", "dog", "rabbit"];
const result = animals.join(" ");
console.log(result); // "cat dog rabbit"
```

#### `.reverse()`
Purpose: Reverses the order of the items in the array.

Syntax:
```js
array.reverse()
```
Example:
```js
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
📝 Notes:
- Modifies the original array (⚠️ destructive).
- Can be useful before joining or mapping in reverse order.
- Often paired with .slice() if you want a reversed copy without changing the original.

```js
const original = [1, 2, 3];
const reversedCopy = original.slice().reverse(); // non-destructive version
```
🧠 TASK:
Reverse this array of numbers and log both the reversed array and the original:

```js
const nums = [10, 20, 30];
nums.reverse();
console.log(nums); // [30, 20, 10]
```

🧠 **Quick Challenge: Secret Word Builder**
🧩 Scenario:
You’re given an array of letters in reverse order. Your task is to:
- Reverse the array to get the correct order.
- Join the letters into a single word with no spaces.
- Log the final word.
🧪 Starting code:
```js
// expected output: horse
let scrambled = ["e", "s", "r", "o", "h"];

// create variable to hold reversed letters
let reversed = scrambled.reverse();
console.log(reversed); // ["h","o","r","s","e"]

//create output variable to save joined version
let optput = reversed.join("");
console.log(output); // "horse"
```

#### `.sort()`
The `.sort()` method is used to **sort the elements of an array.**

By default:
- It converts all elements to strings
- Then compares them lexicographically (like a dictionary)
- It’s also case-sensitive (uppercase letters come before lowercase)

**Syntax:**
```js
array.sort()
```
Optionally, you can pass a custom compare function:
```js
array.sort((a, b) => a - b); // for numbers
```
***Example:**
```js
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
```
**Example with case sensitivity:**
```js
let words = ["apple", "Zebra", "banana"];
words.sort();
console.log(words); // ["Zebra", "apple", "banana"]
```
- Because "Z" comes before "a" in Unicode, uppercase letters sort first.



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


### Number Methods 
**(and Math)**
JavaScript numbers don’t have many methods, but you use the Math object for common tasks.
| Method / Property | What it does                        | Example                          |
| ----------------- | ----------------------------------- | -------------------------------- |
| `.toFixed(n)`     | Rounds number to `n` decimal places | `(3.1415).toFixed(2)` → `"3.14"` |
| `Math.round()`    | Rounds to nearest whole number      | `Math.round(4.6)` → `5`          |
| `Math.floor()`    | Rounds down                         | `Math.floor(4.9)` → `4`          |
| `Math.ceil()`     | Rounds up                           | `Math.ceil(4.1)` → `5`           |
| `Math.random()`   | Random number between 0 and 1       | `Math.random()` → `0.36` (etc.)  |
| `Math.max(…)`     | Finds highest                       | `Math.max(1,5,3)` → `5`          |

Math is like a library or toolbox of methods built in to javaScript.

#### Math.floor
✅ Purpose:
Rounds a number down to the nearest whole integer.

🧪 Syntax:
```js
Math.floor(number)
```
**Anatomy / Breakdown:**
| Part     | Technical Role                                       | Layman’s Phrase                       |
| -------- | ---------------------------------------------------- | ------------------------------------- |
| `Math`   | Built-in JavaScript object for math operations       | "Look in the **Math toolbox**"        |
| `.floor` | Method that rounds a number **down**                 | "Use the **'round-down' tool**"       |
| `( )`    | Runs the method with the given input (function call) | "Tell it what number to round"        |
| `6.5`    | The argument (input) passed to the method            | "Here's the **number to round down**" |

**Example:**
```js
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(9.99)); // 9
console.log(Math.floor(-3.2)); // -4
```
📝 Notes:
- Always rounds towards negative infinity (down), even for negative numbers.
- It’s a method of the Math object, so you always write Math.floor() — not just floor().

#### Math.ceil()
✅ Purpose:
Rounds a number up to the nearest whole integer.

🧪 Syntax:
```js
Math.ceil(number)
```
🧩 Anatomy / Breakdown:
| Part    | Technical Role                                       | Layman’s Phrase                     |
| ------- | ---------------------------------------------------- | ----------------------------------- |
| `Math`  | Built-in JavaScript object for math operations       | "Look in the **Math toolbox**"      |
| `.ceil` | Method that rounds a number **up**                   | "Use the **'round-up' tool**"       |
| `( )`   | Runs the method with the given input (function call) | "Tell it what number to round"      |
| `4.1`   | The argument (input) passed to the method            | "Here's the **number to round up**" |
**Examples:**
```js
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(7.001)); // 8
console.log(Math.ceil(-3.9));  // -3
```
📝 Notes:
- Always rounds towards positive infinity.
- Works even with negative numbers (e.g. -3.9 → -3)
- It's a method of the Math object — so it's always Math.ceil(), not just ceil().

🧠 Mini Task:
Try it yourself:
```js
let bill = 19.2;
let rounded = Math.ceil(bill);
console.log(`Total to pay: £${rounded}`); // Total to pay: £20
```

#### Math.round()
✅ Purpose:
Rounds a number to the nearest whole integer.

🧪 Syntax:
```js
Math.round(number)
```
🧩 Anatomy / Breakdown:
| Part     | Technical Role                                     | Layman’s Phrase                       |
| -------- | -------------------------------------------------- | ------------------------------------- |
| `Math`   | Built-in JavaScript object for math operations     | "Look in the **Math toolbox**"        |
| `.round` | Method that rounds to the **nearest whole number** | "Use the **'nearest' rounding tool**" |
| `( )`    | Function call — runs the method                    | "Tell it what number to round"        |
| `4.6`    | The argument passed in                             | "Here's the number to round off"      |
**Examples**
```js
console.log(Math.round(4.6));   // 5
console.log(Math.round(4.4));   // 4
console.log(Math.round(9.5));   // 10
console.log(Math.round(-1.5));  // -1 (rounds *away* from zero)
```
📝 Notes:
- .5 and above rounds up.
- Below .5 rounds down.
- For negative numbers: -1.5 rounds to -1, not -2.

🧠 Mini Task:
Try this one:
```js
let rating = 4.49;
console.log(Math.round(rating)); // 4
```

| Method         | What It Does                            | Example Input | Output | Rounds Toward         | Layman's Description                         |
| -------------- | --------------------------------------- | ------------- | ------ | --------------------- | -------------------------------------------- |
| `Math.floor()` | Rounds **down** to nearest whole number | `4.9`         | `4`    | **Negative infinity** | Always round **down**, even for `.9`         |
| `Math.ceil()`  | Rounds **up** to nearest whole number   | `4.1`         | `5`    | **Positive infinity** | Always round **up**, even for `.1`           |
| `Math.round()` | Rounds to **nearest** whole number      | `4.5`         | `5`    | Nearest integer       | Round **up at .5 or higher**, down otherwise |
**Negative examples**
| Method         | Input  | Output |
| -------------- | ------ | ------ |
| `Math.floor()` | `-2.3` | `-3`   |
| `Math.ceil()`  | `-2.3` | `-2`   |
| `Math.round()` | `-2.5` | `-2`   |

**Rounding Methods Challenge**
💬 Scenario:
You’ve received some strange price data from a buggy system. Your job is to clean and display the prices using the correct rounding method depending on the situation.
```js
let rawPrice1 = 4.79;
let rawPrice2 = 7.15;
let rawPrice3 = 3.5;
let rawPrice4 = 9.99;

// TASKS:
// 1. Floor rawPrice1 (customer paid cash)
console.log(`Cash price: £${Math.floor(rawPrice1)}`); // Cash price: £4

// 2. Ceil rawPrice2 (shipping added to price)
console.log(`Price with shipping: £${Math.ceil(rawPrice2)}`); // Price with shipping: £8

// 3. Round rawPrice3 (general rounding)
console.log(`Rounded price: £${Math.round(rawPrice3)}`); // Rounded price: £4

// 4. Floor then add 1 to rawPrice4
let nextFull = Math.floor(rawPrice4) + 1;
console.log(`Next full pound: £${nextFull}`); // Next full pound: £10
```

#### toFixed()
✅ Purpose:
Rounds a number to a fixed number of decimal places and returns a string.

🧪 Syntax:
```js
number.toFixed(n)
```
Where n is the number of digits to appear after the decimal point.

🧩 Anatomy / Breakdown:
| Part         | Role                              | Layman’s Phrase                         |
| ------------ | --------------------------------- | --------------------------------------- |
| `number`     | The number to format              | "This is the value you’re working on"   |
| `.toFixed()` | Method to round to decimal places | "Keep only this many decimal digits"    |
| `(n)`        | How many decimal places to keep   | "Round to **n** digits after the point" |
**Examples**
```js
let price = 4.678;
console.log(price.toFixed(2)); // "4.68"

let score = 99.1;
console.log(score.toFixed(0)); // "99"

let pi = 3.14159;
console.log(pi.toFixed(3)); // "3.142"
```
📝 Notes:
- .toFixed() returns a string, not a number.
- Good for formatting prices, measurements, or averages.
- You can convert it back to a number with parseFloat() or Number() if needed.

🧠 Mini Task:
Format this number to 1 decimal place:
```js
let weight = 6.237;
console.log(weight.toFixed(1)); // "6.2"
```

**toFixed() price formatting challenge**
💬 Scenario:
You’re building a checkout system and need to clean up some messy price data. Your task is to make sure all prices are displayed with 2 decimal places, just like on a receipt.
```js
let price1 = 3.5;
let price2 = 7;
let price3 = 12.987;
let price4 = 0.1;

// Task:
// Format each price using .toFixed(2) and print it like:
// ➤ "Formatted price: £3.50"

console.log(`Formatted price: £${price1.toFixed(2)}`); // "Formatted price: £3.50"
console.log(`Formatted price: £${price2.toFixed(2)}`); // "Formatted price: £7.00"
console.log(`Formatted price: £${price3.toFixed(2)}`); // "Formatted price: £12.99"
console.log(`Formatted price: £${price4.toFixed(2)}`); // "Formatted price: £0.10"

```

#### Math.random()
✅ Purpose:
Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
In other words: 0 ≤ result < 1

🧪 Syntax:
```js
Math.random()
```
🧩 Anatomy / Breakdown:
| Part      | Role                                   | Layman’s Phrase                    |
| --------- | -------------------------------------- | ---------------------------------- |
| `Math`    | Built-in JavaScript object             | “Look in the **Math toolbox**”     |
| `.random` | Method that generates a random decimal | “Give me a **random number**”      |
| `( )`     | No arguments needed                    | “I don’t need to tell it anything” |
**Examples**
```js
console.log(Math.random()); // Might log: 0.327839
console.log(Math.random()); // Might log: 0.913273
```
Each time you run it, you get a different number between 0 and just under 1.`

📝 Notes:
- It’s never 1.
- If you want a random number in a larger range, you can multiply it.

```js
// Random number from 0 to 9
let rand = Math.random() * 10;
console.log(rand); // Might log 4.6

// Round it down to get whole number 0–9
console.log(Math.floor(rand));
```
🧠 Mini Task:
Print a random whole number between 1 and 6 (like rolling a dice):
```js
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll); // Could be 1 to 6
```

**Challenge: Random Generator - Animal Picker**

🐾 Scenario:
You're creating a mystical animal generator for a game. Each time you run it, it picks a random animal from a list and prints a fun message.
```js
const animals = ["dragon", "unicorn", "phoenix", "griffin", "mermaid"];

function summonAnimal(animals) {
  // 1. Pick a random index from 0 to animals.length - 1
  let randomIndex = Math.floor(Math.random() * animals.length);
  //- Create a variable to store our random index
  // -- round to the nearest number (floor)
  // --- give me a random number under 1
  // ---- stretch it to fit the number of animals in the array (array.length)

  // 2. Use the index to get the animal
  let animal = animals[randomIndex];

  // 3. Print the message
  console.log(`You have summoned a ${animal.toUpperCase()}!`);
}

// Call the function
summonAnimal(animals);
// "You have summoned a MERMAID!"
```

**CHALLENGE**
ChatGPT said:
Awesome — you’ve got random selection and the index logic down. Now let’s level up the challenge slightly! 🎮✨

🔮 Mystical Animal + Power Generator
🧠 Challenge:
You now have two arrays:
- One for animals
- One for magical powers
- Each time you run the generator, it should randomly pair one animal with one power, like:
                                🔥 “You have summoned a PHOENIX with the power of INVISIBILITY!”

```js
const animals = ["dragon", "unicorn", "phoenix", "griffin", "mermaid"];
const powers = [
  "fire breath",
  "telepathy",
  "invisibility",
  "healing",
  "flight"
];

function summonMystic() {
  // 1. Pick a random animal
  let randomAnimalIndex = Math.floor(Math.random() * animals.length);
  let animal = animals[randomAnimalIndex];

  // 2. Pick a random power
  let randomPowerIndex = Math.floor(Math.random() * powers.length);
  let power = powers[randomPowerIndex];

  // 3. Print: "You have summoned a [ANIMAL] with the power of [POWER]!"
  console.log(
    `You have summoned a ${animal.toUpperCase()} with the power of ${power.toUpperCase()}!`
  );
}

summonMystic();
// "You have summoned a DRAGON with the power of HEALING!"
```

**Ammend to return a message instead of log**
```js
const animals = ["dragon", "unicorn", "phoenix", "griffin", "mermaid"];
const powers = ["fire breath", "telepathy", "invisibility", "healing", "flight"];

function summonMystic() {
  let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  let randomPower = powers[Math.floor(Math.random() * powers.length)];

  return `You have summoned a ${randomAnimal.toUpperCase()} with the power of ${randomPower.toUpperCase()}!`;
}

// Store the result and use it however you like:
let message = summonMystic();
console.log(message);

```
WHy use return??
| `console.log()`                | `return`                                 |
| ------------------------------ | ---------------------------------------- |
| Just prints it out immediately | Gives back a value to use elsewhere      |
| No reuse                       | Can store in a variable or display later |
| Great for quick testing        | Great for real projects or DOM use       |

#### Math.min() and Math.max()
| Method       | What it does                    | Example                   |
| ------------ | ------------------------------- | ------------------------- |
| `Math.min()` | Returns the **smallest** number | `Math.min(5, 2, 8)` → `2` |
| `Math.max()` | Returns the **largest** number  | `Math.max(5, 2, 8)` → `8` |
✅ Purpose:
To quickly find the highest or lowest value from a list of numbers.

syntax:
```js
Math.min(number1, number2, ..., numberN)
Math.max(number1, number2, ..., numberN)
```
**Examples**
```js
console.log(Math.min(3, 1, 9, -2)); // -2
console.log(Math.max(3, 1, 9, -2)); // 9
```
They can also be used with variables
```js
let a = 10;
let b = 25;
let c = 7;

console.log(Math.min(a, b, c)); // 7
console.log(Math.max(a, b, c)); // 25
```

🧠 Mini Task:
Try this:
```js
let priceA = 4.99;
let priceB = 3.50;
let priceC = 7.25;

// Print the cheapest and most expensive prices
console.log(Math.min(priceA, priceB, priceC)); // 3.50
console.log(Math.max(priceA, priceB, priceC)); // 7.25

// Add more context
console.log(`Cheapest price: £${Math.min(priceA, priceB, priceC)}`); // Cheapest price: £3.50
console.log(`Most expensive: £${Math.max(priceA, priceB, priceC)}`);  // Most expensive: £7.25
```

**Price Checker Challenge**
🔍 The Scenario:
You’re running a price comparison site. You’ve collected prices for the same item from different stores. You want to:
- Find the cheapest and most expensive prices.
- Display both, formatted to 2 decimal places.
```js
let prices = [8.99, 10.49, 7.5, 9.25, 12.0];

// 1. Find the lowest price
let lowest = (Math.min(8.99, 10.49, 7.5, 9.25, 12.0));

// 2. Find the highest price
let highest = (Math.max(8.99, 10.49, 7.5, 9.25, 12.0));

// 3. Print both formatted like:
console.log(`Lowest Price: £${lowest.toFixed(2)}`);
console.log(`Highest Price: £${highest.toFixed(2)}`);
// "Lowest Price: £7.50"
// "Highest Price: £12.00"
```

---