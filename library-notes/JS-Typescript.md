# TypeScript Notes

## Contents

- [Intro to TypeScript](#intro-to-typescript)
  - [Understanding TypeScript](#understanding-typescript)
  - [Benefits over JavaScript](#benefits-over-javascript)
  - [Who Uses TypeScript?](#who-uses-typescript)
- [Installing & Setting Up](#installing--setting-up)
  - [Install TypeScript](#install-typescript)
  - [Create a TypeScript Project](#create-a-typescript-project)
- [Syntax & Usage](#syntax--usage)
  - [Types](#types)
    - [Primitive Types](#primitive-types)
    - [Complex Types](#complex-types)
    - [Union & Intersection Types](#union--intersection-types)
    - [Tuples](#tuples)
    - [Enums](#enums)
  - [Functions](#functions)
    - [Optional Parameters](#optional-parameters)
    - [Default Parameters](#default-parameters)
  - [Interfaces](#interfaces)
  - [Interface vs Type Alias](#interface-vs-type-alias)
  - [Type Assertions](#type-assertions)

---

## Intro to TypeScript

### Understanding TypeScript?

- A *typed* superset of JavaScript.

- Adds *static types* and features that enhance:

- - Code reliability

- - Maintainability

- - Developer productivity

TypeScript code is *transpiled to JavaScript*, which runs in browsers, Node.js, Deno, etc.

#### Benefits over JavaScript

✅ Static Typing: Type errors caught at compile time.

✅ Type Safety: Fewer runtime bugs.

✅ Improved maintainability: Interfaces, types, and better structure.

✅ Better developer tooling: Autocompletion, refactoring tools, etc.

### Who Uses TypeScript?
Used by major companies and open-source projects due to its structure and safety features.

---

### Installing & Setting Up

#### Install TypeScript

- Project Level:
```bash
npm install typescript --save-dev
```

```ts
tsc --init
// OR
npx tsc --init

// OR
- Golbal install *(recommended for CLI usage):
```bash
npm install -g typescript
```

#### Create a TypeScript Project
```bash
mkdir typescript-project && cd typescript-project
npm init
npm install typescript --save-dev
tsc --init
```
- Creates `tsconfig.json to configure TypeScript compiler options.

---

### Syntax & Usage

#### Types

🔹 **Primitive Types**
string, number, boolean, null, undefined, symbol, bigint

🔸 **Complex Types**
Objects, arrays, functions, user-defined types

🔹 **Union & Intersection Types**
Union (|): multiple possible types

Intersection (&): combine multiple types

🔸 **Tuples**
-  Fixed-length arrays with specified types
```ts
let user: [string, number] = ["Alice", 30];
```

🔹 **Enums**
Named constants

```ts
Copy
Edit
enum Color { Red, Green, Blue }
```

---

#### Functions

- Typed arguments and return values
```ts
function greet(name: string, place?: string): string {
  return `Hello ${name}, I love ${place}`;
}
```
- **Optionam Parameters**: `place?`
- **Default Parameters**:
```ts
function greet(name = "person") {...}
```

#### Interfaces

- Define the **shape of objects**
```ts
interface Person {
  name: string;
  age: number;
  city?: string;
}
```
- Used for:
- - Code consistency

- - Autocompletion

- - Compile-time safety

#### Interface vs Type Alias

| Feature       | Interface          | Type Alias          |
| ------------- | ------------------ | ------------------- |
| Extends       | ✅ Yes              | ❌ Not directly      |
| Implements    | ✅ Yes (with class) | ❌ No                |
| Complex Types | ❌ No               | ✅ Yes (e.g. unions) |

---

#### Type Assertions

Tell the compiler to treat a variable as a specific type

```ts
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
```

Useful when:

  - Working with any

  - Parsing JSON

  - Overriding type inference

---