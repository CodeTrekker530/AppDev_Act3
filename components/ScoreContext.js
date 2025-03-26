import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

export const GameProvider = ({ children }) => {
  const [bestScore, setBestScore] = useState(null);

  const updateBestScore = (newScore) => {
    if (bestScore === null || newScore < bestScore) {
      setBestScore(newScore);
    }
  };

  return (
    <ScoreContext.Provider value={{ bestScore, updateBestScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
