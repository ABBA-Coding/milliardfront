import React from "react";

export const DateTable = ({ time }) => {
  return (
    <div className="databtn">
      <h3 className="databtn__title">Pick a Time</h3>
      <ul className="databtn__list">
        {time?.times?.map((e, index) => (
          <li key={index} className="databtn__item">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
