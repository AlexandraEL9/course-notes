# CSS

## Contents
- [What is CSS?](#what-is-css)
    - [Glossary 1](#glossary-1)
    - [Ways to dd CSS](#ways-to-add-css)
    - [Example](#example)

- [CSS Selectors](#css-selectors)
    - [Glossary 2](#glossary-2)
    - [Basic Examples](#basic-examples)
        - [Element Selector](#element-selector)
        - [Class Selector](#class-selector)
        - [ID Selector](#id-selector)
        - [Group Selector](#group-selector)
        - [Descendant Selector](#descendant-selector)

- [CSS Spacing: Box Model](#css-sspacing-box-model)
    - [Glossary 3](#glossary-3)
    - [Visual Reference](#visual-reference)
        - [Examples](#examples)

- [Fonts & Text Styling](#fonts-text-styling)
    - [Glossary 4](#glossary-4)
    - [Examples](#examples)
        - [Font Stacks](#font-stacks)

- [Colours & Backgrounds](#colours-backgrounds)
    - [Glossary 5](#glossary-5)
    - [Types of Colour Values](#types-of-colour-values)
        - [Example](#example)
    - [CSS Gradients](#css-gradients)
        - [Linear Gradient: Top to Bottom](#linear-gradient-top-to-bottom)
        - [Linear Gradient: Left to Right](#linear-gradient-left-to-right)
        - [Linear Gradient: Custom Angle](#linear-gradient-custom-angle)
        - [Linear Gradient: Radial](#linear-gradient-radial)
        - [Linear Gradient: With Colour Stops](#linear-gradient-with-colour-stops)
    - [CSS Transparency](#css-transparency)
    - [Overlay Gradients on Images](#overlay-gradients-on-images)
    - [Repeating Gradients](#repeating-gradients)
    - [Custom CSS Variables for Colors](#custom-css-variables-for-colors)
    - [Gradient Text in CSS](#gradient-text-in-css)
    - [Color Contrast and Accessibility](#color-contrast-and-accessibility)

---

## What is CSS?

HTML creates the structure of a page, but CSS adds the style — things like:

- Colours
- Fonts
- Layout
- Spacing
- Borders and backgrounds
- Animation and interaction

### Glossary 1
| Term            | Definition                                                         |
| --------------- | ------------------------------------------------------------------ |
| **CSS**         | Cascading Style Sheets – a language used to style HTML elements.   |
| **Selector**    | Targets an HTML element (like `h1` or `p`) to apply styles to.     |
| **Property**    | A style you want to apply, like `color`, `font-size`, or `margin`. |
| **Value**       | The setting you give a property, like `red`, `16px`, or `10px`.    |
| **Declaration** | A property + value pair, like `color: red;`.                       |
| **Rule**        | A complete selector + declaration block, like `p { color: red; }`. |
| **Style Sheet** | A file that contains CSS rules (often saved as `.css`).            |

### Ways to dd CSS
| Method       | Description                                                  | Example                        |
| ------------ | ------------------------------------------------------------ | ------------------------------ |
| **Inline**   | Style added directly in an HTML tag.                         | `<p style="color: red;">`      |
| **Internal** | CSS inside a `<style>` tag in the HTML `<head>`.             | See example below              |
| **External** | CSS in a separate `.css` file, linked with `<link>` in HTML. | Best practice for larger sites |

### Example
```css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Styled Page</title>
  <style>
    body {
      background-color: #f0f8ff;
    }
    h1 {
      color: navy;
      font-family: Arial, sans-serif;
    }
    p {
      color: #333;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
  <p>This is my first CSS-styled page.</p>
</body>
</html>
```

### How to add as an external file:
- Create a CSS file: style.css
- Save it in the same folder as your HTML.
- Add this line inside the <head> of your HTML:
```html
<link rel="stylesheet" href="style.css">
```

### How it Works
- CSS targets **elements** using `selectors`.
- Curly braces `{}` contain the **style rules**.
- Each rule is an `attribute` and `value` pair.

![CSS Syntax](/images/css-syntax.png)

**Example:**
```css
p {
  color: red;
  font-style: italic;
}
```
This makes all <p> tags red and italic.

---

## CSS Selectors

### Glossary 2
| Term                    | Definition                                                       |
| ----------------------- | ---------------------------------------------------------------- |
| **Selector**            | Targets HTML elements to apply styles to.                        |
| **Element Selector**    | Targets HTML tags like `h1`, `p`, or `div`.                      |
| **Class Selector**      | Targets elements with a specific class attribute (`.classname`). |
| **ID Selector**         | Targets one unique element with a specific ID (`#idname`).       |
| **Universal Selector**  | Targets all elements (`*`).                                      |
| **Group Selector**      | Targets multiple selectors at once (`h1, p`).                    |
| **Descendant Selector** | Targets elements inside another element (`div p`).               |

### Basic Examples
#### Element Selector
```css
p {
  color: blue;
}
```
- Styles all <p> elements.

*Change your website by:*

Making one heading red:
```css
h1 {
  color: red;
}
```

Making all paragraphs italic:
```css
p {
  font-style: italic;
}
```

Underlining one heading:
```css
h2 {
  text-decoration: underline;
}
```

#### Class Selector
```css
.highlight {
  background-color: yellow;
}
```
- Use in HTML:
```html
<p class="highlight">Important note!</p>
```
- ensure the `selector` and the `class` match exactly.

#### ID Selector
```css
#main-title {
  color: darkred;
}
```
- partnered HTML:
```html
<h1 id="main-title">Welcome!</h1>
```

#### Group Selector
```css
h1, h2, h3 {
  font-family: Georgia, serif;
}
```
-  Styles all listed elements together.

#### Descendant Selector
```css
article p {
  color: #333;
}
```
- Targets only `<p>` elements inside `<article>`.

---

## CSS Spacing: Box Model
Every HTML element is treated like a box. This model describes how space is used around and inside that box.

### Glossary 3
| Term        | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| **Content** | The actual text or image inside the element.                            |
| **Padding** | Space between the content and the border. Adds *inner space*.           |
| **Border**  | The line around the padding. You can style its width, color, and style. |
| **Margin**  | Space outside the border. Creates *space between elements*.             |
| **Box**     | The total area = content + padding + border + margin.                   |

### Visual Reference
```lua
+-----------------------------+
|         Margin              |
|  +-----------------------+  |
|  |       Border          |  |
|  |  +-----------------+  |  |
|  |  |   Padding        |  |  |
|  |  |  +-----------+   |  |  |
|  |  |  | Content   |   |  |  |
|  |  |  +-----------+   |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+

```

#### Examples
```css
.box {
  background-color: lightblue;
  padding: 20px;
  border: 3px solid navy;
  margin: 30px;
}
```
- Partnered HTML:
```html
<div class="box">
  This is a box with padding, border, and margin.
</div>
```

#### Notes:
- Padding adds space **inside** the element.

- Margin adds space **outside**, *between this element and others*.

- Border sits between the two.

---

## Fonts & Text Styling
Text is one of the most important parts of any webpage. CSS gives you powerful tools to change how it looks.

### Glossary 4
| Property         | What It Does                                               |
| ---------------- | ---------------------------------------------------------- |
| `font-family`    | Sets the font (like Arial, Georgia, Verdana)               |
| `font-size`      | Sets the size of the text (`16px`, `1.2em`, `%`)           |
| `font-weight`    | Makes text bolder (`normal`, `bold`, `lighter`, `100–900`) |
| `text-align`     | Aligns text (`left`, `center`, `right`, `justify`)         |
| `text-transform` | Changes case (`uppercase`, `lowercase`, `capitalize`)      |
| `line-height`    | Controls spacing between lines of text                     |
| `letter-spacing` | Controls spacing between characters                        |
| `color`          | Changes the color of the text                              |

### Examples
```css
h1 {
  font-family: 'Georgia', serif;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: darkgreen;
  text-transform: uppercase;
}

p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}
```

#### Font Stacks
When using `font-family`, it's a best practice to list a fallback stack:
```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```
If the first font isn't available, the browser tries the next one.

---

## Colours & Backgrounds
### Glossary 5
| Property              | What It Does                                                      |
| --------------------- | ----------------------------------------------------------------- |
| `color`               | Changes **text color**                                            |
| `background-color`    | Sets the **background color** of an element                       |
| `background-image`    | Adds an image as a background                                     |
| `background-repeat`   | Controls whether the background image repeats                     |
| `background-size`     | Controls how the background image is sized (`cover`, `contain`)   |
| `background-position` | Positions the background image (`center`, `top left`, etc.)       |
| `opacity`             | Sets how transparent an element is (`0` = invisible, `1` = solid) |

### Types of Colour Values
| Type      | Example                                          |
| --------- | ------------------------------------------------ |
| **Named** | `red`, `blue`, `gold`                            |
| **Hex**   | `#ff6600`                                        |
| **RGB**   | `rgb(255, 102, 0)`                               |
| **RGBA**  | `rgba(255, 102, 0, 0.5)` (includes transparency) |
| **HSL**   | `hsl(30, 100%, 50%)`                             |

#### Example
```css
body {
  background-color: #fefbd8;
  color: #333;
}

h1 {
  color: darkslateblue;
}

.box {
  background-color: lightblue;
  padding: 20px;
  border: 2px solid navy;
}

.fancy-background {
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 40px;
}
```
### CSS Gradients
Gradients let you create smooth transitions between two or more colors.

| Term                | What It Means                                                                    |
| ------------------- | -------------------------------------------------------------------------------- |
| `linear-gradient()` | Creates a gradient in a straight line (e.g. top to bottom).                      |
| `radial-gradient()` | Creates a circular gradient radiating from a central point.                      |
| `direction`         | Controls the angle or side the gradient starts from (`to right`, `45deg`, etc.). |
| `color stops`       | The colors used in the gradient, optionally with position values.                |

**Syntax:**
```css
.box {
background: linear-gradient(direction, color1, color2, ...);
}
```

#### Linear Gradient: Top to Bottom
```css
background: linear-gradient(to bottom, lightblue, navy);
```
|   element:    |   css function for gradient   |   direction phrase    |   colours |
|---------------|-------------------------------|-----------------------|-----------|
|   background: |   linear-gradient             |   (to-bottom,         |   light-blue, navy);  |
|"On the background element... |apply a linear gradient|going to the bottom|start with lightblue at the top to navy at the bottom"  |
```css
body {
  background: linear-gradient(to bottom, lightblue, navy);
  height: 100vh; /* Optional: ensures it fills the full screen */
  margin: 0;     /* Removes default margin from body */
}
```
![linear Gradient: Top to Bottom](/images/linear-gradient-top-bottom.png)

#### Linear Gradient: Left to Right
```css
background: linear-gradient(to right, #ff9a9e, #fad0c4);
```
|   element:    |   css function for gradient   |   direction phrase    |   colours |
|---------------|-------------------------------|-----------------------|-----------|
|   background: |   linear-gradient             |   (to-right,         |    #ff9a9e,  #fad0c4);  |
|"On the background element... |apply a linear gradient|going to the right|start with #ff9a9e on the left to #fad0c4 on the right"  |
```css
body {
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  height: 100vh; /* Optional: ensures it fills the full screen */
  margin: 0; /* Removes default margin from body */
}
```
![linear Gradient: Left to Right](/images/linear-gradient-left-right.png)

#### Linear Gradient: Custom Angle
```css
background: linear-gradient(135deg, #f6d365, #fda085);
```
| Element       | CSS Function      | Direction/Angle | Colours             |
| ------------- | ----------------- | --------------- | ------------------- |
| `background:` | `linear-gradient` | `45deg`         | `lightblue`, `navy` |
"On the background property, apply a linear gradient at a 45-degree angle, starting with lightblue and blending into navy diagonally (top-left to bottom-right)."
```css
body {
  background: linear-gradient(135deg, #f6d365, #fda085);
  height: 100vh; /* Optional: ensures it fills the full screen */
  margin: 0; /* Removes default margin from body */
}
```
![linear Gradient: Custom Angle](/images/linear-gradient-custom-angle.png)


#### Linear Gradient: Radial
```css
background: radial-gradient(circle, #a1c4fd, #c2e9fb);
```
| Element       | CSS Function      | Shape/Position     | Colours             |
| ------------- | ----------------- | ------------------ | ------------------- |
| `background:` | `radial-gradient` | `circle at center` | `lightblue`, `navy` |
"On the background property, apply a radial gradient in the shape of a circle, starting at the center of the element. Begin with lightblue in the middle, blending outward to navy at the edges."
```css
body {
  background: radial-gradient(circle, #a1c4fd,rgb(11, 171, 245));
  height: 100vh; /* Optional: ensures it fills the full screen */
  margin: 0; /* Removes default margin from body */
}
```
![Gradient: Radial](/images/gradient-radial.png)


#### Linear Gradient: With Colour Stops
```css
background: linear-gradient(to right, red 0%, orange 50%, yellow 100%);
```
| Element       | CSS Function      | Direction Phrase | Colours with Stops                         |
| ------------- | ----------------- | ---------------- | ------------------------------------------ |
| `background:` | `linear-gradient` | `to right`       | `red`, `orange 30%`, `yellow 60%`, `green` |
"On the background property, apply a linear gradient going left to right. Start with red, then blend into orange at 30%, yellow at 60%, and finish with green at the far right."
```css
body {
  background: linear-gradient(to right, red 0%, orange 50%, yellow 100%);
  height: 100vh; /* Optional: ensures it fills the full screen */
  margin: 0; /* Removes default margin from body */
}
```
![Gradient: Colour Stops](/images/gradient-colour-stops.png)

### CSS Transparency
- create transparent layers or soft overlays.
- Useful for text-on-image readability or combining with gradients.

#### Using rgba() for transparency
| Term    | Meaning                                                           |
| ------- | ----------------------------------------------------------------- |
| `rgb`   | Red, Green, Blue – standard color model in CSS.                   |
| `rgba`  | Same as `rgb`, but adds **Alpha** for transparency.               |
| `Alpha` | A number between `0` and `1` that sets opacity (0 = transparent). |

**Syntax:**
```css
background-color: rgba(R, G, B, A);
```
| Component | Example | Meaning         |
| --------- | ------- | --------------- |
| `R`       | `0–255` | Red value       |
| `G`       | `0–255` | Green value     |
| `B`       | `0–255` | Blue value      |
| `A`       | `0–1`   | Alpha (opacity) |
**Examples:**
| Color                  | RGBA Code              | Description                 |
| ---------------------- | ---------------------- | --------------------------- |
| Semi-transparent black | `rgba(0, 0, 0, 0.5)`   | Dark overlay at 50% opacity |
| Light transparent red  | `rgba(255, 0, 0, 0.2)` | Soft red background         |
| Solid navy             | `rgba(0, 0, 128, 1)`   | Fully opaque navy           |

```css
background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
```

```html
<div class="overlay-box">
  <h2>Overlay Box</h2>
  <p>This box uses a semi-transparent background.</p>
</div>
```
```css
body {
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
  font-family: sans-serif;
  padding: 40px;
}

.overlay-box {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
}
```
![Transparency](/images/transparency.png)

### Overlay Gradients on Images
🧠 What You're Doing
You’re stacking two backgrounds:

- A gradient layer (usually semi-transparent).
- An image layer.

CSS reads backgrounds from top to bottom, so the first layer is on top.
**Syntax**
```css
background: 
  linear-gradient(rgba(...), rgba(...)), 
  url('image.jpg');
```
| Layer                  | Description                          |
| ---------------------- | ------------------------------------ |
| `linear-gradient(...)` | Gradient overlay with transparency   |
| `url(...)`             | Background image behind the gradient |

**Example**
```html
<div class="hero">
  <h1>Welcome</h1>
  <p>This text stays readable thanks to the gradient overlay.</p>
</div>
```
```css
.hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://images.unsplash.com/photo-1519608487953-e999c86e7455');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
```
![Overlay](/images/overlay.png)

### Repeating Gradients
🧠 What’s a Repeating Gradient?
A repeating gradient continues a pattern indefinitely to fill the background.

It works like a normal gradient, but instead of stopping, it repeats the color stops again and again across the element.

**Syntax**
```css
background: repeating-linear-gradient(
  [angle or direction],
  [color1] [start],
  [color2] [end],
  ...
);
```

**Example: Diagonal Stripes:**
```css
background: repeating-linear-gradient(
  45deg,
  lightblue,
  lightblue 10px,
  navy 10px,
  navy 20px
);
```
| Component        | What it does                                              |
| ---------------- | --------------------------------------------------------- |
| `45deg`          | Sets the angle of the stripes                             |
| `lightblue`      | Starts stripe with lightblue                              |
| `lightblue 10px` | Lightblue stripe ends at 10px                             |
| `navy 10px`      | Navy stripe starts at 10px                                |
| `navy 20px`      | Navy stripe ends at 20px (creating a 10px-wide navy band) |

![Diagonal Stripes](/images/diagonal-stripes.png)

**Example: Vertical Stripes:**
```css
background: repeating-linear-gradient(
  to right,
  pink,
  pink 20px,
  purple 20px,
  purple 40px
);

```
| Component        | What it does                                              |
| ---------------- | --------------------------------------------------------- |
| `to right`       | sets the direction of the stripes (left to right)                             |
| `pink`      | Starts stripe with pink                              |
| `pink 20px` | Pink stripe ends at 20px                             |
| `purple 20px`      | Purple stripe starts at 20px                                |
| `purple 40px`      | Purple stripe ends at 40px (creating a 20px-wide band) |

![Vertical Stripes](/images/vertical-stripes.png)

**Example: Horizontal Lines:**
```css
background: repeating-linear-gradient(
  to bottom,
  #ccc,
  #ccc 2px,
  white 2px,
  white 10px
);
```
| Component        | What it does                                              |
| ---------------- | --------------------------------------------------------- |
| `to botom`       | sets the direction of the stripes (top to bottom)                             |
| `#ccc`      | Starts stripe with lipink                              |
| `pink 20px` | Pink stripe ends at 20px                             |
| `purple 20px`      | Purple stripe starts at 20px                                |
| `purple 40px`      | Purple stripe ends at 40px (creating a 20px-wide band) |

![Horizontal Lines](/images/horizontal-lines.png)

### Custom CSS Variables for Colors
🧠 What Are CSS Variables?
CSS Variables are reusable name/value pairs defined using -- syntax. You can define them once and reuse them throughout your CSS.

**Basic Syntax**
```css
/*Define Variables*/
:root {
  --main-bg: #f0f8ff;
  --accent: navy;
}
/*Use Variables*/
body {
  background-color: var(--main-bg);
  color: var(--accent);
}
```
| Part             | Meaning                                                  |
| ---------------- | -------------------------------------------------------- |
| `:root`          | Selects the root (top-level) element → applies site-wide |
| `--main-bg`      | Custom property name                                     |
| `var(--main-bg)` | Retrieves the value of the variable                      |

**Example:**
```html
<h1>Welcome</h1>
<p>This page uses custom color variables.</p>
```
```css
:root {
  --main-bg: #f0f8ff;
  --text-color: navy;
  --highlight: gold;
}

body {
  background-color: var(--main-bg);
  color: var(--text-color);
  font-family: sans-serif;
  padding: 20px;
}

h1 {
  color: var(--highlight);
}
```

### Gradient Text in CSS
Instead of applying the gradient behind the text, this method clips the gradient into the text itself.

**Key Properties:**
| Property                                | What It Does                                                        |
| --------------------------------------- | ------------------------------------------------------------------- |
| `background`                            | Applies a gradient to the text container                            |
| `-webkit-background-clip: text;`        | Clips the background to the shape of the text (text becomes a mask) |
| `-webkit-text-fill-color: transparent;` | Makes the text transparent so the background shows through          |

**Example**
```html
<h1 class="gradient-text">Gradient Magic</h1>
```
```css
.gradient-text {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(to right, #30cfd0, #330867);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
![Gradient Text](/images/gradient-text.png)

- Works best on:

    - Large headings
    - Display text
    - Bold fonts
    - WebKit properties are required for support in most modern browsers (especially Chrome and Safari).

#### Animation Bonus
```css
.animated-text {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #30cfd0);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate-gradient 6s ease infinite;
}

@keyframes animate-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Color Contrast and Accessibility
- essential for making your designs usable for everyone, including users with low vision or color blindness.

*Color contrast affects:*

- Readability
- Legibility
- User comfort
- Legal compliance (especially in public/education sites)

**WCAG Contrast Guidelines (WCAG 2.1)**
| Text Type                            | Minimum Contrast Ratio |
| ------------------------------------ | ---------------------- |
| **Body Text** (normal)               | 4.5:1                  |
| **Large Text** (18pt+ or bold 14pt+) | 3:1                    |
| **Logos / Decorative text**          | Exempt                 |
- A contrast ratio of 1:1 = same color (invisible).
- A ratio of 21:1 = perfect contrast (black on white).

**How to Check Contrast**
Use free tools like:

WebAIM Contrast Checker
Paste your text color and background color → get instant feedback.

Coolors Contrast Tool
Also gives pass/fail for WCAG AA and AAA levels.

Browser Dev Tools Audit
Chrome/Edge DevTools > “Lighthouse” tab → checks color contrast in audits.