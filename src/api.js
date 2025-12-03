const API_URL = import.meta.env.VITE_API_URL;

export async function getRatings(movieId) {
  const res = await fetch(`${API_URL}/ratings/${movieId}`);
  return res.json();
}

export async function addRating(data) {
  const res = await fetch(`${API_URL}/ratings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
