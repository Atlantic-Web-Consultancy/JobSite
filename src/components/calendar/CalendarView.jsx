import React from 'react';
import Calendar from './Calendar.jsx';

const CalendarView = props => {
  const toggleView = () => {
    props.toggleCal(false);
  };

  if (props.display) {
    return (
      <div className="calendar-view-container">
        <div onClick={() => toggleView()} className="calendar-background" />
        <Calendar />
      </div>
    );
  }
  return <div className="none" />;
};

export default CalendarView;
