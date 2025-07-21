# DOM Revision

---
## Day 1: DOM Basics
✅ Today's Focus
- Selecting elements using getElementById
- Reading and updating text using textContent, innerText, and innerHTML

### 1. Quick Recap (5 mins)
🔤 HTML/CSS Essentials
HTML IDs are unique:
```html
<p id="message">Hello!</p>
```
Use #id in CSS to style:
```css
#message {
  color: blue;
}
```
🧠 Task 1: Predict the Output
HTML
```html
<p id="welcome">Hello!</p>
```
JavaScript
```js
let msg = document.getElementById("welcome");
msg.textContent = msg.textContent + " 👋";
```
❓ Question: What will appear in the browser?
    Hello 👋

🔨 Task 2: Make the Button Work
Goal: Write JavaScript that changes the text when a button is clicked.
HTML
```html
<h1 id="title">Welcome</h1>
<button id="changeTextBtn" onclick="changeText()">Change Greeting</button>
```
✏️ Task:
When the button is clicked, the heading text should change to: "Hello, JavaScript!"
💡 Stretch: Add console.log("Button clicked") to check if it’s working.
```html
<h1 id="title">Welcome</h1>
<button id="changeTextBtn" onclick="changeText()">Change Greeting</button>
```
```js
function changeText() {
  document.getElementByID("title").textContent = "Hello, JavaScript!";
}
changeText();
```

🔁 Task 3: Toggle the Message (Apply Logic)
HTML
```html
<p id="status">Offline</p>
<button id="toggleBtn" onclick="toggleText()">Toggle Status</button>
```
✏️ Task:
When clicked:
- If the status is "Offline", change it to "Online ✅"
- If it’s "Online ✅", change it back to "Offline"
🎯 This task requires if/else logic and use of textContent.
```html
<p id="status">Offline</p>
<button id="toggleBtn">Toggle Status</button>
```
```js
let statusText = document.getElementById("status");

document.getElementById("toggleBtn").addEventListener("click", function () {
  if (statusText.textContent === "Offline") {
    statusText.textContent = "Online ✅";
  } else {
    statusText.textContent = "Offline";
  }
});
```

🧠 Task 4: Fix the Broken Code
Here’s a broken snippet. Try to spot the mistake and fix it.

HTML
```html
<p id="info">Original text</p>
<button onclick="updateText()">Click Me</button>
```
JS
```js
document.getElementById("updateBtn").addEventListener("click", function () {
  document.getElementById("info").textContent = "Updated!";
});
```
❓ What's wrong with this code?
✍️ Try to fix it without running it first — explain in a comment.
- no document. before getElement so does not know where i is looking
No event listener listening for button click to respond to

🎨 Task 5: Style Swap
HTML
```html
<p id="color-text">This text will change color</p>
<button id="colorBtn">Change Color</button>
```
✏️ Task:
When the button is clicked, change the text color to purple using JavaScript (not CSS).

Use .style.color = "purple".

💡 Bonus: Try changing the background too.
```js
document.getElementById("colorBtn").addEventListener("click", function () {
  const text = document.getElementById("color-text");
  text.style.color = "purple";
  text.style.backgroundColor = "lavender";
});
```

---
📚 DOM Basics Revision Plan (30–40 mins)
✅ Part 1: Flash Recall (No Code — Just You)
Try to answer these without checking notes.

1. What method do we use to select an element by its ID?
✍️ getElementById()

2. What’s the difference between .textContent and .innerHTML?
✍️ text content uses only plain text wheras innerHTML inserts HTML (could do with a bit more detail if I'm honest_)
| Feature                             | `.textContent` | `.innerHTML`    |
| ----------------------------------- | -------------- | --------------- |
| Strips HTML?                        | ✅ Yes          | ❌ No            |
| Safer for user content?             | ✅ Yes          | ❌ No (XSS risk) |
| Shows all text, even hidden by CSS? | ✅ Yes          | ❌ Depends       |
| Renders HTML tags?                  | ❌ No           | ✅ Yes           |
```js
el.textContent = "<strong>Hello</strong>"; // Displays: <strong>Hello</strong>
el.innerHTML = "<strong>Hello</strong>";   // Displays: **Hello** (bolded)
```

3. How do you change the background color of the page using JavaScript?
✍️ document.body.style.backgroundColor = "red";

4. True or False: getElementById returns multiple elements
✍️ FLASE - Id should only be one element - class or querySelectorAll return multiple.s.

5. What method do you use to create a new HTML element in JS?
✍️ createElement()

🔄 Part 2: Core Practice Tasks
📌 Task A: Fix the Typos

Correct this JavaScript:
```js
let heading = getelementById("title");
heading.textContent = "<strong>Hello!</strong>";
```
✏️ Identify two bugs
- textContent = "<strong>Hello!</strong>" - will also add the tags
- typo in ` getelementById("title");` needs capital E for element
✍️ Write the fixed version
```js
llet heading = document.getElementById("title");
heading.textContent = "Hello!";
```

📌 Task B: Create and Insert
- Write JS to do the following:
    - Create a new <p> element
    - Set its text to "DOMs are fun!"
    - Add it to the <body>
✍️
```js
let paragraph = document.createElement("p");
paragraph.textContent = "DOMs are fun!";
document.body.appendChild(paragraph);
```

📌 Task C: Toggle Text (From Scratch)

HTML:
```html
<p id="status">Inactive</p>
<button id="toggleBtn">Toggle</button>
```
Write JS so that when the button is clicked:
- If the text is "Inactive", change it to "Active ✅"
- If it's "Active ✅", change it back to "Inactive"
```js
document.getElementById("toggleBtn").addEventListener("click", function () {
    // Step 1: Get the current status
  let status = document.getElementById("status");
  // Step 2: Check if it's Inactive
  if (status.textContent === "Inactive") {
    // Step 3: Change to Active or back to Inactive
    status.textContent = "Active ✅";
  } else {
    status.textContent = "Inactive";
  }
});

```
