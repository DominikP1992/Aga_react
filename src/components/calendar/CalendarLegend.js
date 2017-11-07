import React from "react";

//css
import "./CalendarLegend.css";

const CalendarLegend = () => (
  <div class="calendar-legend">
    <div>
      <div class="legend-icon-aviable">✔</div>
      <span>Wolny termin</span>
    </div>
    <div>
      <div class="legend-icon-occupied">X</div>
      <span>Zajęty termin</span>
    </div>
    <div>
      <div class="legend-icon-unaviable">―</div>
      <span>Brak zajęć</span>
    </div>
  </div>
);

export default CalendarLegend;
