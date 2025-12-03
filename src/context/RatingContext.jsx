import { createContext, useState } from "react";

export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);

  const addRating = (filmId, score, comment) => {
    const newRating = {
      id: Date.now(),
      filmId,
      score,
      comment,
      date: new Date().toISOString()
    };
    setRatings([...ratings, newRating]);
  };

  return (
    <RatingContext.Provider value={{ ratings, addRating }}>
      {children}
    </RatingContext.Provider>
  );
};
