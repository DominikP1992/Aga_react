import React from "react";
import classNames from "classnames";

//config
import { weekdays, calendarUrl, calendarTime } from "../../config";
//css

//components
import CalendarWrapper from "./CalendarWrapper";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRange: this.getTimeRange(),
      days: weekdays,
      calendarInfo: false,
      today: this.getToday()
    };
  }
  componentDidMount() {
    const url = calendarUrl;
    fetch(calendarUrl)
      .then(res => res.json())
      .then(res => this.setState({ calendarInfo: res }))
      .catch(err => console.log(err));
  }
  getTimeRange = () => {
    let timeRange = [];
    for (let i = calendarTime.timeStart; i < calendarTime.timeEnd; i++) {
      timeRange.push(`${i}:00`);
    }
    return timeRange;
  };

  getToday = () => {
    const day = new Date();
    return day.getDay() > 5 || day.getDay() <= 1 ? 1 : day.getDay() - 1;
  };

  render() {
    return (
      <section className="container calendar">
        <CalendarWrapper
          days={this.state.days}
          today={this.state.today}
          timeRange={this.state.timeRange}
          calendarInfo={this.state.calendarInfo}
        />
      </section>
    );
  }
}

export default Calendar;
