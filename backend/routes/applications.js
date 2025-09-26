import express from 'express';
import { db } from '../db.js';
const router = express.Router();

// Get all applications
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM applications');
  res.json(rows);
});

// Add new application
router.post('/', async (req, res) => {
  const { user_id, job_id, status } = req.body;
  const [result] = await db.query(
    'INSERT INTO applications (user_id, job_id, status) VALUES (?, ?, ?)',
    [user_id, job_id, status]
  );
  res.json({ id: result.insertId, user_id, job_id, status });
});

export default router;
