import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllScore } from "./AllScore";
import { LastScore } from "./LastScore";

export const Score = () => {
  return (
    <div className="score">
      <Routes>
        <Route index element={<AllScore />} />
        <Route path="lastscore/:param" element={<LastScore />} />
      </Routes>
    </div>
  );
};
