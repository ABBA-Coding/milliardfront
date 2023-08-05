import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GetElementServices } from "../services/AxiosGenerator";

export const Global = () => {
  const { t } = useTranslation();
  const [meta, setMeta] = useState();
  useEffect(() => {
    GetElementServices("meta", setMeta);
  }, []);
  return (
    <div className="global">
      <div
        className="global__inner"
        style={{
          backgroundImage: `url(http://localhost:5000/${meta?.teacherImg})`,
        }}
      >
        <h1 className="global__title">{t("main.teacher")}</h1>
      </div>

      <div className="global__down down">
        <div className="container">
          <div className="down__inner">
            <span className="down__line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
