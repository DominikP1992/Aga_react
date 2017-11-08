import React from "react";

//css
import "./CalendarLegend.css";

const CalendarLegend = () => (
  <div class="calendar-legend">
    <div>
      <div>
        <div class="legend-icon-aviable">✔</div>
      </div>
      <span>Wolny termin</span>
    </div>
    <div>
      <div>
        <div class="legend-icon-occupied">X</div>
      </div>
      <span>Zajęty termin</span>
    </div>
    <div>
      <div>
        <div class="legend-icon-unaviable">―</div>
      </div>
      <span>Brak zajęć</span>
    </div>
  </div>
);

export default CalendarLegend;
