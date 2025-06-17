# Assignment 3 – Data & MySQL

This project is part of the Code First Girls CFGdegree program and demonstrates SQL skills through the design and implementation of a relational database that solves a real-world problem. The project includes schema design, data manipulation, joins, functions, and more.

---

## Creative Scenario of Use

**"The Book Nook" – A Community Bookshop Management System**

The Book Nook is a small independent bookshop that not only sells books but also runs events and manages a membership-based loyalty system. The database supports:

- Tracking books, authors, genres, and stock
- Recording member details and purchases
- Logging attendance for events like poetry readings and book clubs
- Awarding points to members for purchases
- Monitoring low-stock alerts via stored procedures

The system helps staff manage operations and customer engagement efficiently.

---

## ✅ User Stories (Mapped to Assessment Criteria)

- As a shop owner, I want to store all book and customer info in one system (✓ 3 tables with relationships)
- As a manager, I want to query data to see top-spending customers (✓ aggregate functions)
- As a cashier, I want to insert purchases easily (✓ insert, delete, update queries)
- As a team member, I want data to be structured logically (✓ normalisation, joins)
- As a data analyst, I want to view sales by date (✓ use of date/time functions)

---

## 📋 Assessment Criteria & Evidence

Use this table to **track progress** and document that each requirement is met. Add screenshots, code blocks, or query results as needed.

| Criteria | Complete? | Notes / Proof |
|----------|-----------|----------------|
| **A. Designing and Creating a Database (16 marks)** |||
| Database created | [ ] |  |
| 3+ tables with proper naming | [ ] |  |
| Primary & foreign keys used effectively | [ ] |  |
| 3+ data types used | [ ] |  |
| 2+ constraints (e.g., NOT NULL, UNIQUE) | [ ] |  |
| **B. Using, Querying, and Updating (25 marks)** |||
| 8+ rows inserted per table | [ ] |  |
| 3+ insert queries | [ ] |  |
| 5+ select queries | [ ] |  |
| 1+ delete query | [ ] |  |
| 2+ aggregate functions (SUM, AVG, etc.) | [ ] |  |
| 2+ joins across tables | [ ] |  |
| 2+ in-built functions (NOW(), UPPER(), etc.) | [ ] |  |
| Sorting used via ORDER BY | [ ] |  |
| Stored procedure or function created and used | [ ] |  |
| **C. Code Readability, Layout, and Best Practices (6 marks)** |||
| Consistent formatting and indentation | [ ] |  |
| SQL comments used to explain logic | [ ] |  |
| Table and column names are clear and meaningful | [ ] |  |
| **D. Creativity (5 marks)** |||
| Creative theme used: "The Book Nook" | [ ] |  |
| Logical real-world use-case | [ ] |  |
| Thoughtful and complete implementation | [ ] |  |

---

## 🔗 Entity-Relationship Diagram (ERD)

The ERD below outlines the structure of the database, showing how entities like `members`, `books`, `purchases`, and `events` relate to one another. It includes primary keys, foreign key relationships, and ensures the database is normalised with no redundant data.

📌 _This ERD demonstrates:_
- Use of primary and foreign keys
- One-to-many relationships (e.g. one member, many purchases)
- Join tables where appropriate (e.g. `event_attendance`)
- Clean, normalised structure

🖼️ **ERD Screenshot or Export**
> Add your ERD here using a tool like [dbdiagram.io](https://dbdiagram.io), MySQL Workbench, or Lucidchart.

```bash
# If including in GitHub:
![ERD Screenshot](images/erd.png)
```

## 🧱 Tables Overview
- **members**: member_id (PK), first_name, last_name, email, join_date, points
- **books**: book_id (PK), title, author, genre, price, stock_quantity
- **purchases**: purchase_id (PK), member_id (FK), book_id (FK), purchase_date, quantity, total_price

---

## 💻 How to Use

To run this project locally:

1. Clone the repo and check out the assignment branch:
   ```bash
   git clone https://github.com/yourusername/CFG-Assignments.git
   cd CFG-Assignments
   git checkout assignment-3-sql
   ```

2. Open MySQL Workbench or your preferred SQL tool.

3. Run the setup file:
   ```sql
   SOURCE setup.sql;
   ```

4. View demo queries in `demo_queries.sql`.

---

## 🧪 Testing & Demo Queries

Example queries are included in `demo_queries.sql` to simulate:
- Adding purchases
- Viewing event attendees
- Checking member points
- Running stock alerts

---

## 📸 Screenshots

Add visuals here to prove success for each criteria:

- ERD diagram
- Table structure screenshots
- Query result screenshots
- Stored procedure outputs

---

## 🔗 Submission Info

This assignment has been submitted via GitHub on the branch: `assignment-3-sql`.

A pull request has been created and includes a description of the creative scenario, user stories, and instructions for review.

---

## 📅 Author

**Author:** [Your Name]  
**Course:** Code First Girls CFGdegree – Data & MySQL