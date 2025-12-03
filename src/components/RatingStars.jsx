import { useState } from "react";

const RatingStars = ({ value, onChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", gap: 8, cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: 32,
            color: (hover || value) >= star ? "#FFD700" : "#aaa",
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
export default RatingStars;
