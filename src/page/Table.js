import React from "react";
import { LeftCard } from "../components/TableCard/LeftCard";
import { DateTable } from "../components/TableCard/DateTable";
import { EventCard } from "../components/TableCard/EventCard";

export const Table = () => {
  return (
    <div className="table">
      <div className="container">
        <div className="table__inner  info">
          <div className="info__left">
            <LeftCard />
            <DateTable />
          </div>
          <div className="info__right">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};
