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
    <div className="userglobal">
      <div
        className="userglobal__inner"
        style={{
          backgroundImage: `url(https://milliardapi.itlink.uz/${meta?.studentImg})`,
        }}
      >
        <h1 className="global__title">{t("main.parent")}</h1>
      </div>

      <div className="userglobal__down down">
        <div className="container">
          <div className="down__inner">
            <span className="down__line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
