# Assignment 2 - Question 2

This file contains code examples and explanations to demonstrate the required JavaScript concepts for Question 2 of the assignment.

---

## Contents
- [Array Methods](#array-methods)
  - [Definition](#definition)
  - - [shift()](#shift)
  - - [unshift()](#unshift)
  - - [split()](#shift)
  - - [Example](#example)
- [Object Methods](#object-methods)
  - [Definition](#definition)
  - [Object vs Array](#object-vs-array)
- [DOM Events](#dom-events)
  - [Definition](#definition)
  - - [onmouseover()](#onmouseover)
  - - [onclick()](#onclick)
  - - [onchange()](#onchange)
- [Credits & References](#credits-references)

---

## Array Methods

### Definition:

An array method ia a built-in function in JavaScript that lets you manipulate or work with arrays.

Arrays are special variables that can store multiple values in a single place.

Array methods allow us to:

- Add or remove items

- Loop over items

- Search, sort, or transform items.

---

### shift()

✅ Type: Array method

🧾 What it does: Removes the first item from an array and returns it.

🧰 Why it’s useful: It’s good for things like queues (taking the next item from the front of a line).

```js
// Basic Example
let numbers = [10, 20, 30];
let first = numbers.shift(); // 10
console.log(numbers); // [20, 30]
```

---

### unshift()

✅ Type: Array method

🧾 What it does: Adds one or more items to the **start** of an array

🧰 Why it’s useful: Add items at the front instead of at the end.

```js
let numbers = [20, 30];
numbers.unshift(10);
console.log(numbers); // [10, 20, 30]
```

---

### split()

❌ Type: String Method *(not an array method)*

🧾 What it does: Splits a string into an array based on a character (like a comma or space).

🧰 Why it’s useful: It turns one long string into multiple pieces you can loop through or access individually.

```js
let sentence = "Code First Girls";
let words = sentence.split(" "); // ["Code", "First", "Girls"]
```

---

### Example

Below is code and evidence from a runnable example created to test these concepts out.

```js
//Basic example
let cfgStreams = ["Data", "Software", "Full-Stack"];

cfgStreams.unshift("AI"); // ["AI", "Data", "Software", "Full-Stack"]
cfgStreams.shift();       // ["Data", "Software", "Full-Stack"]

let streamString = "Data,Software,Full-Stack";
let streamArray = streamString.split(",");      // ["Data", "Software", "Full-Stack"]
```
#### Runnable Example Evidence

<div style="display: flex; gap: 20px;"> 
    <div> 
        <img src="path/to/image1.png" alt="Code showing shift, unshift, and split" width="300"/> 
            <p style="text-align: center;"><em>
                Code for shift, unshift, and split</em>
            </p> 
        </div> 
        <div> 
            <img src="path/to/image2.png" alt="Terminal result showing output" width="300"/> 
                <p style="text-align: center;"><em>
                    Console result showing output</em>
                </p> 
       </div> 
</div>

---

## Object Methods

### Definition:

A **JavaScript object** is a data structure that stores data as **key-value pairs**.

- The **key** (also known as the property name) is a **string**.
- The **value** can be anything: a string, number, array, another object, or a function.

#### Example:

```js
// Basic Example
const person = {
    name: "Alice",
    age: 30,
    job: "Developer"
};
```
- `name`, `age` and `job` are keys *(or properties)*.
- `"Alice"`, `30`, and `"Developer"` are their corresponding values.
---

An **object method** is a **function** that is stored as a property of an object.

It lets the object **do something**, like an action or behaviour based on its own data.

#### Example
```js
// Basic examples
const person = {
    name: "Alice",
    speak: function() {
        return "Hello, my name is " + this.name;
    }
}

console.log(person.speak()); // "Hello, my name is Alice"
```

<div style="display: flex; gap: 20px;"> 
    <div> 
        <img src="path/to/image1.png" alt="Code showing shift, unshift, and split" width="300"/> 
            <p style="text-align: center;"><em>
                Code for object methods using the topic of "Programming Languages.</em>
            </p> 
    </div> 
    <div> 
        <img src="path/to/image2.png" alt="Console result showing output" width="300"/> 
            <p style="text-align: center;"><em>
                Console result showing output</em>
            </p>
    </div> 
</div>
---

#### Object vs Array

| feature      | object                                             | Array                               |
| ------------ | -------------------------------------------------- | ----------------------------------- |
| Structure    | key-value pairs                                    | Ordered list of values              |
| Access by... | property name                                      | Index number                        |
| Ideal for... | related data with labels (eg, a person's details)  | Lists of items (eg, names, numbers) |
| Example      | `person.name`                                      | `names[0]`                          |
| Methods      | `Object.keys()`, `Object.values()` + custom methods| `push()`, `pop()`, `map()`, etc     |

--- 
 
### DOM Events

**DOM events** are actions or occurances that happen in the browser, usually triggered by the user, that JavaScript can respond to.

#### Definition
A DOM event is a signal that something has happened to an element on a web page, such as a click, keypress, or a mouse hover, and it allows you to run JavaScript in response.

DOM events:
- Detect **user interaction** with a web page.
- Let you **run functions** when something happens.
- Allow your website to become **interactive** and **responsive**.

Without DOM events, your page just sits there, it is **static**.

With DOM events your page can:
- Respond to *clicks* (e.g. open a menu, submit a form)
- React to keyboard input (e.g. typing in a search bar)
- Update as a user interacts (e.g. live preview, currency converter)

#### Common Examples:
| Event         | Triggered When...                     | Example                   |
| ------------- | ------------------------------------- | ------------------------- |
| `onclick`     | A user clicks on an element           | Show a popup              |
| `onchange`    | The value of an input element changes | Update text as user types |
| `onmouseover` | The user hovers over an element       | Show a tooltip            |
| `onkeydown`   | A key is pressed                      | Capture typed input       |
| `onsubmit`    | A form is submitted                   | Validate the form         |

#### Example
```html
<!-- Basic example -->
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello!");
  }
</script>
```
When the button is clicked, the `sayHello()` function runs and shows an alert.

---

### onmouseover

`onmouseover`- Triggered when a user hovers over an element.

Cna be used for:
- Showing tooltips or hints
- Highlighting elements when hovered
- Creating hover effects with JavaScript *(if not using CSS)*

```html
<!-- alert example -->
<p onmouseover="alert('Mouse is over the text!')">Hover over me</p>

<!-- highlight example -->
<p onmouseover="highlight()">Hover over this text</p>

<script>
  function highlight() {
    alert("Mouse is over the text!");
  }
</script>

```
---

### onclick

`onclick` - Triggered when an element is clicked.

Can be used for:
- Submitting forms
- Showing/ hiding content
- Running any functions when something is clicked

```html
<!-- Basic Example -->
<button onclick="sayHello()">Click Me</button>
<script>
  function sayHello() {
    alert("Hello!");
  }
</script>
```
---

### onchange

`onchange` - Triggered when the value of an input changes *(text box, dropdown, checkbox)*.

Can be used for:
- Updating something after a user finishes typing
- Reacting to dropdown selections
- Validating input

```html
<!-- Basic Example -->
<input type="text" onchange="alert('Input changed!')" />
```

#### Runnable Example Evidence

<div style="display: flex; gap: 20px; justify-content: center;">

  <div>
    <img src="path/to/image1.png" alt="Code for unshift/shift" width="250"/>
    <p style="text-align: center;"><em>1. Browser window result- onclick</em></p>
  </div>

  <div>
    <img src="path/to/image2.png" alt="Code for split" width="250"/>
    <p style="text-align: center;"><em>2. Browser window result- onchange</em></p>
  </div>

  <div>
    <img src="path/to/image3.png" alt="Console output" width="250"/>
    <p style="text-align: center;"><em>3. Browser window result- onmouseover</em></p>
  </div>

</div>

---

#### Summary Table

| Event         | Triggered when...                      | Common Use                     |
| ------------- | -------------------------------------- | ------------------------------ |
| `onclick`     | User clicks on an element              | Buttons, toggles, actions      |
| `onchange`    | User changes input value and leaves it | Forms, dropdowns, settings     |
| `onmouseover` | Mouse hovers over an element           | Hints, hover effects, tooltips |

---

## Credits & References

| Topic              | Resource | Link |
|--------------------|----------|------|
| `shift()` method   | MDN Web Docs | [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) |
| `unshift()` method | MDN Web Docs | [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) |
| `split()` method   | MDN Web Docs | [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) |
| Objects & Methods  | W3Schools | [JS Objects](https://www.w3schools.com/js/js_objects.asp), [JS Object Methods](https://www.w3schools.com/js/js_object_methods.asp) |
| Objects & `this`   | MDN Web Docs | [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) |
| DOM Events Intro   | MDN Web Docs | [Intro to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) |
| `onclick` event    | MDN Web Docs | [onclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) |
| `onchange` event   | MDN Web Docs | [onchange](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) |
| `onmouseover` event| MDN Web Docs | [onmouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) |
| DOM Overview       | MDN Web Docs | [What is the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) |

I also highly reccommend the book *JavaScript & JQuery: Interactive Front-End Web Development* by Jon Duckett. Chapters 2 - 6 were particularly useful in understanding the topics covered.