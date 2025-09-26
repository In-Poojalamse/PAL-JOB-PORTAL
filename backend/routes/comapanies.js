import express from 'express';
import { db } from '../db.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM companies');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, location } = req.body;
  const [result] = await db.query('INSERT INTO companies (name, location) VALUES (?, ?)', [name, location]);
  res.json({ id: result.insertId, name, location });
});

export default router;
