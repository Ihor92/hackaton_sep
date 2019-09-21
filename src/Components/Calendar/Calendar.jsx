import React from 'react';
import {MainContent} from "../MainContent/MainContent.jsx";
import {CalendarHeader} from "../CalendarHeader/CalendarHeader.jsx";
import "./Calendar.css";

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  today = () => {
    this.setState({
      currentDate: new Date()
    })
  };

  next = () => {
    this.setState({
      currentDate: new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth()+1))
    })
  };

  prev = () => {
    this.setState({
      currentDate: new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth()-1))
    })
  };

  render() {
    const currentYear = this.state.currentDate.getFullYear();
    const currentMonth = this.state.currentDate.getMonth();
    return (
      <div className='Calendar'>
        <CalendarHeader
          currentYear={currentYear}
          currentMonth={currentMonth}
          next={this.next}
          prev={this.prev}
          today={this.today}
        />
        <MainContent
          currentDate={this.state.currentDate}
        />
      </div>
    )
  }

}

