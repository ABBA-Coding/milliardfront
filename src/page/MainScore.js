import React from "react";
import { GradesCard } from "../components/ScoreCards/GradesCard";

export const MainScore = () => {
  return (
    <div className="mainscore">
      <div className="container">
        <div className="mainscore__info info">
          <GradesCard />
        </div>
        <div className="mainscore__bottom">{/* <MiniCards /> */}</div>
      </div>
    </div>
  );
};
