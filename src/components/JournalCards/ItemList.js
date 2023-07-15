import React from "react";
import { Link } from "react-router-dom";

export const ItemList = ({ img, name, classroom, id }) => {
  return (
    <li className="info__item item">
      <Link className="item__link" to={`jurnal/${id}`}>
        <img className="item__img" src={img} alt="student" />
        <h3 className="item__title">{name}</h3>
        <span className="item__text">{classroom}</span>
      </Link>
    </li>
  );
};
