import React from "react";
import classNames from "classnames";

//css
import "./CalendarWrapper.css";
//components
import CalendarColumnDay from "./CalendarColumnDay";
import CalendarColumnHours from "./CalendarColumnHours";
import CalendarLegend from "./CalendarLegend";
import Button from "../Button";
import Visibility from "../Visibility";

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarDay: this.props.today,
    };
  }
  nextDay = () => {
    const calendarDay = this.state.calendarDay + 1;
    this.setState({
      calendarDay: calendarDay,
    });
  };
  previousDay = () => {
    const calendarDay = this.state.calendarDay - 1;
    this.setState({
      calendarDay: calendarDay,
    });
  };

  render() {
    const { days, timeRange, calendarInfo, isMobile } = this.props;
    return (
      <center className="calendar-wrapper">
        <CalendarColumnHours timeRange={timeRange} />
        {Object.keys(days)
          .filter((day, i) => (isMobile ? i === this.state.calendarDay : true))
          .map(day => (
            <CalendarColumnDay
              calendarInfo={calendarInfo}
              dayKey={day}
              day={days[day].toUpperCase()}
              timeRange={timeRange}
            />
          ))}
        <CalendarLegend />
        <Visibility isVisible={isMobile && this.state.calendarDay}>
          <Button
            onClick={this.previousDay}
            className="calendar-button calendar-button-left"
          >
            LEFT
          </Button>
        </Visibility>
        <Visibility isVisible={isMobile && !(this.state.calendarDay === 4)}>
          <Button
            onClick={this.nextDay}
            className="calendar-button calendar-button-right"
          >
            RIGHT
          </Button>
        </Visibility>
      </center>
    );
  }
}

export default CalendarWrapper;
