# MySQL Revision

---

## SQL Day 1: Core SELECT Skills
🔹 Task 1: Basic SELECT + FROM
✅ Example
Get the name and population of all countries.
```sql
SELECT Name, Population FROM country;
```
🧪 Challenge
Get the name and population of all cities from the city table.
```sql
SELECT Name, Population FROM city;
```

🔹 Task 2: DISTINCT
✅ Example
Get a list of all unique continents.
```sql
SELECT DISTINCT Continent FROM country;
```
🧪 Challenge
Get a list of all unique districts from the city table.
```sql
SELECT DISTINCT District FROM city;
```

🔹 Task 3: ORDER BY
✅ Example
Show all countries sorted by population (descending).
```sql
SELECT Name, Population
FROM country
ORDER BY Population DESC;
```
🧪 Challenge
Show all cities sorted alphabetically by name.
```sql
SELECT Name, Population
FROM city
ORDER BY Population;
```

🔹 Task 4: Table Aliases
✅ Example
Show country name and code using an alias for the table.
```sql
SELECT c.Name, c.Code
FROM country c;
```
🧪 Challenge
Select city name and population, using alias ct for the city table.
```sql
SELECT ct.Name, ct.Population
FROM city ct;
```

🔹 Task 5: LIMIT and OFFSET
✅ Example
Show the top 5 most populated countries.
```sql
SELECT Name, Population
FROM country
ORDER BY Population DESC
LIMIT 5;
```
🧪 Challenge
Show the 6th to 10th most populated cities.
```sql

```
💡 Reflection Prompts:
Can I write a basic SELECT without copying now? Still using reference/ example

Do I remember the syntax for DISTINCT, ORDER BY, and LIMIT? Still using reference/ example

Can I apply these to new tables (like a sales or products table)?Only by using reference/ example

---

## SQL Day 2: Filtering Data with WHERE & Operators
🔹 Task 1: Basic WHERE + Comparison
✅ Example
Get all countries in Europe.
```sql
SELECT Name, Continent
FROM country
WHERE Continent = 'Europe';
```
🧪 Challenge
Get all countries with a population over 100 million.
```sql
SELECT Name, Population
FROM country
WHERE Population > 100000000;
```

🔹 Task 2: WHERE with AND / OR
✅ Example
Get all countries in Europe with life expectancy over 75.
```sql
SELECT Name, Continent, LifeExpectancy
FROM country
WHERE Continent = 'Europe' AND LifeExpectancy > 75;
```
🧪 Challenge
Get all countries in Asia or Africa with a population under 5 million.
```sql
SELECT Name, Continent, Population
FROM country
WHERE (Continent = 'Asia' OR Continent = 'Africa') AND Population < 5000000;
```

🔹 Task 3: Pattern Matching with LIKE
✅ Example
Get all cities starting with the letter "S".
```sql
SELECT Name
FROM city
WHERE Name LIKE 'S%';
```
🧪 Challenge
Get all cities that end with "burg".
```sql
SELECT Name
FROM city
WHERE Name LIKE '%burg';
```

🔹 Task 4: Using IN and BETWEEN
✅ Example
Get all countries in Asia, Europe, or Africa.
```sql
SELECT Name, Continent
FROM country
WHERE Continent IN ('Asia', 'Europe', 'Africa');
```
🧪 Challenge
Get all cities with a population between 500,000 and 1,000,000.
```sql
SELECT Name, Population
FROM city
WHERE Population BETWEEN 500000 AND 1000000;
```

🔹 Task 5: IS NULL / IS NOT NULL
✅ Example
Get all countries where life expectancy is unknown.
```sql
SELECT Name
FROM country
WHERE LifeExpectancy IS NULL;
```
🧪 Challenge
Get all countries where IndepYear is known (i.e. not null).
```sql
SELECT Name, IndepYear
FROM country
WHERE IndepYear IS NOT NULL;
```

💡 Reflection Prompts
Can I remember how to use LIKE, IN, BETWEEN without copying? NOPE

Do I know when to use AND vs OR? PERHAPS

Can I filter for missing or known values? Not yet

---
## Mon SQL Day 1: Core SELECT Skills
🔹 Task 1: Basic SELECT + FROM
Challenge:
Get the name and population of all cities from the city table.
```sql
select Name, Population 
from city;
```

🔹 Task 2: DISTINCT Values
Challenge:
Get a list of all unique districts from the city table.
```sql
SELECT DISTINCT district
FROM city;
```
💬 Think: Do you need DISTINCT? Which column and table?

🔹 Task 3: ORDER BY
Challenge:
Show all cities sorted alphabetically by name.
```sql
SELECT Name
FROM city
ORDER BY Name ASC;
```
⏱️ Bonus: Then sort by population descending.
```sql
SELECT Name
FROM city
ORDER BY Population DESC;
```

🔹 Task 4: Table Aliases
Challenge:
Use alias ct for the city table. Select the name and population of each city.
💬 Think: What part of the query does the alias affect?
```sql
SELECT ct.Name, ct.Population
FROM city ct;
```

🔹 Task 5: LIMIT and OFFSET
Challenge:
Show the 6th to 10th most populated cities.
```sql
SELECT ct.Name, ct.Population 
FROM city ct
ORDER BY ct.Population
LIMIT 5 OFFSET 5;
```
🧠 Do you need to sort first? What numbers go in LIMIT and OFFSET?

---