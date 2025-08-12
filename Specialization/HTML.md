# HTML

## Contents

- [What is HTML?](#what-is-html)
    - [Glossary 1](#glossary-1)
    - [HTML Anatomy](#html-anatomy)

- [Headings, Paragraphs & Text Formatting](#headings-paragraphs-text-formatting)
    - [Glossary 2](#glossary-2)
    - [Basic Structure: Headings & Paragraphs](#basic-structure-headings-paragraphs)
    - [Text Formatting Tags](#text-formatting-tags)
    - [Boilerplate](#boilerplate)
      - [File Addresses & Relative Paths](#file-addresses-relative-paths)

- [Links, Images & Lists](#links-images-lists)
    - [Glossary 3](#glossary-3)
    - [Links](#links)
    - [Images](#images)
    - [Lists](#lists)

- [Page Structure & Semantic Tags](#page-structure-semantic-tags)
    - [Glossary 4](#glossary-4)
    - [Semantic Page Layout Example](#semantic-page-layout-example)

- [Forms, Inputs, Labels, and Buttons](#forms-inputs-labels-buttons)
    - [Glossary 5](#glossary-5)
    - [Simple Form Example](#simple-form-example)
    - [Common Input Types](#common-input-types)

- [Input Types, Checkboxes, Radio Buttons & Fieldsets](#input-types-checkboxes-radio-buttons-fieldsets)
    - [Glossary 6](#glossary-6)
    - [Checkboxes](#checkboxes)
    - [Radio Buttons](#radio-buttons)
    - [Grouping with <fieldset> and <legend>](#grouping-with-fieldset-and-legend)
    - [Quick Tips](#quick-tips)

- [Dropdowns, Textareas & Form Submission Basics](#dropdowns-textarea-form-submission-basics)
    - [Glossary 7](#glossary-7)
    - [Dropdown Menus](#dropdown-menus)
    - [Textareas](#textareas)
    - [Form Submission Basics](#form-submission-basics)

- [Accessibility & Required Fields](#accessibility-required-fields)
    - [Glossary 8](#glossary-8)
    - [Accessible Forms: Best Practices](#accessible-forms-best-practices)
    - [`aria-label` (invisible label)](#arie-label-invisible-label)

---

## What is HTML?

HTML stands for **HyperText Markup Language**. It’s the standard language used to structure content on the web—think of it as *the skeleton of a webpage*.

- It structures websites like a skeleton.
- Uses tags to add:
  - Images
  - Text
  - Headings
  - Other basic elements (unstyled by default)
- HTML builds the foundation; CSS adds the style.

### Glossary 1
| Term        | Definition                                                                        |
| ----------- | --------------------------------------------------------------------------------- |
| HTML        | A markup language used to structure text, images, and links on web pages.         |
| Tag         | A keyword in angle brackets (e.g., `<p>`) that tells the browser what to display. |
| Element     | A full set of tags with content (e.g., `<p>Hello</p>`).                           |
| Attribute   | Extra info added to tags (e.g., `class`, `id`, `href`).                           |
| Nesting     | Placing tags inside other tags to build structure.                                |
| Boilerplate | A standard starting structure of an HTML document.                                |

### HTML Anatomy
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first HTML paragraph.</p>
  </body>
</html>
```
**Breakdown:**
| Line              | Explanation                                             |
| ----------------- | ------------------------------------------------------- |
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document.            |
| `<html>`          | The root of the HTML document.                          |
| `<head>`          | Contains info *about* the page (not shown on the page). |
| `<title>`         | Sets the browser tab title.                             |
| `<body>`          | Everything here is visible on the page.                 |
| `<h1>`            | A top-level heading.                                    |
| `<p>`             | A paragraph of text.                                    |

---

## Headings, Paragraphs & Text Formatting

### Glossary 2
| Term            | Definition                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| Heading tags    | Tags like `<h1>` to `<h6>` used to define headings. `<h1>` is the biggest. |
| Paragraph tag   | `<p>` defines a paragraph of text.                                         |
| Formatting tags | Tags like `<strong>`, `<em>`, `<br>`, used to style or affect text.        |
| Semantic        | A tag that clearly describes its meaning (like `<strong>` for importance). |
| Line break      | `<br>` inserts a single line break—like hitting "Enter" in a text editor.  |

### Basic Structure: Headings & Paragraphs
```js
<h1>This is a Heading</h1>
<p>This is a paragraph under the heading.</p>
```
You can use different heading levels:
```js
<h2>Sub-heading</h2>
<h3>Smaller sub-heading</h3>
<h4>Even smaller</h4>
```
👉 Only one <h1> per page is best practice. It tells the browser (and screen readers) what the page is mainly about.

### Text Formatting Tags
| Tag        | Purpose                              | Example                          |
| ---------- | ------------------------------------ | -------------------------------- |
| `<strong>` | Bold, *important* text               | `<strong>Don't forget!</strong>` |
| `<em>`     | Italic, *emphasised* text            | `<em>This is key!</em>`          |
| `<br>`     | Line break (no closing tag needed)   | `Line one<br>Line two`           |
| `<hr>`     | Horizontal line to separate sections | `Content above<hr>Content below` |

Each tag has:
- **Opening tag** (e.g. `<h1>`)
- **Content** (e.g. `HTML for Beginners`)
- **Closing tag** (e.g. `</h1>`)

Example:
```html
<h1>HTML for Beginners</h1>
```

**Example Usage:**
```html
<h1>Welcome to My Page</h1>

<p>This is a <strong>bold</strong> sentence.</p>

<p>Here is something <em>important</em> to note.</p>

<p>Line one<br>Line two</p>

<hr>

<p>New section begins here.</p>
```
**EXERCISE: 1st HTML tab
- Open a suitable IDE (e.g. VS Code, Atom).
- Create a file: MyFirstWebsite.html
- Add an <h1> tag with your name.
- Open the file in a browser.
- Try changing or removing parts of the tag to see what happens.
```html
```

### Boilerplate

- Boilerplate = reusable, standard code
- HTML boilerplate includes code required at the start of every HTML document.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>MyFirstWebsite</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```
**Tags to know:**
- `<!DOCTYPE html>` — Declares the document is HTML

- `<html>` — Root element of the page

- `<head>` — Metadata, links, and title

- `<title>` — Title shown in the browser tab

- `<body>` — Visible content

**Exercise: Add Boilerplate**
Add the following to your HTML file:
- <!DOCTYPE html>
- <html>
- <head> with a <title>
- <body>
- Google anything you're unsure about!
*Exercise 2: Add Text*
Use the following tags:
- <h1> to <h6> — Headings
- <p> — Paragraph
*Add this info:*
- Your name
- Your city
- Your favourite book
- Your favourite film
```html
```

#### File Addresses & Relative Paths

- Files often reference other files (e.g. images, stylesheets).
- Absolute path: starts from the root (e.g. C:/Users/YourName/Documents/...)
- Relative path: starts from the current file's location (e.g. ../images/myphoto.png)

---

## Links, Images & Lists

### Glossary 3
| Term           | Definition                                                         |
| -------------- | ------------------------------------------------------------------ |
| Anchor tag     | `<a>` tag used to create hyperlinks.                               |
| `href`         | Attribute that defines the URL for a link.                         |
| Image tag      | `<img>` tag used to display images.                                |
| `src`          | Attribute that defines the image file path or URL.                 |
| `alt`          | Text shown if the image fails to load (also helps screen readers). |
| Ordered list   | `<ol>` tag for numbered lists.                                     |
| Unordered list | `<ul>` tag for bullet point lists.                                 |
| List item      | `<li>` tag used inside `<ul>` or `<ol>` to define each item.       |

### Links
```html
<a href="https://example.com">Visit Example</a>
```
- `<a>` = anchor tag

- `href` = destination URL

- Text between the tags is the clickable link

**To open an new tab:**
```html
<a href="https://example.com" target="_blank">Open in new tab</a>
```

### Images
```html
<img src="https://via.placeholder.com/150" alt="Placeholder image">
```
- `<img>` is self-closing

- `src` = source of the image

- `alt` = alternative text- used if image doesn't load and for screen readers. To be compliant for accessibility - this MUST be present.

### Lists

**Unordered List (bullets):**
```html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>
```

**Ordered List (numbers):**
```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

---

## Page Structure & Semantic Tags

### Why Use Semantic Tags?

- Improves accessibility (screen readers understand the structure)
- Helps search engines index your content
- Makes your code more readable and maintainable

### Glossary 4
| Term          | Definition                                                             |
| ------------- | ---------------------------------------------------------------------- |
| Semantic HTML | Tags that clearly describe the purpose of the content inside them.     |
| `<header>`    | The top section of a page (often includes logo, site name, nav links). |
| `<nav>`       | Contains navigation links.                                             |
| `<main>`      | The primary content of the page.                                       |
| `<section>`   | A grouping of related content within `<main>`.                         |
| `<article>`   | A self-contained piece of content (like a blog post or news article).  |
| `<footer>`    | The bottom section of the page (e.g. contact info, copyright).         |
| Non-semantic  | Tags like `<div>` and `<span>`, which don’t describe meaning.          |

### Semantic Page Layout Example
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Semantic Page</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#about">About</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Welcome</h2>
        <p>This is the intro section of the page.</p>
      </section>

      <article>
        <h2>Latest News</h2>
        <p>Here’s an article about something exciting.</p>
      </article>
    </main>

    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </body>
</html>
```

---

## Forms, Inputs, Labels, and Buttons

### Glossary 5
| Term          | Definition                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Form          | A section of a webpage that collects user input (`<form>`).                |
| Input         | An element where users enter data (`<input>`).                             |
| Label         | Describes an input field (`<label>`), improving accessibility.             |
| Button        | Triggers a form action, like submitting it (`<button>`).                   |
| `type`        | Attribute of `<input>` that defines the kind of input (e.g., text, email). |
| `name`        | Identifier used to label the data when submitted.                          |
| `placeholder` | Hint text shown inside an input field.                                     |

### Simple Form Example
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="user_name" placeholder="Enter your name">

  <br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="user_email" placeholder="Enter your email">

  <br><br>

  <button type="submit">Submit</button>
</form>
```
- `<form>`: Wraps all the form inputs.

- `<label for="name">`: Describes the input field. for should match the input’s id.

- `<input>`: Used to take text/email/etc.

- `<button type="submit">`: Submits the form.

### Common Input Types
| Type       | Purpose                           |
| ---------- | --------------------------------- |
| `text`     | For general text                  |
| `email`    | For email addresses               |
| `password` | For obscured passwords            |
| `number`   | For numeric input                 |
| `checkbox` | For yes/no options                |
| `radio`    | For selecting one of many options |
| `submit`   | A button that submits the form    |


---

## Input Types, Checkboxes, Radio Buttons & Fieldsets

### Glossary 6
| Term         | Definition                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| Checkbox     | Lets the user choose **multiple options** (`<input type="checkbox">`).     |
| Radio Button | Lets the user choose **one option from a group** (`<input type="radio">`). |
| Fieldset     | Groups related form elements together.                                     |
| Legend       | Gives a title to the grouped elements inside a `<fieldset>`.               |

### Checkboxes
Checkboxes allow the user to select one or more options.
```html
<form>
  <p>Choose your favourite fruits:</p>
  <input type="checkbox" id="apple" name="fruit" value="apple">
  <label for="apple">Apple</label><br>

  <input type="checkbox" id="banana" name="fruit" value="banana">
  <label for="banana">Banana</label><br>

  <input type="checkbox" id="cherry" name="fruit" value="cherry">
  <label for="cherry">Cherry</label>
</form>
```

### Radio Buttons
- Radio buttons let the user select only one from a group. 
- All buttons in the group must share the same name.
```html
<form>
  <p>Choose your gender:</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>

  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br>

  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Other</label>
</form>
```

### Grouping with <fieldset> and <legend>
- Fieldset: Groups related form elements together.                                   
- Legend: Gives a title to the grouped elements inside a `<fieldset>`.

```html
<form>
  <fieldset>
    <legend>Contact Preferences</legend>

    <label>
      <input type="checkbox" name="contact" value="email"> Email
    </label><br>

    <label>
      <input type="checkbox" name="contact" value="sms"> SMS
    </label><br>

    <label>
      <input type="checkbox" name="contact" value="phone"> Phone Call
    </label>

  </fieldset>
</form>
```

### Quick Tips

- Use `checkbox` when multiple answers are allowed.
- Use `radio` when only one answer is allowed.
- Use `fieldset` to make forms more readable and accessible.

**Mini Task**
Create a form snippet with:
- A fieldset with a legend like "Favourite Activities"
- 3 checkboxes (e.g., Reading, Cycling, Painting)
- A radio group to choose time of day: Morning / Afternoon / Evening
```html
<form>
  <fieldset>
    <legend>Favourite Activities</legend>

    <label>
      <input type="checkbox" name="activity" value="reading"> Reading
    </label><br>

    <label>
      <input type="checkbox" name="activity" value="cycling"> Cycling
    </label><br>

    <label>
      <input type="checkbox" name="activity" value="painting"> Painting
    </label>

    <p>Choose a time of day:</p>
    <input type="radio" id="morning" name="tod" value="morning">
    <label for="morning">Morning</label><br>

    <input type="radio" id="afternoon" name="tod" value="afternoon">
    <label for="afternoon">Afternoon</label><br>

    <input type="radio" id="evening" name="tod" value="evening">
    <label for="evening">Evening</label>
  </fieldset>
</form>
```

---

## Dropdowns, Textareas & Form Submission Basics

### Glossary 7
| Term     | Definition                                                                |
| -------- | ------------------------------------------------------------------------- |
| Dropdown | A list of options in a compact menu (`<select>` and `<option>`).          |
| Textarea | A multi-line input field (`<textarea>`).                                  |
| Submit   | The act of sending form data to a server (using `<button>` or `<input>`). |
| Action   | The URL that the form data is sent to (`action=""` in the `<form>` tag).  |
| Method   | Describes how the form data is sent – usually `GET` or `POST`.            |

### Dropdown Menus
```html
<form>
  <label for="drink">Choose a drink:</label>
  <select id="drink" name="drink">
    <option value="tea">Tea</option>
    <option value="coffee">Coffee</option>
    <option value="juice">Juice</option>
  </select>
</form>
```
- `<select>` creates the dropdown.

- Each `<option>` is a choice.

- `value=""` is what gets submitted behind the scenes.

### Textareas
```html
<form>
  <label for="message">Your message:</label><br>
  <textarea id="message" name="message" rows="4" cols="40" placeholder="Type your message here..."></textarea>
</form>
```
- `<textarea>` is not self-closing.
- You can control its size with `rows` and `cols`.
- Supports multiple lines of text.

### Form Submission Basics
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="user_name">
  
  <br><br>
  
  <button type="submit">Send</button>
</form>
```
-` action="/submit"` tells the form where to send the data.

- `method="POST"` means data is sent securely and hidden.

- `method="GET"` would add the form data to the URL (visible in the browser bar).

**Mini Task**
Make a Mini Feedback Form
- Write a form with:
    - A dropdown with 3 options (e.g. "Website", "Support", "Other")
    - A textarea for comments
    - A submit button
    - You can include the action="#" for now.
```html
<form action="/submit" method="POST">
    <label for="drink">Give Feedback On:</label>
  <select id="drink" name="drink">
    <option value="website">Website</option>
    <option value="support">Support</option>
    <option value="other">Other</option>
  </select>
<br><br>
  <label for="message">Your message:</label><br>
  <textarea id="message" name="message" rows="4" cols="40" placeholder="Type your message here..."></textarea>
<br><br>
  <button type="submit">Send</button>
</form>
```

---

## Accessibility & Required Fields

### Glossary 8
| Term          | Definition                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Accessibility | Designing for all users, including those with disabilities.             |
| `required`    | An attribute that **prevents form submission** if the field is empty.   |
| Screen reader | A tool that reads out page content for users with visual impairments.   |
| `aria-label`  | An attribute that provides a **text alternative** for screen readers.   |
| Semantic HTML | Using tags that convey meaning — important for accessibility.           |
| `alt` text    | Describes an image — used by screen readers or if the image can’t load. |

### Accessible Forms: Best Practices

- Always use a `<label>` for every `<input>` and connect it using `for="..." `.
- Make fields `required` if they’re essential.
- Use helpful `placeholder` text (but never rely on it alone — screen readers may ignore it).
- Provide clear button labels (e.g., “Submit Feedback” instead of just “Submit”).

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br><br>
  <button type="submit">Submit</button>
</form>
```
- With `required`, the browser won’t submit the form unless the field is filled out.
- Works with most input types: `text`, `email`, `password, ``checkbox`, etc.

### `aria-label` (invisible label)
Useful when a visible label isn’t possible — but not needed for most beginner forms.
```html
<input type="text" aria-label="Search" placeholder="Type to search">
```

~
**Mini Task**
Make an Accessible Form
- Write a form that includes:
    - A label and required field for name
    - A label and required field for email
    - A textarea for feedback (optional)
    - A clearly labeled submit button
You can include action="#" for now.
```html
```