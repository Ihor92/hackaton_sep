import React from 'react';
import "./CalendarHeader.css"

export function CalendarHeader() {
  return(
    <div className="CalendarHeader">
      <button>Today</button>
      <div>
        <button>{'<'}</button>
        <button>{'>'}</button>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
