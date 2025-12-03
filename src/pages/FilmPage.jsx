import { useState } from "react";
import RatingModal from "../components/RatingModal";
import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

const FilmPage = () => {
  const filmId = 1; 
  const [open, setOpen] = useState(false);
  const { ratings } = useContext(RatingContext);

  const filmRatings = ratings.filter(r => r.filmId === filmId);

  return (
    <div style={{ padding: 20 }}>
      <h1>Film A</h1>

      <button onClick={() => setOpen(true)}>Kasih Rating</button>

      <h3>Semua Rating</h3>
      {filmRatings.map(r => (
        <div key={r.id} style={{ borderBottom: "1px solid #ddd", padding: 8 }}>
          <b>{r.score} / 5</b>
          <p>{r.comment}</p>
        </div>
      ))}

      <RatingModal
        filmId={filmId}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default FilmPage;
