import mysql from "mysql2/promise";
import dotenv from "dotenv";
 
dotenv.config();
 
// TODO
// Create the pool to connect to the database
// Use the database settings from the .env file
const pool = mysql.createPool({
  host: 'localhost',         // Replace with your MySQL host
  user: 'root',     // Replace with your MySQL username
  password: 'Alg0r1thm@c#', // Replace with your MySQL password
  database: 'week6db', // Replace with your MySQL database
  waitForConnections: true,
  connectionLimit: 10,       // Adjust as needed
  queueLimit: 0
});

export { pool };
