import React from "react";
import classNames from "classnames";

//css
import "./CalendarColumnHours.css";
//components

const CalendarColumnHours = ({ timeRange }) => (
  <ul className="calendar-column">
    <li className="calendar-column-header calendar-column-header-hour" />
    {timeRange.map(time => <li className="calendar-column-hour">{time}</li>)}
  </ul>
);

export default CalendarColumnHours;
