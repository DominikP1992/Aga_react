import React from "react";
import classNames from "classnames";

//css
import "./CalendarWrapper.css";
//components
import CalendarColumnDay from "./CalendarColumnDay";
import CalendarColumnHours from "./CalendarColumnHours";

const CalendarWrapper = ({ days, timeRange, calendarInfo }) => (
  <center className="calendar-wrapper">
    <CalendarColumnHours timeRange={timeRange} />
    {Object.keys(days).map(day => (
      <CalendarColumnDay calendarInfo={calendarInfo} dayKey={day} day={days[day].toUpperCase()} timeRange={timeRange} />
    ))}
  </center>
);

export default CalendarWrapper;
