// pages/api/addForm.js
import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    const insertQuery = 'INSERT INTO formDetails (name, email) VALUES (?, ?)';

    try {
      await db.query(insertQuery, [name, email]);
      res.status(200).json({ success: true, message: 'Form details added to the database.' });
    } catch (error) {
      console.error('Error inserting form data:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
