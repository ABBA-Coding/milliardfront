import { SpanImg } from "../../assets/images/img/img";

export const LeftCard = ({ time }) => {
  return (
    <div className="leftcard card">
      <div className="card__top">
        <span className="card__img">
          <SpanImg />
        </span>
        <div className="card__info info">
          <h3 className="info__title">Shedule Time Table</h3>
          {/* <span className="info__span">Boshqaruv: Mantiq darsi</span> */}
          {/* <select className="info__select">
            <option className="info__option" value="date">
              Bugun - Aug 7, 2023
            </option>
            <option className="info__option" value="date6">
              Bugun - Aug 6, 2023
            </option>
          </select> */}
        </div>
      </div>
      <div className="card__date date">
        {time?.days?.map((e, index) => (
          <button key={index} className="date__btn">
            {e}
          </button>
        ))}
        {/* <div className="date__cover">
          <button className="date__chack">Tekshirish</button>
          <button className="date__prev">Orqaga</button>
        </div> */}
      </div>
    </div>
  );
};
