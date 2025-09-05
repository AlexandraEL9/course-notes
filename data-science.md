# Data Science

---

## Contents

Introduction
What is Data?
Database Table



---

## Introduction
a combination of multiple disciplines that uses **statistics, data analysis, and machine learning** to *analyze data and to extract knowledge and insights*

### What is Data Science?
- Data Science is about:
    - data gathering, 
    - analysis 
    - decision-making
    - finding patterns in data through analysis, and make future predictions.

- By using Data Science, companies are able to make:
    - Better decisions (should we choose A or B)
    - Predictive analysis (what will happen next?)
    - Pattern discoveries (find pattern, or maybe hidden information in the data)

**Where is Data Science Needed?**
Data Science is used in many industries in the world today, e.g. banking, consultancy, healthcare, and manufacturing.

- Examples of where Data Science is needed:
    - For route planning: To discover the best routes to ship
    - To foresee delays for flight/ship/train etc. (through predictive analysis)
    - To create promotional offers
    - To find the best suited time to deliver goods
    - To forecast the next years revenue for a company
    - To analyze health benefit of training
    - To predict who will win elections

- Data Science can be applied in nearly every part of a business where data is available. Examples are:
    - Consumer goods
    - Stock markets
    - Industry
    - Politics
    - Logistic companies
    - E-commerce

### How Does a Data Scientist Work?
- A Data Scientist requires expertise in several backgrounds:
    - Machine Learning
    - Statistics
    - Programming (Python or R)
    - Mathematics
    - Databases

A Data Scientist must find patterns within the data. 
Before he/she can find the patterns, he/she must organize the data in a standard format.

**Here is how a Data Scientist works:**
- *Ask the right questions* - To understand the business problem.
- *Explore and collect data* - From database, web logs, customer feedback, etc.
- *Extract the data* - Transform the data to a standardized format.
- *Clean the data* - Remove erroneous values from the data.
- *Find and replace missing values* - Check for missing values and replace them with a suitable value (e.g. an average value).
- *Normalize data* - Scale the values in a practical range (e.g. 140 cm is smaller than 1,8 m. However, the number 140 is larger than 1,8. - so scaling is important).
- *Analyze data, find patterns and make future predictions.*
- *Represent the result* - Present the result with useful insights in a way the "company" can understand.

---

## What is Data?
Data is a collection of information.

One purpose of Data Science is to structure data, making it interpretable and easy to work with.

- Data can be categorized into two groups:
    - Structured data - Structured data is organized and easier to work with.
    - Unstructured data - Unstructured data is not organized. We must organize the data for analysis purposes.

**How to Structure Data**
We can use an array or a database table to structure or present data.
Example of an array:
[80, 85, 90, 95, 100, 105, 110, 115, 120, 125]

The following example shows how to create an array in Python:
Example
```python
Array = [80, 85, 90, 95, 100, 105, 110, 115, 120, 125]
print(Array)
```

---

## Database Table
A database table is a table with structured data.

Example: data from a sports watch

| Duration | Average_Pulse | Max_Pulse | Calorie_Burnage | Hours_Work | Hours_Sleep |
|----------|--------------|-----------|-----------------|------------|-------------|
| 30       | 80           | 120       | 240             | 10         | 7           |
| 30       | 85           | 120       | 250             | 10         | 7           |
| 45       | 90           | 130       | 260             | 8          | 7           |
| 45       | 95           | 130       | 270             | 8          | 7           |
| 45       | 100          | 140       | 280             | 0          | 7           |
| 60       | 105          | 140       | 290             | 7          | 8           |
| 60       | 110          | 145       | 300             | 7          | 8           |
| 60       | 115          | 145       | 310             | 8          | 8           |
| 75       | 120          | 150       | 320             | 0          | 8           |
| 75       | 125          | 150       | 330             | 8          | 8           |


A database table consists of column(s) and row(s):
A row is a horizontal representation of data.
A column is a vertical representation of data.

**Variables**
A variable is defined as something that can be measured or counted.
Examples can be characters, numbers or time.
In the example each column represents a variable:
- (Duration, Average_Pulse, Max_Pulse, Calorie_Burnage, Hours_Work, Hours_Sleep).