import React from "react";
import { DeleteServices } from "../../services/AxiosGenerator";

export const DeleteModal = ({ edId, isOpen }) => {
  const handleDelet = () => {
    DeleteServices(`/user?id=${edId}`);
  };
  return (
    <div className="delete">
      <h2 className="delete__title">Haqiqatdan O'chirasizmi ?</h2>
      <div className="delete__cover">
        <button
          className="delete__btn delete__btn--ok"
          onClick={() => isOpen(false)}
        >
          Yo'q
        </button>
        <button className="delete__btn" onClick={handleDelet}>
          Ha
        </button>
      </div>
    </div>
  );
};
