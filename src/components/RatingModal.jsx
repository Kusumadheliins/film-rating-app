import { useState, useContext } from "react";
import RatingStars from "./RatingStars";
import { RatingContext } from "../context/RatingContext";

const RatingModal = ({ filmId, isOpen, onClose }) => {
  const { addRating } = useContext(RatingContext);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const submit = () => {
    addRating(filmId, score, comment);
    onClose();
    setScore(0);
    setComment("");
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Kasih Rating</h2>

        <RatingStars value={score} onChange={setScore} />

        <textarea
          placeholder="Tulis komentar..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={submit} style={styles.button}>Submit</button>
        <button onClick={onClose} style={styles.close}>Tutup</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.6)", display: "flex",
    justifyContent: "center", alignItems: "center"
  },
  modal: { background: "#fff", padding: 20, width: 350, borderRadius: 8 },
  textarea: {
    width: "100%", height: 90, marginTop: 12, borderRadius: 6, padding: 10
  },
  button: { marginTop: 12, width: "100%", padding: 10 },
  close: { marginTop: 8 }
};

export default RatingModal;
