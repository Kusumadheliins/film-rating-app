import { useEffect, useState } from "react";

function App() {
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const movieId = 1;

  // Fetch ratings
  const loadRatings = async () => {
    const res = await fetch(`http://localhost:4000/ratings/${movieId}`);
    const data = await res.json();
    setRatings(data);
  };

  // Load once on page load
  useEffect(() => {
    loadRatings();
  }, []);

  // Submit rating
  const submitRating = async () => {
    await fetch("http://localhost:4000/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movie_id: String(movieId),
        user_id: "testuser",
        rating: Number(rating),
        comment,
      }),
    });

    setRating("");
    setComment("");
    loadRatings();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Film Ratings</h1>

      <h2>Rating List</h2>
      {ratings.map((r) => (
        <div key={r.id} style={{ marginBottom: 10 }}>
          <strong>{r.rating}⭐</strong> | {r.comment}
        </div>
      ))}

      <h2>Add Rating</h2>

      <input
        type="number"
        placeholder="Rating 1-5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button onClick={submitRating}>Submit</button>
    </div>
  );
}

export default App;
