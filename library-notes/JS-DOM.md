# JavaScript - The DOM

## 📚 Contents

- [The DOM Part 1](#the-dom-part-1)
  - [What is the DOM?](#what-is-the-dom)
  - [Outputting Text](#-outputting-text)
  - [Just Enough HTML](#-just-enough-html)
  - [DOM: Read/Write Text](#-dom-readwrite-text)
  - [DOM Events](#️-dom-events)
  - [Creating HTML Elements](#-creating-html-elements)
  - [Just Enough CSS](#-just-enough-css)
  - [Update Styles with JavaScript](#-update-styles-with-javascript)
  - [Recap: You Can Now](#-recap-you-can-now)
  - [Useful References](#-useful-references)
  - [textContent vs innerText vs innerHTML](#-textcontent-vs-innertext-vs-innerhtml)

- [The DOM Part 2](#the-dom-part-2)
  - [Working with Collections](#working-with-collections)
  - [Nested Elements](#nested-elements)
  - [Event Listeners](#event-listeners)
  - [Timers](#timers)
  - [Traversing the DOM - classList](#traversing-the-dom---classlist)
  - [Local Storage](#local-storage)
  - [Quick HTML Element Reference](#quick-html-element-reference)
  - [Useful CSS Properties](#useful-css-properties)

---

## The DOM Part 1
## JavaScript Web Apps

**What is the DOM?**
- The **Document Object Model** (DOM) lets JavaScript read/write web page content.
- Enables interactivity by linking JavaScript with HTML elements.

---

## 📝 Outputting Text

### `document.write()`
```js
document.write("Hello 👋")
```
- Adds text directly to the page.
- **Not recommended** for precise control — better methods exist.

---

## 🔤 Just Enough HTML

- **HTML (HyperText Markup Language)** structures web content.
- Uses **tags** like `<h1>` or `<p>` for meaning and layout.
- In **CodePen**, we can write minimal HTML to get started.

---

## 🔎 DOM: Read/Write Text

### Example:
```html
<div id="message">Hello 👋</div>
```

### JS:
```js
document.getElementById("message").textContent = "New message!";
```
- Use `getElementById()` to select an element.
- Use `textContent` to update its text.

---

## 🖱️ DOM Events

- Events run code **when something happens** (e.g., button click).
- Example:

```html
<button onclick="convertCurrency()">Convert</button>

<input type="number" onchange="convertCurrency()">
```

### JavaScript:
```js
function convertCurrency() {
  // do something
}
```

---

## 🏗️ Creating HTML Elements

### JavaScript:
```js
let heading = document.createElement("h1");
heading.textContent = "Hello World!";
document.body.appendChild(heading);
```

- `createElement()` creates new elements.
- `appendChild()` adds them to the page.

---

## 🎨 Just Enough CSS

- Use **CSS** to style HTML.
- You can target:
  - **Tags** (`body {}`)
  - **Classes** (`.my-class {}`)
  - **IDs** (`#my-id {}`)

### Example:
```css
p {
  color: red;
  font-family: Helvetica;
}
```

---

## 🎨 Update Styles with JavaScript

### Example:
```js
document.body.style.backgroundColor = "red";
```

- Select elements and modify their style directly in JS.

---

## ✅ Recap: You Can Now
- Use basic HTML & CSS to build and style a page.
- Use the **DOM** to:
  - Read and write text
  - Respond to events
  - Create and append elements
  - Change styles with JavaScript

---

## 🔗 Useful References
- [CodePen Autocomplete](https://blog.codepen.io/documentation/autocomplete)
- [MDN DOM Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🔍 `textContent` vs `innerText` vs `innerHTML`
| Property      | Description |
|---------------|-------------|
| `textContent` | Fastest and safest (plain text only) |
| `innerText`   | Affects visible text only, respects CSS |
| `innerHTML`   | Inserts HTML (can be a security risk) |

---
## The DOM: Part 2

### Working with Collections

`getElementsByTagName()`

- Selects all elements with a given tag.

- Returns a live HTMLCollection.

```js
let paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
  p.style.color = 'blue';
}
```

`getElementsByClassName()`

- Selects elements with a specific class name.

- Useful when elements have different tags but the same styling need.

```js
let highlights = document.getElementsByClassName('highlight');
for (let h of highlights) {
  h.style.fontWeight = 'bold';
}
```

---

### Nested Elements

Select elements *within* another element

```js
const list = document.getElementById("fruit-list");
const items = list.getElementsByTagName("li");
for (let item of items) {
  item.textContent += " 🍓";
}
```

---

### Event Listeners

Respond to user actions (like clicks, form submits).

`addEventListener()`
```js
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

You can also change elements directly:
```js
title.style.color = "green";
```

---

### Timers

Use `setTimeout()` to deley code execution
```js
setTimeout(() => {
  alert("This shows after 1 second!");
}, 1000);
```

---

### Traversing the DOM - `classList`

Use `classList.add()` and `classList.remove()` to apply or remove styles.
```js
element.classList.add("highlighted");
element.classList.remove("hidden");
```

---

### Local Storage

Persist data in the browser across sessions.

```js
localStorage.setItem("name", "Alex");
let storedName = localStorage.getItem("name");
```

Store objects with JSON:
```js
let todos = ["Task 1", "Task 2"];
localStorage.setItem("todos", JSON.stringify(todos));
```

---

### Quick HTML Element Reference

`<input>`, `<label>`, `<p>`, `<div>`, `<h1>–<h6>`, `<ul>`, `<li>`, `<select>`, `<option>`, `<button>`

---

### Useful CSS Properties

```css

background-color: lavender;
font-family: 'Arial', sans-serif;
text-align: center;
text-decoration: underline;
```

---