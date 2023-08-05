import React, { useEffect, useState } from "react";
import { LeftCard } from "../components/TableCard/LeftCard";
import { DateTable } from "../components/TableCard/DateTable";
import { EventCard } from "../components/TableCard/EventCard";
import { GetElementServices } from "../services/AxiosGenerator";

export const Table = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    GetElementServices(`shedule`, setTime);
  }, []);
  return (
    <div className="table">
      <div className="container">
        <div className="table__inner  info">
          <div className="info__left">
            <LeftCard time={time} />
            <DateTable time={time} />
          </div>
          <div className="info__right">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};
