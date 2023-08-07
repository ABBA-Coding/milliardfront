import React from "react";
import { useTranslation } from "react-i18next";

export const DateTable = ({ time }) => {
  const { t } = useTranslation();

  return (
    <div className="databtn">
      <h3 className="databtn__title">{t("score.schedual.pick")}</h3>
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
