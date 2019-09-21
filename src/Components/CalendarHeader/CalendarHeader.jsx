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
      <button>Today</button>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <div>
        <div>{monthArray[props.currentMonth]}</div>
        <div>{props.currentYear}</div>
      </div>
    </div>
  );
}
