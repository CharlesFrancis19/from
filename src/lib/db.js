// lib/db.js
import mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'u673206465_Charles',
  password: 'v.fij4JCi7AgBPn',
  database: 'u673206465_cyfotok_course',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

export { db };
