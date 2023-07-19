import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainScore } from "./MainScore";
import { AllScore } from "./AllScore";
import { LastScore } from "./LastScore";

export const Score = () => {
  return (
    <div className="score">
      <Routes>
        <Route index element={<MainScore />} />
        <Route path="allscore" element={<AllScore />} />
        <Route path="allscore/lastscore/:param" element={<LastScore />} />
      </Routes>
    </div>
  );
};
