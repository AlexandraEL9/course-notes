# How to Build a Website (Step-by-Step Guide)

This guide outlines the full process of building a basic website using HTML, CSS, JavaScript, Node.js, and Express, with optional public deployment via LocalTunnel.

---
Summary
✅ Build structure with HTML
✅ Add style with CSS
✅ Add interactivity with JavaScript
✅ Serve locally with Node.js & Express
✅ Deploy temporarily with LocalTunnel

## 1. Set Up the Project Folder

Create a folder to store all your files:
my-website/
├── index.html
├── style.css
├── script.js

```php-template
---

## 2. Create the HTML Structure

### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph with some sample content.</p>

    <button class="fancy-button">Click me!</button>
  </body>
</html>
```

3. Add CSS Styling
style.css
```css
Copy
Edit
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  color: red;
  text-decoration: underline;
}

p {
  font-style: italic;
}

.fancy-button {
  background-color: blue;
  color: yellow;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
```

4. Add JavaScript Functionality
script.js
```js
document.querySelector(".fancy-button").addEventListener("click", function () {
  alert("You clicked the button!");
});
```
Use defer in your HTML <script> tag so the JavaScript runs after the HTML loads.

5. Test in a Browser
Open `index.html` in your browser to view the site.

Use browser Inspect > Console to test JavaScript.

6. Set Up a Local Server with Node.js + Express
Prerequisites:
Install Node.js and NPM: https://nodejs.org/

Install Express:

```bash
npm init -y
npm install express
```

7. Create a Server File
app.js
```js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
```

Folder structure:
```pgsql
my-website/
├── app.js
├── public/
    ├── index.html
    ├── style.css
    └── script.js
```

Run your server:
```bash
node app.js
```
View in browser:
Visit http://localhost:3000

8. Optional: Make Your Site Public with LocalTunnel
Install LocalTunnel:
```bash
npm install -g localtunnel
```
While server is running, in a new terminal:
```bash
lt --port 3000
```
Copy the generated link — your site is now public.

To stop it, press `CTRL + C`.

Summary
✅ Build structure with HTML
✅ Add style with CSS
✅ Add interactivity with JavaScript
✅ Serve locally with Node.js & Express
✅ Deploy temporarily with LocalTunnel

