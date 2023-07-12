import React from "react";

export const ScrollerBtn = () => {
  return (
    <label className="scroller__label">
      <input className="visually-hidden" checked type="radio" name="around" />
      <span className="scroller__active"></span>
    </label>
  );
};
