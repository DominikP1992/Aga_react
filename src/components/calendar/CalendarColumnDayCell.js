import React from "react";
import PropTypes from "prop-types"
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
            {
              Object.keys(this.props.quarters).map((quarter) => (
              <li className={this.props.quarters[quarter]} />
            ))
          }
          <span className={`hour-icon ${this.props.sign === "―" && "hour-icon-center"}`}>{this.props.sign}</span>
          </ul>
        }
      </li>
    );
  }
}



CalendarColumnDayCell.PropTypes =({
  quarters: PropTypes.object.isRequired,
  sign: PropTypes.string.isRequired,

})

export default CalendarColumnDayCell;
