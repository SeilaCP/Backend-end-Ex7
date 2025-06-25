CREATE DATABASE week6db;
USE week6db;

CREATE TABLE journalists(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(255),
	email VARCHAR(255),
	bio text
);

CREATE TABLE articles(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title VARCHAR(255),
	content TEXT,
	journalistid int,
	category VARCHAR(50),
	FOREIGN KEY (journalistid) REFERENCES journalists(id)
);


SELECT * FROM articles;
SELECT * FROM journalists;