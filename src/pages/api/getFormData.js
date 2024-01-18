// pages/api/getFormData.js
import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await db.query('SELECT * FROM formDetails');
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error('Error fetching form data:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
