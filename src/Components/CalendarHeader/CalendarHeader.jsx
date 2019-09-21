import React from 'react';
import "./CalendarHeader.css"

export function CalendarHeader(props) {
  const monthArray = [
    "Січень",
    "Лютий ",
    "Березень" ,
    "Квітень" ,
    "Травень" ,
    "Червень" ,
    "Липень",
    "Серпень ",
    "Вересень",
    "Жовтень ",
    "Листопад",
    "Грудень"
  ];



  return(
    <div className="CalendarHeader">
      <button className="CalendarHeaderButton" onClick={() => props.today()}>Today</button>
      <div className="CalendarHeaderButtons">
        <button className="prevButton" onClick={() => props.prev()}>{'<'}</button>
        <button className="nextButton" onClick={() => props.next()}>{'>'}</button>
      </div>
      <div className="CalendarHeaderDate">
        <div className="CalendarHeaderDateMonth">{monthArray[props.currentMonth]}</div>
        <div className="CalendarHeaderDateYear">{props.currentYear}</div>
      </div>
    </div>
  );
}
