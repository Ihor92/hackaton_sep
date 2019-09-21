import React from 'react';
import "./MainContent.css";

export class MainContent extends React.Component {

  getMonthDays() {
    const currentYear = this.props.currentDate.getFullYear();
    const currentMonth = this.props.currentDate.getMonth();
    let localDate = new Date(currentYear, currentMonth, 1);

    let dateArray = [];

    do {
      dateArray.push(localDate);
      localDate = new Date(currentYear, currentMonth, localDate.getDate() + 1);

    } while (localDate.getDate() !== 1);

    const daysBeforeMonth = dateArray[0].getDay();
    const daysAfterMonth = 6 - dateArray[dateArray.length - 1].getDay();

    dateArray = (new Array(daysBeforeMonth).fill('')).concat(dateArray);
    dateArray = dateArray.concat(new Array(daysAfterMonth).fill(''));

    return dateArray;
  }

  render() {
    const items = this.getMonthDays();
    const week = [
      "Вс",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ];


    return (
      items.join(','),
      <div className="wrapper">
        {week.map( (day)=> {
          return <div className="day-of-week">{day}</div>;
        })}
        {items.map( (item)=> {
          return <div className="date-grid">{item ? item.getDate() : ''}</div>;
        })}

      </div>
    )
  }
}
