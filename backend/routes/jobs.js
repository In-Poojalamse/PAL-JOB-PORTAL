import express from 'express';
import { db } from '../db.js';
const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM jobs');
  res.json(rows);
});

// Add new job
router.post('/', async (req, res) => {
  const { title, company_id, location, salary, type, experience, description } = req.body;
  const [result] = await db.query(
    'INSERT INTO jobs (title, company_id, location, salary, type, experience, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, company_id, location, salary, type, experience, description]
  );
  res.json({ id: result.insertId, ...req.body });
});

export default router;
