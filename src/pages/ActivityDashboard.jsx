import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

const ActivityDashboard = () => {
  const { ratings } = useContext(RatingContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>Activity Dashboard</h1>

      {ratings.map(r => (
        <div key={r.id} style={{ marginBottom: 12 }}>
          <b>{r.date.slice(0, 10)}</b>
          <p>Film ID: {r.filmId}</p>
          <p>Rating: {r.score}/5</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityDashboard;
