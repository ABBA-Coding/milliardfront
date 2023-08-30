import React from "react";
let count = 0;
let ClasCount = 0;

export const ReytingItem = ({ name, point, clas }) => {
  ClasCount = 0;
  point?.scores?.map((element) =>
    element?.scores?.forEach((e) => {
      ClasCount += e;
    })
  );

  if (ClasCount > 350) {
    clas = "gold";
  }
  if (ClasCount <= 350 && ClasCount > 250) {
    clas = "silver";
  }
  if (ClasCount <= 250) {
    clas = "bronze";
  }
  return (
    <>
      <li className={`${clas}`}>
        <span>{name}</span>
        {point?.scores?.map((element) =>
          element?.scores?.forEach((e) => {
            count += e;
          })
        )}
        {/* {`${Math.floor(count)} `}% */}
        {`${Math.floor((count = (count / 500) * 100))}`} %
        <span className="visually-hidden">{(count = 0)}</span>
      </li>
    </>
  );
};
