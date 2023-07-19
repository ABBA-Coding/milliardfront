import React from "react";
import Menber from "../assets/images/icons/score-img.png";
import { Link } from "react-router-dom";
import { GradesCard } from "../components/ScoreCards/GradesCard";
import { MiniCards } from "../components/ScoreCards/MiniCards";

export const MainScore = () => {
  return (
    <div className="mainscore">
      <div className="container">
        <div className="mainscore__info info">
          <GradesCard />
        </div>
        <div className="mainscore__bottom">
          <MiniCards />
        </div>
      </div>
    </div>
  );
};
