import express from 'express';
import { db } from '../db.js';
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users');
  res.json(rows);
});

// Add new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  res.json({ id: result.insertId, name, email });
});

export default router;
