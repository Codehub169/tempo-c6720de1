const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to the database file. 
// It's located in the 'db' directory at the root of the project.
const dbPath = path.resolve(__dirname, '../db/hueneu.sqlite');

// Initialize the SQLite database connection.
// The database file will be created if it doesn't exist.
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the SQLite database:', err.message);
  } else {
    console.log('Successfully connected to the SQLite database: hueneu.sqlite');
  }
});

// Database schema setup: Create the 'contacts' table if it doesn't already exist.
// This table will store submissions from the contact form.
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,    -- Unique identifier for each contact entry
      name TEXT NOT NULL,                      -- Name of the person contacting
      email TEXT NOT NULL,                     -- Email address of the person
      message TEXT NOT NULL,                   -- Message content
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP -- Timestamp of when the form was submitted
    )
  `, (err) => {
    if (err) {
      console.error('Error creating contacts table:', err.message);
    } else {
      console.log('\'contacts\' table checked/created successfully.');
    }
  });
});

// Export the database instance to be used by other parts of the application (e.g., server/index.js).
module.exports = db;
