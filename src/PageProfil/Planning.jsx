import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Planning.css'
import '../node_modules/moment/locale/fr.js';

moment.locale('fr');
const localizer = BigCalendar.momentLocalizer(moment)


class Planning extends Component {
 
  render() {
    const {messages} = this.props;
    return (
      <div className="Planning">
        <BigCalendar
          localizer={localizer}
          events={[
            {
              'title': 'My event',
              'allDay': false,
              'start': new Date(2019, 3, 10, 10, 0), // 10.00 AM
              'end': new Date(2019, 3, 10, 14, 0), // 2.00 PM 
            }
          ]}
          startAccessor="start"
          endAccessor="end"
          culture='fr'
          messages= {messages}
        />
      </div>
    );
  }
}
export default Planning;