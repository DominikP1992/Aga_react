import React from "react";
import classNames from "classnames";

//css
import "./CalendarColumnDay.css";
//components
import CalendarColumnDayCell from "./CalendarColumnDayCell";
const CalendarColumnDay = ({ timeRange, day, calendarInfo, dayKey }) => {
  let sign = [];
  let quarter = [];

  return (
    <ul className="calendar-column">
      <li className="calendar-column-header">{day}</li>
      {timeRange.map(hour => {
        let quarters = {};
        let sign = '―';
        if (calendarInfo) {
          const hourInfo = calendarInfo[dayKey][`hour_${hour.substring(0, 2)}`];
          quarters = hourInfo.quarters;
          sign = hourInfo.sign;
        }
        return <CalendarColumnDayCell quarters={quarters} sign={sign} />;
      })}
    </ul>
  );
};

export default CalendarColumnDay;
