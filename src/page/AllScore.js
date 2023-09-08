import React from "react";
import { LastCard } from "../components/ScoreCards/LastCards";

export const AllScore = () => {
  return (
    <div className="social">
      <div className="container">
        <div className="social__inner inner">
          <div className="inner__left">
            <LastCard />
          </div>
        </div>
      </div>
    </div>
  );
};
