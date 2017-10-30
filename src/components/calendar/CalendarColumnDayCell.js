import React from "react";
import classNames from "classnames";

//css
import "./CalendarColumnDayCell.css";
//components

class CalendarColumnDayCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: this.props.sign
    };
  }
  render() {
    return (
      <li>
        {
          <ul className={"calendar-column-hour calendar-column-day-cell"}>
            {Object.keys(this.props.quarters).map((quarter) => (
              <li className={this.props.quarters[quarter]} />
            ))}
          </ul>
        }
      </li>
    );
  }
}

export default CalendarColumnDayCell;
