# Movie Nighr API

A simple Node.js and Express API for managing a shared list of movies for movie night planning. Users can add, view, and delete movies stored in a MySQL database.

Built as part of CFG's APIs module (Assignment 4)

---

## Features

- Add a movie to the list
- View all added movies
- Delete a movie by ID
- Mark a movie as "seen"
- Tracks whether each movie has been watched
- Error handling with HTTP status codes
- Uses `.env` file for secure config
- Minimal and clean structure

---

## 📁 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movie-night-api.git
cd movie-night-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory with the following:

```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=movie_night
PORT=3000
```

> Make sure you do not commit `.env` to GitHub!

---

## 🗄️ MySQL Setup

### 1. Create the database and table:

```sql
CREATE DATABASE movie_night;

USE movie_night;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  added_by VARCHAR(100) NOT NULL
  seen BOOLEAN DEFAULT FALSE
);
```

---

## ▶️ Running the API

```bash
npm start
```

The API will run at:  
[http://localhost:3000](http://localhost:3000)

---

## 📮 API Endpoints

### ➕ Add a Movie

- `POST /add-movie`
- Body:

```json
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "added_by": "Alex"
}
```

---

### 📃 Get All Movies

- `GET /movies`

---

### ❌ Delete a Movie

- `DELETE /delete-movie/:id`

---

You said:
yes- please show me what needs updating on the readme


ChatGPT said:
Here’s what you need to update in your README.md to reflect the new seen field and the PUT /mark-seen/:id endpoint:

✅ Sections to Update
🗄️ MySQL Setup
Original:

sql
Copy
Edit
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  added_by VARCHAR(100) NOT NULL
);
Updated:

sql
Copy
Edit
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  added_by VARCHAR(100) NOT NULL,
  seen BOOLEAN DEFAULT FALSE
);
📮 API Endpoints
Add the new section after the DELETE endpoint:

✅ Mark a Movie as Seen
PUT /mark-seen/:id

Updates the seen field to true for a specific movie.

Example:
```bash
PUT http://localhost:3000/mark-seen/3
```
RESPONSE:
```json
{
  "message": "Movie marked as seen"
}
```

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- MySQL2 (npm package)
- dotenv

---

## Testing

Use [Postman](https://www.postman.com/) or your browser to test endpoints.

Manual/ behavioural testing

TDD/ jest test?