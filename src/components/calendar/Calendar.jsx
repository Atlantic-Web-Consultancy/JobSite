import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import { INITIAL_EVENTS, createEventId } from './event-utils'

// import '../../../dist/main.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDates: [],
      eventTitle: '',
      eventDetails: '',
      navItems: ['Home', 'Calendar', 'Notes', 'My Jobs', 'Login'],
      popUp: false,
    };
  }

  handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo);
  }

  renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  retreiveEventInfo = () => {
    this.setState({
      popUp: true,
    })
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleDateSelect = selectInfo => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  render() {
    const {
      eventTitle,
      eventDetails,
    } = this.state;

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
            plugins={[dayGridPlugin, interactionPlugin]}
            select={this.handleDateSelect}
            eventContent={this.renderEventContent}
            editable={true}
            selectable={true}
          />
        </div>
      </StyleWrapper>
    );
  }
}

export default Calendar;
