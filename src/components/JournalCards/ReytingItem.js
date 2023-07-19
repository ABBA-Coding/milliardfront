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

  // console.log(ClasCount);
  if (ClasCount > 100) {
    clas = "gold";
  }
  if (ClasCount <= 100 && ClasCount > 50) {
    clas = "silver";
  }
  if (ClasCount <= 50) {
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
        {`${Math.floor(count)} `}%
        <span className="visually-hidden">{(count = 0)}</span>
      </li>
    </>
  );
};

// {students?.user?.scores?.map((e) =>
//   e.skill === param && e.createdAt === time
//     ? e?.scores.forEach((number) => {
//         sum += number;
//         // console.log(sum);
//       })
//     : ""
// )}
