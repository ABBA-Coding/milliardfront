import React, { useState } from "react";
import { ReytingItem } from "./ReytingItem";
import { ScrollerBtn } from "./ScrollerBtn";

export const Reyting = () => {
  const [style, setStyle] = useState("silver");
  const point = 100;
  const gold = "gold";
  const bronze = "bronze";

  // if (point > 75) {
  //   setStyle("silver");
  // }else if (point < 75 && point > 50) {
  //   setStyle("silver");
  // } else if (point < 50) {
  //   setStyle("bronze");
  // }

  return (
    <div className="reyting">
      <div className="reyting__links">
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
        <ScrollerBtn />
      </div>
      <div className="reyting__info info">
        <h2 className="info__title">10 “Z” - sinf</h2>
        <ul className="info__list">
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={gold}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={style}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={point}
            clas={bronze}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={bronze}
          />
          <ReytingItem
            name={"Abdulaziz Kobiljonov"}
            point={"100"}
            clas={bronze}
          />
        </ul>
        <div className="info__down down">
          <p className="down__text">Umumiy o’quvchilar soni 72ta</p>
          <div className="down__cover">
            <span className="down__color">Gold</span>
            <span className="down__color">Silver</span>
            <span className="down__color">Bronze</span>
          </div>
        </div>
      </div>
    </div>
  );
};
