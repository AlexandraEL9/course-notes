# CFGdegree - Session 30: Program Flow Management

## Contents

1. Logic Algorithm Case Study  
2. Design Patterns  
3. Case Study: Design an Online App  
4. Challenge: Design a Process for an Online Service  
5. Process Running and Task Scheduler  
6. Coding Practice Exercise  

---

## Case Study: The Two Egg Puzzle

- **Puzzle Explanation** and **Solution** were discussed (details not included in the original file).  

---

## Design Patterns
In the context of software development, design patterns are **reusable solutions to common problems** that occur in software design. They are not pieces of code but **general templates or best practices** that can be adapted and implemented in different situations.

Think of them **like recipes or blueprints** — they tell you how to structure your code to solve a specific type of problem, without dictating the exact code you must write.

**Definition:**  
Design patterns are typical solutions to common problems in software design.  
They act as **customizable blueprints to solve recurring design issues** in code.

- Design patterns **help us organize the flow of our programs** by providing proven ways to:

    - **Create** objects efficiently *(Creational Patterns)*

    - **Structure relationships** between components *(Structural Patterns)*

    - **Manage communication and control logic** between parts of the system*(Behavioral Patterns)*

**Types of Design Patterns:**

- **Creational**
    - Creational patterns are concerned with how objects are created. They abstract the instantiation process, making a system more independent of how its objects are created, composed, and represented.

*Common creational patterns:*
1. Singleton
Ensures a class has only one instance and provides a global point of access to it.
Example: Logger, configuration manager.

2. Factory Method
Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
Example: Creating different types of documents in a document editor.

3. Abstract Factory
Produces families of related or dependent objects without specifying their concrete classes.
Example: UI toolkit that supports multiple themes (e.g., dark/light mode).

4. Builder
Separates the construction of a complex object from its representation so that the same construction process can create different representations.
Example: Creating a house step-by-step (walls, roof, garden).

5. Prototype
Creates new objects by copying an existing object, known as the prototype.
Example: Cloning game characters with the same properties.

- **Structural**
    - Structural patterns deal with object composition — how classes and objects can be combined to form larger structures. They help ensure that if one part of a system changes, the entire structure doesn't need to.

*Common Structural Patterns:*
1. Adapter
Allows incompatible interfaces to work together.
Example: Converting a European plug to fit a UK socket.

2. Bridge
Decouples an abstraction from its implementation so the two can vary independently.
Example: Remote control as an abstraction for different TV brands.

3. Composite
Composes objects into tree structures to represent part-whole hierarchies.
Example: File system with folders and files.

4. Decorator
Adds responsibilities to objects dynamically.
Example: Adding scrollbars to a window component.

5. Facade
Provides a simplified interface to a complex subsystem.
Example: A restaurant menu as a single interface to a complex kitchen operation.

6. Proxy
Provides a surrogate or placeholder for another object to control access to it.
Example: A security proxy that controls access to a bank account.


- **Behavioural**
    - Behavioral patterns focus on communication between objects — how they interact and distribute responsibility.

*Common Behavioral Patterns:*

1. Observer
Defines a one-to-many dependency so that when one object changes state, all its dependents are notified.
Example: News app sending updates to all subscribers.

2. Strategy
Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
Example: Sorting a list using different strategies (quick sort, bubble sort).

3. Command
Encapsulates a request as an object, thereby allowing users to parameterize clients.
Example: Undo/redo in a text editor.

4. State
Allows an object to alter its behavior when its internal state changes.
Example: A music player switching between play, pause, and stop.

5. Chain of Responsibility
Passes a request along a chain of handlers until one handles it.
Example: Tech support levels (Level 1 → Level 2 → Engineer).

6. Mediator
Defines an object that centralizes communication between classes to reduce direct dependencies.
Example: Chatroom where users communicate through a central server.



Source: [Refactoring Guru Design Patterns Catalog](https://refactoring.guru/design-patterns/catalog)

---

## System Design & Process Flow Case Study

### Design an Online Voting App

**Requirements:**
- Users can vote on a set of options during a specified time window.
- After the voting period ends, the system calculates and posts the results for users.

**Task:**
- Design a high-level process flow.
- Identify the main system components.
- Consider architecture and key implementation decisions.

---

## 💡 Interview Tips for System Design Questions

- **Start with what you know:**  
  List required features, expected challenges, and estimated traffic.

- **Discuss trade-offs:**  
  Explain pros and cons for each design decision.

- **Ask clarifying questions:**  
  Demonstrates analytical thinking and thoroughness.

- **Think ahead:**  
  Mention how emerging technologies (e.g., machine learning or specific design patterns) could enhance the system.

---

## Design Challenges

### Option 1: Video Streaming Service (e.g. Netflix)

- Handle storage and transmission of massive video data (hundreds of petabytes).
- Track statistics (views, likes, comments).
- Support user interactions (e.g., commenting).

### Option 2: Ride-Sharing Service (e.g. Uber)

- Users share current location and destination.
- Nearby drivers are notified in real-time.
- App tracks the entire route (pickup and destination).

---

## Schedulers & Logging

**Schedulers:**
- Automate repetitive or background tasks.
- Examples:  
  - Windows Task Scheduler  
  - Apple Automator

**Logging:**
- Captures key information, warnings, and errors during script execution.
- Helps monitor process health and debug issues.

---

## Optional Coding Exercise

**Scenario:**
- Trading team sends portfolio reports.
- Your system needs to:
  - Detect and process new reports quickly (e.g., calculate totals).
  - Track which reports have been processed and which haven’t.

---

## Summary

This session covered design thinking, problem solving, and practical implementation of process flows using design patterns, system design best practices, and schedulers. Coding exercises gave hands-on experience with automation and data handling.
