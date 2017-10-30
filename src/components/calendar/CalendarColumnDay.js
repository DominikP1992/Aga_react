import React from "react";
import classNames from "classnames";

//css
import "./CalendarColumnDay.css";
//components
import CalendarColumnDayCell from "./CalendarColumnDayCell";
const CalendarColumnDay = ({ timeRange, day, calendarInfo, dayKey }) => {
  return (
    <ul className="calendar-column">
      <li className="calendar-column-header">{day}</li>

      {timeRange.map(hour => {
        return (
          <CalendarColumnDayCell
            quarters={
              calendarInfo &&
              calendarInfo[dayKey][`hour_${hour.substring(0, 2)}`]
            }
          />
        );
      })}
    </ul>
  );
};

export default CalendarColumnDay;
