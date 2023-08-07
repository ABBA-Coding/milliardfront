import { useTranslation } from "react-i18next";
import { SpanImg } from "../../assets/images/img/img";

export const LeftCard = ({ time }) => {
  const { t } = useTranslation();
  return (
    <div className="leftcard card">
      <div className="card__top">
        <span className="card__img">
          <SpanImg />
        </span>
        <div className="card__info info">
          <h3 className="info__title">{t("score.schedual.time")}</h3>
        </div>
      </div>
      <div className="card__date date">
        {time?.days?.map((e, index) => (
          <button key={index} className="date__btn">
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};
