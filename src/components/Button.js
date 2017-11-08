import React from "react";

const CalendarLegend = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default CalendarLegend;
