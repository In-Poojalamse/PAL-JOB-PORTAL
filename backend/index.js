// ===============================
// Imports & Setup
// ===============================
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// MySQL Connection
// ===============================
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// ===============================
// Routes / Endpoints
// ===============================

// ---------- Jobs Routes ----------

// Get all jobs
app.get('/jobs', (req, res) => {
  db.query('SELECT * FROM jobs', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get job by ID
app.get('/jobs/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM jobs WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

// Create a new job
app.post('/jobs', (req, res) => {
  const { title, company_id, location, salary, type, experience, description } = req.body;
  const query = `INSERT INTO jobs (title, company_id, location, salary, type, experience, description)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, [title, company_id, location, salary, type, experience, description], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Job added successfully', id: results.insertId });
  });
});

// ---------- Companies Routes ----------

// Get all companies
app.get('/companies', (req, res) => {
  db.query('SELECT * FROM companies', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get company by ID
app.get('/companies/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM companies WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

// Create a new company
app.post('/companies', (req, res) => {
  const { name, location, website, industry } = req.body;
  const query = `INSERT INTO companies (name, location, website, industry)
                 VALUES (?, ?, ?, ?)`;
  db.query(query, [name, location, website, industry], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Company added successfully', id: results.insertId });
  });
});

// ---------- Users Routes (Optional) ----------

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const { name, email, password, role } = req.body;
  const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, email, password, role], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User added successfully', id: results.insertId });
  });
});

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
