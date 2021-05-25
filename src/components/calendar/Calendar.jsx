import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import TopNav from '../topNav/TopNav.jsx';

// import '../../../dist/main.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['Home', 'Calendar', 'Notes', 'My Jobs', 'Login/Logout'],
    };
  }

  render() {
    // if (this.props.display) {
      return (
        <div>
          <TopNav navItems={this.state.navItems} />
          <div id="calendar-container">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
            />
          </div>
        </div>
      );
    // }
    // return <div />;
  }
}

export default Calendar;
