# 📚 Week 6 Database Setup

This project sets up a **relational database schema** for managing **journalists, articles, and article categories**. It demonstrates basic use of foreign keys, relationships, and data modeling in SQL.

---

## 📁 Database: `week6db`

This database contains **4 tables**:

### 1. `journalists`
Stores information about each journalist.

| Column   | Type         | Description                     |
|----------|--------------|---------------------------------|
| `id`     | INT, PK, AI  | Unique ID for each journalist   |
| `name`   | VARCHAR(255) | Full name of the journalist     |
| `email`  | VARCHAR(255) | Email address                   |
| `bio`    | TEXT         | Short biography of the journalist |

---

### 2. `articles`
Stores news articles written by journalists.

| Column         | Type          | Description                                  |
|----------------|---------------|----------------------------------------------|
| `id_a`         | INT, PK, AI   | Unique ID for each article                   |
| `title`        | VARCHAR(255)  | Title of the article                         |
| `content`      | TEXT          | Main content of the article                  |
| `journalistid` | INT, FK       | Foreign key to the `journalists(id)` table   |
| `category`     | VARCHAR(50)   | Simple category label (optional)             |

> ✅ Articles are linked to the journalist who wrote them via `journalistid`.

---

### 3. `category`
Stores the list of available categories (e.g., Politics, Sports, Tech).

| Column   | Type          | Description                 |
|----------|---------------|-----------------------------|
| `id_c`   | INT, PK, AI   | Unique ID for each category |
| `name_c` | VARCHAR(255)  | Name of the category        |

---

### 4. `categorydetail`
Represents a **many-to-many** relationship between articles and categories.

| Column  | Type  | Description                             |
|---------|-------|-----------------------------------------|
| `id_a`  | INT   | Foreign key referencing `articles(id_a)` |
| `id_c`  | INT   | Foreign key referencing `category(id_c)` |

> ✅ This allows each article to belong to **multiple categories**, and each category to include **multiple articles**.

---

## 🔗 Relationships Summary

- **1 Journalist → many Articles** (One-to-Many)
- **1 Article → many Categories** (Many-to-Many via `categorydetail`)
- **1 Category → many Articles** (Many-to-Many via `categorydetail`)

---

## 🚀 Usage

To set up this schema in MySQL:

```sql
CREATE DATABASE week6db;
USE week6db;

CREATE TABLE journalists(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(255),
	email VARCHAR(255),
	bio TEXT
);

CREATE TABLE articles(
	id_a INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title VARCHAR(255),
	content TEXT,
	journalistid INT,
	category VARCHAR(50),
	FOREIGN KEY (journalistid) REFERENCES journalists(id)
);

CREATE TABLE category(
	id_c INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name_c VARCHAR(255)
);

CREATE TABLE categorydetail(
	id_a INT NOT NULL,
	id_c INT NOT NULL,
	FOREIGN KEY (id_a) REFERENCES articles(id_a),
	FOREIGN KEY (id_c) REFERENCES category(id_c)
);
