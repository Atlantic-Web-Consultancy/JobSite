import React from 'react';
import Calendar from './Calendar.jsx';

const CalendarView = props => (
  <div className="calendar-view-container">
    <div className="calendar-background" />
    <Calendar display={true} />
  </div>
);

export default CalendarView;
