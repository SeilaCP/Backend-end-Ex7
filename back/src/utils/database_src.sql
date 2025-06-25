CREATE DATABASE week6db;
USE week6db;

CREATE TABLE journalists(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(255),
	email VARCHAR(255),
	bio text
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

INSERT INTO category (name_c) VALUES 
('Technology'),
('Health'),
('Education'),
('Travel'),
('Finance');

INSERT INTO categorydetail (id_a, id_c) VALUES 
(1, 1),
(1, 2), 
(2, 1), 
(2, 3), 
(4, 4);

SELECT c.id_c, c.name_c, a.id_a FROM category c JOIN categorydetail cd ON cd.id_c = c.id_c JOIN articles a ON a.id_a = cd.id_a WHERE a.id_a = 2;
SELECT * FROM articles a JOIN journalists j ON a.journalistid = j.id;

DELETE FROM articles WHERE title = 'R%';

INSERT  INTO journalists(NAME, email, bio)
VALUE('sok', 'bopha@gmail.com', 'text12');
INSERT INTO journalists (NAME, email, bio) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'Experienced investigative journalist with a focus on environmental issues.'),
('Bob Williams', 'bob.williams@example.com', 'Sports reporter covering local and international events.'),
('Charlie Brown', 'charlie.brown@example.com', 'Tech journalist passionate about emerging technologies and their impact.'),
('Diana Miller', 'diana.miller@example.com', 'Culture and arts correspondent, known for insightful reviews.');

-- Insert statements for the 'articles' table
INSERT INTO articles( title, content, journalistid, category)
VALUE('text2', 'I dont know', 2, '2');
INSERT INTO articles (title, content, journalistid, category) VALUES
('The Rise of AI in Everyday Life', 'Artificial intelligence is rapidly transforming various aspects of our daily routines...', 3, 'Technology'),
('Local Team Secures Championship Title', 'In a thrilling final match, our local football team clinched the championship...', 2, 'Sports'),
('Impact of Climate Change on Coastal Cities', 'Coastal regions around the world are facing significant challenges due to rising sea levels...', 1, 'Environment'),
('New Art Exhibit Opens Downtown', 'A captivating new exhibition showcasing contemporary abstract art has opened its doors...', 4, 'Culture'),
('Decoding the Latest Smartphone Trends', 'From foldable screens to enhanced camera capabilities, the smartphone market is buzzing...', 3, 'Technology');