
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Database
const dbPath = path.resolve(__dirname, "database.db");
const db = new sqlite3.Database(dbPath);

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie_id TEXT,
    user_id TEXT,
    rating INTEGER,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// GET semua rating untuk film tertentu
app.get("/ratings/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  db.all(
    `SELECT * FROM ratings WHERE movie_id = ? ORDER BY created_at DESC`,
    [movieId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
});

// POST rating baru
app.post("/ratings", (req, res) => {
  const { movie_id, user_id, rating, comment } = req.body;

  db.run(
    `
    INSERT INTO ratings (movie_id, user_id, rating, comment)
    VALUES (?, ?, ?, ?)
  `,
    [movie_id, user_id, rating, comment],
    function (err) {
      if (err) return res.status(500).json({ error: err });

      res.json({
        id: this.lastID,
        movie_id,
        user_id,
        rating,
        comment,
      });
    }
  );
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("🚀 Backend running on http://localhost:" + PORT);
});
