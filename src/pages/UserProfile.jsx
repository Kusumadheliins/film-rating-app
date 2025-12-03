import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

const UserProfile = () => {
  const { ratings } = useContext(RatingContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Profile</h1>

      <h3>Rating Kamu</h3>
      {ratings.map(r => (
        <div key={r.id} style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
          <b>Film ID: {r.filmId}</b>
          <p>Rating: {r.score}/5</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
