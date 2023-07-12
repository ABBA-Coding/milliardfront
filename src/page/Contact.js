import React from "react";
import ContactImg from "../assets/images/icons/404page.jpg";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__inner">
        <img className="contact__img" src={ContactImg} alt="404" />
      </div>
    </div>
  );
};
