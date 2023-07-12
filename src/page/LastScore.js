import React from "react";

export const LastScore = () => {
  return (
    <div className="lastscore">
      <div className="container">
        <div className="lastscore__info info">
          <div className="info__top">
            <h3 className="info__title">Muloqot qilish</h3>
            <span className="info__coun">20%</span>
          </div>
          <ul className="info__list list">
            <li className="list__item ">
              Fikrlarini erkin bayon qiladi
              <span className="list__count"> 4%</span>
            </li>
            <li className="list__item ">
              Aktiv tinglaydi
              <span className="list__count"> 4%</span>
            </li>
            <li className="list__item ">
              Og'zaki nutqda tana harakatlaridan erkin foydalanadi
              <span className="list__count"> 4%</span>
            </li>
            <li className="list__item ">
              Auditoriyani nutqiga jalb qiladi
              <span className="list__count"> 4%</span>
            </li>
            <li className="list__item ">
              Jamoaviy muloqotda aktiv ishtirok etadi
              <span className="list__count"> 4%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
