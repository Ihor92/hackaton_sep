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
      <button onClick={() => props.today()}>Today</button>
      <div>
        <button onClick={() => props.prev()}>{'<'}</button>
        <button onClick={() => props.next()}>{'>'}</button>
      </div>
      <div>
        <div>{monthArray[props.currentMonth]}</div>
        <div>{props.currentYear}</div>
      </div>
    </div>
  );
}
