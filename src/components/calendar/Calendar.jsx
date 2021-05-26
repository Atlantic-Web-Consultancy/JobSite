import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';

// import '../../../dist/main.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['Home', 'Calendar', 'Notes', 'My Jobs', 'Login/Logout'],
    };
  }

  render() {
    const StyleWrapper = styled.div`
      .fc td {
        background: #f7f7f7;
        color: #000;
        // border-color: #000;
      }
      .fc {
        height: 100%;
      }
      .fc .fc-toolbar-title {
        color: #000;
      }
      a {
        color: #000;
      }
      .fc .fc-scrollgrid {
        // border-color: #000;
      }
      .fc .fc-button-group > .fc-button {
        background-color: #000;
      }
      .fc .fc-button-primary {
        background-color: #000;
      }
    `;
    return (
      <StyleWrapper>

        <div id="calendar-container">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
          />
        </div>
      </StyleWrapper>
    );
  }
}

export default Calendar;
