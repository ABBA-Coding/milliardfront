import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Route, Routes } from "react-router-dom";
import { Table } from "../components/JournalCards/Table";
import { Reyting } from "../components/JournalCards/Reyting";
import Jurnal from "../components/JournalCards/Jurnal";
// import { Jurnal } from "../components/JournalCards/Jurnal";

export const Journal = () => {
  const { t } = useTranslation();
  return (
    <div className="journal">
      <div className="container">
        <div className="journal__info">
          <div className="journal__links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "journal__link"
              }
              to="/journal"
            >
              {t("header.nav.tablet")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "journal__link"
              }
              to="jurnal/:id"
            >
              {t("header.nav.journal")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "journal__link"
              }
              to="reyting"
            >
              {t("header.nav.reyting")}
            </NavLink>
          </div>
          <Routes>
            <Route index element={<Table />} />
            <Route path="/journal" element={<Table />} />
            <Route path="jurnal/:id" element={<Jurnal />} />
            <Route path="reyting" element={<Reyting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
