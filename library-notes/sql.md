# SQL

---

## Contents
- [Intro to SQL](#intro-to-sql)
  - [What is SQL and a Database?](#what-is-sql-and-a-database)
  - [Basic SQL Syntax](#basic-sql-syntax)
    - [SELECT](#select)
    - [CREATE DATABASE & USE](#create-database-use)
    - [CREATE TABLE](#create-table)
    - [INSERT INTO](#insert-into)
  - [Practice Tasks](#practice-tasks)

- [Table Creation, Constraints & Data Manipulation](#table-creation-constraints-data-manipulation)
  - [Database Design & Management](#database-design-management)
  - [Table Constraints](#table-constraints)
  - [Primary & Foreign Keys](#primary-foreign-keys)
  - [Database Normalisation](#database-normalisation)
  - [Syntax & Queeries](#syntax-queries)
  - [Data Modification](#data-modification)
  - [Data Retrieval](#data-retrieval)
- [Practice](#practice)

- [Data Filtering, Aggregation & Analysis](#data-filtering-aggregation-analysis)
  - [Recap](#recap)
  - [Logical & comparison operators](#Logical-comparison-operators)
  - [Data sorting, filtering, and pattern matching](#data-sorting-filtering-and-pattern-matching)
  - [Aggregation](#aggregation)
  - [Grouping & summarising data](#grouping-summarising-data)
  - [Practice](#practice)

- [Joins, Unions & Subqueries](#joins-unions-subqueries)
  - [Understanding SQL JOINs](#understanding-sql-joins)
  - [Using UNIONs to combine results](#using-unions-to-combine-results)
  - [Writing Subqueries](#writing-subqueries)
  - [Practice](#practice)

- [Functions, Transactions & DB Locks](#functions-transactions-db-locks)
  - [Built-In Functions](#built-in-functions)
  - [Transaction Management](#transaction-management)
  - [Indexing](#indexing)
  - [Table Locks](#table-locks)

- [Views, Stored Procedures, Functions, Triggers & Events](#views-stored-procedures-functions-triggers-events)
  - [Creating & managing views](#creating-managing-views)
  - [Using stored procedures and functions](#using-stored-procedures-and-functions)
  - [Intro to triggers and scheduled events](#intro-to-triggers-and-scheduled-events)

---

## Intro to SQL

## What is SQL and a Database?

- SQL **Structured Query Language**: Used to *communicate with and manage relational databases*.

- **Database (DB)**: A *container to store data in tables* (like spreadsheets). Data can be efficiently inserted, queried, updated, or deleted.

📊 **SQL Use Cases in Tech:**

- **Backend Dev:** Logic & DB interaction

- **Frontend Dev:** May query DB directly with modern frameworks

- **Data Roles:** Analysts, Engineers, Scientists, DBAs

- **Other:** Product managers, marketing specialists

**Big Data Concepts**

- Big Data is:

    - Captured ➝ Stored ➝ Analyzed

    - Used in Software Engineering & Data Science


**Relational Database Model (RDBM)**

- Tables store data

- Relationships exist between tables

- EER Diagrams show table structure and relations
- - *(EER = Enhanced Entity Relationship)*

**Example:**

`employees` relates to `salaries` and `dept_emp` (junction table)

**Data Types (Core SQL Type)**

| Data Type      | Description                   |
| -------------- | ----------------------------- |
| `CHAR(n)`      | Fixed-length string           |
| `VARCHAR(n)`   | Variable-length string        |
| `INTEGER`      | Whole number                  |
| `FLOAT(p)`     | Approximate number            |
| `DECIMAL(m,d)` | Fixed precision number        |
| `BOOLEAN`      | True/False (0/1)              |
| `DATE`         | Format: YYYY-MM-DD            |
| `TIME`         | Format: HH\:MM\:SS            |
| `TIMESTAMP`    | Format: YYYY-MM-DD HH\:MM\:SS |

🔸 NULL = missing value
🔹 NOT NULL = must contain a value

---

## Basic SQL Syntax

### SELECT

`SELECT` - Retrieve Data
```sql
SELECT column1, column2 FROM table_name;
```
- `SELECT *` selects all columns (✔ easy, ✘ bad practice)

- Use table aliases for cleaner syntax:
```sql
SELECT p.first_name, p.last_name
FROM person p;
```

---

### CREATE DATABASE & USE

```sql
CREATE DATABASE Bakery;
USE Bakery;
```

---

### CREATE TABLE

```sql
CREATE TABLE sweet (
  id INTEGER,
  item_name VARCHAR(50),
  price DECIMAL(5,2)
);

CREATE TABLE savoury (
  id INTEGER,
  item_name VARCHAR(50),
  price DECIMAL(5,2),
  main_ingredient VARCHAR(50)
);
```

---

### INSERT INTO

`INSERT INTO` - **Add Data**

**Single Row**
```sql
INSERT INTO sweet (item_name, price)
VALUES ('Croissant', 1.50);
```

**Multiple Rows**
```sql
INSERT INTO sweet (item_name, price)
VALUES 
  ('Cake', 3.00),
  ('Tart', 2.50),
  ('Eclair', 2.20);
```

**From Another Table**
```sql
INSERT INTO sweet (id, item_name, price)
SELECT id, item_name, price
FROM old_sweets
WHERE price > 2.00;
```

---

## Practice Tasks
In-Class:
Create a database called Bakery.

Add Sweet and Savoury tables.

Insert data using INSERT INTO.

Run SELECT queries to retrieve information.

Independent:
Practice writing SELECT queries on:

Your own tables

Prebuilt sample databases

---

## Table Creation, Constraints & Data Manipulation

### Database design & management

#### SELECT with DISTINCT

`DISTINCT` - use to return only **unique values** from a column:
```sql
SELECT DISTINCT p.first_name
FROM person p;
```

#### Filtering Results: WHERE

```sql
SELECT p.surname
FROM person p
WHERE p.name = 'Mary';
```
Returns only rows where `name = 'Mary'`

---

### Table constraints

#### Constraints on Columns
| Constraint    | Description                            |
| ------------- | -------------------------------------- |
| `NOT NULL`    | Value must be provided                 |
| `PRIMARY KEY` | Unique identifier, no NULLs            |
| `FOREIGN KEY` | Refers to PK in another table          |
| `UNIQUE`      | All values in column must be different |
| `CHECK`       | Must meet a specific condition         |
| `DEFAULT`     | Value provided if none specified       |

---

### Primary & Foreign Keys

#### Primary Key

- Only **one** per table

- Must be `NOT NULL`

- Can be a **single** or **composite** column

```sql
CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  surname VARCHAR(50) NOT NULL,
  telephone INTEGER
);
```
Or with explicit constraint:
```sql
CREATE TABLE customers (
  customer_id INTEGER,
  name VARCHAR(50),
  surname VARCHAR(50) NOT NULL,
  telephone INTEGER,
  CONSTRAINT pk_customer_id PRIMARY KEY (customer_id)
);
```

#### Foreign Key

- Enforces relationships between tables

- Must match primary key in another table

```sql
ALTER TABLE orders
ADD CONSTRAINT fk_customer_id
FOREIGN KEY (customer_id)
REFERENCES customers(customer_id);
```
---

### Database Normalisation

Helps keep databases clean, consistent, and efficient.

Goals:

- Minimise duplicate data

- Avoid modification issues

- Simplify queries

Common Forms:

- 1NF – atomic data, unique rows

- 2NF – remove partial dependencies

- 3NF – remove transitive dependencies

### Syntax & Queries

### Data Modification

#### DML – Data Modification Language
| Command  | Purpose              |
| -------- | -------------------- |
| `INSERT` | Add new data         |
| `UPDATE` | Modify existing data |
| `DELETE` | Remove data          |
| `SELECT` | Retrieve data        |

`UPDATE`
```sql
UPDATE contacts
SET contacts.mobile = 123456789
WHERE contacts.surname = 'Andrews';
```

`DELETE`
```sql
DELETE FROM customers WHERE customer_id = 007;
```

**Altering Tables**
```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
FOREIGN KEY (col_name)
REFERENCES other_table(other_col);
```

**Dropping Tables**
```sql
DROP TABLE customers;
```
⚠️ Permanent – deletes table and its data.

### Data Retrieval

### Practice

👨‍🍳 Practice Project: Customer & Orders DB
Tasks:

Create relational DB for a restaurant/pizzeria

Use primary keys, foreign keys, and NOT NULL

Add customer details, orders, email, phone number

Use ALTER TABLE to define relationships

🧠 Independent Practice
Review slides & re-do examples

Explore external references:

DDL vs DML – W3Schools

MySQL Foreign Keys

SQL Constraints

---

## Data Filtering, Aggregation & Analysis

### Recap

#### SELECT Syntax Refresher
```sql
SELECT first_name, last_name
FROM person;
```

### Logical & comparison operators

**Comparison Oporators**
| Operator     | Meaning               | Example   |
| ------------ | --------------------- | --------- |
| `<`          | Less than             | `10 < 3`  |
| `>`          | Greater than          | `10 > 3`  |
| `<=`         | Less than or equal    | `10 <= 3` |
| `>=`         | Greater than or equal | `10 >= 3` |
| `=`          | Equal to              | `10 = 3`  |
| `!=` or `<>` | Not equal to          | `10 != 3` |

**Logical Operators**
| Operator                | Meaning                             |
| ----------------------- | ----------------------------------- |
| `AND`                   | Both conditions must be true        |
| `OR`                    | At least one condition must be true |
| `IS NULL`/`IS NOT NULL` | Checks for missing values           |

**Examples:**
```sql
SELECT p.name, p.surname
FROM person p
WHERE p.name = 'Mary' AND p.age > 25;
```
```sql
SELECT p.email_address
FROM person p
WHERE p.email_address IS NOT NULL;
```

---

### Data sorting, filtering, and pattern matching

#### Pattern Matching & Search

`Between`
```sql
WHERE orders BETWEEN 1 AND 5
```

`LIKE` *(pattern match)*
| Pattern  | Matches                              |
| -------- | ------------------------------------ |
| `'M%'`   | Starts with M                        |
| `'%m'`   | Ends with m                          |
| `'%or%'` | Contains "or"                        |
| `'_m%'`  | m is second character                |
| `'m__%'` | Starts with m, at least 3 characters |
| `'m%t'`  | Starts with m, ends with t           |

`IN` *(value list)*
```sql
WHERE name IN ('Mary', 'Julie', 'Jo')
```

`OEDER BY`
- Used to sort results:
```sql
SELECT p.surname, p.name
FROM person p
ORDER BY p.surname ASC; -- ASC is default
```
 - use `DESC` for descending

---

### Aggregation

#### Set Functions

| Function  | Description              |
| --------- | ------------------------ |
| `COUNT()` | Count of rows            |
| `SUM()`   | Total sum (numeric only) |
| `AVG()`   | Average value            |
| `MAX()`   | Highest value            |
| `MIN()`   | Lowest value             |

**Examples:**
```sql
SELECT SUM(c.orders) FROM customer c;

SELECT COUNT(DISTINCT c.name) FROM customer c;
```

---

### Grouping & summarising data

`GROUP BY`
Groups data and applies functions per group.
```sql
SELECT COUNT(c.name), c.name
FROM customers c
GROUP BY c.name;
```

`HAVING` *(with GROUP BY)*
Use `HAVING` instead of `WHERE` when filtering aggregated results.
```sql
SELECT COUNT(c.name), c.name
FROM customers c
GROUP BY c.name
HAVING COUNT(c.name) >= 3;
```

---

### Practice
*using `bakery` or `sales` DB*

Find all savoury items with pork or beef

Find all sweet items under £0.50

Find all sweet items excluding "cannoli"

Find items starting with 'c'

Use SUM, AVG, MAX, MIN, COUNT

Sales report:

Find all sales by Bill or Frank in London (excluding December), over £50

Group weekly sales and sort ascending/descending

---

### Joins, Unions & Subqueries

#### Understanding SQL JOINs
![Joins Poster](/images/joins-image.png)

- SQL JOIN combines rows from two or more tables using a related column.

🔸 **Types of Joins**
| Join Type         | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `INNER JOIN`      | Returns rows with matching values in both tables                  |
| `LEFT JOIN`       | All rows from left table + matching from right (null if no match) |
| `RIGHT JOIN`      | All rows from right table + matching from left (null if no match) |
| `FULL OUTER JOIN` | Combines LEFT and RIGHT joins (not supported in MySQL natively)   |
| `CROSS JOIN`      | Returns Cartesian product (all combinations of rows)              |
| `SELF JOIN`       | Table joins with itself using aliases                             |
| `EQUI JOIN`       | JOIN with `=` comparison                                          |
| `NATURAL JOIN`    | Joins tables using all columns with same names                    |

✅ **Example: INNER JOIN**
```sql
SELECT c.name, c.surname, e.email_address
FROM customers c
INNER JOIN email_address e
ON c.customer_id = e.email_address_customer_id;
```

✅ **Example: LEFT JOIN**
```sql
SELECT c.name, c.surname, e.email_address
FROM customers c
LEFT JOIN email_address e
ON c.customer_id = e.email_address_customer_id;
```

✅ **Example: RIGHT JOIN**
```sql
SELECT c.name, c.surname, e.email_address
FROM customers c
RIGHT JOIN email_address e
ON c.customer_id = e.email_address_customer_id;
```

❌ **FULL OUTER JOIN (Not in MySQL)**
- simlate with:
```sql
SELECT ... FROM A
LEFT JOIN B ON ...
UNION
SELECT ... FROM A
RIGHT JOIN B ON ...
```

🔁 `CROSS JOIN`
- Returns all possible row combinations:
```sql
SELECT *
FROM fruit_basket1
CROSS JOIN fruit_basket2;
```

🪞 `SELF JOIN`
- Use aliases to compare rows within the same table:
```sql
SELECT a.name, b.manager
FROM employees a, employees b
WHERE a.manager_id = b.employee_id;
```

---

### Using UNIONs to combine results

- `UNION` removes duplicates

- `UNION` ALL keeps duplicates

- All SELECTs must have the same **number of columns and compatible data types**
```sql
SELECT item_name FROM sweet
UNION
SELECT item_name FROM savoury;
```

---

### Writing Subqueries
- *(Nested SELECT)*

- Can be used in `WHERE`, `HAVING`, `SELECT`, or `FROM` clauses

- Must be enclosed in parentheses

- Can't use `ORDER BY` inside subqueries (unless in `TOP`/`LIMIT` queries)

**Example:** Subquery in `WHERE`
```sql
SELECT name
FROM suppliers
WHERE status = (
  SELECT status
  FROM projects
  WHERE project_id = 'J2'
);
```

---

### Practice

Get names/status of all suppliers who supply Project J2

Get name/city of all projects supplied by London-based suppliers

Try SELF JOIN, UNION, and subqueries with your own bakery tables

---

## Functions, Transactions & DB Locks

### Built-In Functions

#### SQL Functions

- **Functions** = reusable code blocks that return a value

- Two main types:

    - **Built-in functions:** already available in MySQL

    - **User-defined functions:** you define them

#### Types of Built-In Functions

| Type    | Purpose                                        |
| ------- | ---------------------------------------------- |
| String  | Manipulate text (`LOWER()`, `CONCAT()`, etc.)  |
| Numeric | Math operations (`ROUND()`, `ABS()`, etc.)     |
| Date    | Handle date/time (`NOW()`, `DATE_ADD()`, etc.) |

---

## Transaction Management

### 🔄 Transactions

- A transaction is a group of SQL operations treated as a single unit.
    - ✅ Committed = changes are saved
    - ❌ Rolled back = changes undone

**Syntax:**
```sql
START TRANSACTION;

-- series of SQL statements here

COMMIT;      -- apply changes  
-- OR
ROLLBACK;    -- undo changes
```

### Aliases: `BEGIN`, `BEGIN WORK` = `START TRANSACTION`

**Example:** Simulated Bank Transfer

1. Check balance

2. Deduct £50 from account A

3. Add £50 to account B

4. If any fail, rollback

---

## Indexing

**INDEXES** - Used to improve the speed of searches in large tables.

✅ Benefits:
- Faster queries

- Reduce row locking

- Enforce uniqueness

- Help joins

🧱 Syntax:
```sql
CREATE INDEX last_name_idx 
ON marathon_registration (last_name);
```

---

## Table Locks
- Locks prevent conflicting operations during concurrent database access.

🟢 **Read Lock**

- Other sessions can read, but cannot write

- Multiple read locks allowed
```sql
LOCK TABLE table_name READ;

-- perform SELECT or safe reads

UNLOCK TABLES;

🔴 Write Lock
- Exclusive: no other reads or writes allowed

```sql
LOCK TABLE table_name WRITE;

-- perform inserts/updates

UNLOCK TABLES;
```

🔁 **Multiple Locks Example**
- Lock `Parent` (READ) and `Child` (WRITE) together:
```sql
LOCK TABLES 
  Parent READ,
  Child WRITE;

-- safe update logic

UNLOCK TABLES;
```

🔐 **Transactions + Locks: Use Case**

` You're adding a new child record to the Child table

- That record links to the Parent table

- You must:

    1. Lock Parent table to prevent changes

    2. Lock Child table to allow a safe insert

    3. Release both locks after the action

---

## Views, Stored Procedures, Functions, Triggers & Events

### Views *(Virtual Tables)*

- **A View** = A stored SQL `SELECT` query (read-only)

- Doesn't store data, only displays it from base tables

- Users access the view; they don’t access the base tables directly

✅ **Syntax**
```sql
CREATE VIEW view_name AS
SELECT column1, column2
FROM table_name;
```
🔐 `WITH CHECK OPTION`
- Prevents updates that result in rows no longer matching the view's condition

🔎 **Views Are Not Updatable If They Use:**
- Aggregate functions (`SUM()`, `COUNT()`, etc.)

- `DISTINCT`

- `GROUP BY`, `HAVING`

- `UNION` / `UNION ALL`

- Subqueries in select list or WHERE clause

- Joins in certain cases

  - [Creating & managing views](#creating-managing-views)


## Using stored procedures and functions

### Stored Procedures
- A Stored Procedure (sproc) is a reusable block of SQL code stored in the database.

✅ Used for:
- Data validation

- Access control

- Business logic

- Reducing network traffic

- SQL injection protection

✅ **Syntax**
```sql
DELIMITER //
CREATE PROCEDURE proc_name()
BEGIN
  -- procedure logic
END //
DELIMITER ;

CALL proc_name();
```

🔧 **Stored Functions (UDFs)**

- A **Stored Function** is like a procedure but returns a single value and can be used in `SELECT`.

- Input parameters only

- Cannot change data (no INSERT, UPDATE, or DELETE)

- Supports scalar (single value) returns

✅ **Syntax**
```sql
DELIMITER //
CREATE FUNCTION func_name(param TYPE)
RETURNS TYPE
BEGIN
  -- function logic
  RETURN result;
END //
DELIMITER ;
```

🆚 Stored Procedure vs Stored Function

| Feature                  | Procedure            | Function                   |
| ------------------------ | -------------------- | -------------------------- |
| Returns multiple values? | Yes (via OUT params) | No (must return one value) |
| Can use in `SELECT`?     | ❌                    | ✅                          |
| Can modify data?         | ✅ (CRUD ops allowed) | ❌ (read-only)              |
| Must return a value?     | ❌                    | ✅                          |
| Supports transactions?   | ✅                    | ❌                          |

---

## Intro to triggers and scheduled events

- A trigger runs automatically in response to `INSERT`, `UPDATE`, or `DELETE`.

- Must use `FOR EACH ROW`

- Use `OLD` and `NEW` to access changed data

✅ **Types:**

- `BEFORE INSERT`, `AFTER INSERT`

- `BEFORE UPDATE`, `AFTER UPDATE`

- `BEFORE DELETE`, `AFTER DELETE`

---

### Events (Scheduled Tasks)
Events execute SQL code automatically on a schedule.

- Can be one-time or recurring

- Used for maintenance, logging, or automation

---

🧠 Practice Ideas
Create a view of staff without salary info

Insert into the staff table via the view

Create:

A simple stored procedure with a greeting

A stored function to assess account balance

Triggers for INSERT

A one-off event that logs a timestamp