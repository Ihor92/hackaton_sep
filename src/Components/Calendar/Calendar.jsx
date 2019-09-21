import React from 'react';
import {MainContent} from "../MainContent/MainContent.jsx";
import {CalendarHeader} from "../CalendarHeader/CalendarHeader.jsx";
import "./Calendar.css";

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      items: []
    }
  }

  render() {
    const currentYear = this.state.currentDate.getFullYear();
    const currentMonth = this.state.currentDate.getMonth();
    return (
      <div className='Calendar'>
        <CalendarHeader
          currentYear={currentYear}
          currentMonth={currentMonth}
        />
        <MainContent
          currentDate={this.state.currentDate}
        />
      </div>
    )
  }

}

