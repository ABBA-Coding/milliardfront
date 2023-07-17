import React from "react";

export const ReytingItem = ({ name, point, clas }) => {
  return (
    <li className={`${clas}`}>
      <span>{name}</span>
      {/* <span>{point}%</span> */}
    </li>
  );
};
