// lib/db.js
import mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'u673206465_Charles',
  password: 'v.fij4JCi7AgBPn',
  database: 'u673206465_cyfotok_course',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }

  // Create formDetails table if not exists
  db.query(`
    CREATE TABLE IF NOT EXISTS formDetails (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('formDetails table created or already exists');
    }
  });
});

// Function to execute queries
const executeQuery = async (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export { db, executeQuery };
