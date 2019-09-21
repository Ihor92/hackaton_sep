import React from 'react';
import {MainContent} from "../MainContent/MainContent.jsx";
import {CalendarHeader} from "../CalendarHeader/CalendarHeader.jsx";
import "./Calendar.css";

export function Calendar() {
  return (
    <div className='Calendar'>
      <CalendarHeader/>
      <MainContent/>
    </div>

  )
}
