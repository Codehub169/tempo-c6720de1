const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
// const cors = require('cors'); // Uncomment for development if frontend and backend are on different ports

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json()); // To parse JSON request bodies
// app.use(cors()); // Uncomment for development to allow cross-origin requests

// Database setup
const DB_DIR = path.join(__dirname, '..', 'db');
const DB_PATH = path.join(DB_DIR, 'hueneu.sqlite');

// Ensure database directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
  console.log(`Created database directory: ${DB_DIR}`);
}

// Initialize SQLite database
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log(`Connected to SQLite database at ${DB_PATH}`);
    // Create contacts table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS contacts (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      name TEXT NOT NULL,\n      email TEXT NOT NULL,\n      message TEXT NOT NULL,\n      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP\n    )`, (err) => {
      if (err) {
        console.error('Error creating contacts table', err.message);
      } else {
        console.log('\'contacts\' table checked/created successfully.');
      }
    });
  }
});

// API Routes
// POST /api/contact - Handles contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function(err) {
    if (err) {
      console.error('Error inserting contact data:', err.message);
      return res.status(500).json({ error: 'Failed to save message. Please try again later.' });
    }
    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', id: this.lastID });
  });
  stmt.finalize();
});

// Serve static files from the React app's build directory
// This assumes 'npm run build' creates a 'build' folder in the project root
app.use(express.static(path.join(__dirname, '..', 'build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Frontend should be accessible at http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});
