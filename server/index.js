const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'form',
  password: 'admin',
  port: 5432,
});

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email, branch, section, rollnumber, phoneNumber, libraryid } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, branch, section, rollnumber, phonenumber,libraryid) VALUES ($1, $2, $3, $4, $5, $6)',
      [name, email, branch, section, rollnumber, phoneNumber]
    );

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
